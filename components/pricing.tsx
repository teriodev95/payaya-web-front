import { AnimatePresence, motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Check, Star, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import { CustomTitle } from './custom/title';
import { CustomSubtitle } from './custom/subtitle';
import { CustomBadge } from './custom/badge';
import { cn, formatCurrency, scrollToSection } from '@/lib/utils';

const SAVING = 0.19;

const calcYearlySaving = (value: string | number) => {
  const price = Number(value);
  return price * SAVING * 12;
};

const Pricing = () => {
  const [billingPeriod, setBillingPeriod] = useState('monthly');
  const isYearly = billingPeriod === 'yearly';

  const plans = [
    {
      name: 'Core',
      monthlyPrice: '98',
      period: isYearly ? '/año por usuario' : '/mes por usuario',
      description: 'PYMES que inician su capacitación digital',
      subDescription: function () {
        if (!isYearly) return 'Compra mínima: 100 usuarios';
        return `Compra mínima: 100 usuarios · Ahorra ${formatCurrency(calcYearlySaving(this.monthlyPrice))} / año por usuario`;
      },
      features: [
        'PWA móvil optimizada',
        'Exámenes automáticos 15-20 preguntas',
        'Certificados digitales',
        'Reportes por área o usuario',
        'Panel administrativo completo',
        'Soporte técnico',
        'Infraestructura incluida'
      ],
      popular: false
    },
    {
      name: 'Plus',
      monthlyPrice: '89',
      period: isYearly ? '/año por usuario' : '/mes por usuario',
      description: 'Empresas medianas con equipos múltiples',
      subDescription: function () {
        if (!isYearly) return 'Compra mínima: 200 usuarios';
        return `Compra mínima: 200 usuarios · Ahorra ${formatCurrency(calcYearlySaving(this.monthlyPrice))} / año por usuario`;
      },
      features: [
        'Todo lo de Core',
        'Prioridad en soporte',
        'Integraciones vía API',
        'Webhooks personalizados',
        'Marca corporativa personalizada',
        'Portal personalizado',
        'Respaldos automáticos'
      ],
      popular: true
    },
    {
      name: 'Max',
      monthlyPrice: '79',
      period: isYearly ? '/año por usuario' : '/mes por usuario',
      description: 'Corporativos con estructura regional',
      subDescription: function () {
        if (!isYearly) return 'Compra mínima: 500 usuarios';
        return `Compra mínima: 500 usuarios · Ahorra ${formatCurrency(calcYearlySaving(this.monthlyPrice))} / año por usuario`;
      },
      features: [
        'Todo lo de Plus',
        'Soporte dedicado 24/7',
        'Onboarding personalizado',
        'Cumplimiento LFPDPPP y GDPR',
        'Alta disponibilidad garantizada',
        'Auditoría completa',
        'Consultoría estratégica'
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-background border-b border-border/50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex items-center justify-center flex-col text-center gap-5 mb-16"
        >
          <CustomBadge>Planes</CustomBadge>

          <CustomTitle>Planes escalables y claros</CustomTitle>

          <CustomSubtitle>
            Invierte una vez al año con nuestro plan Anual, ahorra hasta 19% y olvídate de pagos mensuales.
            <br />
            <small className="text-muted-foreground/70">(Todas las opciones incluyen infraestructura, respaldos y soporte)</small>
          </CustomSubtitle>

          {/* Pricing Period Toggle */}
          <div className="flex items-center justify-center">
            <ToggleGroup
              type="single"
              value={billingPeriod}
              onValueChange={(value) => value && setBillingPeriod(value)}
              className="bg-muted/50 rounded-xl gap-1 p-1.5"
            >
              <ToggleGroupItem
                value="monthly"
                className="cursor-pointer flex items-center rounded-lg text-sm font-medium px-6 py-2.5 data-[state=on]:bg-background data-[state=on]:shadow-sm transition-all"
              >
                Mensual
              </ToggleGroupItem>
              <ToggleGroupItem
                value="yearly"
                className="cursor-pointer rounded-lg text-sm font-medium px-6 py-2.5 data-[state=on]:bg-background data-[state=on]:shadow-sm flex items-center gap-2 transition-all"
              >
                Anual
                <Badge variant="outline" className="rounded-md px-1.5 py-0.5 text-[11px] bg-[#F6BE17]/15 border-[#F6BE17]/25 text-[#262F3F] font-semibold">
                  -19%
                </Badge>
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </motion.div>

        {/* Plans Grid - 3 columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={cn(
                'relative',
                plan.popular && 'lg:-mt-4 lg:mb-4'
              )}
            >
              <Card className={cn(
                'h-full relative transition-all duration-300',
                plan.popular
                  ? 'border-[#F6BE17] shadow-xl bg-gradient-to-b from-[#F6BE17]/5 to-transparent'
                  : 'border-border/60 hover:border-[#F6BE17]/50 hover:shadow-md'
              )}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className="bg-[#F6BE17] text-[#262F3F] px-3 py-1 text-xs font-semibold shadow-sm">
                      <Star className="h-3 w-3 mr-1" />
                      Más popular
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center pt-8 pb-4 px-6">
                  <CardTitle className="text-xl font-bold text-foreground">{plan.name}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground mt-1">
                    {plan.description}
                  </CardDescription>

                  {/* Price */}
                  <div className="mt-6 mb-2">
                    <div className="flex items-baseline justify-center gap-1">
                      <AnimatePresence mode="popLayout">
                        <motion.span
                          key={isYearly ? 'yearly' : 'monthly'}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="text-4xl font-bold bg-gradient-to-r from-[#F6BE17] to-[#d9a614] bg-clip-text text-transparent"
                        >
                          {isYearly
                            ? formatCurrency(Number(plan.monthlyPrice) * 12 - calcYearlySaving(plan.monthlyPrice))
                            : formatCurrency(plan.monthlyPrice)
                          }
                        </motion.span>
                      </AnimatePresence>
                      <span className="text-sm text-muted-foreground">{plan.period}</span>
                    </div>
                  </div>

                  <p className="text-xs text-[#F6BE17] font-medium">
                    {plan.subDescription()}
                  </p>
                </CardHeader>

                <CardContent className="px-6 pb-8">
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="h-4 w-4 text-[#F6BE17] mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={cn(
                      'w-full transition-all',
                      plan.popular
                        ? 'bg-[#F6BE17] hover:bg-[#d9a614] text-[#262F3F] font-semibold'
                        : ''
                    )}
                    size="lg"
                    variant={plan.popular ? "default" : "outline"}
                    onClick={() => scrollToSection('contact')}
                  >
                    Hablar con ventas
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Custom Plan - Full width banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <Card className="border-dashed border-2 border-border/60 bg-muted/20 hover:border-[#F6BE17]/40 transition-colors">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-[#F6BE17]/15 flex items-center justify-center">
                      <MessageCircle className="w-5 h-5 text-[#F6BE17]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">A tu medida</h3>
                      <p className="text-sm text-muted-foreground">Configuración específica para tu operación</p>
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-[#F6BE17] flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Selección de módulos según tu operación</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-[#F6BE17] flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Integración con tus sistemas actuales</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-[#F6BE17] flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Estructura de usuarios y permisos a medida</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-[#F6BE17] flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Condiciones comerciales negociables</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-center md:items-end gap-3">
                  <p className="text-sm text-[#F6BE17] font-medium">Hablemos de lo que necesitas</p>
                  <Button
                    size="lg"
                    variant="outline"
                    className="min-w-[200px] border-[#F6BE17]/50 hover:bg-[#F6BE17]/10 hover:border-[#F6BE17]"
                    onClick={() => scrollToSection('contact')}
                  >
                    Solicitar cotización
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
