import { Url } from 'next/dist/shared/lib/router/router'
import React from 'react'
import { GoChevronRight } from "react-icons/go";

type Props = { text: String }

const Create_Account = ({ text, ...props }: Props) => {
  return (
    <>
      <button className="w-full h-14 p-3 text-lg bg-[#E46A4B] font-inter text-white border border-dashed border-white rounded-lg hover:bg-gray-900 " >
        <div className="inline-block"> {text}</div><div className="inline-block"> <GoChevronRight /> </div>
      </ button>

    </>
  )
}

export default Create_Account