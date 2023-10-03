class Persona{
    constructor(nombre,ocupacion,edad) {
        this.nombre=nombre
        this.ocupacion=ocupacion
        this.edad=edad
    }
}

persona=new Persona("Maria José","Profesora",40);

function saludar(persona){
    return "Hola mi nombre es "+persona.nombre+ " tengo "+persona.edad+" años y soy "+persona.ocupacion;
}

console.log(saludar(persona));