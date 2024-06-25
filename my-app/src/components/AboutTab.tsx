import { about} from '@/components/data'

export default function AboutTab() {
    return (
        <>
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h1 className="text-3xl font-bold">{about.title}</h1>
                <p className='text-white/80 text-sm mx-auto xl:mx-0 leading-loose max-w-[550px]'>{about.description}</p>
            </div>
            <div className='grid xl:grid-cols-2 grid-cols-1 gap-x-[60px] gap-y-4 mt-10'>
                {
                    about.info.map((information, index)=>(
                        <div key={index} className="flex gap-3 items-center xl:justify-start justify-center">
                        <p className="text-sm text-white/80 font-bold">{information.fieldName}</p>
                        <p>{information.fieldValue}</p>
                        </div>
                    ))
                }
            </div>
        </>
    )
}
