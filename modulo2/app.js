var hoteles = {
    IBI: {
    name: "IBI",
    location: "MALAGA",
    img:
      "https://www.ahstatic.com/photos/6350_ho_00_p_1024x768.jpg",
  },

   NH: {
    name: "NH",
    location: "MALAGA",
    img:
      "https://z.cdrst.com/foto/hotel-sf/b68/granderesp/nh-malaga-general-d36b6f6.jpg",
  },
};
  var stars = {
    una:
      "<span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
    dos:
      "<span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
    tres:
      "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span>",
    cuatro:
      "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span>",
    cinco:
      "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>",
  };
   
  var selectedHotel = prompt( "Indique hotel sobre el que quiere hacer la reseña: IBI o NH " );

  document.getElementById("name-hotel").innerHTML ="Hotel " + hoteles[selectedHotel].name;
  document.getElementById("location-hotel").innerHTML ="Ubicado en " + hoteles[selectedHotel].location;
  document.getElementById("img-hotel").src = hoteles[selectedHotel].img;

  var puntos = prompt("Puntuación: una, dos, tres, cuatro o cinco estrellas");

  document.getElementById("puntos").innerHTML = stars[puntos];
  console.log(puntos)

  var anonimo = confirm(" ¿Quiere que la reseña sea anónima? ");
document.getElementById("anonimo").checked = anonimo;