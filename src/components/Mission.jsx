import missionImg from "../assets/mission.jpeg"
import missionVideo from "../assets/mission.mp4"
import { MISSION } from "../constants"
import { motion } from "framer-motion";

const MotionH2 = motion.h2;
const MotionDiv = motion.div;
const MotionP = motion.p;
const MotionVideo = motion.video;

const Mission = () => {
    return (
        <section id="mission">
            <div className="container mx-auto text-center">
                <h2 className="mb-8 text-3xl lg:text-4xl">Our Mission</h2>
                <div className="relative flex items-center justify-center">
                    <MotionVideo
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="w-full rounded-3xl" autoPlay muted playsInline poster={missionImg}>
                        <source src={missionVideo} type="video/mp4" />
                    </MotionVideo>
                    <MotionDiv
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="absolute h-full w-full rounded-3xl bg-black/40"></MotionDiv>
                    <MotionP
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="absolute max-w-lg tracking-tighter lg:text-3xl"> {MISSION}</MotionP>
                </div>
            </div>
        </section>
    )
}

export default Mission