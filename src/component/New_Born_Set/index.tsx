import React from 'react'
import Image from 'next/image'
import Img1 from '@/Img/iStock-1289864302.webp'
import New_Summmer from '../New_Summer'

type Props = {}

const New_Born_Set = (props: Props) => {
  return (
    <section className=''>
      <div className='flex flex-wrap w-screen'>
        <div className='relative bg-red-400 flex lg:w-1/4 md:flex-1'>
          <div className=' flex justify-center items-center'>
            <Image
              src={Img1}
              alt="Center Image"
              className="w-4/5 py-20 pb-48"
            />
          </div>
        </div>
        <div className='relative bg-yellow-400 flex lg:w-1/4 md:flex-1'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati repellat repellendus provident adipisci voluptates ipsum unde numquam ullam qui tempora quisquam enim voluptate eaque officia, hic aperiam facilis omnis at magni asperiores! Reiciendis laboriosam aliquam ad illo omnis placeat, quos tempore dolores. Esse, et perferendis deserunt eaque itaque numquam nulla!
        </div>
        <div className='relative bg-red-400 flex lg:w-1/4  md:flex-1'>
          <div className="flex w-full h-full overflow-x-auto">
          {/* <Image
              src={Img1}
              alt="Center Image"
              className="w-4/5 py-20 pb-48"
            /> */}
            <New_Summmer className='h-full overflow-x-auto snap-x flex'/>
          </div>
        </div>
      </div>
    </section>
  )
}
// min-[767px]
export default New_Born_Set