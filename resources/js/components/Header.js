import React from 'react'
import { Link } from 'react-router-dom'



/*
nome do medicamento, princípio ativo ou nome do laboratório
*/

const Header = () => (
    <nav className='navbar navbar-expand-md navbar-light bg-light navbar-laravel'>
     <div className='col-md-8 offset-md-2'>
        <div>
             
                <div>
                   <Link className='navbar-brand' to="/home" >Home</Link>
                   <Link className='navbar-brand' to="/produtos" >Produtos</Link>
                </div>



        </div>
      </div>
  </nav>
)

export default Header
