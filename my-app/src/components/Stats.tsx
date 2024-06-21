"use client"
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

type countProps = {
    end: number,
    text: string,
}
type countType = {
    statsObj: countProps[]
}
const countData:countProps[] = [
    {end: 12, text: 'Years of experience'},
    {end: 26, text: 'Projects completed'},
    {end: 8, text: 'Technologies mastered'},
    {end: 500, text: 'Code commits'},
]

const Stats = () => {
    return (
        <CountBox statsObj={countData} />
    )
}

const CountBox:React.FC<countType> = ({statsObj}) => {
    const { ref, inView } = useInView({
        triggerOnce: true, 
        threshold: 0.5,
    });
    return(
        <div ref={ref} className='flex gap-6 items-center flex-wrap justify-between mx-auto max-w-[80vw] xl:max-w-none'>
            {
                statsObj.map((count, index)=>(
                    <div key={index} className='flex-1 flex items-center justify-center xl:justify-start gap-2 '>
                        {inView && (
                        <CountUp
                            end={count.end}
                            duration={5}
                            className="font-extrabold text-4xl xl:text-6xl"
                        />
                        )}                        
                        <p className={`text-sm ${count.text.length < 15 ? 'max-w-[100px]' : 'max-w-[150px]'} text-white/80 leading-snug`}>{count.text}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Stats

