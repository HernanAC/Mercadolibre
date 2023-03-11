import React from 'react'
import "./footer.css";
import img1 from './public/sicpng@2x.png';
import img2 from './public/pumpng@2x.png';

const Footer = () => {
  return (
    <footer >
      <div class="footer">
        <div class="footerdiv1">
          <ul class="ulfooter" >
            <lh class="ul1">Trabaja con nosotros </lh>
            <lh class="ul2">Términos y condiciones </lh>
            <lh class="ul3">Cómo cuidamos tu privacidad </lh>
            <lh class="ul4">Accesibilidad </lh>
            <lh class="ul5">Ayuda / PQR </lh>
            <lh class="ul6">www.sic.gov.co</lh>
          </ul>
          <div class="copyright">
            Copyright © 1999-2023 MercadoLibre Colombia LTDA.
          </div>
          <div class="direccion">
            Carrera 17 Numero 93 - 09 Piso 3, Bogotá D.C., Colombia
          </div>
        </div>
        <div class="footerdiv2">
        <img src={img1} alt="" style={{ resizeMode: 'contain', height: 30, width: 141, }} />
        <img src={img2} alt="" style={{ resizeMode: 'contain', height: 34, width: 200, }} />
        </div>
      </div>
    </footer>
  )
}

export default Footer
