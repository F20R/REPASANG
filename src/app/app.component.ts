import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'InicioSesion';
  mensaje = "";
  registrado = false; //PREDETERMINADO
  nombre:String="";
  apellido:String="";
  entradas:object[];


  constructor() {
    this.entradas=[
      {title:"THE GOD"},
      {title:"THE GOD 2"},
      {title:"THE GOD 3"},
      {title:"THE GOD 4"},
    ]
  }
  registradoUsuario(){
    this.registrado =true;

    this.mensaje="registrado correctamente";
  }
}
