
import { motion } from 'framer-motion';
import Marquee from "@/components/ui/marquee";
import { CustomBadge } from '@/components/custom/badge';
import { CustomTitle } from '@/components/custom/title';
import { CustomSubtitle } from '@/components/custom/subtitle';
import Image from 'next/image';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'María González',
      role: 'Directora de RRHH, Grupo Comercial',
      content: 'Subimos la finalización de cursos en campo un +42% en 60 días.',
      avatar: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Carlos Ramírez',
      role: 'Gerente de Capacitación, RetailMX',
      content: 'Cero instalación: nuestra gente solo abrió el link y listo.',
      avatar: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Ana Martínez',
      role: 'Coordinadora de Formación, LogisTech',
      content: 'Auditoría más fácil gracias a certificados y trazabilidad.',
      avatar: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Roberto López',
      role: 'Director de Operaciones, FoodChain',
      content: 'Excelente para equipos distribuidos. Capacitación en cualquier lugar.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Patricia Jiménez',
      role: 'Jefa de Talento, BancaMX',
      content: 'Los reportes nos dan visibilidad real del desempeño por área.',
      avatar: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Fernando Torres',
      role: 'Gerente Regional, AutoParts',
      content: 'Implementación rápida y soporte excepcional. Muy recomendable.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Laura Sánchez',
      role: 'Coordinadora de Formación, HotelGroup',
      content: 'La experiencia móvil es perfecta. Nuestro equipo lo adora.',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Miguel Ángel Rojas',
      role: 'Director de Desarrollo, IndustriasMX',
      content: 'Redujimos costos de capacitación un 35% manteniendo calidad.',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Gabriela Mendoza',
      role: 'Gerente de Calidad, FarmaCorp',
      content: 'El sistema de certificación nos ayuda con la normativa.',
      avatar: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Javier Hernández',
      role: 'Director Comercial, TechSolutions',
      content: 'Capacitación efectiva sin interrumpir operaciones. Excelente ROI.',
      avatar: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=100&h=100&fit=crop&crop=face'
    }
  ];

  const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
    <div className="flex-shrink-0 w-[350px] bg-gradient-to-br from-[#F6BE17]/5 to-[#F6BE17]/10 dark:from-[#F6BE17]/10 dark:to-[#F6BE17]/15 rounded-xl p-6 border border-border/50 shadow-sm mx-1.5">
      <p className="text-muted-foreground mb-4 font-medium">{testimonial.content}</p>
      <div className="flex items-center gap-3">
        {/* Avatar Image - COMENTADO TEMPORALMENTE - Agregar avatares después */}
        {/* <Image
          src={testimonial.avatar}
          alt={testimonial.name}
          width={40}
          height={40}
          className="rounded-full object-cover"
        /> */}

        {/* Placeholder temporal para avatar */}
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#F6BE17]/30 to-[#F6BE17]/50 flex items-center justify-center">
          <span className="text-[#262F3F] font-semibold text-sm">
            {testimonial.name.charAt(0)}
          </span>
        </div>

        <div>
          <div className="font-semibold text-foreground">{testimonial.name}</div>
          <div className="text-sm text-muted-foreground">{testimonial.role}</div>
        </div>
      </div>
    </div>
  );

  const firstColumn = testimonials.slice(0, 5);
  const secondColumn = testimonials.slice(5, 10);

  return (
    <section className="py-24 bg-background overflow-hidden border-b border-border/50">
      <div className="container mx-auto px-6 lg:px-12 mb-16">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }} className="flex items-center justify-center flex-col text-center gap-5 mb-16">
          <CustomBadge>
            Testimonios
          </CustomBadge>

          <CustomTitle>
            Empresas que confían en nosotros
          </CustomTitle>

          <CustomSubtitle>
            Descubre por qué empresas mexicanas eligen Payaya para capacitar
            a sus equipos y obtener resultados medibles.
          </CustomSubtitle>
        </motion.div>
      </div>

      <div className="w-full mx-auto px-6">
        <motion.div 
          className="relative flex w-full flex-col items-center justify-center overflow-hidden gap-1.5 mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
         >
          <Marquee pauseOnHover className="[--duration:40s] grow">
            {firstColumn.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:40s] grow">
            {secondColumn.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 start-0 w-1/12 bg-gradient-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 end-0 w-1/12 bg-gradient-to-l from-background"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
