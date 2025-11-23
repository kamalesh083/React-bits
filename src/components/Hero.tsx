import { motion } from "framer-motion";
import ElectricBorder from "./ElectricBorder";
import ProfileCard from "./ProfileCard";
import TextType from "@/ui/TextType";
import TargetCursor from "@/ui/TargetCursor";

const Hero = () => {
  return (
    <section className="relative flex flex-col md:flex-row justify-between items-center text-center p-28 gap-20">
      <div>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight"
        >
          <TextType
            text={[
              "⚡ 𝐊𝐚𝐦𝐚𝐥𝐞𝐬𝐡 𝐀𝐆 ⚡",
              "⚙️ 𝘾𝙤𝙙𝙚. 𝘾𝙧𝙚𝙖𝙩𝙚. 𝙀𝙭𝙚𝙘𝙪𝙩𝙚.",
              "🔥 𝙈𝙖𝙜𝙞𝙘 𝙃𝙖𝙥𝙥𝙚𝙣𝙨 🔥",
            ]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter=""
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-400"
          />
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1.2 }}
          className="mt-6 max-w-2xl text-lg md:text-xl text-gray-300"
        >
          Crafting futuristic web experiences with Web3, AI, and modern
          front-end magic.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1.2 }}
          className="mt-10"
        >
          <TargetCursor
            spinDuration={2}
            hideDefaultCursor={true}
            parallaxOn={true}
          />
          <button
            onClick={() =>
              window.open("https://github.com/kamalesh083", "_blank")
            }
            className="px-8 py-3 text-lg rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-400/60 shadow-[0_0_20px_#00faff] transition-all cursor-target cursor-none"
          >
            Explore My Work 🚀
          </button>
        </motion.div>
      </div>

      <ElectricBorder
        color="#7df9ff"
        speed={1}
        chaos={0.5}
        thickness={5}
        style={{ borderRadius: 20 }}
      >
        <ProfileCard
          className="p-1.5"
          name=" Kamalesh AG"
          title="Software Engineer"
          handle="kamaleshag"
          status="Online"
          contactText="Contact Me"
          avatarUrl="https://imgs.search.brave.com/VjopFQ1b8Cd--DouHrTzZVH6cAvlHNawpUb-8uQ-Eso/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNTkv/NDQwLzY1Ni9zbWFs/bC9iZWF1dGlmdWwt/Y29udGVtcG9yYXJ5/LW1ldGF2ZXJzZS1h/dmF0YXItd2l0aC1j/dXN0b21pemFibGUt/ZmVhdHVyZXMtb3Jp/Z2luYWwtZnJlZS1w/bmcucG5n"
          showUserInfo={true}
          enableTilt={true}
          enableMobileTilt={false}
          onContactClick={() => console.log("Contact clicked")}
        />
      </ElectricBorder>
    </section>
  );
};

export default Hero;
