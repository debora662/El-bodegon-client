import style from "./Home.module.css";

import { Link } from 'react-router-dom';
import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from "react-redux";
import { createAuth0User } from "../../redux/actions/actions";
import { ShoppingCart } from "../ShoppingCart/ShoppingCart";


const Home = () => {
  const { user } = useAuth0()

  const dispatch = useDispatch()
  useEffect(()=>{
    if(user){
      dispatch(createAuth0User(user))
    }
  },[user])
  return (
    <div className={style.home1}>
      <ShoppingCart/>
      <div className={style.home}>
        <h1>
          Tu restaurante favorito <br /> ahora esta en linea
        </h1>

        <p className={style.descripcion}>
          ¿Buscas la comodidad de disfrutar de la mejor comida sin salir de
          casa? ¡No busques más! Nuestro servicio de restaurante online ofrece
          una amplia variedad de opciones deliciosas, desde platos principales
          hasta postres tentadores, todo preparado con los ingredientes más
          frescos y de alta calidad.{" "}
        </p>
        {/* Además, puedes ordenar en línea fácilmente y programar la entrega a la hora que más te convenga. ¡Permítenos llevar la experiencia gastronómica a tu puerta y haz que cada comida sea una deliciosa experiencia en tu hogar!" */}
        <img className={style.logo}
          src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/restaurant-logo-design-template-b281aeadaa832c28badd72c1f6c5caad_screen.jpg?ts=1595421543"
          alt=""
        />
      </div>

      <div className={style.reseñas}>
        <div>
          <h4>Gran catalogo</h4>
          <p className={style.reseña1}>
            Encuentra gran variedades con mas de 12 categorias <br /> de comidas
            , postres y mas que tenemos para ti
          </p>
        </div>
        <div className={style.sub2}>
          <h4>Gran calidad</h4>
          <p className={style.reseña2}>
            Para nosotros, la calidad es primordial. Por ello, utilizamos
            únicamente ingredientes cuidadosamente seleccionados para ofrecerte
            la mejor experiencia culinaria{" "}
          </p>
        </div>

        <br />
        

        <div>
          <h4>Los platos mas deliciosos</h4>
          <p className={style.reseña3}>
            Si eres un amante de la buena comida, no puedes perderte la
            oportunidad <br /> de probar nuestros increíbles sabores, que te
            sorprenderán desde el <br /> primer bocado{" "}
          </p>
        </div>
        <div className={style.sub2}>
          <h4>
            Disfruta de nuestra deliciosa comida en casa con nuestro servicio de
            entrega a domicilio
          </h4>
          <p className={style.reseña4}>
            Sabemos que a veces es difícil encontrar tiempo para salir a comer,
            por eso ofrecemos entrega a domicilio para que puedas disfrutar de
            nuestra comida desde la comodidad de tu hogar
          </p>
        </div>
      </div>

      <div className={style.platosLink}>
        <p className={style.platos}>
          ¿Quieres Conocer Nuestros Menú? Haz click aquí
        </p>

        <Link to={'/menu'}>
        <button className={style.categorias}>Ir a Categorias</button>
        </Link>

        <img src="https://parrilladasargentinas.com/wp-content/uploads/2018/05/Rezept-Tipp-vom-GRILLER-T-Bone-Steak-1024x576-ec63ff241cb89cff.jpg" className={style.carne} alt="Carne" />
      </div>
    </div>
  );
};

export default Home;
