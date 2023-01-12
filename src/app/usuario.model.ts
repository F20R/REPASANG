export class UsuarioModel{

  private nombre = "";
  private apellido = "";
  private email = "";
  private genero:String="";
  private edad:number=0;


  constructor(nombre: string, apellido: string, email: string, genero: String, edad: number) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.genero = genero;
    this.edad = edad;
  }
}
