import { HomeModernIcon } from '@heroicons/react/24/solid';
import { UserGroupIcon } from '@heroicons/react/24/outline';
import { AcademicCapIcon } from '@heroicons/react/24/solid';
import HText from "@/shared/HText";
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import { BenefitType, SelectedPage } from "@/shared/types";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import ActionButton from '@/shared/ActionButton';



const benefits: Array<BenefitType> = [
    { 
        icon: <HomeModernIcon className="h-6 w-6" />,
        title: "Comfort of Your Own Home",
        description: "We do online Yoga classes",
    },
    { 
        icon: <UserGroupIcon className="h-6 w-6" />,
        title: "Choose from different classes",
        description: "Take a yoga class that suits your interests",
    },
    { 
        icon: <AcademicCapIcon className="h-6 w-6" />,
        title: "Learn from a skilled instructor",
        description: "Learn and grow with skilled instructors who empower you to reach your full potential. Personalized guidance for your journey.",
    },
]

const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
};

type Props  = {
    setSelectedPage : (value: SelectedPage) => void;
}

const Benefits = ({setSelectedPage}: Props) => {
    return (
        <section
        id="benefits"
        className = "mx-auto min-h-full w-5/6 py-20"
        >
            <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>
                <motion.div 
                    className="md:my-5 md:w-3/5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <HText>More than just a Yoga Class</HText>
                    <p className = "my-5 text-sum">
                        Experience the transformative power of our online yoga studio. Connect with a skilled instructor, 
                        practice various yoga styles, and nurture your mind, body, and soul from the convenience of your own space.

                    </p>

                </motion.div>

                <motion.div
                    className="mt-5 items-center justify-between gap-8 md:flex"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={container}
                >
                    {benefits.map((benefit: BenefitType) => (
                    <Benefit
                        key={benefit.title}
                        icon={benefit.icon}
                        title={benefit.title}
                        description={benefit.description}
                        setSelectedPage={setSelectedPage}
                    />
                    ))}
                </motion.div>

                <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
                    <img className="mx-auto" alt="benefits-page-graphic" src={BenefitsPageGraphic}/>

                    <div>
                        <div className= "relative">
                            <div className = "before:absolute before:-top-20 before: -left-20 before:z-[1] before content-abstractwaves">
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ duration: 0.5 }}
                                    variants={{
                                    hidden: { opacity: 0, x: 50 },
                                    visible: { opacity: 1, x: 0 },
                                    }}
                                >
                                    <HText>
                                        MANY HAPPY MEMBERS GETTING{" "}
                                        <span className = "text-primary-500">FIT</span>
                                    </HText>
                                </motion.div>

                            </div>

                        </div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            variants={{
                            hidden: { opacity: 0, x: 50 },
                            visible: { opacity: 1, x: 0 },
                            }}
                        >

                            <p className = "my-5">
                            Our online yoga classes are revolutionizing the way people achieve fitness and well-being. 
                            By providing convenient access to high-quality instruction from the comfort of their homes, 
                            individuals of all fitness levels can embrace yoga as a transformative tool for physical fitness. 
                            Our classes cater to diverse needs, offering a variety of styles and intensities 
                            to accommodate beginners and advanced practitioners alike.
                            </p>
                            <p className = "mb-5">
                            By practicing yoga regularly through our online platform, individuals witness remarkable transformations in their fitness levels. 
                            Not only does yoga improve physical endurance, muscular tone, and cardiovascular health, 
                            but it also enhances mental well-being and reduces stress. 
                            Our classes create a supportive and inclusive community that encourages participants to embrace their unique fitness journeys, 
                            inspiring them to push past their limits and achieve optimal levels of fitness and vitality.
                            Embark on this transformative path with us and unlock a healthier, fitter version of yourself.

                            </p>
                        </motion.div>
                        <div className="relative mt-16">
                            <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                                <ActionButton setSelectedPage={setSelectedPage}>
                                    Join Now
                                </ActionButton>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

        </section>
    )
}
export default Benefits;

