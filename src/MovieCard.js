import React, { Component } from 'react'

export default class MovieCard extends Component {
   

    
    
  render() {
    const {poster,title,plot,price,rating,star,fav,cart} = this.props.movies;
    const {movies,addStars,decStars,changeFavBtn,changeCartBtn} = this.props;
    return (
      <div className='main' >
        <div className='movie-card'>
            <div className='left'>
                <img src={poster} alt={title}/>
            </div>
            <div className='right'>
                <div className='title'>{title}</div>
                <div className='plot'>{plot}</div>
                <div className='price'>Rs. {price}</div>
                <div className='footer'>
                    <div className='rating'>
                        IMDB: {rating}
                    </div>
                    <div className='star-dis'>
                        <img alt='decrease' className='str-btn' onClick={() => decStars(movies)} src='https://cdn-icons-png.flaticon.com/128/1828/1828777.png'/>
                        <img alt='star' className='stars' src='https://cdn-icons-png.flaticon.com/128/2224/2224638.png' />
                        <img alt='increase' className='str-btn' onClick={() => addStars(movies)} src='https://cdn-icons-png.flaticon.com/128/399/399281.png'/>
                        <span className='starCount'>{star}</span>
                    </div>
                    <button onClick={() => changeFavBtn(movies)} className= {fav ? 'unfavourite-btn':'favourite-btn'}>{fav? 'Remove from favourite' : 'Add to Favourite'} </button>
                    <button onClick={() => changeCartBtn(movies)} className={cart ? 'uncart-btn' : 'cart-btn'}>{cart? 'Remove from cart' : 'Add to Cart'}</button>

                </div>

            </div>
        </div>
         
      </div>
    )
  }
}
