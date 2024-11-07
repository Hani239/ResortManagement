import React from 'react'
import Image from 'next/image'
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

type Props = {src:string | StaticImport ,alt: string}& React.HTMLAttributes<HTMLElement>;

const Baby_image2 = ({ className, children,src,alt, ...props }: Props) => {
  return (
    <>
    <div className="grid object-scal-down w-1/3 h-1/3 sm:w-1/3 md:w-1/3 lg:w-1/5 xl:w-1/5 m-2 overflow-hidden transition duration-300 ease-in-out transform hover:shadow-md hover:scale-105">
    <Image
      src={src}
      alt={alt}
      className="box-image rounded-md w-full h-full object-cover hover:filter hover:grayscale"/>
  </div>
    </>
  )
}

export default Baby_image2