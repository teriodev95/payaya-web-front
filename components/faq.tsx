
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CustomBadge } from '@/components/custom/badge';
import { CustomTitle } from '@/components/custom/title';
import { CustomSubtitle } from '@/components/custom/subtitle';

import Link from 'next/link'; 

const FAQ = () => {
  const faqs = [
    {
      question: "¿Necesita app store?",
      answer: "No, se instala desde el navegador usando 'Agregar a pantalla de inicio'. Funciona como una app nativa sin descargas de tiendas."
    },
    {
      question: "¿Cómo se activan los exámenes?",
      answer: "Los exámenes se activan automáticamente solo al terminar el curso completo. Son de 15-20 preguntas con evaluación automática."
    },
    {
      question: "¿Quién publica los cursos?",
      answer: "Puede hacerlo tu equipo a través del panel administrativo o nuestro equipo de producción. Ofrecemos ambas opciones según tus necesidades."
    },
    {
      question: "¿Qué soporte incluye?",
      answer: "Asistencia técnica en horario laboral para planes Core y Plus. El plan Max incluye soporte dedicado 24/7 con tiempos de respuesta prioritarios."
    },
    {
      question: "¿Puedo integrar mis sistemas?",
      answer: "Sí, con API y Webhooks puedes conectar sistemas de RRHH, nómina o ERP. Sincroniza altas/bajas, asigna cursos por rol y centraliza reportes."
    },
    {
      question: "¿Puedo cambiar de plan?",
      answer: "Sí, puedes cambiar de plan en cualquier momento. Los ajustes se prorratea automáticamente según tu uso actual."
    },
    {
      question: "¿Qué incluye la producción de cursos?",
      answer: "Diseño instruccional, guion, audio profesional, edición, evaluación y certificado digital. Costo desde $478 MXN por minuto grabado más $4,690 MXN por diseño de examen."
    }
  ];

  return (
    <section className="py-24 bg-background" id="faq">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }} className="flex items-center justify-center flex-col text-center gap-5 mb-25">
          <CustomBadge>
            Preguntas frecuentes
          </CustomBadge>

          <CustomTitle>
            Resuelve tus dudas
          </CustomTitle>

          <CustomSubtitle>
            ¿Tienes preguntas? Aquí están las respuestas más comunes sobre el LMS Payaya.
          </CustomSubtitle>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem 
                  value={`item-${index}`} 
                  className="bg-background rounded-lg border! border-border px-6 hover:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-start font-semibold text-foreground hover:text-[#F6BE17] data-[state=open]:text-[#F6BE17] transition-colors cursor-pointer">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center items-center gap-1.5 text-center mt-12"
        >
          <span className="text-muted-foreground">
            ¿Aún tienes dudas?
          </span>

          <Link href="#contact" className="text-[#F6BE17] hover:text-[#d9a614] transition-colors hover:underline">
            Contacta a nuestro equipo
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
