
import { motion } from 'framer-motion';
import Image from 'next/image';

const Logo = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex items-center gap-2 leading-0"
    >
      {/* Logo completo para desktop */}
      <Image
        src="/logo_full.svg"
        alt="Payaya Logo"
        width={140}
        height={32}
        className="hidden md:block h-8 w-auto"
        priority
      />

      {/* Logo icono para mobile */}
      <Image
        src="/logo_icon.svg"
        alt="Payaya"
        width={32}
        height={28}
        className="md:hidden h-7 w-auto"
        priority
      />
    </motion.div>
  );
};

export default Logo;

