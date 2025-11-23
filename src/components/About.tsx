import CardSwap, { Card } from "@/ui/CardSwap";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row text-2xl md:text-4xl justify-between items-center mt-10 py-20 min-h-[500px] gap-15">
      {/* 🔥 Left Text Section */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-xl"
      >
        <h2
          className="text-4xl md:text-5xl font-extrabold mb-6 
          bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
        >
          🚀 About My Work
        </h2>

        <p className="text-lg text-white/80 leading-relaxed mb-4">
          I craft immersive digital experiences powered by
          <span className="text-cyan-300"> Web3</span>,
          <span className="text-blue-300"> AI</span>, and
          <span className="text-pink-400"> modern UI engineering</span>.
        </p>

        <p className="text-lg text-white/80 leading-relaxed mb-4">
          My projects blend performance, futuristic design, and cutting-edge
          technology — delivering fast, secure and intelligent applications.
        </p>

        <p className="text-lg text-white/80 leading-relaxed">
          Whether it's blockchain-powered health systems, ML dashboards, or
          AI-enhanced cloud tools — I build with precision and passion ⚡
        </p>
      </motion.div>

      {/* 🔮 Right: CardSwap Section */}
      <div>
        <CardSwap
          cardDistance={70}
          verticalDistance={80}
          delay={5000}
          pauseOnHover={true}
        >
          {/* 🚀 Project 1 */}
          <Card>
            <div
              className="h-full w-full p-8 rounded-3xl 
        bg-linear-to-br from-pink-600/20 to-purple-600/10 
        backdrop-blur-xl border border-pink-400/30 
        shadow-[0_0_25px_#ff2ce5] flex flex-col justify-center gap-4"
            >
              <h3
                className="text-3xl font-extrabold 
          bg-linear-to-r from-pink-300 to-purple-300 
          bg-clip-text text-transparent"
              >
                Student Dropout Prediction
              </h3>

              <p className="text-white/70 text-base leading-relaxed">
                ML dashboard powered by React, Node, MongoDB & Python.
              </p>
            </div>
          </Card>

          {/* 🌐 Project 2 */}
          <Card>
            <div
              className="h-full w-full p-8 rounded-3xl 
        bg-linear-to-br from-yellow-500/20 to-orange-600/10 
        backdrop-blur-xl border border-yellow-300/30 
        shadow-[0_0_25px_#ffbd2c] flex flex-col justify-center gap-4"
            >
              <h3
                className="text-3xl font-extrabold 
          bg-linear-to-r from-yellow-300 to-orange-300 
          bg-clip-text text-transparent"
              >
                Web3 Hospital Management
              </h3>

              <p className="text-white/70 text-base leading-relaxed">
                Blockchain hospital system using Ethereum wallets.
              </p>
            </div>
          </Card>

          {/* 💻 Project 3 */}
          <Card>
            <div
              className="h-full w-full p-8 rounded-3xl 
        bg-linear-to-br from-blue-600/20 to-cyan-600/10 
        backdrop-blur-xl border border-blue-300/30 
        shadow-[0_0_25px_#2cd3ff] flex flex-col justify-center gap-4"
            >
              <h3
                className="text-3xl font-extrabold 
          bg-linear-to-r from-blue-300 to-cyan-300 
          bg-clip-text text-transparent"
              >
                AI Notes App
              </h3>

              <p className="text-white/70 text-base leading-relaxed">
                AI-powered notes with Firebase + HuggingFace.
              </p>
            </div>
          </Card>
        </CardSwap>
      </div>
    </div>
  );
};

export default About;
