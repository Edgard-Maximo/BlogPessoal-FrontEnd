import { Component, OnInit } from '@angular/core';
import { environment} from './../../environments/environment.prod';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})
export class TemaComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(){
  if(environment.token == ''){
    // alert('sua sessão expirou, faça o login novamente.')
    this.router.navigate(['/entrar'])
  } {
  }
}
}
