import about from "../assets/about.jpeg"
import { ABOUT } from "../constants"
import { motion } from "framer-motion";

const MotionH2 = motion.h2;
const MotionDiv = motion.div;
const MotionP = motion.p;

const About = () => {
    return (
        <section className="container mx-auto mb-8" id="about">
            <h2 className="mb-8 text-center text-3xl tracking-tighter lg:text-4xl">About Us</h2>
            <div className="flex flex-wrap">
                <div className="w-full p-4 lg:w-1/2">
                    <img src={about} className="rounded-3xl lg:-rotate-3" alt="" />
                </div>
                <div className="w-full px-2 lg:w-1/2">
                    <MotionH2
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-4xl tracking-tighter lg:text-6xl">
                        {ABOUT.header}
                    </MotionH2 >
                    <MotionDiv
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mb-8 mt-1 h-2 w-36 bg-rose-300 lg:-rotate-3">
                    </MotionDiv>
                    <MotionP
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="m-8 text-2xl leading-relaxed tracking-tight lg:max-w-xl">{ABOUT.content}</MotionP>
                </div>
            </div>
        </section>
    )
}

export default About