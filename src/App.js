import React, { Component } from 'react';
import Movie from './Movie';
import './App.css';

class App extends Component {
  state = {}
  componentDidMount(){
    setTimeout(() => {
      this.setState({
        movies: [{
            title: "A",
            image: "https://yts.am/assets/images/movies/avengers_infinity_war_2018/large-cover.jpg"
          },{
            title: "B",
            image: "https://yts.am/assets/images/movies/black_panther_2018/large-cover.jpg"
          },{
            title: "C",
            image: "https://yts.am/assets/images/movies/deadpool_2_2018/large-cover.jpg"
          },{
            title: "D",
            image: "https://yts.am/assets/images/movies/big_hero_6_2014/large-cover.jpg"
          }, {
            title: "E",
            image: "https://yts.am/assets/images/movies/big_hero_6_2014/large-cover.jpg"
          }
        ]
      })
    }, 2000)
  }
  renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.image} key={index}/>
    })
    return movies;
  }
  render(){
    return(
      <div>
        {this.state.movies ? this.renderMovies() : 'Loading'}
      </div>
    );
  }
}

export default App