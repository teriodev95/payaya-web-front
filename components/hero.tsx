import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Gift } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { Star } from '@/components/custom/star';
import Image from 'next/image';

const Hero = () => {

  const people = [
    {
      id: 1,
      name: "Juan Pérez",
      designation: "Gerente de Capacitación",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      name: "María González",
      designation: "Directora de RRHH",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      name: "Ana Rodríguez",
      designation: "Coordinadora de Formación",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      name: "Carlos Martínez",
      designation: "Jefe de Operaciones",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 5,
      name: "Laura Sánchez",
      designation: "Gerente Regional",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 6,
      name: "Roberto López",
      designation: "Director Comercial",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 7,
      name: "Patricia Jiménez",
      designation: "Gerente de Desarrollo",
      image:
        "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 8,
      name: "Fernando Torres",
      designation: "Coordinador de Área",
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    },
  ];

  // Mouse parallax state
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = (e.target as HTMLDivElement).getBoundingClientRect();
    setMouse({
      x: (e.clientX - rect.left - rect.width / 2) / rect.width,
      y: (e.clientY - rect.top - rect.height / 2) / rect.height,
    });
  };
  const handleMouseLeave = () => setMouse({ x: 0, y: 0 });

  return (
    <section
      className="relative lg:min-h-screen bg-gradient-to-br from-gray-50 via-[#F6BE17]/5 to-gray-50 pt-25 pb-20 lg:pt-40 lg:pb-20 overflow-hidden group"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Animated gradient background */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none">
        {/* Light Orb 1 */}
        <motion.div
          className="absolute left-[10%] top-[15%] w-[320px] h-[320px] rounded-full bg-[#F6BE17]/20 opacity-90 blur-[60px]"
          animate={{
            scale: [1, 1.13, 1],
            opacity: [0.85, 1, 0.85],
            x: mouse.x * 70 + 0,
            y: mouse.y * 40 + 0,
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        {/* Core hotspot for orb 1 */}
        <motion.div
          className="absolute left-[18%] top-[23%] w-[90px] h-[90px] rounded-full bg-[#F6BE17]/30 opacity-95 blur-[10px]"
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.92, 1, 0.92],
            x: mouse.x * 90 + 0,
            y: mouse.y * 60 + 0,
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        {/* Light Orb 2 */}
        <motion.div
          className="absolute right-[12%] top-[30%] w-[220px] h-[220px] rounded-full bg-[#F6BE17]/25 opacity-80 blur-[40px]"
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.75, 0.95, 0.75],
            x: mouse.x * -60 + 0,
            y: mouse.y * 30 + 0,
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        {/* Light Orb 3 */}
        <motion.div
          className="absolute left-[35%] bottom-[18%] w-[180px] h-[180px] rounded-full bg-[#E5E4E4] opacity-80 blur-[30px]"
          animate={{
            scale: [1, 1.16, 1],
            opacity: [0.7, 0.9, 0.7],
            x: mouse.x * 40 + 0,
            y: mouse.y * -60 + 0,
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        {/* Light Orb 4 */}
        <motion.div
          className="absolute right-[22%] bottom-[8%] w-[150px] h-[150px] rounded-full bg-[#F6BE17]/20 opacity-90 blur-[20px]"
          animate={{
            scale: [1, 1.11, 1],
            opacity: [0.8, 1, 0.8],
            x: mouse.x * -30 + 0,
            y: mouse.y * -40 + 0,
          }}
          transition={{
            duration: 13,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#F6BE17]/10 via-[#F6BE17]/10 to-[#F6BE17]/10"
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-tl from-[#F6BE17]/10 via-[#F6BE17]/10 to-[#F6BE17]/10"
          animate={{
            opacity: [0.2, 0.5, 0.2],
            x: [0, 20, 0],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Parallax moving elements on hover */}
      <motion.div
        className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-[#F6BE17]/20 to-[#F6BE17]/30 rounded-full blur-xl"
        whileHover={{ x: 30, y: -20, scale: 1.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />
      <motion.div
        className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-[#F6BE17]/20 to-[#F6BE17]/30 rounded-full blur-xl"
        whileHover={{ x: -25, y: 15, scale: 1.1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
      <motion.div
        className="absolute bottom-40 left-20 w-20 h-20 bg-gradient-to-br from-[#F6BE17]/20 to-[#F6BE17]/30 rounded-full blur-xl"
        whileHover={{ x: 20, y: -30, scale: 1.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      />

      <div className="absolute inset-0 opacity-40" style={{
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e5e7eb' fill-opacity='0.3'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
      }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-black text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 lg:mb-8 leading-[1.2] px-4 bg-gradient-to-r from-[#262F3F] via-[#3a4456] to-[#262F3F] bg-clip-text text-transparent"
          >
            Convierte el conocimiento de tu empresa en cursos fáciles de aprender
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base md:text-xl text-muted-foreground mb-6 md:mb-10 max-w-[800px] mx-auto leading-relaxed"
          >
            Graba tus propios cursos, capacita a tu equipo y mide resultados.
            Payaya convierte tus procesos internos en lecciones interactivas con exámenes y certificados automáticos.
            <strong className="text-[#F6BE17]"> Desde $98 MXN por usuario activo/mes</strong>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10 px-4"
          >
            <Button size="lg" className="cursor-pointer hover:[&_svg]:translate-x-1 w-full sm:w-auto">
              Agendar demostración
              <ArrowRight className="h-5 w-5 transition-transform" />
            </Button>

            <Button size="lg" variant="outline" className="cursor-pointer hover:[&_svg]:-translate-y-1 w-full sm:w-auto" asChild>
              <Link href="#pricing">
                <Gift className="h-5 w-5 transition-transform opacity-60" />
                Ver precios
              </Link>
            </Button>
          </motion.div>

          {/* Loved by thousands badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-2.5 mb-10"
          >
            <div className="flex gap-2.5">
              <div className="flex -space-x-2 me-2.5">
                <AnimatedTooltip items={people} />
              </div>     
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className="h-5 w-5 transition-transform opacity-60 text-yellow-500" />
                ))}
              </div>
            </div>   
            <div className="text-center text-muted-foreground text-sm font-medium">Empresas en México ya capacitan con Payaya</div>
          </motion.div>

          {/* Hero Illustration */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="relative max-w-2xl mx-auto"
          >
            <Image
              src="/Facetime-Meeting-2--Streamline-Brooklyn.svg"
              alt="Video meeting illustration"
              width={600}
              height={600}
              className="w-full h-auto"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
