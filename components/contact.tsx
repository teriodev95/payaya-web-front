
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Mail, MapPin, MessageCircle, Send, Facebook, CheckCircle2, Clock, Zap } from 'lucide-react';
import { toast } from "sonner";
import { CustomBadge } from '@/components/custom/badge';
import { CustomSubtitle } from '@/components/custom/subtitle';
import { CustomTitle } from '@/components/custom/title';
import Link from 'next/link';

const formSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  phone: z.string().min(10, 'El teléfono debe tener al menos 10 caracteres'),
  website: z.string().url('Por favor ingresa una URL válida').or(z.string().length(0)),
  subject: z.string().min(1, 'Por favor selecciona un asunto'),
  message: z.string().optional(),
});

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [submittedName, setSubmittedName] = useState('');

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      phone: '',
      website: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);

    try {
      // Map form values to API format
      const payload = {
        nombre: values.name,
        email: 'adrian@payaya.cc',
        telefono: values.phone,
        empresa: values.website || '',
        mensaje: `Asunto: ${values.subject}\n\n${values.message || 'Sin mensaje adicional'}`,
        presupuesto: ''
      };

      const response = await fetch('https://forms-cloudflare-recibirdata.clvrt.workers.dev/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Error al enviar el mensaje');
      }

      // Store name and show success modal
      setSubmittedName(values.name.split(' ')[0]); // First name only
      setShowSuccessModal(true);
      form.reset();
    } catch (error) {
      console.error('Error:', error);
      toast.error("Hubo un error al enviar el mensaje. Por favor intenta de nuevo o contáctanos por WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const subjectOptions = [
    'Quiero una demo',
    'Tengo dudas sobre precios',
    'Necesito cotizar un curso',
    'Quiero información sobre la plataforma',
    'Otro asunto'
  ];

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'adrian@payaya.cc',
      href: 'mailto:adrian@payaya.cc'
    },
    {
      icon: MapPin,
      title: 'Ubicación',
      content: 'Ciudad de México, México',
    },
  ];

  return (
    <section id="contact" className="py-24 bg-muted/30 border-b border-border/50">
      <div className="container mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex items-center justify-center flex-col text-center gap-5 mb-16"
        >
          <CustomBadge>
            Contacto
          </CustomBadge>

          <CustomTitle>
            Agenda tu demo personalizada
          </CustomTitle>

          <CustomSubtitle>
            ¿Listo para descubrir cómo Payaya puede ayudarte a capacitar y evaluar a tu equipo?<br />
            Cuéntanos qué necesitas y te responderemos en menos de 24 horas.
          </CustomSubtitle>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Comencemos una conversación
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Ya sea que busques optimizar la capacitación, profesionalizar los procesos de tu organización o crear cursos desde cero, nuestro equipo está listo para ayudarte.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Te guiaremos paso a paso para que puedas lanzar tu propia academia interna en Payaya.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="border-border hover:border-[#F6BE17]/50 transition-colors">
                    <CardContent className="p-4 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-[#F6BE17]/10 flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-5 h-5 text-[#262F3F]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">
                          {info.title}
                        </h4>
                        {info.href ? (
                          <Link
                            href={info.href}
                            className="text-muted-foreground hover:text-[#F6BE17] transition-colors"
                          >
                            {info.content}
                          </Link>
                        ) : (
                          <p className="text-muted-foreground">
                            {info.content}
                          </p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}

              {/* WhatsApp Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Link
                  href="https://api.whatsapp.com/send?phone=524432391799&text=Hola%20me%20interesa%20agendar%20una%20reuni%C3%B3n%20para%20charlar%20sobre%20su%20plataforma%20Payaya"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Card className="border-2 border-[#25D366]/20 hover:border-[#25D366] transition-all hover:shadow-md cursor-pointer group bg-gradient-to-br from-background to-[#25D366]/5">
                    <CardContent className="p-4 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-[#25D366]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#25D366]/20 transition-colors">
                        <MessageCircle className="w-5 h-5 text-[#25D366]" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1 group-hover:text-[#25D366] transition-colors">
                          WhatsApp
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Chatea con nosotros ahora
                        </p>
                      </div>
                      <div className="text-[#25D366] group-hover:translate-x-1 transition-transform">
                        →
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>

              {/* Facebook Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Link
                  href="https://www.facebook.com/profile.php?id=61583637895869"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Card className="border-2 border-[#1877F2]/20 hover:border-[#1877F2] transition-all hover:shadow-md cursor-pointer group bg-gradient-to-br from-background to-[#1877F2]/5">
                    <CardContent className="p-4 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-[#1877F2]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#1877F2]/20 transition-colors">
                        <Facebook className="w-5 h-5 text-[#1877F2]" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1 group-hover:text-[#1877F2] transition-colors">
                          Facebook
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Síguenos en Facebook
                        </p>
                      </div>
                      <div className="text-[#1877F2] group-hover:translate-x-1 transition-transform">
                        →
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="border-2 border-border hover:border-[#F6BE17]/30 transition-colors">
              <CardContent className="p-6 md:p-8">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nombre</FormLabel>
                          <FormControl>
                            <Input placeholder="Tu nombre completo" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Teléfono</FormLabel>
                          <FormControl>
                            <Input placeholder="+52 55 1234 5678" type="tel" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="website"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Página web <span className="text-muted-foreground text-xs">(opcional)</span></FormLabel>
                          <FormControl>
                            <Input placeholder="https://tu-empresa.com" type="url" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Asunto</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Selecciona un asunto" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {subjectOptions.map((option) => (
                                <SelectItem key={option} value={option}>
                                  {option}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Mensaje <span className="text-muted-foreground text-xs">(opcional)</span></FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Cuéntanos más sobre tu proyecto o qué te gustaría lograr con Payaya"
                              className="min-h-[140px] resize-none"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      size="lg"
                      type="submit"
                      className="w-full bg-[#262F3F] hover:bg-[#262F3F]/90 text-white"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        'Enviando...'
                      ) : (
                        <>
                          Enviar
                          <Send className="w-4 h-4 ml-2" />
                        </>
                      )}
                    </Button>

                    {/* Microcopy */}
                    <p className="text-sm text-center text-muted-foreground leading-relaxed pt-2">
                      Nuestro equipo te contactará por correo para agendar una breve llamada o demo según tus horarios.
                    </p>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Success Modal */}
      <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader className="text-center sm:text-center">
            <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-[#25D366]/10 flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10 text-[#25D366]" />
            </div>
            <DialogTitle className="text-2xl font-bold text-center">
              ¡Listo, {submittedName}! Tu mensaje fue recibido
            </DialogTitle>
            <DialogDescription className="text-base text-center pt-4">
              Nuestro equipo ya tiene tu información y te contactará en las próximas 24 horas.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-3 pt-2">
            <div className="flex items-start gap-3 text-left">
              <div className="w-10 h-10 rounded-lg bg-[#F6BE17]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Clock className="w-5 h-5 text-[#262F3F]" />
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">Respuesta rápida garantizada</p>
                <p className="text-sm text-muted-foreground">Te contactaremos por correo o teléfono en menos de 24 horas para coordinar tu demo.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 text-left">
              <div className="w-10 h-10 rounded-lg bg-[#F6BE17]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Zap className="w-5 h-5 text-[#262F3F]" />
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">¿Necesitas ayuda urgente?</p>
                <p className="text-sm text-muted-foreground">Escríbenos por WhatsApp y te atenderemos al instante.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-4">
            <Button
              size="lg"
              className="w-full bg-[#262F3F] hover:bg-[#262F3F]/90 text-white"
              onClick={() => setShowSuccessModal(false)}
            >
              Entendido
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full border-[#25D366] text-[#25D366] hover:bg-[#25D366]/10"
              asChild
            >
              <Link
                href="https://api.whatsapp.com/send?phone=524432391799&text=Hola%20me%20interesa%20agendar%20una%20reuni%C3%B3n%20para%20charlar%20sobre%20su%20plataforma%20Payaya"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setShowSuccessModal(false)}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Ir a WhatsApp
              </Link>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Contact;
