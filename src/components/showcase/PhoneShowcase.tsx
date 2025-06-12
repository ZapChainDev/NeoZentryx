
'use client';

import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const PhoneShowcase: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const phone1Ref = useRef<THREE.Group | null>(null);
  const phone2Ref = useRef<THREE.Group | null>(null);
  const clockRef = useRef(new THREE.Clock());

  const initialPhone1Y = 1.1;
  const initialPhone2Y = 1.2;

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient || !mountRef.current) return;

    const currentMount = mountRef.current;
    const width = currentMount.clientWidth;
    const height = currentMount.clientHeight || 500; // Fallback height

    sceneRef.current = new THREE.Scene();
    sceneRef.current.background = new THREE.Color('hsl(var(--background))');

    cameraRef.current = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    cameraRef.current.position.set(0, 1.5, 4.5);

    rendererRef.current = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    rendererRef.current.setSize(width, height);
    rendererRef.current.setPixelRatio(window.devicePixelRatio);
    rendererRef.current.shadowMap.enabled = true;
    currentMount.appendChild(rendererRef.current.domElement);

    controlsRef.current = new OrbitControls(cameraRef.current, rendererRef.current.domElement);
    controlsRef.current.enableDamping = true;
    controlsRef.current.dampingFactor = 0.05;
    controlsRef.current.minDistance = 2.5;
    controlsRef.current.maxDistance = 8;
    controlsRef.current.target.set(0, 1.1, 0);
    controlsRef.current.enablePan = false; 
    controlsRef.current.minPolarAngle = Math.PI / 4; 
    controlsRef.current.maxPolarAngle = Math.PI / 1.8; 

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    sceneRef.current.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2);
    directionalLight.position.set(8, 12, 10);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 1024;
    directionalLight.shadow.mapSize.height = 1024;
    sceneRef.current.add(directionalLight);

    const textureLoader = new THREE.TextureLoader();
    const screenTexture = textureLoader.load('https://placehold.co/375x812.png?text=NeoZentryx+Studio');
    screenTexture.colorSpace = THREE.SRGBColorSpace;


    const phoneHeight = 2.0;
    const phoneWidth = phoneHeight / 2.1; 
    const phoneDepth = 0.1; 
    const screenBezel = 0.03;
    
    const phoneBodyMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color('hsl(var(--card))'), 
      metalness: 0.6,
      roughness: 0.45,
    });

    const cameraBumpMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color('hsl(var(--card))').offsetHSL(0, 0, -0.05), // Slightly darker
      metalness: 0.5,
      roughness: 0.4,
    });
    
    const phoneScreenMaterial = new THREE.MeshStandardMaterial({
      map: screenTexture,
      emissive: 0x666666, 
      emissiveMap: screenTexture,
      metalness: 0.1,
      roughness: 0.8,
    });
    
    const lensMaterial = new THREE.MeshStandardMaterial({
      color: 0x111111,
      metalness: 0.2,
      roughness: 0.3,
    });

    function createStylizedLogo(): THREE.Group {
      const logoGroup = new THREE.Group();
      const logoSquareSize = 0.04;
      const logoSquareDepth = 0.005;
      const spacing = 0.005;

      const colors = [0x4285F4, 0xDB4437, 0xF4B400, 0x0F9D58]; // Blue, Red, Yellow, Green
      
      for (let i = 0; i < 4; i++) {
        const material = new THREE.MeshStandardMaterial({ color: colors[i], metalness: 0.3, roughness: 0.6 });
        const square = new THREE.Mesh(new THREE.BoxGeometry(logoSquareSize, logoSquareSize, logoSquareDepth), material);
        square.position.set(
          (i % 2 - 0.5) * (logoSquareSize + spacing),
          (Math.floor(i / 2) - 0.5) * (logoSquareSize + spacing) * -1, // Invert Y for typical logo top-to-bottom
          0
        );
        logoGroup.add(square);
      }
      return logoGroup;
    }


    function createPhone(): THREE.Group {
      const phoneGroup = new THREE.Group();

      const bodyGeometry = new THREE.BoxGeometry(phoneWidth, phoneHeight, phoneDepth);
      const phoneBody = new THREE.Mesh(bodyGeometry, phoneBodyMaterial);
      phoneBody.castShadow = true;
      phoneBody.receiveShadow = true;
      phoneGroup.add(phoneBody);

      const screenWidth = phoneWidth - 2 * screenBezel;
      const screenHeight = phoneHeight - 2 * screenBezel;
      const screenGeometry = new THREE.BoxGeometry(screenWidth, screenHeight, 0.01); 
      const phoneScreen = new THREE.Mesh(screenGeometry, phoneScreenMaterial);
      phoneScreen.position.z = phoneDepth / 2 + 0.005; 
      phoneScreen.receiveShadow = true; 
      phoneGroup.add(phoneScreen);
      
      const cameraBumpWidth = phoneWidth * 0.35;
      const cameraBumpHeight = phoneWidth * 0.45;
      const cameraBumpDepth = 0.03;
      const cameraBumpGeometry = new THREE.BoxGeometry(cameraBumpWidth, cameraBumpHeight, cameraBumpDepth);
      const cameraBump = new THREE.Mesh(cameraBumpGeometry, cameraBumpMaterial);
      cameraBump.position.set(phoneWidth * 0.22, phoneHeight * 0.38, -phoneDepth / 2 - cameraBumpDepth / 2 + 0.001);
      cameraBump.castShadow = true;
      phoneGroup.add(cameraBump);

      const lensRadius = cameraBumpWidth * 0.18;
      const lensGeometry = new THREE.CylinderGeometry(lensRadius, lensRadius, 0.02, 16); 
      
      const lens1 = new THREE.Mesh(lensGeometry, lensMaterial);
      lens1.rotation.x = Math.PI / 2; 
      lens1.position.set(cameraBumpWidth*0.25, cameraBumpHeight*0.25, cameraBumpDepth/2 + 0.01); 
      cameraBump.add(lens1);

      const lens2 = new THREE.Mesh(lensGeometry, lensMaterial);
      lens2.rotation.x = Math.PI / 2;
      lens2.position.set(-cameraBumpWidth*0.25, cameraBumpHeight*0.25, cameraBumpDepth/2 + 0.01);
      cameraBump.add(lens2);
      
      const lens3 = new THREE.Mesh(lensGeometry, lensMaterial);
      lens3.rotation.x = Math.PI / 2;
      lens3.position.set(cameraBumpWidth*0.25, -cameraBumpHeight*0.25, cameraBumpDepth/2 + 0.01);
      cameraBump.add(lens3);

      const buttonHeight = 0.25;
      const buttonWidth = 0.015; 
      const buttonDepth = phoneDepth * 0.6; 
      const buttonGeometry = new THREE.BoxGeometry(buttonWidth, buttonHeight, buttonDepth);
      
      const volUpButton = new THREE.Mesh(buttonGeometry, phoneBodyMaterial);
      volUpButton.position.set(-phoneWidth / 2 - buttonWidth / 2, phoneHeight * 0.2, 0);
      phoneGroup.add(volUpButton);

      const volDownButton = new THREE.Mesh(buttonGeometry, phoneBodyMaterial);
      volDownButton.position.set(-phoneWidth / 2 - buttonWidth / 2, phoneHeight * 0.08, 0);
      phoneGroup.add(volDownButton);

      const powerButtonHeight = 0.4;
      const powerButtonGeometry = new THREE.BoxGeometry(buttonWidth, powerButtonHeight, buttonDepth);
      const powerButton = new THREE.Mesh(powerButtonGeometry, phoneBodyMaterial);
      powerButton.position.set(phoneWidth / 2 + buttonWidth / 2, phoneHeight * 0.15, 0);
      phoneGroup.add(powerButton);

      // Add stylized logo to the back
      const stylizedLogo = createStylizedLogo();
      stylizedLogo.position.set(0, -phoneHeight * 0.25, -phoneDepth / 2 - 0.001); // Position on the back
      stylizedLogo.scale.set(0.8,0.8,0.8); // Make it slightly smaller
      phoneGroup.add(stylizedLogo);
      
      const standGeo = new THREE.CylinderGeometry(phoneWidth * 0.35, phoneWidth * 0.45, 0.05, 16);
      const standMat = new THREE.MeshStandardMaterial({color: 0xeeeeee, transparent: true, opacity: 0.0 }); 
      const stand = new THREE.Mesh(standGeo, standMat);
      stand.position.y = -phoneHeight/2 - 0.025;
      phoneGroup.add(stand);

      return phoneGroup;
    }

    phone1Ref.current = createPhone();
    phone1Ref.current.rotation.y = -Math.PI / 9; 
    phone1Ref.current.rotation.x = Math.PI / 30;
    phone1Ref.current.position.set(-phoneWidth / 1.5, initialPhone1Y, 0);
    sceneRef.current.add(phone1Ref.current);

    phone2Ref.current = createPhone();
    phone2Ref.current.rotation.y = Math.PI / 8;
    phone2Ref.current.rotation.x = -Math.PI / 40;
    phone2Ref.current.position.set(phoneWidth / 1.5, initialPhone2Y, -0.15); 
    phone2Ref.current.scale.set(0.93, 0.93, 0.93); 
    sceneRef.current.add(phone2Ref.current);
    
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clockRef.current.getElapsedTime();

      if (phone1Ref.current) {
        phone1Ref.current.rotation.y += 0.0020; 
        phone1Ref.current.position.y = initialPhone1Y + Math.sin(elapsedTime * 0.55) * 0.05; 
      }
      if (phone2Ref.current) {
        phone2Ref.current.rotation.y -= 0.0015;
        phone2Ref.current.position.y = initialPhone2Y + Math.cos(elapsedTime * 0.4) * 0.04;
      }

      controlsRef.current?.update(); 
      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
    };
    animate();

    const handleResize = () => {
      if (currentMount && cameraRef.current && rendererRef.current) {
        const newWidth = currentMount.clientWidth;
        const newHeight = currentMount.clientHeight || 500;
        cameraRef.current.aspect = newWidth / newHeight;
        cameraRef.current.updateProjectionMatrix();
        rendererRef.current.setSize(newWidth, newHeight);
      }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (currentMount && rendererRef.current?.domElement) {
        currentMount.removeChild(rendererRef.current.domElement);
      }
      rendererRef.current?.dispose();
      sceneRef.current?.traverse(object => {
        if (object instanceof THREE.Mesh) {
          object.geometry?.dispose();
          if (Array.isArray(object.material)) {
            object.material.forEach(material => material.dispose());
          } else if (object.material instanceof THREE.Material) {
             object.material.dispose();
          }
        }
      });
      screenTexture.dispose();
      sceneRef.current = null;
      controlsRef.current?.dispose();
    };
  }, [isClient]); 

  if (!isClient) {
    return (
      <div ref={mountRef} className="w-full h-[400px] sm:h-[500px] md:h-[600px] flex items-center justify-center bg-muted/30 rounded-lg shadow-inner">
        <p className="text-muted-foreground animate-pulse">Initializing Advanced 3D Devices...</p>
      </div>
    );
  }

  return <div ref={mountRef} className="w-full h-[400px] sm:h-[500px] md:h-[600px] cursor-grab active:cursor-grabbing rounded-lg overflow-hidden" />;
};

export default PhoneShowcase;
