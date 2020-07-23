import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import 'bulma/css/bulma.css'
import {SearchForm} from './Components/F_Busqueda'
import {Movies} from './Components/Peliculas'


class App extends Component{

  state= {usedSearch:false, results: [] }
_handleResults = (results) => {
  this.setState ({ results, usedSearch: true })

}
//muestra los resultados de los datos extraidos de imdb
_renderResults(){
  const {results} = this.state
  return (
    <div className='movie-style'>
      {
    results.map(movie => {
    return (
    <div key={movie.imdbID} className='movie-item'>
    <Movies       
       title={movie.Title}
       year={movie.Year}
       poster={movie.Poster}
       />
       </div>
       )
  })
}
</div>
  )
}
_lanzarerror (){
  return(
   <div>
     <br />
    <h1 className='title is-1'>Esta no es la peli que buscas</h1>
    <img src ="https://media.giphy.com/media/l2JJKs3I69qfaQleE/giphy.gif" />
    </div>
  )  
}
_lanzarpelis (){
  return this.state.results.length == 0
    ?this._lanzarerror()
    : this._renderResults()
  
}
  render () {
    return(
      //cabecera
      <div className= "App">
      
        <header className="App-header">
        <h6><em>1ª proyecto React</em></h6>
        <img src={logo} className="App-logo" alt="logo" />
        <h6><em>Sento Visiedo Rubio</em></h6>

      </header>    

      <br />
      <h6>Busca la pelicula que quieras</h6>
      <h6>(solo titulos ORIGINALES!!!)</h6>
      <br />

      <div className='App-cuerpo'>
        <SearchForm onResults = {this._handleResults}></SearchForm>
      </div>
        {this.state.usedSearch
          ? this._lanzarpelis()
          :<small>Usa el campo de texto para buscar una pelicula</small>
        }  
        
      </div>
      );
  }
}




export default App;
