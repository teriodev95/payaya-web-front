
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { CustomBadge } from '@/components/custom/badge';
import { CustomTitle } from '@/components/custom/title';
import { CustomSubtitle } from '@/components/custom/subtitle';
import { Button } from '@/components/ui/button';
import { Zap, Shield, BarChart3, Users, Brain, Award, RefreshCw, Palette, ArrowRight, X } from 'lucide-react';
import Link from 'next/link';

const Features = () => {
  const [selectedFeature, setSelectedFeature] = useState<number | null>(null);

  const features = [
    {
      icon: Zap,
      title: 'Movilidad total',
      shortDescription: 'Capacita desde cualquier dispositivo móvil sin depender de computadoras.',
      fullDescription: 'Tu equipo puede acceder a los cursos desde cualquier dispositivo móvil con nuestra app PWA y aprender en cualquier momento y lugar. Capacitación sin límites, desde cualquier pantalla.',
      stats: '100% Móvil'
    },
    {
      icon: Shield,
      title: 'Seguro por diseño',
      shortDescription: 'Cifrado, roles y cumplimiento normativo de nivel empresarial.',
      fullDescription: 'Protege la información de tu organización con seguridad de nivel empresarial y auditorías completas. Confianza y protección en cada clic.',
      stats: '99.9% Disponibilidad'
    },
    {
      icon: BarChart3,
      title: 'Métricas claras',
      shortDescription: 'Sigue el progreso, aprobaciones y desempeño con reportes automáticos.',
      fullDescription: 'Obtén datos útiles para medir el impacto real de la capacitación. Información que impulsa decisiones con trazabilidad completa del aprendizaje.',
      stats: '100% Trazabilidad'
    },
    {
      icon: Users,
      title: 'Escalable y flexible',
      shortDescription: 'Crece de pequeños equipos a miles de usuarios activos sin fricción.',
      fullDescription: 'El sistema se adapta a las necesidades de tu empresa sin configuraciones complejas. Escala tu capacitación al ritmo de tu organización.',
      stats: '3,000+ Usuarios'
    },
    {
      icon: Brain,
      title: 'Cursos personalizados',
      shortDescription: 'Contenido alineado con los procesos reales de tu organización.',
      fullDescription: 'Cada curso refleja cómo realmente se trabaja en tu entorno. Capacitación hecha para ti, no genérica.',
      stats: 'A tu medida'
    },
    {
      icon: Award,
      title: 'Certificados automáticos',
      shortDescription: 'Certificados generados y enviados automáticamente al aprobar.',
      fullDescription: 'Define un porcentaje mínimo de calificación para aprobar cada curso. Reconocimiento instantáneo y sin gestión manual.',
      stats: 'Automatizado'
    },
    {
      icon: RefreshCw,
      title: 'Revalidaciones automáticas',
      shortDescription: 'Configura recertificaciones periódicas de manera automática.',
      fullDescription: 'Payaya se encarga de notificar a los usuarios cuando deban repetir cursos. Mantén vigente el conocimiento clave de tu organización.',
      stats: 'Programable'
    },
    {
      icon: Palette,
      title: 'Marca blanca',
      shortDescription: 'Personaliza con los colores y logotipo de tu organización.',
      fullDescription: 'Haz que Payaya luzca como tu propia academia interna. Tu imagen, tu experiencia, tu capacitación.',
      stats: 'Personalizable'
    }
  ];

  return (
    <section id="features" className="py-24 bg-background border-b border-border/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex items-center justify-center flex-col text-center gap-5 mb-16"
        >
          <CustomBadge>
            Beneficios
          </CustomBadge>

          <CustomTitle>
            Beneficios que fortalecen el aprendizaje dentro de tu organización
          </CustomTitle>

          <CustomSubtitle>
            Diseñamos una plataforma que conecta el conocimiento de tus expertos con la tecnología necesaria para capacitar, evaluar y certificar sin complicaciones.
          </CustomSubtitle>
        </motion.div>

        {/* Features Grid - Minimalista */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border border-border hover:border-[#F6BE17] transition-all duration-300 hover:shadow-md bg-background group cursor-pointer">
                  <CardContent className="p-6 h-full flex flex-col">
                    {/* Icon */}
                    <div className="mb-4">
                      <div className="w-12 h-12 rounded-lg bg-[#F6BE17]/10 flex items-center justify-center group-hover:bg-[#F6BE17]/20 transition-colors">
                        <Icon className="w-6 h-6 text-[#262F3F]" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-foreground mb-3 leading-tight">
                      {feature.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-grow">
                      {feature.shortDescription}
                    </p>

                    {/* CTA Button */}
                    <button
                      onClick={() => setSelectedFeature(index)}
                      className="text-sm font-semibold text-[#F6BE17] hover:text-[#d9a614] flex items-center gap-1 group-hover:gap-2 transition-all"
                    >
                      Ver más
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Modal - Bottom Sheet en móvil, Modal centrado en desktop */}
        <AnimatePresence>
          {selectedFeature !== null && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedFeature(null)}
                className="fixed inset-0 bg-black/50 z-50"
              />

              {/* Modal Container - Responsive */}
              <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-0 md:p-4 pointer-events-none">
                <motion.div
                  initial={{ y: "100%", opacity: 0, scale: 0.95 }}
                  animate={{
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    transition: {
                      type: "spring",
                      damping: 25,
                      stiffness: 300
                    }
                  }}
                  exit={{
                    y: "100%",
                    opacity: 0,
                    scale: 0.95,
                    transition: {
                      duration: 0.2
                    }
                  }}
                  className="bg-background rounded-t-3xl md:rounded-2xl shadow-2xl w-full md:max-w-lg max-h-[80vh] md:max-h-[600px] overflow-hidden pointer-events-auto"
                >
                  <div className="p-6 md:p-8 overflow-y-auto max-h-[80vh] md:max-h-[600px]">
                    {/* Handle bar - solo móvil */}
                    <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-muted mb-4 md:hidden" />

                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-xl bg-[#F6BE17]/10 flex items-center justify-center flex-shrink-0">
                          {React.createElement(features[selectedFeature].icon, {
                            className: "w-7 h-7 text-[#262F3F]"
                          })}
                        </div>
                        <div>
                          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1">
                            {features[selectedFeature].title}
                          </h3>
                          <span className="text-sm font-semibold text-[#F6BE17]">
                            {features[selectedFeature].stats}
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => setSelectedFeature(null)}
                        className="w-10 h-10 rounded-full hover:bg-muted flex items-center justify-center transition-colors flex-shrink-0"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Content */}
                    <div className="space-y-4">
                      <p className="text-base text-muted-foreground leading-relaxed">
                        {features[selectedFeature].fullDescription}
                      </p>

                      {/* CTA */}
                      <div className="pt-4">
                        <Button className="w-full bg-[#262F3F] hover:bg-[#262F3F]/90 text-white" size="lg">
                          Agendar demostración
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </>
          )}
        </AnimatePresence>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-6"
        >
          <p className="text-lg text-center text-foreground/80 max-w-3xl font-medium">
            Cada organización aprende diferente. En Payaya, te damos las herramientas para enseñar como tú quieras.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button size="lg" className="cursor-pointer hover:[&_svg]:translate-x-1 w-full sm:w-auto">
              Agendar demostración
              <ArrowRight className="h-5 w-5 transition-transform" />
            </Button>

            <Button size="lg" variant="outline" className="cursor-pointer w-full sm:w-auto" asChild>
              <Link href="#features">
                Ver todos los beneficios
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
