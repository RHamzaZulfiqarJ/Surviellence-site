import React from 'react'

const CCard = ({text, title}: {text: string, title: string}) => {
  return (
    <div className="border border-white p-4 m-4 hover:text-black hover:bg-white hover:border-black transition-all duration-300 cursor-pointer">
        <div className="text-2xl font-bold">{title}</div>
        <div className="">{text}</div>
    </div>
  )
}

export default CCard