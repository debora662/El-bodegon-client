import style from "./LoginPage.module.css"
import LoginButton from "../LoginButton/LoginButton";
import { Carrousel } from "../../Carrousel/Carrousel";

const LoginPage = () => {
  const images = [
    {
      id: "1",
      title: "CocaCola",
      image:
        "https://res.cloudinary.com/dpbrs6n4j/image/upload/v1679536891/Fotos/Imagenes%20para%20subir%20a%20Cloudinary/Imagenes%20para%20subir%20a%20Cloudinary/pngegg_hkx1ku.png",
    },
    {
      id: "2",
      title: "Fanta",
      image:
        "https://res.cloudinary.com/dpbrs6n4j/image/upload/v1679537127/Fotos/Imagenes%20para%20subir%20a%20Cloudinary/Fanta-Orange-Soda-Pack-PNG_tyixa5.png",
    },
    {
      id: "3",
      title: "7-Up",
      image:
        "https://res.cloudinary.com/dpbrs6n4j/image/upload/v1679537345/Fotos/Imagenes%20para%20subir%20a%20Cloudinary/7_up_2_pe2tgh.png",
    },
    {
      id: "4",
      title: "Bife de chorizo",
      image:
        "https://res.cloudinary.com/dpbrs6n4j/image/upload/v1679537346/Fotos/Imagenes%20para%20subir%20a%20Cloudinary/BIFE-CHORIZO_ymfvq7.png",
    },
    {
      id: "5",
      title: "Chinchulines",
      image:
        "https://res.cloudinary.com/dpbrs6n4j/image/upload/v1679537346/Fotos/Imagenes%20para%20subir%20a%20Cloudinary/Chinchulines_dsdmrp.png",
    },
    {
      id: "6",
      title: "Matambre",
      image:
        "https://res.cloudinary.com/dpbrs6n4j/image/upload/v1679537347/Fotos/Imagenes%20para%20subir%20a%20Cloudinary/Matambre-with-a-Cajun-Twist_vzjaod.jpg",
    },
    {
      id: "7",
      title: "Hot Dog con aderezo",
      image: "https://editorialtelevisa.brightspotcdn.com/dims4/default/d6dbb56/2147483647/strip/true/crop/996x560+2+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fk2-prod-editorial-televisa.s3.amazonaws.com%2Fbrightspot%2Fwp-content%2Fuploads%2F2019%2F04%2Fhot-dog-aderezo-tocino.png",
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
