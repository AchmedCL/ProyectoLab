import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  horarios: Array<string> = ['Horario ayudantes', 'Horario laboratorios', 'Horario salas'];
  ngOnInit(): void {
  }

}
