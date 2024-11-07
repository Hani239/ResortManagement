import Baby_image2 from '@/component/Insta_Comp'
import React from 'react'
import Image from 'next/image'
import pic1 from '@/Img/images/Images/G5.jpg'
import pic2 from '@/Img/images/Images/G2.jpg'
import pic3 from '@/Img/images/Images/G3.jpg'
import pic4 from '@/Img/images/Images/G4.jpg'


type Props = {}

const Baby_Image3 = (props: Props) => {
    return (

            <div className='flex flex-wrap justify-center relative gap-7'>
                <Baby_image2
                    src={pic1} alt={'baby1'} />
                <Baby_image2
                    src={pic2} alt={'baby2'} />
                <Baby_image2
                    src={pic3} alt={'baby3'} />
                <Baby_image2
                    src={pic4} alt={'baby4'} />
            </div>
    
    )
}

export default Baby_Image3