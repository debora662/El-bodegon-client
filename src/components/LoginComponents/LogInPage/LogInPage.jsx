import style from "./LoginPage.module.css"
import LoginButton from "../LoginButton/LoginButton";
import { Carrousel } from "../../Carrousel/Carrousel";

const LoginPage = () => {
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
      title: "7-Up",
      image:
        "https://res.cloudinary.com/dpbrs6n4j/image/upload/v1679543974/Fotos/Imagenes%20para%20subir%20a%20Cloudinary/7_up_2_xii2da.png",
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
      image: "https://res.cloudinary.com/dpbrs6n4j/image/upload/v1679544650/Fotos/Imagenes%20para%20subir%20a%20Cloudinary/Hot_Dogs_igzyjk.png",
    },
    {
      id: "8",
      title: "MatHot Dog con lluvia de papasambre",
      image:
        "https://deananddennys.com/stage/timthumb.php?src=./contenidos/1612363728.jpg&h=800&w=800&zc=2",
    },
    {
      id: "9",
      title: "Hot Dog Cheddar",
      image: "https://hips.hearstapps.com/delish/assets/18/09/1519846813-grilled-cheese-dogs-horizontal.jpg",
    },
    {
      id: "10",
      title: "Matambre",
      image: "https://resizer.glanacion.com/resizer/-KMEJM4e3-aA9VMkC6OMkjS6He4=/768x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/OYH2MRX4EVACVFEUAFBSLGN6VI.jpeg",
    },
  ];
  return (
    <div>

      <LoginButton />

      <Carrousel images={images} className={style.Carrousel} />

    </div>
  );
};

export default LoginPage;
