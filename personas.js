//=========  PERSONA  =============
//  *Creacion de Objeto Padre (Persona)
function Persona(pila, apellido, edad, genero, intereses){
    this.nombre = {
        'pila'    : pila,
        'apellido': apellido
    };

    this.edad      = edad;
    this.genero    = genero;
    this.intereses = intereses;
};
//  *Funciones para el Objeto Padre (Persona)
Persona.prototype.bio = function(){
        console.log('Yo no soy esa');
};
//  *Creacion del Objeto Hijo (Profesor)
function Profesor(pila, apellido, edad, genero, intereses, materias){
    Persona.call(this, pila, apellido, edad, genero, intereses);
//  *Parametros adicionales para el Objeto Hijo (Profesor)    
    this.materias = materias;

};
Profesor.prototype             = Object.create(Persona.prototype);
Profesor.prototype.constructor = Profesor;

//  *funciones para el Objeto Hijo (Profesor)
Profesor.prototype.saludo = function(){
    console.log('Queaces?');
};
const ale = new Profesor('Maria Alejandra', 'Lynch', 
  60, 'Mujer', ['Musica', 'Lectura', 'Cocina'], ['Fundamentos', 'Matematicas', 'Historia']);
 