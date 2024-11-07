import React from 'react'

type Props = {textHead:string, textSubHead:string} & React.HTMLAttributes<HTMLElement>;

const Heading = ({textHead, textSubHead, ...props}: Props) => {
    return (
        <div className='flex flex-col top w-full p-5  md:items-center lg:px-20'>
            <p className='flex font-inter text-xs'>{textHead}</p>
            <p className='flex font-playpen text-2xl font-semibold'>{textSubHead}</p>
        </div>
    )
}

export default Heading