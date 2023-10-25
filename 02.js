let persona={
    nombre:"Alejandro",
    ocupacion:"Programador",
    edad:31,
    lugar_de_partida:"Sevilla",
}
persona.saludar = function() {
    console.log("hola me llamo "+persona.nombre+ " y tengo "+persona.edad+" años. Mi ocupación es como "+persona.ocupacion
    +" y vivo en "+persona.lugar_de_partida);
  };

persona.saludar();



