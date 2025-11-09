
import { motion } from 'framer-motion';
import { Mail, MessageCircle, Facebook } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import Logo from '@/components/logo';

const Footer = () => {
  const links = {
    product: [
      { label: 'Características', href: '#features' },
      { label: 'Cómo funciona', href: '#how-it-works' },
      { label: 'Precios', href: '#pricing' },
      { label: 'Calculadora', href: '#budget-calculator' }
    ],
    info: [
      { label: 'Preguntas frecuentes', href: '#faq' },
      { label: 'Contacto', href: '#contact' }
    ]
  };

  const socialLinks = [
    { icon: Mail, href: 'mailto:adrian@payaya.cc', label: 'Email' },
    {
      icon: MessageCircle,
      href: 'https://api.whatsapp.com/send?phone=524432391799&text=Hola%20me%20interesa%20agendar%20una%20reuni%C3%B3n%20para%20charlar%20sobre%20su%20plataforma%20Payaya',
      label: 'WhatsApp',
      color: 'hover:text-[#25D366] hover:border-[#25D366]'
    },
    {
      icon: Facebook,
      href: 'https://www.facebook.com/profile.php?id=61583637895869',
      label: 'Facebook',
      color: 'hover:text-[#1877F2] hover:border-[#1877F2]'
    }
  ];

  return (
    <footer className="bg-background relative overflow-hidden">
      <div className="container px-6 mx-auto pt-14 pb-6 border-b border-border/50">
        <div className="flex flex-col lg:flex-row justify-between items-start">
          {/* Logo and description - Left side */}
          <div className="lg:w-1/3 mb-12 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-3">
                <Logo />
              </div>
              <p className="text-muted-foreground mb-6 max-w-sm">
                Capacitación corporativa móvil. Certifica a tu equipo desde cualquier lugar con Payaya.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`size-9 border border-border/60 text-muted-foreground rounded-md flex items-center justify-center transition-colors ${social.color || 'hover:text-foreground'}`}
                    aria-label={social.label}
                  >
                    <social.icon className="size-4" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* 2 Column Menu - Right aligned */}
          <div className="w-full grow lg:w-auto lg:grow-0 lg:w-2/3 flex justify-end">
            <div className="w-full lg:w-auto flex justify-between flex-wrap lg:grid lg:grid-cols-2 gap-8 lg:gap-16">
              {Object.entries(links).map(([category, items], categoryIndex) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="font-medium text-base mb-4 capitalize text-muted-foreground/80">
                    {category === 'product' ? 'Producto' : 'Información'}
                  </h3>
                  <ul className="text-base space-y-2">
                    {items.map((item, index) => (
                      <li key={index}>
                        <a
                          href={item.href}
                          className="text-accent-foreground hover:text-[#F6BE17] transition-colors hover:underline"
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        
        <Separator className="my-6 bg-border/50" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2025 Payaya. Todos los derechos reservados.
          </p>
          <p className="text-muted-foreground text-sm mt-4 md:mt-0">
            Hecho en México con 💛
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
