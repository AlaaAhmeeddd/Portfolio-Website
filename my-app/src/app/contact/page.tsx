"use client"
import { useForm } from 'react-hook-form';
import { z, TypeOf } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { FaEnvelope, FaMapMarkedAlt, FaPhoneAlt } from 'react-icons/fa';

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+40) 321 654 876",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "youremail@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Code Corner, Tech Town 12334",
  },
]

const formSchema = z.object({
  firstName: z.string().min(2, 'First name is required'),
  lastName: z.string().min(2, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  phoneNumber: z.string().length(11, 'Phone Number must be 11 digits'),
  service: z.enum(['Web Development', 'UI/UX Design', 'Logo Design'], {
    required_error: 'Service is required',
    invalid_type_error: 'Invalid service',
  }),
  message: z.string().min(1, 'Please write your message'),
});

type FormSchema = TypeOf<typeof formSchema>;

export default function Page() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormSchema) => {
    console.log(data);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.4, duration: 0.4, ease: 'easeInOut' }}
      className="h-full py-10"
    >
      <div className="container mx-auto xl:px-10">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="bg-[#27272c] p-6 xl:w-[54%] flex-1 order-2 xl:order-none rounded-xl">
            <h1 className="text-accent text-3xl font-bold my-4">Lets work together</h1>
            <p className="text-sm text-white/60 leading-loose mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate magnam modi.</p>
            <form onSubmit={handleSubmit(onSubmit)} className="flex gap-[20px] flex-col items-start">
              <div className="flex flex-col xl:flex-row gap-6 w-full">
                <div className="flex-1">
                  <Input placeholder="First Name" {...register('firstName')} />
                  {errors.firstName && <p className="text-accent/60 text-sm mt-1">{errors.firstName.message}</p>}
                </div>
                <div className="flex-1">
                  <Input placeholder="Last Name" {...register('lastName')} />
                  {errors.lastName && <p className="text-accent/60 text-sm mt-1">{errors.lastName.message}</p>}
                </div>
              </div>
              <div className="flex gap-6 flex-col xl:flex-row w-full">
                <div className="flex-1">
                  <Input placeholder="Email address" {...register('email')}/>
                  {errors.email && <p className="text-accent/60 text-sm mt-1">{errors.email.message}</p>}
                </div>
                <div className="flex-1">
                  <Input placeholder="Phone Number" {...register('phoneNumber')} />
                  {errors.phoneNumber && <p className="text-accent/60 text-sm mt-1">{errors.phoneNumber.message}</p>}
                </div>
              </div>
              <div className="w-full">
                <select {...register('service')} defaultValue="" className="bg-primary w-full rounded-md focus-visible:ring-1 focus-visible:ring-accent border-white/10  outline-none h-10 px-3 py-2 text-white/60 text-sm">
                  <option value="" disabled>Select service</option>
                  <option value="Web Development">Web Development</option>
                  <option value="UI/UX Design">UI/UX Design</option>
                  <option value="Logo Design">Logo Design</option>
                </select>
                {errors.service && <p className="text-accent/60 text-sm mt-1">{errors.service.message}</p>}
              </div>
              <div className="w-full">
                <Textarea placeholder="Type your message here..." {...register('message')} />
                {errors.message && <p className="text-accent/60 text-sm mt-1">{errors.message.message}</p>}
              </div>
              <button type="submit" className="bg-accent hover:bg-accent-hover text-sm text-primary rounded-full py-2 px-4 font-bold">send message</button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-center order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {
                info.map((item, index)=>(
                  <li key={index} className='flex items-center gap-6'>
                    <div className="w-[42px] h-[42px] xl:w-[62px] xl:h-[62px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="xl:text-[28px] text-[20px]">{item.icon}</div>
                    </div>
                    <div className='flex-1'>
                      <p className="text-white/60 text-sm">{item.title}</p>
                      <h3>{item.description}</h3>
                    </div>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
