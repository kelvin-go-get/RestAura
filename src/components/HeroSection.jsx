import video from "../assets/hero.mp4"
import logo from "../assets/logo.png"
import hero from "../assets/hero.jpeg"
import { motion } from "framer-motion";

const MotionImg = motion.img;


const HeroSection = () => {
    return (
        <section className="relative flex h-screen items-center justify-center">
            <div className="absolute inset-0 -z-20 w-full overflow-hidden">
                <video src={video} className="h-full w-full object-cover" muted autoPlay loop playsInline poster={hero}></video>
            </div>

            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent from-70% to-black">
            </div>

            <div className="relative z-20 flex h-screen flex-col justify-end pb-20">
                <MotionImg
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    src={logo}
                    alt="resaura"
                    className="w-full p-4 " />
                <p className="p-4 text-lg tracking-tighter text-white">Paris</p>
            </div>
        </section>
    )
}

export default HeroSection