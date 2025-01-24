const CCard = ({text, title}: {text: string, title: string}) => {
  return (
    <div className="border border-white p-4 m-4 hover:bg-white hover:text-black hover:border-black transition-all duration-300 cursor-pointer">
        <div className="text-white text-2xl font-bold">{title}</div>
        <div className="text-white">{text}</div>
    </div>
  )
}

export default CCard