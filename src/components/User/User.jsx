import style from "./User.module.css";
import { Carrousel } from "../Carrousel/Carrousel";
import LoginButton from "../LoginComponents/LoginButton/LoginButton";
import google from "../images/google.png"
import React from "react";

const User = () => {
  const images = [
    {
      id: "1",
      title: "CocaCola",
      image:
        "https://res.cloudinary.com/dpbrs6n4j/image/upload/v1679543975/Fotos/Imagenes%20para%20subir%20a%20Cloudinary/pngegg_lznvj9.png",
    },
    {
      id: "2",
      title: "Fanta",
      image:
        "https://res.cloudinary.com/dpbrs6n4j/image/upload/v1679543975/Fotos/Imagenes%20para%20subir%20a%20Cloudinary/Fanta-Orange-Soda-Pack-PNG_ovx2et.png",
    },
    {
      id: "3",
      title: "Tarta Pavlova",
      image:
        "https://res.cloudinary.com/dpbrs6n4j/image/upload/v1679583726/Fotos/Imagenes%20para%20subir%20a%20Cloudinary/entre-postres-mas-famosos-del-mundo-esta-la-tarta-pavlova_jmmdy4.jpg",
    },
    {
      id: "4",
      title: "Bife de chorizo",
      image:
        "https://res.cloudinary.com/dpbrs6n4j/image/upload/v1679543974/Fotos/Imagenes%20para%20subir%20a%20Cloudinary/BIFE-CHORIZO_lborzg.png",
    },
    {
      id: "5",
      title: "Chinchulines",
      image:
        "https://res.cloudinary.com/dpbrs6n4j/image/upload/v1679543975/Fotos/Imagenes%20para%20subir%20a%20Cloudinary/Chinchulines_ksgcl0.png",
    },
    {
      id: "6",
      title: "Matambre",
      image:
        "https://res.cloudinary.com/dpbrs6n4j/image/upload/v1679543975/Fotos/Imagenes%20para%20subir%20a%20Cloudinary/Matambre_o8iuys.png",
    },
    {
      id: "7",
      title: "Hot Dog con aderezo",
      image:
        "https://res.cloudinary.com/dpbrs6n4j/image/upload/v1679544650/Fotos/Imagenes%20para%20subir%20a%20Cloudinary/Hot_Dogs_igzyjk.png",
    },
    {
      id: "8",
      title: "MatHot Dog con lluvia de papasambre",
      image:
        "https://res.cloudinary.com/dpbrs6n4j/image/upload/v1679583198/Fotos/Imagenes%20para%20subir%20a%20Cloudinary/Hot_Dogs_Pasambre_rpqjpu.png",
    },
    {
      id: "9",
      title: "Croquetas de Espinaca",
      image:
        "https://res.cloudinary.com/dpbrs6n4j/image/upload/v1679583508/Fotos/Imagenes%20para%20subir%20a%20Cloudinary/Croquetas-espinaca_ii9ksa.jpg",
    },
    {
      id: "10",
      title: "Matambre",
      image:
        "https://res.cloudinary.com/dpbrs6n4j/image/upload/v1679583630/Fotos/Imagenes%20para%20subir%20a%20Cloudinary/Tiramisu_qljmnm.jpg",
    },
  ];
  return (
    <div className={style.body}>
      <div class="conteiner w-5 p-5 rounded shadow" className={style.container}>
        <div class="row align-items-stretch">
          <div class="col food  d-none d-lg-block col-md-6 col-lg-6 col-xl-6 rounded">
            {/* <img src={food} width="600" alt=""></img> */}
            <Carrousel images={images} className={style.Carrousel} />
          </div>
          <div class="col  p-5 rounded-end">
            <div class="text-end">
              <img src="" width="48" alt=""></img>
            </div>
            <h2 class="fw-bold text-center py-5 ">Crear Cuenta</h2>
            <form action="#" class="mb-25">
              <div class="mb-4">
                <label form="email" class="form-label">
                  Correo Electronico
                </label>
                <input type="email" class="form-control" name="email"></input>
              </div>
              <div class="mb-4">
                <label form="password" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  name="password"
                ></input>
              </div>
              <div class="mb-4">
				<label for="nombre">Nombre:</label>
				<input type="text" class="form-control" id="nombre" name="nombre" required/>
			</div>
			<div class="mb-4">
				<label for="telefono">Teléfono:</label>
				<input type="tel" class="form-control" id="telefono" name="telefono" required/>
			</div>
              <div class="d-grid">
                <button type="submit" class="btn btn-primary">
                  Registrarse
                </button>

                <div class="row">
                <div class="col">
                  
                </div>
                
              </div>
              </div>
            </form>
            <br />
            <div class="row text-center mt-10">
                <div class="col-12 mt-30" className={style.google}>
                    <span>Iniciar Sesion con:</span>
                </div>
            </div>
            <div class="col-12 mt-10 ">
                  <button class="btn btn-outline-danger w-100 my-1">
                    <div class="row align-items-center">
                        <br />
                      <div class="col-1 d-none d-md-block">
                        <img src={google} width="32" alt=""></img>
                      </div>
                      <div class="col-6 col-md-10 text-center">
                        <LoginButton />
                      </div>
                    </div>
                  </button>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
