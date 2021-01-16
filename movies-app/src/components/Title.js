import React from 'react';

export const Interesar = ({children}) => (
  <p className='title' style={{ 
    background: 'black',
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
      
          <footer className='footer' style={{background: 'black'}}>
            <div className='content has-text-centered'>
              <p style={{color: 'white'}}><strong style={{color: 'white'}}>Autor:</strong> José Nathhaniel Bonilla</p>
              <p style={{color: 'white'}}>Todos los derechos reservados. 2021</p>
            </div>   
          </footer>
      
      )
  }
}
