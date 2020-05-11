import { Component, OnInit } from '@angular/core';
import { ServiceComentarioService } from '../service/service-comentario.service';
import { ConteudoComentarios } from '../model/comentarios'

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  listaComentarios: ConteudoComentarios[]


  constructor(private serviceComentarioService: ServiceComentarioService) { }

  ngOnInit(){

    this.findallComentarios()

  }

  findallComentarios(){
    this.serviceComentarioService.getAllComentarios().subscribe((resp: ConteudoComentarios [])=>{
      this.listaComentarios = resp
    })
  }

}
