import { ScrollArea } from "./ui/scroll-area"
import {experience } from '@/components/data'

export default function ExperienceTab(){
    return (
        <>
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h1 className="text-3xl font-bold">{experience.title}</h1>
                <p className='text-white/80 text-sm mx-auto xl:mx-0 leading-loose max-w-[550px]'>{experience.description}</p>
            </div>
            <ScrollArea className="h-[400px] mt-10">
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-[30px] w-full">
                {
                    experience.items.map((item, index)=>(
                        <div key={index} className="bg-[#27272c] px-10 py-6 h-[184px] rounded-xl flex
                        flex-col justify-center items-center xl:items-start gap-1">
                            <p className="text-accent mb-2 font-bold text-sm">{item.duration}</p>
                            <p className="font-bold min-h-[60px] max-w-[220px] xl:text-left text-center">{item.company}</p>
                            <div className='flex gap-2 items-center'>
                            <span className="bg-accent p-1 rounded-full" />
                            <p className="text-xs text-white/60">{item.position}</p>
                            </div>
                        </div>
                    ))
                }
                </div>
            </ScrollArea>
        </>
    )
}

