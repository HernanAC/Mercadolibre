import React from 'react'
import "./content.css";
import firstdiv from './public/a@2x.png';
import creditcardsvg from './public/creditcardsvg.svg';
import transfersvg from './public/transfersvg.svg';
import paymentagreementsvg from './public/paymentagreementsvg.svg';
import viewmoresvg from './public/viewmoresvg.svg';
import oferta1 from './public/silla.png';
import oferta2 from './public/microfono.png';
import oferta3 from './public/razor.png';
import oferta4 from './public/armario.png';
import oferta5 from './public/cortina.png';
import beneficio1 from './public/beneficio1.png';
import beneficio2 from './public/beneficio2.png';
import beneficio3 from './public/beneficio3.png';
import disney from './public/disney.png';
import hbo from './public/hbo.png';
import paramount from './public/paramount.png';
import descubre1 from './public/descubre1.png';
import descubre2 from './public/descubre2.png';
import populares1 from './public/populares1.svg';
import populares2 from './public/populares2.svg';
import populares3 from './public/populares3.svg';
import populares4 from './public/populares4.svg';
import populares5 from './public/populares5.svg';
import populares6 from './public/populares6.svg';
import populares7 from './public/populares7.svg';
import populares8 from './public/populares8.svg';
import populares9 from './public/populares9.svg';
import populares10 from './public/populares10.svg';
import populares11 from './public/populares11.svg';
import populares12 from './public/populares12.svg';
import populares13 from './public/populares13.svg';
import populares14 from './public/populares14.svg';
import creditcard from './public/paymentsvg.svg';
import shipping from './public/shippingsvg.svg';
import protectedsvg from './public/protectedsvg.svg';
import full from './public/svg.svg';
import dplus from './public/div.svg';
import starplus from './public/div1.svg';
import carromercadolibre from './public/div2@2x.png';
import lego from './public/lego.png';
import xiaomi from './public/xiaomi.png';
import oster from './public/oster.png';
import nikon from './public/nikon.png';
import legobackground from './public/legobackground.png';
import xiaomibackground from './public/xiaomibackground.png';
import osterbackground from './public/osterbackground.png';
import nikonbackground from './public/nikonbackground.png';
import legoitem1 from './public/legoitem1.png';
import legoitem2 from './public/legoitem2.png';
import legoitem3 from './public/legoitem3.png';
import xiaomiitem1 from './public/xiaomiitem1.png';
import xiaomiitem2 from './public/xiaomiitem2.png';
import xiaomiitem3 from './public/xiaomiitem3.png';
import osteritem1 from './public/osteritem1.png';
import osteritem2 from './public/osteritem2.png';
import osteritem3 from './public/osteritem3.png';
import nikonitem1 from './public/nikonitem1.png';
import nikonitem2 from './public/nikonitem2.png';
import nikonitem3 from './public/nikonitem3.png';
import supermercado from './public/supermercado.png';
import supermercado1 from './public/supermercado1.png';
import supermercado2 from './public/supermercado2.png';
import supermercado3 from './public/supermercado3.png';
import supermercado4 from './public/supermercado4.png';
import supermercado5 from './public/supermercado5.png';
import supermercado6 from './public/supermercado6.png';
import supermercado7 from './public/supermercado7.png';
import supermercado8 from './public/supermercado8.png';

const Content = () => {
  return (
    <div class="content">
      <div class="novedades">
        <div  style={{ background: `url(${firstdiv})`, height: 340, width: 1512, backgroundSize: 'contain'}}>
          <ul class="buttons">
            <lh class="button"></lh>
            <lh class="button2"></lh>
            <lh class="button"></lh>
            <lh class="button"></lh>
            <lh class="button"></lh>
            <lh class="button"></lh>
          </ul>
        </div>
      </div>

      <div class="transferencia">
        <div class="transferencia1">
          <div class="cuotas">
            <img src={creditcardsvg} alt="" style={{ resizeMode: 'contain', height: 48, width: 48, paddingTop: 20, paddingLeft: 20 }} />
            <div class="bancos2">
              Hasta 48 cuotas
            </div>
            <div class="vermas">
              Ver más
            </div>
          </div>
          <div class="banco">
            <img src={transfersvg} alt="" style={{ resizeMode: 'contain', height: 48, width: 48, paddingTop: 20, paddingLeft: 20 }} />
            <div class="bancos2">
              Transferencias desde tu banco
            </div>
            <div class="vermas">
              Ver más
            </div>
          </div>
          <div class="efectivo">
           <img src={paymentagreementsvg} alt="" style={{ resizeMode: 'contain', height: 48, width: 48, paddingTop: 20, paddingLeft: 20}} />
            <div class="bancos2" > 
              Paga en efectivo
            </div>
            <div class="vermas">
              Ver más
            </div>
          </div>
        </div>
        <div class="transferencia2">
          <img src={viewmoresvg} alt="" style={{ resizeMode: 'contain', height: 48, width: 48, paddingTop: 20, paddingLeft: 20}} />
          <div class="medios">
            <div class="bancos2">
              Más medios de pago
            </div>
            <div class="vermas">
              Ver todos
            </div>
          </div>
        </div>
      </div>

      <div class="ofertas">
        <div class="ofertas1">
          <div class="ofertastitulo ">
            Ofertas
          </div>  
          <div class="ofertastitulo2">
            Ver todas
          </div>  
        </div>
        <div class="ofertas2">
          <div class="clasificado">
            <div class="clasificado1">
              <img src={oferta1} alt="" style={{ resizeMode: 'contain', height: 224, width: 224, }} />
              <div class="clasificado11">
                <div class="divclasificado1">
                  <div class="divclasificado1letras">
                    <div class="dinero">$</div>
                    <div class="valor">210.900</div>
                    <div class="descuento">32% OFF</div>
                  </div>
                  <div class="enviogratis">Envío gratis</div>
                </div> 
              </div>
            </div>
            <div class="clasificado2">
              <img src={oferta2} alt="" style={{ resizeMode: 'contain', height: 224, width: 224, }} />
              <div class="clasificado11">
                <div class="divclasificado2">
                  <div class="divclasificado1letras">
                    <div class="dinero">$</div>
                    <div class="valor">74.990</div>
                    <div class="descuento">25% OFF</div>
                  </div>
                  <div class="enviogratis">Envío gratis
                  <img src={full} alt="" style={{ resizeMode: 'contain', height: 22, width: 40, }} />
                  </div>
                </div> 
              </div>
            </div>
            <div class="clasificado3">
              <img src={oferta3} alt="" style={{ resizeMode: 'contain', height: 224, width: 224, }} />
              <div class="clasificado11">
                <div class="divclasificado3">
                  <div class="divclasificado1letras">
                    <div class="dinero">$</div>
                    <div class="valor">134.950</div>
                    <div class="descuento">50% OFF</div>
                  </div>
                  <div class="enviogratis">Envío gratis</div>
                </div> 
              </div>
            </div>
            <div class="clasificado4">
              <img src={oferta4} alt="" style={{ resizeMode: 'contain', height: 224, width: 224, }} />
              <div class="clasificado11">
                <div class="divclasificado4">
                  <div class="divclasificado1letras">
                    <div class="dinero">$</div>
                    <div class="valor">149.900</div>
                    <div class="descuento">30% OFF</div>
                  </div>
                  <div class="enviogratis">Envío gratis</div>
                </div>
              </div>
            </div>
            <div class="clasificado5">
              <img src={oferta5} alt="" style={{ resizeMode: 'contain', height: 224, width: 224, }} />
              <div class="clasificado11">
                <div class="divclasificado5">
                  <div class="divclasificado1letras">
                    <div class="dinero">$</div>
                    <div class="valor">69.990</div>
                    <div class="descuento">17% OFF</div>
                  </div>
                  <div class="enviogratis">
                    <img src={full} alt="" style={{ resizeMode: 'contain', height: 22, width: 40, }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="suscribete">
        <div class="suscribete1">
          <div class="nivel6">
            Suscríbete al nivel 6
          </div>
          <div class="mespseudo">
            <div class="mesdiv">
              <div class="mesprecio"> $ 50.690 </div>
              <div class="pormespreciofinal">
                $17.899
                <div class="mesprecionuevo">
                  <div class="pormes">/mes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="suscribete2">
          <div class="suscribete2beneficios">
            Consigue los mejores beneficios en Mercado Libre
          </div>
          <div class="suscribete2div">
            <div class="suscribete2div1">
              <img src={dplus} alt="" style={{ resizeMode: 'contain', height: 74, width: 74, }} />
              <div class="disneyplus">Disney + sin cargo</div>
            </div>
            <div class="suscribete2div2">
              <img src={starplus} alt="" style={{ resizeMode: 'contain', height: 74, width: 74, }} />
              <div class="starplus">Star + sin cargo</div>
            </div>
            <div class="suscribete2div3">
              <img src={carromercadolibre} alt="" style={{ resizeMode: 'contain', height: 74, width: 74, }} />
              <div class="mercadoplus">Envíos gratis y rápidos desde $ 90.000 y 40% OFF en envíos de menos de $ 90.000</div>
            </div>
          </div>
        </div>
        <div class="suscribete3">
          <div class="suscribetebutton">
            <div class="suscribetebuttontexto">Suscríbete</div>
          </div>
        </div>
      </div>

      <div class="beneficios">
        <div class="beneficios1">
          <div class="beneficios1texto1">
            Beneficio de Mercado Puntos
          </div>
          <div class="beneficios1texto2">
            Ver todos los beneficios
          </div>
        </div>
        <div class="beneficios2">
          <div class="beneficios2div">
            <div  style={{ background: `url(${beneficio1})`, resizeMode: 'contain', height: 250, width: 384, backgroundSize: 'contain'}}  >
              <div class="beneficios2detalles1">
                <div class="beneficiosdiv">
                  <img src={disney} alt="" style={{ resizeMode: 'contain', height: 80, width: 80, paddingLeft: 16}} />
                  <div class="hastaoff">Sin cargo con el nivel 6</div>
                  <div class="marca">Disney+ y Star+</div>
                </div>
              </div>
            </div>
            <div  style={{ background: `url(${beneficio2})`, resizeMode: 'contain', height: 250, width: 384, backgroundSize: 'contain'}}  >
              <div class="beneficios2detalles2">
                <div class="beneficiosdiv">
                  <img src={hbo} alt="" style={{ resizeMode: 'contain', height: 80, width: 80, paddingLeft: 16}} />
                  <div class="diasgratis">7 DÍAS GRATIS</div>
                  <div class="hastaoff">Hasta 50% OFF</div>
                  <div class="marca">HBO Max</div>
                </div>
              </div>
            </div>
            <div  style={{ background: `url(${beneficio3})`, resizeMode: 'contain', height: 250, width: 384, backgroundSize: 'contain'}}  >
              <div class="beneficios2detalles3">
                <div class="beneficiosdiv">
                  <img src={paramount} alt="" style={{ resizeMode: 'contain', height: 80, width: 80, paddingLeft: 16 }} />
                  <div class="diasgratis">7 DÍAS GRATIS</div>
                  <div class="hastaoff">Hasta 50% OFF</div>
                  <div class="marca">Paramount+</div>
                </div>
              </div>
            </div>
            </div>
        </div>
      </div>

      <div class="descubre">
        <div class="descubretexto">
          Descubre
        </div>
        <div class="descubrediv">
          <div class="descubrediv1">
            <div class="descubrediv22">
              <div class="descubrediv22texto1">RENUEVA TUS ESPACIOS</div>
              <div class="descubrediv22texto2">HOGARES Y MUEBLES</div>
              <div class="descubrediv22texto3">HASTA 50% OFF</div>
            </div>
            <img src={descubre1} alt="" class="descubreimg2" style={{ resizeMode: 'contain', height: 250, width: 289.84, }} />
            <div class="descubrebutton">
              <div class="descubrebuttontexto">  Ver más</div>
            </div>
          </div>
          <div class="descubrediv2">
            <div class="descubrediv22">
              <div class="descubrediv22texto1">SUSCRÍBETE AL NIVEL 6</div>
              <div class="descubrediv22texto2">Por solo</div>
              <div class="descubrediv22texto3">$17.899 cada mes</div>
            </div>
            <img src={descubre2} alt="" class="descubreimg2" style={{ resizeMode: 'contain', height: 250, width: 289.84, }} />
            <div class="descubrebutton2" >
              <div class="descubrebuttontexto">
                Suscribirme
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mejores">
        <div class="mejores2">
          <div class="mejorestext">
            <div class="mejorestext1">
              Las mejores tiendas te esperan
            </div>
            <div class="mejorestext2">
              Ver tiendas
            </div>
          </div>
        </div>
        <div class="mejores3">
          <div class="mejores3div">
            <div class="mejoresdiv1">
              <div class="vertienda">
                Ver tienda
              </div>
              <div class="items">
                <img src={legoitem1} alt="" style={{ resizeMode: 'contain', height: 70, width: 70, }} />
                <img src={legoitem2} alt="" style={{ resizeMode: 'contain', height: 70, width: 70, }} />
                <img src={legoitem3} alt="" style={{ resizeMode: 'contain', height: 70, width: 70, }} />
              </div>
              <div class="nombrediv">
                <div class="nombredivtexto">
                  Lego
                </div>
              </div>
              <div class="legobackground">
                <img src={legobackground} alt=""  style={{ resizeMode: 'contain', height: 95, width: 284, }} />
              </div>
              <img src={lego} alt="" class="lego" style={{ resizeMode: 'contain', height: 110, width: 110, }} />
            </div>
            <div class="mejoresdiv2">
              <div class="vertienda">
                Ver tienda
              </div>
              <div class="items">
                <img src={xiaomiitem1} alt="" style={{ resizeMode: 'contain', height: 70, width: 70, }} />
                <img src={xiaomiitem2} alt="" style={{ resizeMode: 'contain', height: 70, width: 70, }} />
                <img src={xiaomiitem3} alt="" style={{ resizeMode: 'contain', height: 70, width: 70, }} />
              </div>
              <div class="nombrediv">
                <div class="nombredivtexto">
                  Xiaomi
                </div>
              </div>
              <div class="legobackground">
                <img src={xiaomibackground} alt=""  style={{ resizeMode: 'contain', height: 95, width: 284, }} />
              </div>
              <img src={xiaomi} alt="" class="xiaomi" style={{ resizeMode: 'contain', height: 110, width: 110, }} />
            </div>
            <div class="mejoresdiv3">
              <div class="vertienda">
                Ver tienda
              </div>
              <div class="items">
                <img src={osteritem1} alt="" style={{ resizeMode: 'contain', height: 70, width: 70, }} />
                <img src={osteritem2} alt="" style={{ resizeMode: 'contain', height: 70, width: 70, }} />
                <img src={osteritem3} alt="" style={{ resizeMode: 'contain', height: 70, width: 70, }} />
              </div>
              <div class="nombrediv">
                <div class="nombredivtexto">
                  Oster
                </div>
              </div>
              <div class="legobackground">
                <img src={osterbackground} alt=""  style={{ resizeMode: 'contain', height: 95, width: 284, }} />
              </div>
              <img src={oster} alt="" class="oster" style={{ resizeMode: 'contain', height: 110, width: 110, }} />
            </div>
            <div class="mejoresdiv4">
              <div class="vertienda">
                Ver tienda
              </div>
              <div class="items">
                <img src={nikonitem1} alt="" style={{ resizeMode: 'contain', height: 70, width: 70, }} />
                <img src={nikonitem2} alt="" style={{ resizeMode: 'contain', height: 70, width: 70, }} />
                <img src={nikonitem3} alt="" style={{ resizeMode: 'contain', height: 70, width: 70, }} />
              </div>
              <div class="nombrediv">
                <div class="nombredivtexto">
                  Nikon
                </div>
              </div>
              <div class="legobackground">
                <img src={nikonbackground} alt=""  style={{ resizeMode: 'contain', height: 95, width: 284, }} />
              </div>
              <img src={nikon} alt="" class="nikon" style={{ resizeMode: 'contain', height: 110, width: 110, }} />
            </div>
          </div>
        </div>
      </div>  

      <div class="supermercado">
        <div class="colleciones">
          Colecciones:
        </div>
        <div class="super">
          <div class="super2">
            Supermercado: 
          </div>
        </div>
      </div>
      <div class="supermercadodiv">
        <div class="supermercadodiv1">
          <img src={supermercado} alt="" style={{ resizeMode: 'contain', height: 281, width: 383, }} />
          <div class="supermercadodescubre">
            <div class="supermercadodescubre1">DESCUBRE</div>
            <div class="supermercadodescubre2">
              <div class="supermercadodescubre2texto">Supermercado
              </div>
            </div>
          </div>
        </div>
        <div class="supermercadodiv2">
          <div class="supermercado1">
            <img src={supermercado1} alt="" style={{ resizeMode: 'contain', height: 184, width: 184, }} />
          </div>
          <div class="supermercado2">
            <img src={supermercado2} alt="" style={{ resizeMode: 'contain', height: 184, width: 184, }} />
          </div>
          <div class="supermercado3">
            <img src={supermercado3} alt="" style={{ resizeMode: 'contain', height: 184, width: 184, }} />
          </div>
          <div class="supermercado4">
            <img src={supermercado4} alt="" style={{ resizeMode: 'contain', height: 184, width: 184, }} />
          </div>
          <div class="supermercado5">
            <img src={supermercado5} alt="" style={{ resizeMode: 'contain', height: 184, width: 184, }} />
          </div>
          <div class="supermercado6">
            <img src={supermercado6} alt="" style={{ resizeMode: 'contain', height: 184, width: 184, }} />
          </div>
          <div class="supermercado7">
            <img src={supermercado7} alt="" style={{ resizeMode: 'contain', height: 184, width: 184, }} />
          </div>
          <div class="supermercado8">
            <img src={supermercado8} alt="" style={{ resizeMode: 'contain', height: 184, width: 184, }} />
          </div>
        </div>
      </div>

      <div class="populares">
        <div class="popularestexto">
          Categorías populares
        </div>
        <div class="popularesdiv">
          <div class="populares1">
            <div class="populares11">
              <img src={populares1} alt="" style={{ resizeMode: 'contain', height: 48, width: 48, }} />
              <div class="popularestexto2">Carros, Motos y Otros</div>
            </div>
            <div class="populares11">
              <img src={populares2} alt="" style={{ resizeMode: 'contain', height: 48, width: 48, }} />
              <div class="popularestexto2">Celulares y Teléfonos</div>
            </div>
          </div>
          <div class="populares2">
            <div class="populares11">
              <img src={populares3} alt="" style={{ resizeMode: 'contain', height: 48, width: 48, }} />
              <div class="popularestexto2">Computación</div>
            </div>
            <div class="populares11">
              <img src={populares4} alt="" style={{ resizeMode: 'contain', height: 48, width: 48, }} />
              <div class="popularestexto2">Belleza y Cuidado Personal</div>
            </div>
          </div>
          <div class="populares3">
            <div class="populares11">
              <img src={populares5} alt="" style={{ resizeMode: 'contain', height: 48, width: 48, }} />
              <div class="popularestexto2">Ropa y Accesorios</div>
            </div>
            <div class="populares11">
              <img src={populares6} alt="" style={{ resizeMode: 'contain', height: 48, width: 48, }} />
              <div class="popularestexto2">Deportes y Fitness</div>
            </div>
          </div>
          <div class="populares4">
            <div class="populares11">
              <img src={populares7} alt="" style={{ resizeMode: 'contain', height: 48, width: 48, }} />
              <div class="popularestexto2">Hogar y Muebles</div>
            </div>
            <div class="populares11">
              <img src={populares8} alt="" style={{ resizeMode: 'contain', height: 48, width: 48, }} />
              <div class="popularestexto2">Electrónica, Audio<br></br>y Video</div>
            </div>
          </div>
          <div class="populares5">
            <div class="populares11">
              <img src={populares9} alt="" style={{ resizeMode: 'contain', height: 48, width: 48, }} />
              <div class="popularestexto2">Accesorios<br></br>para Vehículos</div>
            </div>
            <div class="populares11">
              <img src={populares10} alt="" style={{ resizeMode: 'contain', height: 48, width: 48, }} />
              <div class="popularestexto2">Consolas y Videojuegos</div>
            </div>
          </div>
          <div class="populares6">
            <div class="populares11">
              <img src={populares11} alt="" style={{ resizeMode: 'contain', height: 48, width: 48, }} />
              <div class="popularestexto2">Electrodomésticos</div>
            </div>
            <div class="populares11">
              <img src={populares12} alt="" style={{ resizeMode: 'contain', height: 48, width: 48, }} />
              <div class="popularestexto2">Juegos y Juguetes</div>
            </div>
          </div>
          <div class="populares7">
            <div class="populares11">
              <img src={populares13} alt="" style={{ resizeMode: 'contain', height: 48, width: 48, }} />
              <div class="popularestexto2">Cámaras y Accesorios</div>
            </div>
            <div class="populares11">
              <img src={populares14} alt="" style={{ resizeMode: 'contain', height: 48, width: 48, }} />
              <div class="popularestexto2">Herramientas</div>
            </div>
          </div>
        </div>
      </div>

      <div class="fin">
        <div class="findiv">
          <div class="fin1">
            <img src={creditcard} alt="" style={{ resizeMode: 'contain', height: 46, width: 66, paddingLeft: 168 }} />
            <div class="fin1texto1">Paga con tarjeta o en efectivo</div>
            <div class="fin1texto2">Con Mercado Pago, paga en cuotas y aprovecha la comodidad de financiación que te da tu banco, o hazlo con efectivo en puntos de pago. ¡Y siempre es seguro!</div>
            <div class="fin1texto3">Cómo pagar con Mercado Pago</div> 
          </div>
          <div class="fin2">
            <div class="pseudofin1"> </div>
            <img src={shipping} alt="" style={{ resizeMode: 'contain', height: 46, width: 66, paddingLeft: 169  }} />
            <div class="fin2texto1" style={{paddingLeft: 13}}>Envío gratis desde $ 90.000</div>
            <div class="fin2texto2">Con solo estar registrado en Mercado<br></br>Libre, tienes envíos gratis en miles de productos seleccionados.</div>
            <div class="fin2texto3" style={{top: 200}}>Conoce más sobre este beneficio</div>
            <div class="pseudofin2"> </div>
          </div>
          <div class="fin3">
            <img src={protectedsvg} alt="" style={{ resizeMode: 'contain', height: 46, width: 66, paddingLeft: 169 }} />
            <div class="fin3texto1" style={{paddingLeft: 13}}>Seguridad, de principio a fin</div>
            <div class="fin3texto2">¿No te gusta? ¡Devuélvelo! En Mercado<br></br>Libre, no hay nada que no puedas hacer, porque estás siempre protegido.</div>
            <div class="fin3texto3" style={{top: 200, paddingLeft: 40}}>Cómo te protegemos</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content