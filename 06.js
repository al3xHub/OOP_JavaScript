class Arma{
    constructor(nombre,poder,municion){
        this.nombre=nombre
        this.poder=poder
        this.municion=municion
    }
}
rifle= new Arma("rifle",10,50)

function atacar(objetivo){
    return "Te voy a atacar con un "+rifle.nombre+" que tiene "+rifle.poder+" de poder y "+rifle.municion+" balas."
}

console.log(atacar(rifle));