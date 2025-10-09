/* eslint-disable @next/next/no-img-element */
import { motion } from 'framer-motion';
import Marquee from '@/components/ui/marquee';

const TrustedBrands = () => {
  const techGiants = [
    { 
      name: 'Google', 
      logo: 'google.svg'
    },
    { 
      name: 'Apple', 
      logo: 'apple.svg'
    },
    { 
      name: 'SpaceX',
      logo: 'spacex.svg'
    },
    { 
      name: 'OpenAI',
      logo: 'openai.svg'
    },
    { 
      name: 'Microsoft',
      logo: 'microsoft.svg'
    },  
    { 
      name: 'Amazon',
      logo: 'amazon.svg'
    },
    { 
      name: 'Youtube',
      logo: 'youtube.svg'
    },
    { 
      name: 'Tesla',
      logo: 'tesla.svg'
    },
    { 
      name: 'Spotify',
      logo: 'spotify.svg'
    },
    { 
      name: 'Uber',
      logo: 'uber.svg'
    }
  ];

  return (
    <section className="pt-10 md:pt-15 pb-15 bg-background overflow-hidden border-b border-border/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-xs font-semibold text-muted-foreground tracking-wider mb-6 uppercase">
            Empresas que confían en nosotros
          </p>
        </motion.div>

        {/* Marquee Container with fade shadows */}
        <div className="relative">
          {/* Left fade shadow */}
          <div className="absolute start-0 top-0 w-20 h-full bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />

          {/* Right fade shadow */}
          <div className="absolute end-0 top-0 w-20 h-full bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          {/* Marquee */}
          <Marquee  pauseOnHover>
            {techGiants.map((company, index) => (
              <div
                key={`${company.name}-${index}`}
                className="flex items-center gap-3 mx-8 whitespace-nowrap flex-shrink-0 opacity-50 transition-all duration-300"
              >
                <img src={`/brands/${company.logo}`} alt={company.name} className="block dark:hidden max-h-10"/>
                <img src={`/brands/inverse/${company.logo}`} alt={company.name} className="hidden dark:block max-h-10"/>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default TrustedBrands;
