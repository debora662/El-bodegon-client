import LoginButton from "../LogInButton/LogInButton";
import { Carrousel } from "../../Carrousel/Carrousel";

const LogInPage = () => {
  const images = [
    {
      id: "1",
      title: "CocaCola",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Bouteille_de_Coca-Cola_d%27un_litre_cinq_001.jpg/220px-Bouteille_de_Coca-Cola_d%27un_litre_cinq_001.jpg",
    },
    {
      id: "2",
      title: "Fanta",
      image:
        "https://www.pngplay.com/wp-content/uploads/12/Fanta-PNG-HD-Free-File-Download.png",
    },
    {
      id: "3",
      title: "7-Up",
      image:
        "https://www.nicepng.com/png/detail/916-9161554_7up-photo-png-7up-png.png",
    },
    {
      id: "4",
      title: "Bife de chorizo",
      image:
        "https://ranchera.com.co/wp-content/uploads/2021/10/BIFE-CHORIZO.png",
    },
    {
      id: "5",
      title: "Chinchulines",
      image:
        "https://sonymelona.com/wp-content/uploads/2021/07/Chinchulines.png",
    },
    {
      id: "6",
      title: "Matambre",
      image:
        "https://d21klxpge3tttg.cloudfront.net/wp-content/uploads/2022/04/Matambre-with-a-Cajun-Twist.jpg",
    },
    {
      id: "7",
      title: "Hot Dog con aderezo",
      image: "https://www.deananddennys.com/menu-hotdogs#images-1",
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
      image: "https://www.deananddennys.com/menu-hotdogs#images-2",
    },
    {
      id: "10",
      title: "Matambre",
      image: "https://www.deananddennys.com/menu-hotdogs#images-3",
    },
  ];
  return (
    <div>
      <h1>Logeate</h1>
      <LoginButton />
      <button>OFERTAS</button>
      <Carrousel images={images} />
      <div>
        Contador de imagenes
      </div>
    </div>
  );
};

export default LogInPage;
