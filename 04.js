class Zombie{
    constructor(nombre, puntosVida, potencia){
        this.nombre=nombre
        this.puntosVida=puntosVida
        this.potencia=potencia  
    }
    
}

Zombie= new Zombie();
Zombie.nombre="Pakito Cruder"
Zombie.puntosVida=200
Zombie.potencia=10

function atacar(Zombie) {
    return "hombre lobo ataca a zombie "+Zombie.nombre+" y le causa "+Zombie.potencia
    +" puntos de daño";
}

console.log(atacar(Zombie));