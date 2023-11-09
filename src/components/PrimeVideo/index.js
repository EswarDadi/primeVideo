import {Component} from 'react'

import MoviesSlider from '../MoviesSlider'

import './index.css'

class PrimeVideo extends Component {
  render() {
    const {moviesList} = this.props
    const actionMoviesList = moviesList.filter(
      each => each.categoryId === 'ACTION',
    )
    const comedyMoviesList = moviesList.filter(
      each => each.categoryId === 'COMEDY',
    )
    return (
      <div className="prime-video-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png "
          alt="prime video"
          className="prime-image"
        />
        <div className="movie-slider-container">
          <h1 className="movies-heading">Action Movies</h1>
          <MoviesSlider moviesListDetails={actionMoviesList} />
          <h1 className="movies-heading">Comedy Movies</h1>
          <MoviesSlider moviesListDetails={comedyMoviesList} />
        </div>
      </div>
    )
  }
}
export default PrimeVideo
