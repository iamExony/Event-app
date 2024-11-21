
const Button = (props) => {
  return (
    <>
      <button className='bg-[#DF3602]  hover:bg-primaryHover cursor-pointer rounded-lg px-5 py-4 text-[#FFFDFD] text-base'>{props.text}</button>
    </>
  )
}

export default Button
