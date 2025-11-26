'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { CustomBadge } from '@/components/custom/badge';
import { CustomTitle } from '@/components/custom/title';
import { CustomSubtitle } from '@/components/custom/subtitle';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { CheckCircle2, Video, Monitor, Bot } from 'lucide-react';
import { formatCurrency, cn } from "@/lib/utils";

const productionTypes = [
  {
    id: 'professional',
    name: 'Grabación profesional',
    description: 'Audio y video en estudio o locación',
    example: 'Liderazgo, onboarding, procesos en campo',
    pricePerMinute: 987,
    icon: Video,
  },
  {
    id: 'screencast',
    name: 'Grabación de pantalla',
    description: 'Captura de pantalla con voz en off',
    example: 'Tutoriales de software, demos',
    pricePerMinute: 468,
    icon: Monitor,
  },
  {
    id: 'avatar',
    name: 'Avatar con IA',
    description: 'Presentador virtual con IA',
    example: 'Contenido multiidioma, actualizaciones',
    pricePerMinute: 1248,
    icon: Bot,
  },
];

const BudgetCalculator = () => {
  const [professionalMinutes, setProfessionalMinutes] = useState(60);
  const [screencastMinutes, setScreencastMinutes] = useState(20);
  const [avatarMinutes, setAvatarMinutes] = useState(0);

  const EXAM_CERT_COST = 4690;

  // Calculations
  const totalMinutes = professionalMinutes + screencastMinutes + avatarMinutes;
  const professionalCost = professionalMinutes * productionTypes[0].pricePerMinute;
  const screencastCost = screencastMinutes * productionTypes[1].pricePerMinute;
  const avatarCost = avatarMinutes * productionTypes[2].pricePerMinute;
  const productionCost = professionalCost + screencastCost + avatarCost;
  const totalCost = productionCost + EXAM_CERT_COST;

  const minutesConfig = [
    {
      type: productionTypes[0],
      value: professionalMinutes,
      setValue: setProfessionalMinutes,
      cost: professionalCost,
    },
    {
      type: productionTypes[1],
      value: screencastMinutes,
      setValue: setScreencastMinutes,
      cost: screencastCost,
    },
    {
      type: productionTypes[2],
      value: avatarMinutes,
      setValue: setAvatarMinutes,
      cost: avatarCost,
    },
  ];

  return (
    <section className="py-24 bg-muted/30 border-b border-border/50" id="budget-calculator">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex items-center justify-center flex-col text-center gap-5 mb-16"
        >
          <CustomBadge>Calculadora</CustomBadge>

          <CustomTitle>Calcula el costo de tu contenido</CustomTitle>

          <CustomSubtitle>
            Combina diferentes tipos de producción según las necesidades de tu curso.
            <br />
            <span className="text-muted-foreground/70">Pago único por producción, tu curso queda disponible permanentemente en Payaya.</span>
          </CustomSubtitle>
        </motion.div>

        {/* Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Left Column - Minutes Configuration */}
            <Card className="border-2 border-border hover:border-[#F6BE17]/30 transition-colors">
              <CardContent className="p-6 md:p-8">
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-foreground mb-2">Configura tu curso</h3>
                  <p className="text-sm text-muted-foreground">
                    Define cuántos minutos necesitas de cada tipo de producción
                  </p>
                </div>

                <div className="space-y-8">
                  {minutesConfig.map((config, index) => {
                    const Icon = config.type.icon;
                    const hasMinutes = config.value > 0;

                    return (
                      <div key={config.type.id} className="space-y-4">
                        <div className="flex items-start gap-3">
                          <div className={cn(
                            'w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors',
                            hasMinutes ? 'bg-[#F6BE17] text-[#262F3F]' : 'bg-muted text-muted-foreground'
                          )}>
                            <Icon className="w-5 h-5" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-2 mb-1">
                              <Label htmlFor={config.type.id} className="text-base font-semibold text-foreground">
                                {config.type.name}
                              </Label>
                              <div className={cn(
                                'flex items-center gap-2 px-3 py-1.5 rounded-lg transition-colors',
                                hasMinutes ? 'bg-[#F6BE17]/15' : 'bg-muted/50'
                              )}>
                                <span className={cn(
                                  'text-xl font-bold',
                                  hasMinutes ? 'text-[#262F3F]' : 'text-muted-foreground'
                                )}>
                                  {config.value}
                                </span>
                                <span className="text-xs text-muted-foreground">min</span>
                              </div>
                            </div>
                            <p className="text-xs text-muted-foreground mb-1">{config.type.description}</p>
                            <p className="text-xs text-muted-foreground/70 italic">Ej: {config.type.example}</p>
                            <p className="text-xs font-medium text-[#F6BE17] mt-1">
                              {formatCurrency(config.type.pricePerMinute)} por minuto
                            </p>
                          </div>
                        </div>

                        <Slider
                          id={config.type.id}
                          min={0}
                          max={200}
                          step={5}
                          value={[config.value]}
                          onValueChange={(value) => config.setValue(value[0])}
                          className="[&_.bg-primary]:bg-[#F6BE17] [&_[role=slider]]:border-[#F6BE17]"
                        />
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <span>0 min</span>
                          <span>200 min</span>
                        </div>
                      </div>
                    );
                  })}

                  {/* Total Minutes */}
                  <div className="pt-6 border-t">
                    <div className="flex items-center justify-between p-4 bg-[#F6BE17]/10 rounded-lg">
                      <span className="font-semibold text-foreground">Total de minutos</span>
                      <span className="text-2xl font-bold text-[#262F3F]">{totalMinutes} min</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Right Column - Investment */}
            <Card className="border-2 border-[#F6BE17]/20 bg-gradient-to-br from-background to-[#F6BE17]/5">
              <CardContent className="p-6 md:p-8 h-full flex flex-col">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">Inversión única de producción</h3>
                  <p className="text-sm text-muted-foreground">
                    Desglose detallado por tipo de contenido
                  </p>
                </div>

                <div className="space-y-4 flex-grow">
                  {/* Production Cost Breakdown - Only show types with minutes > 0 */}
                  {minutesConfig.map((config) => {
                    if (config.value === 0) return null;
                    const Icon = config.type.icon;

                    return (
                      <div key={config.type.id} className="flex justify-between items-start p-4 bg-background/50 rounded-lg">
                        <div className="flex items-start gap-3 flex-1">
                          <div className="w-8 h-8 rounded-lg bg-[#F6BE17]/20 flex items-center justify-center flex-shrink-0">
                            <Icon className="w-4 h-4 text-[#262F3F]" />
                          </div>
                          <div>
                            <p className="font-semibold text-foreground text-sm">{config.type.name}</p>
                            <p className="text-xs text-muted-foreground">
                              {config.value} min × {formatCurrency(config.type.pricePerMinute)}
                            </p>
                          </div>
                        </div>
                        <p className="text-lg font-bold text-foreground">{formatCurrency(config.cost)}</p>
                      </div>
                    );
                  })}

                  {/* Show message if no minutes selected */}
                  {totalMinutes === 0 && (
                    <div className="p-4 bg-muted/30 rounded-lg text-center">
                      <p className="text-sm text-muted-foreground">
                        Configura los minutos de producción para ver el desglose
                      </p>
                    </div>
                  )}

                  {/* Exam + Certificate */}
                  <div className="flex justify-between items-start p-4 bg-background/50 rounded-lg">
                    <div className="flex-1">
                      <p className="font-semibold text-foreground text-sm">Examen + Certificado</p>
                      <p className="text-xs text-muted-foreground">Diseño único por curso</p>
                    </div>
                    <p className="text-lg font-bold text-foreground">{formatCurrency(EXAM_CERT_COST)}</p>
                  </div>
                </div>

                {/* Total Investment - Highlighted */}
                <div className="mt-6 p-6 bg-[#262F3F] rounded-xl text-white">
                  <div className="mb-2">
                    <p className="text-sm opacity-80 mb-1">Inversión total</p>
                    <p className="text-4xl font-black">{formatCurrency(totalCost)}</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm opacity-90 mt-4 pt-4 border-t border-white/20">
                    <CheckCircle2 className="w-4 h-4 text-[#F6BE17]" />
                    <span>Pago único por producción</span>
                  </div>
                  <p className="text-xs opacity-75 mt-2">
                    Tu curso quedará disponible de forma permanente dentro de Payaya.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BudgetCalculator;
