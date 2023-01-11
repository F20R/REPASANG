import { Component } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {

  nombre="Fernando";
  apellido="Rojas";

  edad=20;

  activarinput=true;

  userNY=false;
  textoregistro="No hay nadie :(";

  getRegistrado(){
    this.userNY=false;
  }

  setRegistrado(event:Event){
    //return this.textoregistro="Si! Visita :D";
    //alert("SE ACABA DE REGISTRAR");
    if((<HTMLInputElement>event.target).value=="si"){
      this.textoregistro="usuario entrando con exito";
    }else {
      this.textoregistro="No hay nadie :(";
    }
  }

  /*databusiness(value:String){ //PARA LLAMAR AL DATO INTRODUCIDO EN U.C
  }
  */

  empresa="Microsoft";

  /*
   public getEdad(){
    return this.edad;
  }
   */
}
