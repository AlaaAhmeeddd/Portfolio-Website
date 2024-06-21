"use client"
import { BsArrowDownRight } from "react-icons/bs"
import { motion } from "framer-motion"
import Link from "next/link"

type serviceType = {
    number: string,
    skill: string,
    text: string,
    href: string,
}
type servicesProps = {
    servicesObj: serviceType[]
}
const Service: React.FC<servicesProps> = ({servicesObj}) => {
    return (
        <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{
            delay: 2.4,
            duration: 0.4,
            ease: 'easeInOut'
        }}
        >
            <div className="grid md:grid-cols-2 grid-cols-1 gap-[50px] ">
                {
                    servicesObj.map((service, index)=>(
                        <div key={index} className="border-b border-white/10 pb-4 group">
                            <div className="flex justify-between items-center mb-3 group-hover:text-accent transition-all">
                                <h1 className="text-4xl font-extrabold group-hover:text-stroke-hover text-stroke">{service.number}</h1>
                                <Link href={service.href}>
                                    <BsArrowDownRight className="p-4 bg-white group-hover:bg-accent hover:-rotate-45 transition-all rounded-full text-primary text-5xl" />
                                </Link>
                            </div>
                            <h1 className="font-bold text-3xl mb-4 group-hover:text-accent transition-all">{service.skill}</h1>
                            <p className="text-sm text-white/60 leading-loose">{service.text}</p>
                        </div>
                    ))
                }
            </div>
        </motion.div>
    )
}

export default Service