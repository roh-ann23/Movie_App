import React, { Component } from 'react'
import MovieList from './MovieList'
import Navbar from './Navbar'
import { movies } from './moviesData'

export default class App extends Component {
  constructor(){
    super()
    this.state = {
        movies: movies,
        cartCount: 0,
        favCount: 0

    }
}
addStars = (movie) =>{

  const {movies} = this.state;
  let movieIndex = movies.indexOf(movie);

  if(movies[movieIndex].star >= 5){
      return;
  }

  movies[movieIndex].star += 0.5

  this.setState({
      movies: movies
  })
}

decStars = (movie) =>{
  const {movies} = this.state;
  let movieIndex = movies.indexOf(movie);

  if(movies[movieIndex].star <= 0){
      return;
  }

  movies[movieIndex].star -= 0.5

  this.setState({
      movies: movies
  })
}

changeFavBtn = (movie) =>{
  let {movies,favCount} = this.state;
  let movieIndex = movies.indexOf(movie);

  movies[movieIndex].fav = !movies[movieIndex].fav

  if(movies[movieIndex].fav){
    favCount += 1;
  }else{
    favCount -= 1;
  }
  if(movies[movieIndex].fav < 0){
    return;
  }

  this.setState({
      movies: movies,
      favCount: favCount
  })
}

changeCartBtn = (movie) =>{

  let {movies,cartCount} = this.state;
  const movieIndex = movies.indexOf(movie);
  
  movies[movieIndex].cart = !movies[movieIndex].cart

  if(movies[movieIndex].cart){
    cartCount += 1;
  }else{
    cartCount -= 1;
  }

  if(movies[movieIndex].cart < 0){
    return;
  }

    
  this.setState({
      movies: movies ,
      cartCount: cartCount
  })

}





  render() {
    const {movies,cartCount,favCount} = this.state;
    return (
      <>
        < Navbar cartCount = {cartCount} favCount = {favCount} />
        < MovieList movies = {movies} addStars ={this.addStars} 
                                      decStars = {this.decStars}
                                      changeFavBtn = {this.changeFavBtn}
                                      changeCartBtn = {this.changeCartBtn}
                                      

                                      />
      </>
    )
  }
}
