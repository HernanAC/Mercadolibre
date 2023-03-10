import React from 'react'
import "./header.css";
import logo from './public/logo.png'


const Header = () => {
  return (
    <header class="header">
      <div class="header">
        <div>
          <form class="form">
            <div class="divform">
              <div class="divform2" >
                <div class="textoform">Buscar productos, marcas y más...
                </div>
              </div>
            </div>
            <div class="div2form">
              <div class="pseudo">
              </div>
            </div>
          </form>
          <div class="domicilio">
            Ingresa tu domicilio
          </div>
          <div class="categoria">
            <lh>Categorías</lh>
            <lh>Ofertas</lh>
            <lh>Historial</lh>
            <lh>Supermercado</lh>
            <lh>Moda</lh>
            <lh>Vender</lh>
            <lh>Ayuda / PQR</lh>
          </div>
          <div class="cuenta">
            <lh>Crea tu cuenta</lh>
            <lh>Ingresa</lh>
            <lh>Mis compras</lh>
          </div>
          <div class="logo">
          <img src={logo}  alt="" style={{ resizeMode: 'contain', height: 34, width: 134, left: 10, top: 11}} />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

