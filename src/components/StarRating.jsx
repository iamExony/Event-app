import { FaStar, FaRegStar } from 'react-icons/fa'

const StarRating = ({ active, className }) => {
  const totalStars = 5

  return (
    <div className={`inline-flex gap-[2px] ${className ? className : ''}`}>
      {[...new Array(totalStars)].map((arr, index) => {
        return index < active ? (
          <FaStar key={index} style={{ color: '#FFA534' }} />
        ) : (
          <FaRegStar key={index} style={{ color: '#FFA534' }} />
        )
      })}
    </div>
  )
}

export default StarRating
