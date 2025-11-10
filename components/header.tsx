import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';
import { Drawer, DrawerTitle, DrawerContent, DrawerTrigger } from '@/components/ui/drawer';
import Logo from '@/components/logo';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const Header = () => {
  const navItems = [
    'Inicio',
    'Cómo lo hacemos',
    'Beneficios',
    'Precios',
    'Calculadora',
    'FAQ',
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Always set 'home' as active when at the very top
      if (window.scrollY < 50) {
        setActiveSection('home');
        return;
      }

      // Track active section based on scroll position
      const sections = ['how-we-do-it', 'how-it-works', 'features', 'pricing', 'budget-calculator', 'faq', 'contact'];
      const scrollPosition = window.scrollY + 100; // Reduced offset for better detection

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            if (activeSection !== section) setActiveSection(section);
            return;
          }
        }
      }
      // Do not update activeSection if not at top and not in any section (last matched section stays active)

    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  const sectionMap: { [key: string]: string } = {
    'Inicio': 'home',
    'Cómo lo hacemos': 'how-we-do-it',
    'Beneficios': 'features',
    'Precios': 'pricing',
    'Calculadora': 'budget-calculator',
    'FAQ': 'faq',
    'Contacto': 'contact'
  };

  const handleNavClick = (item: string) => {
    // Close drawer first
    setIsOpen(false);

    // Wait for drawer animation to complete before scrolling
    setTimeout(() => {
      if (item === 'Inicio') {
        // Scroll to top of page for Home link
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      } else {
        const targetId = sectionMap[item] || item.toLowerCase().replace(' ', '-');
        const element = document.getElementById(targetId);
        if (element) {
          const headerOffset = 0; // Height of fixed header
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    }, 300); // Wait 300ms for drawer close animation
  };

  const isActiveItem = (item: string) => {
    return activeSection === sectionMap[item];
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        'fixed top-0 left-0 right-0 z-40 transition-all duration-300', 
        isScrolled ? 'bg-background/60 backdrop-blur-sm shadow-xs' : 'bg-transparent'
      )}
    >
      <div className={cn("container mx-auto px-6 py-4 flex items-center justify-between")}  >
        <Logo />
        
        <div className="flex items-center gap-2.5">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {/* Nav items */}
            {navItems.map((item, index) => (
              <motion.button
                key={item}
                onClick={() => handleNavClick(item)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (index + 2) * 0.1 }}
                className={cn(
                  'cursor-pointer transition-colors relative group',
                  isActiveItem(item)
                    ? 'text-[#F6BE17]'
                    : 'text-accent-foreground hover:text-[#F6BE17]'
                )}
              >
                {item}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-[#F6BE17] transition-all ${
                    isActiveItem(item) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                ></span>
              </motion.button>
            ))}
            
            <Button variant="default" onClick={() => handleNavClick('Contacto')}>
              Solicitar demo
            </Button>
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center space-x-4">
            <Drawer open={isOpen} onOpenChange={setIsOpen}>
              <DrawerTrigger asChild>
                <Button className="cursor-pointer text-foreground hover:bg-transparent hover:text-[#F6BE17]" variant="ghost" size="icon">
                  <Menu className="size-6"/>
                </Button>
              </DrawerTrigger>
              <DrawerContent className="px-6 pb-8 bg-background">
                <DrawerTitle className="sr-only">Menú de navegación</DrawerTitle>

                {/* Handle bar */}
                <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-muted mb-6 mt-4" />

                <nav className="flex flex-col space-y-2">
                  {navItems.map((item) => (
                    <button
                      key={item}
                      onClick={() => handleNavClick(item)}
                      className={cn(
                        'w-full text-left px-4 py-3 rounded-lg transition-all text-base font-medium',
                        isActiveItem(item)
                          ? 'bg-[#F6BE17]/10 text-[#F6BE17]'
                          : 'text-foreground hover:bg-muted hover:text-[#F6BE17]'
                      )}
                    >
                      {item}
                    </button>
                  ))}
                  <div className="pt-4">
                    <Button
                      className="w-full bg-[#262F3F] hover:bg-[#262F3F]/90 text-white"
                      size="lg"
                      onClick={() => handleNavClick('Contacto')}
                    >
                      Solicitar demo
                    </Button>
                  </div>
                </nav>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
