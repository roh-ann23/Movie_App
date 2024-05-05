import React, { Component } from 'react'
import MovieCard from './MovieCard'
// import { movies } from './moviesData'

export default class MovieList extends Component {
    
  render() {
    const {movies,addStars,decStars,changeFavBtn,changeCartBtn} = this.props;

    return (
      <>        
      {movies.map((movie)=>  < MovieCard movies = {movie} 
                                         key={movie.id} 
                                         addStars = {addStars} 
                                         decStars = {decStars} 
                                         changeFavBtn = {changeFavBtn}
                                         changeCartBtn = {changeCartBtn}
                                        
                                         />)}
      </>
    )
  }
}
