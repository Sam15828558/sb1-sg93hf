import { motion } from 'framer-motion';

const speakers = [
  {
    name: "Marie Laurent",
    role: "SEO Lead @ Google",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    topics: ["Core Web Vitals", "SEO Technique"]
  },
  {
    name: "Thomas Dubois",
    role: "Consultant SEO Senior",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    topics: ["E-commerce", "International SEO"]
  },
  {
    name: "Sophie Martin",
    role: "Experte Content Marketing",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    topics: ["Content Strategy", "SEO Éditorial"]
  },
  {
    name: "Lucas Bernard",
    role: "Technical SEO Expert",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    topics: ["JavaScript SEO", "Core Web Vitals"]
  }
];

export function SpeakersSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
            Nos Experts
          </h2>
          <p className="text-xl text-gray-400">
            Rencontrez les meilleurs experts SEO de France
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {speakers.map((speaker, index) => (
            <motion.div
              key={speaker.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-xl aspect-square">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  style={{ filter: 'brightness(0.9) contrast(1.1) saturate(1.2)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="space-y-2">
                    {speaker.topics.map((topic) => (
                      <span key={topic} className="inline-block px-3 py-1 mr-2 text-sm bg-white/10 rounded-full backdrop-blur-sm">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-xl font-bold text-white">{speaker.name}</h3>
                <p className="text-gray-400">{speaker.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}