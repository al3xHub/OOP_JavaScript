class Persona{
    nombre="Alejandro";
    ocupacion="Programador";
    edad=31;
    lugar_de_partida="Sevilla";
}
Persona=new Persona();

function saludo(){
    return "hola me llamo "+Persona.nombre+ " y tengo "+Persona.edad+" años. Mi ocupación es como "+Persona.ocupacion
    +" y vivo en "+Persona.lugar_de_partida;
}
console.log(saludo());



