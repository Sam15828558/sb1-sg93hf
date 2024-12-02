import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Users, Trophy, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { HeroSection } from '@/components/sections/HeroSection';
import { SpeakersSection } from '@/components/sections/SpeakersSection';
import { ScheduleSection } from '@/components/sections/ScheduleSection';
import { PricingSection } from '@/components/sections/PricingSection';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';

function App() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <Navbar />
      
      <HeroSection />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 py-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl backdrop-blur-sm">
            <Calendar className="w-12 h-12 mx-auto mb-4 text-purple-400" />
            <h3 className="text-xl font-bold mb-2">3 Jours Intenses</h3>
            <p className="text-gray-300">De conférences et d'ateliers pratiques</p>
          </div>
          <div className="p-6 bg-gradient-to-br from-blue-900/30 to-cyan-900/30 rounded-xl backdrop-blur-sm">
            <Users className="w-12 h-12 mx-auto mb-4 text-blue-400" />
            <h3 className="text-xl font-bold mb-2">20+ Experts SEO</h3>
            <p className="text-gray-300">Partagent leurs meilleures stratégies</p>
          </div>
          <div className="p-6 bg-gradient-to-br from-pink-900/30 to-red-900/30 rounded-xl backdrop-blur-sm">
            <Trophy className="w-12 h-12 mx-auto mb-4 text-pink-400" />
            <h3 className="text-xl font-bold mb-2">100% Actionnable</h3>
            <p className="text-gray-300">Des techniques testées et approuvées</p>
          </div>
        </div>
      </motion.div>

      <SpeakersSection />
      <ScheduleSection />
      <PricingSection />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-24 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
          Prêt à révolutionner votre SEO ?
        </h2>
        <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
          Je réserve ma place <ArrowRight className="ml-2" />
        </Button>
      </motion.div>

      <Footer />
    </div>
  );
}

export default App;