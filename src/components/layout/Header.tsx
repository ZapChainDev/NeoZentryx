'use client';
import Link from 'next/link';
import { Menu, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { useIsMobile } from '@/hooks/use-mobile';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const navItems = [
  { href: '/#portfolio', label: 'Portfolio' },
  { href: '/#team', label: 'Our Team' },
  { href: '/#contact', label: 'Contact Us' },
];

const LogoIcon = () => (
 <Code className="h-6 w-6" />
);


export default function Header() {
  const isMobile = useIsMobile();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Simplified skeleton for header during SSR/initial mount
    return (
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2 text-lg font-bold text-foreground">
            <div className="w-6 h-6 bg-muted rounded"></div> {/* Icon placeholder */}
            <span>NeoZentryx Studio</span>
          </div>
          <div className="hidden md:flex h-full items-center space-x-4">
            <div className="h-5 w-12 animate-pulse bg-muted rounded"></div>
            <div className="h-5 w-16 animate-pulse bg-muted rounded"></div>
            <div className="h-5 w-20 animate-pulse bg-muted rounded"></div>
          </div>
          <div className="md:hidden">
            <Button variant="ghost" size="icon" className="h-8 w-8 animate-pulse bg-muted"></Button>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-4 text-xl font-bold text-foreground">
          <Image src="/logo/NeoLogo.png" alt="NeoZentryx Studio Logo" height={64} width={64} className="rounded" />
          <span>NeoZentryx Studio</span>
        </Link>

        {isMobile ? (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[240px] p-6 bg-background">
              <SheetTitle>Menu</SheetTitle>
              <nav className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        ) : (
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
               <Button key={item.label} variant="ghost" asChild>
                 <Link href={item.href} className="text-sm font-medium text-foreground hover:text-primary/80 transition-colors">
                  {item.label}
                 </Link>
               </Button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}

    