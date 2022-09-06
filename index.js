class Estudiante {
  _nombre = "Jimmy";
  _asignaturas = ["JavaScript", "HTML", "CSS"];

  obtenDatos() {
    return `Mi Nombre es ${this._nombre}, tengo las asignaturas ${this._asignaturas[0]}, ${this._asignaturas[1]} y ${this._asignaturas[2]}`;
  }
}

const estudiante = new Estudiante();

console.log(estudiante.obtenDatos());
