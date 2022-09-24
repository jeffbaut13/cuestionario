let baseDePreguntas = [

  {
    pregunta: "¿Que residuos tirarías en la bolsa blanca de reciclaje?",
    ayuda:"territorio",
    respuesta: "<i class='fa-solid fa-circle'></i><span style='padding-left:4%;'><strong>Botellas </strong>de agua, cartón, vidrio, metal</span>",
    distractores: [
      "<i class='fa-solid fa-circle'></i><span style='padding-left:4%;'><strong>Residuos</strong> de comida, cascaras de huevo</span>", 
      "<i class='fa-solid fa-circle'></i><span style='padding-left:4%;'><strong>Servilletas</strong> usadas y papel higiénico</span>",
      "<i style='display:none;' class='fa-solid fa-circle'></i><span style='display:none;padding-left:4%;'></span>"
    ]
  },
  {
    pregunta: "¿En cuál bolsa tirarías las botellas PET aceite, botellas PET color, empaques de lechuga, arándanos y fresas?",
    respuesta: "<i class='fa-solid fa-circle'></i><span style='padding-left:4%;'><strong>Blanca</strong></span>",
    distractores: [
      "<i class='fa-solid fa-circle'></i><span style='padding-left:4%;'><strong>Verde</strong></span>", 
      "<i class='fa-solid fa-circle'></i><span style='padding-left:4%;'><strong>Negra</strong></span>",
      "<i style='display:none;' class='fa-solid fa-circle'></i><span style='display:none;padding-left:4%;'></span>"
    ]
  },
  {
    pregunta: "¿Por que crees que una botella que no es transparente tiene retos en el reciclaje?",
    respuesta: "<i class='fa-solid fa-circle'></i><span style='padding-left:4%;'>por su <strong>color</strong></span>",
    distractores: [
      "<i class='fa-solid fa-circle'></i><span style='padding-left:4%;'>Por el <strong>material</strong></span>", 
      "<i class='fa-solid fa-circle'></i><span style='padding-left:4%;'>Porque está <strong>sucia</strong></span>",
      "<i class='fa-solid fa-circle'></i><span style='padding-left:4%;'>Por su <strong>contenido</strong></span>"
    ],
  },
  {
    pregunta: "¿Por que crees que las botellas de aceite tienen retos en su reciclaje?",
    respuesta: "<i class='fa-solid fa-circle'></i><span style='padding-left:4%;'>Porque quedan impregnadas de <strong>aceite</strong></span>",
    distractores: [
      "<i class='fa-solid fa-circle'></i><span style='padding-left:4%;'>Por el <strong>material</strong></span>",
      "<i class='fa-solid fa-circle'></i><span style='padding-left:4%;'>Porque existe <strong>poco inventario </strong>en Colombia</span>",
      "<i style='display:none;' class='fa-solid fa-circle'></i><span style='display:none;padding-left:4%;'></span>"
    ],
  },
  {
    pregunta: "¿Crees que los empaques donde viene la lechuga, fresas, arándanos tienen retos en su reciclaje?",
    respuesta: "<i class='fa-solid fa-circle'></i><span style='padding-left:4%;'><strong>si</strong></span>",
    distractores: [
      "<i class='fa-solid fa-circle'></i><span style='padding-left:4%;'><strong>No</strong></span>", 
      "<i style='display:none;' class='fa-solid fa-circle'></i><span style='display:none;padding-left:4%;'></span>",
      "<i style='display:none;' class='fa-solid fa-circle'></i><span style='display:none;padding-left:4%;'></span>"
    ],
  },
  {
    pregunta: "¿Sabes que pasa con los residuos que están quedando en los rellenos sanitarios?",
    respuesta: "<i class='fa-solid fa-circle'></i><span style='padding-left:4%;'>Son incinerados y <strong>generan contaminación</strong></span>",
    distractores: [
      "<i class='fa-solid fa-circle'></i><span style='padding-left:4%;'><strong>No pasa nada,</strong> los residuos se degradan solos</span>", 
      "<i class='fa-solid fa-circle'></i><span style='padding-left:4%;'>Los tiran al agua y la <strong>contaminan</strong></span>", 
      "<i style='display:none;' class='fa-solid fa-circle'></i><span style='display:none;padding-left:4%;'></span>"
    ],
  },
  {
    pregunta: "¿Cuantos recicladores crees que hay en Colombia?",
    respuesta: "<i class='fa-solid fa-circle'></i><span style='padding-left:4%;'><strong>40.000</strong></span>",
    distractores: [
      "<i class='fa-solid fa-circle'></i><span style='padding-left:4%;'><strong>10.000</strong></span>", 
      "<i class='fa-solid fa-circle'></i><span style='padding-left:4%;'><strong>25.000</strong></span>", 
      "<i style='display:none;' class='fa-solid fa-circle'></i><span style='display:none;padding-left:4%;'></span>"
    ],
  },
  {
    pregunta: "¿Sabes que camino toma el reciclaje del PET cuando sale de tu casa?",
    respuesta: "<i class='fa-solid fa-circle'></i><span style='padding-left:4%;'>Reciclador - Bodega de reciclaje - Molino y lavado - Resinas de <strong>Andercol</strong></span>",
    distractores: [
      "<i class='fa-solid fa-circle'></i><span style='padding-left:4%;'>Reciclador - Molino y lavado - Resinas de <strong>Andercol</strong></span>", 
      "<i class='fa-solid fa-circle'></i><span style='padding-left:4%;'>Reciclador - Molino y lavado - Bodega de reciclaje - Resinas de <strong>Andercol</strong></span>", 
      "<i style='display:none;' class='fa-solid fa-circle'></i><span style='display:none;padding-left:4%;'></span>"
    ],
  },
  {
    pregunta: "EL RECICLAJE ES EL CAMINO",
    respuesta: "<div class='conoce-resultado'><button style='font-size:2rem;'>Conoce tu resultado</button></div>",
    distractores: [
      "<i style='display:none;' class='fa-solid fa-circle'></i><span style='display:none;padding-left:4%;'></span>", 
      "<i style='display:none;' class='fa-solid fa-circle'></i><span style='display:none;padding-left:4%;'></span>", 
      "<i style='display:none;' class='fa-solid fa-circle'></i><span style='display:none;padding-left:4%;'></span>"
    ],
  },
];
