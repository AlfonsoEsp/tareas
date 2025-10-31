let texto = '{"extremidades":["brazo", "pierna", "mano"], "tamano":["largo" , "mediano" ,"pequeño" ,ectomorfo" ,"mesomorfo" ,"endomorfo"]}';

const info = JSON.parse(texto);

document.getElementById("hola").innerHTML = info.extremidades [1] + " " + info.tamano [1] ;