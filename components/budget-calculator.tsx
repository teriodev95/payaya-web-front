'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { CustomBadge } from '@/components/custom/badge';
import { CustomTitle } from '@/components/custom/title';
import { CustomSubtitle } from '@/components/custom/subtitle';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

const BudgetCalculator = () => {
  const [sections, setSections] = useState(5);
  const [videosPerSection, setVideosPerSection] = useState(4);
  const [minutesPerVideo, setMinutesPerVideo] = useState(4);

  const COST_PER_MINUTE = 478;
  const EXAM_CERT_COST = 4690;

  // Calculations
  const totalMinutes = sections * videosPerSection * minutesPerVideo;
  const productionCost = totalMinutes * COST_PER_MINUTE;
  const totalCost = productionCost + EXAM_CERT_COST;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <section className="py-24 bg-background border-b border-border/50" id="budget-calculator">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex items-center justify-center flex-col text-center gap-5 mb-16"
        >
          <CustomBadge>Producción de cursos</CustomBadge>

          <CustomTitle>Calcula el costo de tu contenido</CustomTitle>

          <CustomSubtitle>
            Inversión única por producción de videos. Ajusta los parámetros para estimar el costo de tu curso personalizado.
          </CustomSubtitle>
        </motion.div>

        {/* Calculator Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="border-[#F6BE17]/20 shadow-lg">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-12">
                {/* Input Controls */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold mb-2 text-foreground">Parámetros del curso</h3>
                  <p className="text-sm text-muted-foreground mb-6">Define la estructura de tu contenido personalizado</p>

                  {/* Sections */}
                  <div className="space-y-3">
                    <Label htmlFor="sections" className="text-base font-medium">
                      Número de secciones
                    </Label>
                    <Input
                      id="sections"
                      type="number"
                      min="1"
                      value={sections}
                      onChange={(e) => setSections(Math.max(1, parseInt(e.target.value) || 1))}
                      className="text-lg h-12"
                    />
                  </div>

                  {/* Videos per section */}
                  <div className="space-y-3">
                    <Label htmlFor="videos" className="text-base font-medium">
                      Videos por sección
                    </Label>
                    <Input
                      id="videos"
                      type="number"
                      min="1"
                      value={videosPerSection}
                      onChange={(e) => setVideosPerSection(Math.max(1, parseInt(e.target.value) || 1))}
                      className="text-lg h-12"
                    />
                  </div>

                  {/* Minutes per video */}
                  <div className="space-y-3">
                    <Label htmlFor="minutes" className="text-base font-medium">
                      Minutos por video
                    </Label>
                    <Input
                      id="minutes"
                      type="number"
                      min="1"
                      value={minutesPerVideo}
                      onChange={(e) => setMinutesPerVideo(Math.max(1, parseInt(e.target.value) || 1))}
                      className="text-lg h-12"
                    />
                  </div>
                </div>

                {/* Results */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold mb-2 text-foreground">Inversión única de producción</h3>
                  <p className="text-sm text-muted-foreground mb-6">Pago único por video grabado profesionalmente</p>

                  <div className="space-y-4">
                    {/* Total minutes */}
                    <div className="flex justify-between items-center py-3">
                      <span className="text-muted-foreground">Total de minutos</span>
                      <span className="text-lg font-semibold">{totalMinutes} min</span>
                    </div>

                    <Separator />

                    {/* Production cost */}
                    <div className="flex justify-between items-center py-3">
                      <div>
                        <p className="font-medium">Producción de videos</p>
                        <p className="text-sm text-muted-foreground">
                          {totalMinutes} min × {formatCurrency(COST_PER_MINUTE)}/min grabado
                        </p>
                      </div>
                      <span className="text-lg font-semibold">{formatCurrency(productionCost)}</span>
                    </div>

                    <Separator />

                    {/* Exam + Certificate */}
                    <div className="flex justify-between items-center py-3">
                      <div>
                        <p className="font-medium">Examen + Certificado</p>
                        <p className="text-sm text-muted-foreground">Diseño único por curso</p>
                      </div>
                      <span className="text-lg font-semibold">{formatCurrency(EXAM_CERT_COST)}</span>
                    </div>

                    <Separator className="bg-[#F6BE17]/30" />

                    {/* Total */}
                    <div className="flex justify-between items-center py-4 bg-gradient-to-r from-[#F6BE17]/10 to-[#F6BE17]/5 -mx-4 px-4 rounded-lg">
                      <div>
                        <span className="text-xl font-bold block">Inversión total</span>
                        <span className="text-xs text-muted-foreground">Pago único de producción</span>
                      </div>
                      <span className="text-2xl font-black text-[#F6BE17]">{formatCurrency(totalCost)}</span>
                    </div>
                  </div>

                  {/* Disclaimer */}
                  <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      <strong>Nota:</strong> Esta es una inversión única por la producción profesional de tus videos.
                      Una vez producido, el curso estará disponible indefinidamente en la plataforma.
                      El costo puede variar según complejidad o locaciones especiales.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default BudgetCalculator;
