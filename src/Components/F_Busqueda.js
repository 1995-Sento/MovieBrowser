import React, { Component } from 'react'

    const API_OMDB = 'd9450b18'

    export class SearchForm extends Component {
    
      state= {
        inputMovie:''
      }

      _handleChange= (e) =>{
        this.setState({inputMovie: e.target.value})
      }

      //Busca las peliculas con la api y despues guarda todos los resultados de las peliculas
      _handleSumbit= (e) =>{
        e.preventDefault()
        const {inputMovie}=this.state
        fetch(`http://www.omdbapi.com/?apikey=${API_OMDB}&s=${inputMovie}`)
        .then(res => res.json())
        .then(results => {
          const {Search = [],totalResults = '0'} = results
          console.log({Search, totalResults})
          this.props.onResults(Search)
        })
        
      }

      render () {
        return (
          <form onSubmit = {this._handleSumbit}>
            <div className="field has-addons">
              <div className="control">
                <input
                  className="input"
                  onChange={this._handleChange}
                  type="text"
                  placeholder="Movie to search..." />
              </div>
              <div className="control">
                <button className="button is-info">
                  Buscar
                </button>
              </div>
            </div>
            </form>
        )
      }
    }