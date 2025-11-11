'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { CustomBadge } from '@/components/custom/badge';
import { CustomTitle } from '@/components/custom/title';
import { CustomSubtitle } from '@/components/custom/subtitle';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Play, CheckCircle2 } from 'lucide-react';
import { formatCurrency } from "@/lib/utils";

const BudgetCalculator = () => {
  const [sections, setSections] = useState(5);
  const [videosPerSection, setVideosPerSection] = useState(4);
  const [minutesPerVideo, setMinutesPerVideo] = useState(4);

  const COST_PER_MINUTE = 478;
  const EXAM_CERT_COST = 4690;

  // Calculations
  const totalVideos = sections * videosPerSection;
  const totalMinutes = sections * videosPerSection * minutesPerVideo;
  const productionCost = totalMinutes * COST_PER_MINUTE;
  const totalCost = productionCost + EXAM_CERT_COST;

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
            Pago único por producción y directo en Payaya, para que tus usuarios solo tengan que presionar &quot;play&quot;.
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
            {/* Left Column - Parameters */}
            <Card className="border-2 border-border hover:border-[#F6BE17]/30 transition-colors">
              <CardContent className="p-6 md:p-8">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">Parámetros del curso</h3>
                  <p className="text-sm text-muted-foreground">
                    Define la estructura del contenido que deseas producir
                  </p>
                </div>

                <div className="space-y-8">
                  {/* Sections Slider */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="sections" className="text-base font-medium">
                        Número de secciones
                      </Label>
                      <div className="flex items-center gap-2 bg-[#F6BE17]/10 px-4 py-2 rounded-lg">
                        <span className="text-2xl font-bold text-[#262F3F]">{sections}</span>
                      </div>
                    </div>
                    <Slider
                      id="sections"
                      min={1}
                      max={20}
                      step={1}
                      value={[sections]}
                      onValueChange={(value) => setSections(value[0])}
                      className="[&_.bg-primary]:bg-[#F6BE17] [&_[role=slider]]:border-[#F6BE17]"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>1 sección</span>
                      <span>20 secciones</span>
                    </div>
                  </div>

                  {/* Videos per Section Slider */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="videos" className="text-base font-medium">
                        Videos por sección
                      </Label>
                      <div className="flex items-center gap-2 bg-[#F6BE17]/10 px-4 py-2 rounded-lg">
                        <span className="text-2xl font-bold text-[#262F3F]">{videosPerSection}</span>
                      </div>
                    </div>
                    <Slider
                      id="videos"
                      min={1}
                      max={15}
                      step={1}
                      value={[videosPerSection]}
                      onValueChange={(value) => setVideosPerSection(value[0])}
                      className="[&_.bg-primary]:bg-[#F6BE17] [&_[role=slider]]:border-[#F6BE17]"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>1 video</span>
                      <span>15 videos</span>
                    </div>
                  </div>

                  {/* Minutes per Video Slider */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="minutes" className="text-base font-medium">
                        Minutos por video
                      </Label>
                      <div className="flex items-center gap-2 bg-[#F6BE17]/10 px-4 py-2 rounded-lg">
                        <span className="text-2xl font-bold text-[#262F3F]">{minutesPerVideo}</span>
                        <span className="text-sm text-muted-foreground">min</span>
                      </div>
                    </div>
                    <Slider
                      id="minutes"
                      min={1}
                      max={20}
                      step={1}
                      value={[minutesPerVideo]}
                      onValueChange={(value) => setMinutesPerVideo(value[0])}
                      className="[&_.bg-primary]:bg-[#F6BE17] [&_[role=slider]]:border-[#F6BE17]"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>1 min</span>
                      <span>20 min</span>
                    </div>
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                    <div className="text-center p-3 bg-muted/50 rounded-lg">
                      <div className="text-2xl font-bold text-foreground">{totalVideos}</div>
                      <div className="text-xs text-muted-foreground">Videos totales</div>
                    </div>
                    <div className="text-center p-3 bg-muted/50 rounded-lg">
                      <div className="text-2xl font-bold text-foreground">{totalMinutes}</div>
                      <div className="text-xs text-muted-foreground">Minutos totales</div>
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
                    Paga una sola vez por la grabación profesional de tu curso personalizado.
                  </p>
                </div>

                <div className="space-y-6 flex-grow">
                  {/* Total Minutes */}
                  <div className="flex items-center justify-between p-4 bg-background/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#F6BE17]/20 flex items-center justify-center">
                        <Play className="w-5 h-5 text-[#262F3F]" />
                      </div>
                      <span className="font-medium">Total de minutos</span>
                    </div>
                    <span className="text-xl font-bold text-[#262F3F]">{totalMinutes} min</span>
                  </div>

                  {/* Production Cost Breakdown */}
                  <div className="space-y-3">
                    <div className="flex justify-between items-start p-4 bg-background/50 rounded-lg">
                      <div className="flex-1">
                        <p className="font-semibold text-foreground mb-1">Producción de videos</p>
                        <p className="text-sm text-muted-foreground">
                          {totalMinutes} min × {formatCurrency(COST_PER_MINUTE)}/min grabado
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-bold text-foreground">{formatCurrency(productionCost)}</p>
                      </div>
                    </div>

                    <div className="flex justify-between items-start p-4 bg-background/50 rounded-lg">
                      <div className="flex-1">
                        <p className="font-semibold text-foreground mb-1">Examen + Certificado</p>
                        <p className="text-sm text-muted-foreground">Diseño único por curso</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-bold text-foreground">{formatCurrency(EXAM_CERT_COST)}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Total Investment - Highlighted */}
                <div className="mt-6 p-6 bg-[#262F3F] rounded-xl text-white">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <p className="text-sm opacity-80 mb-1">💰 Inversión total</p>
                      <p className="text-4xl font-black">{formatCurrency(totalCost)}</p>
                    </div>
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
