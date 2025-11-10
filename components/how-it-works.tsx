import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { CustomBadge } from '@/components/custom/badge';
import { CustomTitle } from '@/components/custom/title';
import { CustomSubtitle } from '@/components/custom/subtitle';
import { Button } from '@/components/ui/button';
import { cn, scrollToSection } from '@/lib/utils';
import { Cable, ChartNoAxesCombined, Cog, CloudUpload } from 'lucide-react';

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const manuallyTriggered = useRef(false);

  const steps = [
    {
      id: 1,
      title: "Instala desde el navegador",
      description: "Agregar a pantalla de inicio, sin necesidad de app store.",
      image: "/screens/4.png",
      icon: CloudUpload
    },
    {
      id: 2,
      title: "Inicia sesión",
      description: "Accede con tus credenciales corporativas de forma segura.",
      image: "/screens/5.png",
      icon: Cable
    },
    {
      id: 3,
      title: "Completa el curso",
      description: "Módulos cortos y claros, diseñados para aprender en cualquier momento.",
      image: "/screens/3.png",
      icon: Cog
    },
    {
      id: 4,
      title: "Recibe tu certificado",
      description: "Presenta el examen final y obtén tu certificado digital validado.",
      image: "/screens/4.png",
      icon: ChartNoAxesCombined
    },
  ];

  const stepDuration = 5000; // 8 secon
  
  // Auto-advance steps with progress animation
  useEffect(() => {
    if (isPaused) return;
  
    setProgress(0);
  
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + (100 / (stepDuration / 50));
      });
    }, 50);
  
    const stepTimeout = setTimeout(() => {
      setActiveStep((prevStep) => {
        const next = (prevStep + 1) % steps.length;
        manuallyTriggered.current = false; // reset the manual flag here
        return next;
      });
    }, stepDuration);
  
    return () => {
      clearInterval(progressInterval);
      clearTimeout(stepTimeout);
    };
  }, [activeStep, isPaused, steps.length]);

  const handleStepClick = (index: number) => {
    setActiveStep(index);
    manuallyTriggered.current = true; // Flag as manual
    setTimeout(() => setIsPaused(false), 4000); // Resume auto
  };

  return (
    <section id="how-it-works" className="py-24 border-b border-border/50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }} className="flex items-center justify-center flex-col text-center gap-5 mb-16">
          <CustomBadge>
            Cómo funciona
          </CustomBadge>

          <CustomTitle>
            Simple y rápido
          </CustomTitle>

          <CustomSubtitle>
            Instala la PWA, accede a tus cursos y certifícate en minutos. Todo desde tu móvil.
          </CustomSubtitle>
        </motion.div>

        {/* Main Content Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col gap-12 max-w-6xl mx-auto">
          {/* Step Navigation - Grid mejorado */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className={cn(
                  'flex flex-col items-center text-center cursor-pointer transition-all duration-300 p-6 rounded-xl border',
                  index === activeStep
                    ? 'bg-gradient-to-br from-[#F6BE17]/10 to-[#F6BE17]/5 border-[#F6BE17]/30 shadow-lg'
                    : 'bg-background border-border/50 hover:border-[#F6BE17]/20'
                )}
                onClick={() => handleStepClick(index)}
              >
                {/* Icon con animación */}
                <motion.div
                  className={cn(
                    "size-16 rounded-full flex items-center justify-center mb-4 transition-all duration-300",
                    index === activeStep
                      ? "bg-[#F6BE17] shadow-md"
                      : "bg-[#F6BE17]/20 dark:bg-[#F6BE17]/30"
                  )}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <step.icon className={cn(
                    "size-7 transition-colors duration-300",
                    index === activeStep ? "text-[#262F3F]" : "text-[#F6BE17]"
                  )} />
                </motion.div>

                {/* Título */}
                <h3 className={cn(
                  'text-lg font-bold mb-2 transition-colors duration-300',
                  index === activeStep ? 'text-foreground' : 'text-muted-foreground'
                )}>
                  {step.title}
                </h3>

                {/* Descripción visible solo en paso activo */}
                <AnimatePresence mode="wait">
                  {index === activeStep && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-sm text-muted-foreground mt-2"
                    >
                      {step.description}
                    </motion.p>
                  )}
                </AnimatePresence>

                {/* Progress bar en la parte inferior */}
                <div className="w-full h-1 bg-border/30 rounded-full mt-4 overflow-hidden">
                  <AnimatePresence>
                    {index === activeStep && (
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        exit={{ width: 0 }}
                        className="h-full bg-gradient-to-r from-[#F6BE17] to-[#d9a614] rounded-full"
                        transition={{ duration: 0.05, ease: "linear" }}
                      />
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Removed - Content integrated into step cards above */}
        </motion.div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            ¿Listo para empezar? Toma menos de 5 minutos.
          </p>
          <Button
            size="lg"
            onClick={() => scrollToSection('contact')}
          >
            Solicitar demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
