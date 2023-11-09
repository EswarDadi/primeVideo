import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const {moviesListDetails} = props
  const settings = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
  }
  return (
    <>
      <Slider {...settings}>
        {moviesListDetails.map(each => (
          <MovieItem movieDetails={each} key={each.id} />
        ))}
      </Slider>
    </>
  )
}
export default MoviesSlider
