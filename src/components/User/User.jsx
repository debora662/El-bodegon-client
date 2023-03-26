import style from "./User.module.css";
import { Carrousel } from "../Carrousel/Carrousel";
import LoginButton from "../LoginComponents/LoginButton/LoginButton";
import google from "../images/google.png"
import React from "react";
import { createUser } from "../../redux/actions/actions";
import { Formik, Field, Form, ErrorMessage } from "formik"
import { useDispatch } from "react-redux"
import * as Yup from 'yup'
//import { Link } from "react-router-dom";
import Swal from "sweetalert2"

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
  const dispatch = useDispatch()
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
            <Formik
        initialValues={{
            name:"",
            phone: "",
            email: "",
            password: "",
        }}
        onChange={(values) =>{
            console.log(values);
        }}
        onSubmit={(values, actions) => {
            dispatch(createUser(values))
            console.log(values);
            // window.alert("Plato creado correctamente");
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Usuario creado correctamente',
              showConfirmButton: false,
              timer: 5000
            })
        }}
        validationSchema = {Yup.object({
            name: Yup.string().max(15, 'Must be 15 characters or less').required("name is required"),
            phone: Yup.number().required("phone is required").min(10, 'Must be 10 numbers '),
            email: Yup.string().required("Email is required").email('Invalid email address'),
            password: Yup.string().required("password is required"),
        })}
        >

        {({handleSubmit}) => (
            <Form onSubmit={handleSubmit} onChange={()=>{}} className={style.formContainer}>
                <label htmlFor="">Name:</label>
                <Field name="name" placeholder="name" type="name"  />
                <ErrorMessage name="name"/>

                <label htmlFor="">Numero Telefonico: </label>
                <Field name="Numero" placeholder="Numero" type="number" />
                <ErrorMessage name="Numero"/>

                <label htmlFor="">Correo Electronico:</label>
                <Field name="email" placeholder="email"  />
                <ErrorMessage name="email"/>

                <label htmlFor="">Password:</label>
                <Field name="password" placeholder="password"    />
                <ErrorMessage name="password"/>
                


                

                <button type="submit" className={style.button}>Create!</button>
            {/* <Link to="/menu">
                <button className={style.volver}>Volver</button>
            </Link> */}
            </Form>
        )}
        </Formik>
            <br />
            <div class="row text-center mt-10">
                <div class="col-12 mt-30" className={style.google}>
                    <span>Iniciar Sesion Con:</span>
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
