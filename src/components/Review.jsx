import { REVIEW } from "../constants"
import xaviour from "../assets/xaviour.jpeg"
import customer1 from "../assets/customer1.jpeg"
import customer2 from "../assets/customer2.jpeg"
import customer3 from "../assets/customer3.jpeg"
import customer4 from "../assets/customer4.jpeg"
import { motion } from "framer-motion";


const containerVariants = {
    hidden: { opacity: 0, y: 100 },
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
const MotionImg = motion.img;
const MotionDiv = motion.div;
const MotionP = motion.p;

const Review = () => {
    return (
        <section className="container mx-auto mb-8 mt-12" id="review">
            <MotionDiv
                initial="hidden"
                whileInView="show"
                variants={containerVariants}
                viewport={{ once: true }}
                className="flex flex-col">
                <MotionP
                    variants={itemVariants}
                    className="mb-10 text-3xl font-light leading-normal tracking-tighter lg:mx-40 lg:mt-40 lg:text-[3.5rem]">{REVIEW.content}</MotionP>
                <MotionDiv
                    variants={itemVariants}
                    className="items-center flex justify-center gap-6">
                    <img src={xaviour} alt={REVIEW.name} width={80} height={80} className="rounded-full border" />
                    <div className="tracking-tighter">
                        <h6 className="">{REVIEW.name}</h6>
                        <p className="text-sm text-neutral-500">{REVIEW.profession}</p>
                    </div>
                </MotionDiv>
            </MotionDiv>
            <MotionDiv
                initial="hidden"
                whileInView="show"
                variants={itemVariants}
                viewport={{ once: true }}
                className="mt-14 flex flex-col items-center justify-center gap-2 md:flex-row">
                {[customer1, customer2, customer3, customer4].map((customer, index) => (
                    <MotionImg variants={itemVariants} src={customer} key={index} className="h-[300px] w-[200px] rounded-br-3xl rounded-tl-3xl object-cover" alt="customer" />
                ))}
            </MotionDiv>
        </section>
    )
}

export default Review