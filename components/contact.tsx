
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Mail, MapPin, MessageCircle, Send } from 'lucide-react';
import { toast } from "sonner";
import { CustomBadge } from '@/components/custom/badge';
import { CustomSubtitle } from '@/components/custom/subtitle';
import { CustomTitle } from '@/components/custom/title';
import Link from 'next/link';

const formSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Por favor ingresa un email válido'),
  phone: z.string().optional(),
  company: z.string().optional(),
  subject: z.string().min(5, 'El asunto debe tener al menos 5 caracteres'),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
});

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      company: '',
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
        email: values.email,
        telefono: values.phone || '',
        empresa: values.company || '',
        mensaje: `${values.subject}\n\n${values.message}`,
        presupuesto: '' // Optional field, can be added later if needed
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

      toast.success("¡Mensaje enviado! Gracias por contactarnos. Te responderemos en menos de 24 horas.");
      form.reset();
    } catch (error) {
      console.error('Error:', error);
      toast.error("Hubo un error al enviar el mensaje. Por favor intenta de nuevo o contáctanos por WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'contacto@payaya.mx',
      href: 'mailto:contacto@payaya.mx'
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
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="Escribe tu correo de contacto" type="email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Teléfono <span className="text-muted-foreground text-xs">(opcional)</span></FormLabel>
                            <FormControl>
                              <Input placeholder="+52 55 1234 5678" type="tel" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Empresa <span className="text-muted-foreground text-xs">(opcional)</span></FormLabel>
                            <FormControl>
                              <Input placeholder="Nombre de tu empresa" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Asunto</FormLabel>
                          <FormControl>
                            <Input placeholder="Por ejemplo: Quiero una demo / Tengo dudas sobre precios" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Mensaje</FormLabel>
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
                          Agendar mi demo
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
    </section>
  );
};

export default Contact;
