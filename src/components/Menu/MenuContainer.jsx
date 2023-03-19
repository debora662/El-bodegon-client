import Cards from "../Cards/Cards"
// import Card from "../Card/Card";
const MenuContainer = () => {  
  // const asados =[
  //   {
  //     "name": "Asado de tira",
  //     "price": 15,
  //     "description": "Una porción de costillas de res asadas a la parrilla, generalmente sazonadas con sal gruesa y servidas con chimichurri o salsa criolla.",
  //     "image": "https://dojiw2m9tvv09.cloudfront.net/35715/product/asado-de-tiracrudo9739.jpg",
  //     "category": "Asados",
  //     "rating": 0,
  //     "comments": []
  //   },
  //   {
  //     "name": "Bife de chorizo",
  //     "price": 20,
  //     "description": "Un corte de carne de res grueso, tierno y jugoso, asado a la parrilla y servido con ensalada mixta o papas fritas. ",
  //     "image": "https://ranchera.com.co/wp-content/uploads/2021/10/BIFE-CHORIZO.png",
  //     "category": "Asados",
  //     "rating": 0,
  //     "comments": []
  //   },
  //   {
  //     "name": "Vacío",
  //     "price": 18,
  //     "description": "Un corte de carne de res con forma de abanico, asado a la parrilla y servido con puré de papas o batatas asadas.",
  //     "image": "https://lamansion.com.mx/wp-content/uploads/2021/09/vacio-corte.png",
  //     "category": "Asados",
  //     "rating": 0,
  //     "comments": []
  //   },
  //   {
  //     "name": "Chinchulines",
  //     "price": 16,
  //     "description": "Tripas de res asadas a la parrilla, generalmente marinadas con limón y especias, y servidas como aperitivo o acompañamiento.",
  //     "image": "https://sonymelona.com/wp-content/uploads/2021/07/Chinchulines.png",
  //     "category": "Asados",
  //     "rating": 0,
  //     "comments": []
  //   },
  //   {
  //     "name": "Mollejas",
  //     "price": 19,
  //     "description": "Una porción de glándulas salivales de res asadas a la parrilla, generalmente servidas como aperitivo o plato principal.",
  //     "image": "https://www.gastrolabweb.com/u/fotografias/m/2021/6/30/f638x638-15555_73722_5050.jpg",
  //     "category": "Asados",
  //     "rating": 0,
  //     "comments": []
  //   },
  //   {
  //     "name": "Entraña",
  //     "price": 17,
  //     "description": "Un corte de carne de res tierno y jugoso, asado a la parrilla y generalmente servido con papas fritas y ensalada.",
  //     "image": "https://canalcocina.es/medias/images/1210_Los22MinutosDeJulius_EntranaLimaJalapenos.jpg",
  //     "category": "Asados",
  //     "rating": 0,
  //     "comments": []
  //   },
  //   {
  //     "name": "Provoleta",
  //     "price": 25,
  //     "description": "Un corte de carne de res que se encuentra entre la costilla y la panceta, generalmente marinado con hierbas y especias, enrollado y asado a la parrilla. Se sirve en rodajas finas y se puede acompañar con ensaladas o papas fritas.",
  //     "image": "https://comidatipica.blog/wp-content/uploads/2020/10/Provoleta.jpg",
  //     "category": "Asados",
  //     "rating": 0,
  //     "comments": []
  //   },
  //   {
  //     "name": "Matambre",
  //     "price": 20,
  //     "description": "Un trozo de queso provolone asado a la parrilla, generalmente sazonado con orégano y servido como aperitivo o acompañamiento",
  //     "image": "https://d21klxpge3tttg.cloudfront.net/wp-content/uploads/2022/04/Matambre-with-a-Cajun-Twist.jpg",
  //     "category": "Asados",
  //     "rating": 0,
  //     "comments": []
  //   },
  //   {
  //     "name": "Pollo asado",
  //     "price": 15,
  //     "description": " Un pollo entero asado a la parrilla con hierbas y especias, generalmente servido con papas asadas y ensalada mixta. ",
  //     "image": "https://www.recetasnestle.cl/sites/default/files/srh_recipes/4d95ee421422145ef856c040751d4386.jpg",
  //     "category": "Asados",
  //     "rating": 0,
  //     "comments": []
  //   },
  //   {
  //     "name": "Choripán",
  //     "price": 18,
  //     "description": " consiste en una salchicha de chorizo asada a la parrilla y servida en un pan francés. Puede ser acompañado con diferentes salsas y aderezos, como chimichurri o salsa criolla.",
  //     "image": "https://www.expogourmetmagazine.com/uploads/fotos_noticias/2021/04/w500px_23819-184079-recetas-del-mundo-argentina-choripan.jpg",
  //     "category": "Asados",
  //     "rating": 0,
  //     "comments": []
  //   }
  // ]
  return (
    <div>
      {/* {asados.map(asado=>{
        return <Card
          name={asado.name}
          price={asado.price}
          description={asado.description}
          image={asado.image}
          category={asado.category}
          rating={asado.rating}
          comments={asado.comments}
        />
      })} */}
      <h1>Menu</h1>
      <Cards/>
    </div>
  );
};

export default MenuContainer;
