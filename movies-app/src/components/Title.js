import React from 'react';

import { Component } from "react";

export const Interesar = ({children}) => (
  <p className='title' style={{ 
    background: 'grey',
    height: 50,
    justifyContent:'center',
    padding:5,
    margin:5,
    color:'white'

  }}
  >{children}</p>
)


export const Title = ({ children }) => (
  <h1 className="title">{children}</h1>
)

 export class Pie extends React.Component{
  render(){
      return(
      
          <footer className='footer'style={{background: 'grey'}} >
            <div className='content has-text-centered'>
              <p>Todos los derechos reservados</p>
            </div>   
          </footer>
      
      )
  }
}
