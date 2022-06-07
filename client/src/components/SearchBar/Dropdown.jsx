import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';


function Favorites (props){
  return(
      <div>
      </div>
  )  
}
function mapStateToProps(state){  //MapStateToProps recibe el estado cada vez que este es cambiado, retorna un objeto plano
    //y a su vez envia este objeto como argumento al componente conectado
    return {
      fav : state.favs, //movies es un nombre que nosotros pusimos para el objeto enviado y le asignmos lo que hay en el state.mviesLoaded
    }
  }


  function mapDispatchToProps(dispatch){ //generamos una nueva propiedad para el componente Buscador, que enviamos por medio de conect como props 
    //en este caso getMovies es una propiedad que es una funcion definida. la cual ahora si podemos pasar a handleSubmit
    return{
      add: name => dispatch(addFavs(name)), //title viene del estado local, esta funcion retorna un objeot
      // con una propiedad que es un dispatch, el cual recibe la accion que requiere mandar al reducer en este caso getMovies(), no olvidemos importar esta funcion de actions  
      remove: (name) => dispatch(removeFavs(name)) //agregamos esta propiedad de addmovieFavorite desde el archivo de actions
    }
  }


export default connect(mapStateToProps, mapDispatchToProps)(Favorites)