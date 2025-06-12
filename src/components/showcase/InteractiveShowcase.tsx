'use client';

import React, { useRef, useEffect, useState, useCallback } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { Button } from '@/components/ui/button';
import { Rocket as RocketIcon } from 'lucide-react';

interface InteractiveShowcaseProps {
  scrollPercentage?: number; 
}

const InteractiveShowcase: React.FC<InteractiveShowcaseProps> = ({ scrollPercentage = 0 }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);
  const [isRocketLaunched, setIsRocketLaunched] = useState(false);
  const [rocketKey, setRocketKey] = useState(0); 

  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  
  const rocketRef = useRef<THREE.Group | null>(null);
  const rocketFlameRef = useRef<THREE.Mesh | null>(null);
  const buildingsGroupRef = useRef<THREE.Group | null>(null);

  const clockRef = useRef(new THREE.Clock());
  const launchTimeRef = useRef(0);

  const ROCKET_LAUNCH_DURATION = 5; // seconds
  const ROCKET_MAX_HEIGHT = 20;

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleLaunchRocket = useCallback(() => {
    if (rocketRef.current && !isRocketLaunched) {
      setIsRocketLaunched(true);
      launchTimeRef.current = clockRef.current.getElapsedTime();
      if (rocketFlameRef.current) {
        rocketFlameRef.current.visible = true;
      }
      rocketRef.current.position.set(0, 0.75, 0); 
      rocketRef.current.rotation.set(0,0,0);
      setRocketKey(prevKey => prevKey + 1); 
    }
  }, [isRocketLaunched]);

  useEffect(() => {
    if (!isClient || !mountRef.current) return;

    const currentMount = mountRef.current;

    sceneRef.current = new THREE.Scene();
    sceneRef.current.background = new THREE.Color("hsl(0, 0%, 98%)"); // Minimalist light background
    sceneRef.current.fog = new THREE.Fog(sceneRef.current.background, 15, 50); // Adjusted fog for lighter bg

    cameraRef.current = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
    cameraRef.current.position.set(5, 6, 10); 
    cameraRef.current.lookAt(0,0,0);

    rendererRef.current = new THREE.WebGLRenderer({ antialias: true });
    rendererRef.current.setSize(currentMount.clientWidth, currentMount.clientHeight);
    rendererRef.current.setPixelRatio(window.devicePixelRatio);
    rendererRef.current.shadowMap.enabled = true;
    currentMount.appendChild(rendererRef.current.domElement);

    controlsRef.current = new OrbitControls(cameraRef.current, rendererRef.current.domElement);
    controlsRef.current.enableDamping = true;
    controlsRef.current.dampingFactor = 0.05;
    controlsRef.current.minDistance = 3;
    controlsRef.current.maxDistance = 30;
    controlsRef.current.maxPolarAngle = Math.PI / 2.05; 

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Slightly brighter ambient for minimalist
    sceneRef.current.add(ambientLight);
    
    const dirLight = new THREE.DirectionalLight(new THREE.Color("hsl(210, 30%, 90%)"), 0.8); // Softer, slightly blueish main light
    dirLight.position.set(8, 12, 10);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 1024;
    dirLight.shadow.mapSize.height = 1024;
    sceneRef.current.add(dirLight);

    // Optional: remove point light or make it very subtle if it clashes with minimalist
    // const pointLight = new THREE.PointLight(new THREE.Color("hsl(0, 0%, 90%)"), 0.5, 40); 
    // pointLight.position.set(-8, 7, -8);
    // sceneRef.current.add(pointLight);

    const groundGeometry = new THREE.PlaneGeometry(60, 60);
    const groundMaterial = new THREE.MeshStandardMaterial({ color: new THREE.Color("hsl(0, 0%, 90%)") }); // Light gray ground
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    sceneRef.current.add(ground);

    buildingsGroupRef.current = new THREE.Group();
    const buildingMaterial = new THREE.MeshStandardMaterial({ 
        color: new THREE.Color("hsl(0, 0%, 80%)"), // Light gray buildings
        metalness: 0.3, // Less metallic
        roughness: 0.6, // More rough
    });
    const accentMaterial = new THREE.MeshStandardMaterial({
        color: new THREE.Color("hsl(210, 40%, 70%)"), // Lighter muted blue accent
        metalness: 0.4,
        roughness: 0.5,
    });

    const buildingGeometries = [
        new THREE.BoxGeometry(1,1,1),
        new THREE.BoxGeometry(1.2,1,0.8),
        new THREE.BoxGeometry(0.8,1,1.2),
    ];

    for (let i = 0; i < 40; i++) {
        const isEmissiveBuilding = Math.random() > 0.75; // Less frequent emissive
        const emissiveColor = new THREE.Color("hsl(210, 40%, 75%)"); // Muted blue emissive
        const currentBuildingMaterial = isEmissiveBuilding 
            ? new THREE.MeshStandardMaterial({ 
                color: new THREE.Color("hsl(0, 0%, 85%)"), // Slightly darker base for emissive
                metalness: 0.3,
                roughness: 0.6,
                emissive: emissiveColor,
                emissiveIntensity: 0 
              })
            : buildingMaterial.clone();

        const geometry = buildingGeometries[Math.floor(Math.random() * buildingGeometries.length)];
        const building = new THREE.Mesh(geometry, currentBuildingMaterial);
        
        const scaleX = 0.6 + Math.random() * 1.2;
        const scaleY = 1 + Math.random() * 4; 
        const scaleZ = 0.6 + Math.random() * 1.2;
        building.scale.set(scaleX, scaleY, scaleZ);

        building.position.set(
            (Math.random() - 0.5) * 35,
            (scaleY * geometry.parameters.height) / 2,
            (Math.random() - 0.5) * 35
        );
        building.castShadow = true;
        building.receiveShadow = true;

        if (isEmissiveBuilding) {
           (building.userData as any).isEmissive = true;
        }

        if (scaleY > 3.5 && Math.random() > 0.5) {
            const antennaHeight = 0.5 + Math.random() * 1.5;
            const antennaGeometry = new THREE.CylinderGeometry(0.05, 0.05, antennaHeight, 8);
            const antenna = new THREE.Mesh(antennaGeometry, accentMaterial);
            antenna.position.y = (scaleY * geometry.parameters.height) / 2 + antennaHeight / 2;
            antenna.castShadow = true;
            building.add(antenna);
        }
        buildingsGroupRef.current.add(building);
    }
    sceneRef.current.add(buildingsGroupRef.current);

    rocketRef.current = new THREE.Group();
    const rocketBodyMaterial = new THREE.MeshStandardMaterial({ 
        color: new THREE.Color("hsl(0, 0%, 60%)"), // Medium gray rocket
        metalness: 0.5, 
        roughness: 0.4 
    });
    const rocketAccentMaterial = new THREE.MeshStandardMaterial({ 
        color: new THREE.Color("hsl(210, 40%, 50%)"), // Muted blue accent
        metalness: 0.4, 
        roughness: 0.3 
    });

    const body = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 1.5, 16), rocketBodyMaterial);
    body.castShadow = true;
    rocketRef.current.add(body);

    const nose = new THREE.Mesh(new THREE.ConeGeometry(0.3, 0.5, 16), rocketAccentMaterial);
    nose.position.y = 1.0; 
    nose.castShadow = true;
    rocketRef.current.add(nose);

    for (let i = 0; i < 3; i++) {
        const fin = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.6, 0.4), rocketAccentMaterial);
        fin.position.y = -0.45;
        fin.position.x = Math.cos(i * 2 * Math.PI / 3) * 0.3;
        fin.position.z = Math.sin(i * 2 * Math.PI / 3) * 0.3;
        fin.lookAt(new THREE.Vector3(0, fin.position.y, 0));
        fin.rotateY(Math.PI/2);
        fin.castShadow = true;
        rocketRef.current.add(fin);
    }
    rocketRef.current.position.set(0, 0.75, 0); 
    rocketRef.current.scale.set(0.7,0.7,0.7);
    sceneRef.current.add(rocketRef.current);

    const flameGeometry = new THREE.ConeGeometry(0.28, 1.2, 16); 
    const flameMaterial = new THREE.MeshBasicMaterial({ 
        color: new THREE.Color("hsl(40, 100%, 55%)"), 
        transparent: true, 
        opacity: 0.9,
    });
    rocketFlameRef.current = new THREE.Mesh(flameGeometry, flameMaterial);
    rocketFlameRef.current.position.y = -1.0; 
    rocketFlameRef.current.rotation.x = Math.PI; 
    rocketFlameRef.current.visible = false;
    rocketRef.current.add(rocketFlameRef.current);


    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const delta = clockRef.current.getDelta();
      const elapsed = clockRef.current.getElapsedTime();

      if (buildingsGroupRef.current) {
        buildingsGroupRef.current.children.forEach(child => {
           if ((child.userData as any).isEmissive && child instanceof THREE.Mesh && child.material instanceof THREE.MeshStandardMaterial) {
               child.material.emissiveIntensity = (Math.sin(elapsed * 1.0 + child.id * 0.2) + 1) / 2 * 0.4 + 0.1; // Softer pulse
           }
        });
      }

      if (isRocketLaunched && rocketRef.current && rocketFlameRef.current) {
        const timeSinceLaunch = elapsed - launchTimeRef.current;
        const launchProgress = Math.min(timeSinceLaunch / ROCKET_LAUNCH_DURATION, 1);
        
        rocketRef.current.position.y = 0.75 + launchProgress * ROCKET_MAX_HEIGHT;
        
        rocketFlameRef.current.visible = true;
        rocketFlameRef.current.scale.set(1, 1 + Math.sin(elapsed * 60) * 0.6, 1); 
        rocketFlameRef.current.material.opacity = 0.7 + Math.sin(elapsed * 40) * 0.3; 

        if (launchProgress >= 1) {
          // Keep rocket launched state true until re-click or scene reset for now
          // To allow re-launch, you might want to set setIsRocketLaunched(false) here
          // and potentially reset rocket position if that's the desired behavior after a launch.
          // For now, it just stays up.
        }
      } else if (rocketFlameRef.current) {
          rocketFlameRef.current.visible = false;
      }


      controlsRef.current?.update(); 
      rendererRef.current?.render(sceneRef.current!, cameraRef.current!);
    };
    animate();

    const handleResize = () => {
      if (currentMount && cameraRef.current && rendererRef.current) {
        cameraRef.current.aspect = currentMount.clientWidth / currentMount.clientHeight;
        cameraRef.current.updateProjectionMatrix();
        rendererRef.current.setSize(currentMount.clientWidth, currentMount.clientHeight);
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
          } else {
            object.material?.dispose();
          }
        }
      });
      sceneRef.current = null;
      controlsRef.current?.dispose();
      clockRef.current = new THREE.Clock(); 
    };
  }, [isClient, rocketKey]); 


  if (!isClient) {
    return (
      <div ref={mountRef} className="w-full h-full flex items-center justify-center text-muted-foreground">
        <p>Initializing Minimalist Metropolis...</p>
      </div>
    );
  }

  return (
    <div className="w-full h-full relative">
      <div ref={mountRef} className="w-full h-full" />
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
        <Button onClick={handleLaunchRocket} size="lg" disabled={isRocketLaunched && rocketRef.current && rocketRef.current.position.y > 1.0 }>
          <RocketIcon className="mr-2 h-5 w-5" />
          {(isRocketLaunched && rocketRef.current && rocketRef.current.position.y > 1.0) ? 'Launched!' : 'Launch Rocket'}
        </Button>
      </div>
    </div>
  );
};

export default InteractiveShowcase;
