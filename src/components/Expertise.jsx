import { CUSINES } from "../constants";
import { motion } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,

        transition: {
            staggerChildren: 0.2
        },
    }
}
const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.2 } }
}
const MotionDiv = motion.div;


const Expertise = () => {
    return (
        <section id="expertise">
            <h2 className="my-8 text-center text-3xl tracking-tighter lg:text-4xl ">Our Expertise</h2>
            <MotionDiv
                initial="hidden"
                whileInView="show"
                variants={containerVariants}
                className="container mx-auto px-4">
                {CUSINES.map((cuisine, index) => (
                    <MotionDiv
                        initial="hidden"
                        whileInView="show"
                        variants={itemVariants}
                        key={index} className="flex items-center border-b-4 border-dotted border-neutral-700/40 py-2
                    ">
                        <div className="flex-shrink-0 pr-8 text-2xl">{cuisine.number}</div>
                        <div className="w-1/3  flex-shrink-0 ">
                            <img src={cuisine.image} alt={cuisine.title} className="h-auto rounded-3xl" />
                        </div>
                        <div className="pl-8">
                            <h3 className="text-2xl uppercase tracking-tighter text-rose-300">{cuisine.title}</h3>
                            <p className="mt-4 text-lg tracking-tighter">{cuisine.description}</p>
                        </div>
                    </MotionDiv>
                ))}
            </MotionDiv>
        </section>
    )
}

export default Expertise