
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Check, Star } from 'lucide-react';
import { useState } from 'react';
import { CustomTitle } from './custom/title';
import { CustomSubtitle } from './custom/subtitle';
import { CustomBadge } from './custom/badge';
import { cn, scrollToSection } from '@/lib/utils';

const Pricing = () => {
  const [billingPeriod, setBillingPeriod] = useState('monthly');
  const isYearly = billingPeriod === 'yearly';

  const plans = [
    {
      name: 'Core',
      monthlyPrice: '$98',
      yearlyPrice: '$1,176',
      period: isYearly ? '/año por usuario' : '/mes por usuario',
      description: 'PYMES que inician su capacitación digital',
      subDescription: isYearly ? 'Compra mínima: 450 usuarios · Ahorra $132/usuario al año' : null,
      features: [
        '450 usuarios incluidos',
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
      monthlyPrice: '$89',
      yearlyPrice: '$1,068',
      period: isYearly ? '/año por usuario' : '/mes por usuario',
      description: 'Empresas medianas con equipos múltiples',
      subDescription: isYearly ? 'Compra mínima: 1,200 usuarios · Ahorra $108/usuario al año' : null,
      features: [
        '1,200 usuarios incluidos',
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
      monthlyPrice: '$79',
      yearlyPrice: '$948',
      period: isYearly ? '/año por usuario' : '/mes por usuario',
      description: 'Corporativos con estructura regional',
      subDescription: isYearly ? 'Compra mínima: 3,000 usuarios · Ahorra $228/usuario al año' : null,
      features: [
        '3,000 usuarios incluidos',
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
          viewport={{ once: true }} className="flex items-center justify-center flex-col text-center gap-5">
          <CustomBadge>
            Planes
          </CustomBadge>

          <CustomTitle>
            Planes escalables y claros
          </CustomTitle>

          <CustomSubtitle className="mb-10">
            Invierte una vez al año y olvídate de pagos mensuales. Pago por usuario activo con mínimos por plan.
            <br />
            Todas las opciones incluyen infraestructura, respaldos y soporte. Ahorra hasta 19% con pago anual.
          </CustomSubtitle>

          {/* Pricing Period Toggle */}
          <div className="flex items-center justify-center mb-18">
            <ToggleGroup
              type="single"
              value={billingPeriod}
              onValueChange={(value) => value && setBillingPeriod(value)}
              className="bg-accent rounded-xl gap-1 p-1.5"
            >
              <ToggleGroupItem
                value="monthly"
                className="cursor-pointer flex items-center rounded-lg text-sm font-medium px-6 py-2 data-[state=on]:bg-background data-[state=on]:shadow-sm"
              >
                Mensual
              </ToggleGroupItem>
              <ToggleGroupItem
                value="yearly"
                className="cursor-pointer flex items-center rounded-lg text-sm font-medium px-6 py-2 data-[state=on]:bg-background data-[state=on]:shadow-sm flex items-center gap-2"
              >
                Anual
                <Badge variant="outline" className="leading-0 rounded-sm px-1 py-0.5 text-[11px] bg-[#F6BE17]/20 border-[#F6BE17]/30 text-[#262F3F] dark:text-[#F6BE17] dark:bg-[#F6BE17]/20 dark:border-[#F6BE17]/30 font-semibold">
                  Ahorra
                </Badge>
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={cn(
                'h-full relative transition-all duration-300 group',
                plan.popular ? 'border-[#F6BE17] shadow-2xl scale-105' : 'border-border hover:border-[#F6BE17]'
                )}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-[#F6BE17] to-[#d9a614] text-[#262F3F] px-2.5 py-1">
                      <Star className="h-3 w-3 me-0.5" />
                      Más popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center py-6">
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <CardDescription className="text-muted-foreground mb-2">
                    {plan.description}
                  </CardDescription>
                  {plan.subDescription && (
                    <CardDescription className="text-xs text-[#F6BE17] font-medium mb-3">
                      {plan.subDescription}
                    </CardDescription>
                  )}
                  <div className="flex items-end justify-center">
                    <div className="relative h-16 flex items-end">
                      <AnimatePresence mode="popLayout">
                        <motion.span
                          key={isYearly ? 'yearly' : 'monthly'}
                          initial={{ opacity: 0, y: 20, scale: 0.8 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -20, scale: 0.8 }}
                          transition={{
                            duration: 0.2,
                            ease: "easeInOut"
                          }}
                          className="text-5xl font-bold bg-gradient-to-r from-[#F6BE17] to-[#d9a614] bg-clip-text text-transparent relative"
                        >
                          {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                        </motion.span>
                      </AnimatePresence>
                    </div>
                    <span className="text-muted-foreground ms-1 mb-1">{plan.period}</span>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <motion.div
                    whileHover={{ scale: 1.025 }}
                    whileTap={{ scale: 0.98 }}
                    className="pt-6"
                  >
                    <Button
                      className="w-full cursor-pointer"
                      size="lg"
                      variant={plan.popular ? "default" : "outline"}
                      onClick={() => scrollToSection('contact')}
                    >
                      Hablar con ventas
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
