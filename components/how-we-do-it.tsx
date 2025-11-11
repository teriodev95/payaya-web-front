import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { CustomBadge } from '@/components/custom/badge';
import { CustomTitle } from '@/components/custom/title';
import { CustomSubtitle } from '@/components/custom/subtitle';
import { Button } from '@/components/ui/button';
import { Video, Brain, Wrench, Rocket, ArrowRight } from 'lucide-react';
import { cn, scrollToSection } from '@/lib/utils';
import Link from 'next/link';

const HowWeDoIt = () => {
  const steps = [
    {
      id: 'produccion',
      icon: Video,
      title: 'Tu equipo enseña, nosotros producimos',
      description: 'Trabajamos de la mano con los especialistas de tu organización para capturar su experiencia y convertirla en cursos claros y atractivos. Nos encargamos de la planeación, grabación y edición profesional del contenido.',
      number: '01',
      colors: {
        bg: 'bg-blue-100/40 dark:bg-blue-950/40',
        icon: 'text-blue-600',
        hover: 'hover:border-blue-500',
        gradient: 'from-blue-500 via-blue-600 to-blue-700',
        numberBg: 'bg-blue-50 dark:bg-blue-950/30',
        numberText: 'text-blue-600'
      }
    },
    {
      id: 'evaluaciones',
      icon: Brain,
      title: 'Diseñamos tus evaluaciones',
      description: 'Te ayudamos a crear los cuestionarios y quizzes ideales para cada curso, asegurando que el aprendizaje se mida de forma efectiva y sencilla. Definimos los niveles de dificultad, puntajes y retroalimentaciones automáticas.',
      number: '02',
      colors: {
        bg: 'bg-purple-100/40 dark:bg-purple-950/40',
        icon: 'text-purple-600',
        hover: 'hover:border-purple-500',
        gradient: 'from-purple-500 via-purple-600 to-purple-700',
        numberBg: 'bg-purple-50 dark:bg-purple-950/30',
        numberText: 'text-purple-600'
      }
    },
    {
      id: 'montaje',
      icon: Wrench,
      title: 'Montamos todo en Payaya',
      description: 'Subimos el contenido, estructuramos módulos, configuramos evaluaciones y certificados automáticos. Dejamos cada curso listo para ser asignado a tus usuarios con un par de clics.',
      number: '03',
      colors: {
        bg: 'bg-emerald-100/40 dark:bg-emerald-950/40',
        icon: 'text-emerald-600',
        hover: 'hover:border-emerald-500',
        gradient: 'from-emerald-500 via-emerald-600 to-emerald-700',
        numberBg: 'bg-emerald-50 dark:bg-emerald-950/30',
        numberText: 'text-emerald-600'
      }
    },
    {
      id: 'acceso',
      icon: Rocket,
      title: 'Tú solo das acceso a tu equipo',
      description: 'Una vez listo, solo decides quién tomará cada curso. Payaya se encarga de registrar el avance, aplicar las evaluaciones y generar los certificados.',
      number: '04',
      colors: {
        bg: 'bg-amber-100/40 dark:bg-amber-950/40',
        icon: 'text-amber-600',
        hover: 'hover:border-amber-500',
        gradient: 'from-amber-500 via-amber-600 to-amber-700',
        numberBg: 'bg-amber-50 dark:bg-amber-950/30',
        numberText: 'text-amber-600'
      }
    }
  ];

  return (
    <section id="how-we-do-it" className="py-24 bg-muted/30 border-b border-border/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex items-center justify-center flex-col text-center gap-5 mb-16"
        >
          <CustomBadge>
            Proceso
          </CustomBadge>

          <CustomTitle>
            ¿Cómo lo hacemos?
          </CustomTitle>

          <CustomSubtitle>
            Te acompañamos en cada paso para que capacitar a tu equipo sea tan fácil como presionar &quot;play&quot;.
          </CustomSubtitle>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <Card className={cn('h-full bg-background border border-border transition-all duration-500 p-8 relative overflow-hidden hover:shadow-lg', step.colors.hover)}>
                <CardContent className="p-0">
                  {/* Header with number and icon */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={cn(
                      'size-12 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-500 relative overflow-hidden',
                      step.colors.bg
                      )}
                    >
                      <step.icon className={cn('size-5 relative z-10', step.colors.icon)} />
                    </div>

                    <div className={cn(
                      'px-3 py-1 rounded-full text-sm font-bold',
                      step.colors.numberBg,
                      step.colors.numberText
                    )}>
                      {step.number}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-foreground transition-colors leading-tight">
                    {step.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed font-medium">
                    {step.description}
                  </p>
                </CardContent>

                {/* Hover effect gradient border */}
                <div className={cn('absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left', step.colors.gradient)} />

                {/* Subtle gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-50/0 to-slate-100/0 group-hover:from-slate-50/30 group-hover:to-slate-100/10 dark:from-slate-900/0 dark:to-slate-800/0 transition-all duration-500 pointer-events-none" />
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-6"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              size="lg"
              className="cursor-pointer hover:[&_svg]:translate-x-1 w-full sm:w-auto"
              onClick={() => scrollToSection('contact')}
            >
              Agendar demostración
              <ArrowRight className="h-5 w-5 transition-transform" />
            </Button>

            <Button size="lg" variant="outline" className="cursor-pointer w-full sm:w-auto" asChild>
              <Link href="#examples">
                Ver ejemplos de cursos
              </Link>
            </Button>
          </div>

          {/* Microcopy */}
          <p className="text-muted-foreground text-center max-w-2xl text-base font-medium">
            Nos encargamos de la producción y la tecnología.<br />
            Tu organización solo necesita compartir su conocimiento.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HowWeDoIt;
