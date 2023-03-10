import React from 'react'
import "./footer.css";
import img1 from './public/sicpng@2x.png';
import img2 from './public/pumpng@2x.png';

const Footer = () => {
  return (
    <footer >
      <div class="footer">
        <div class="footerdiv1">
          <div class="ulfooter">
            <div class="ul1">Trabaja con nosotros </div>
            <div class="ul2">Términos y condiciones </div>
            <div class="ul3">Cómo cuidamos tu privacidad </div>
            <div class="ul4">Accesibilidad </div>
            <div class="ul5">Ayuda / PQR </div>
            <div class="ul6">www.sic.gov.co </div>
            
          </div>

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
