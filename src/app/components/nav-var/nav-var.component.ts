import { Component, OnInit } from '@angular/core';
import { fade } from 'src/app/animations/fade';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-nav-var',
  templateUrl: './nav-var.component.html',
  styleUrls: ['./nav-var.component.css'],
  animations:[
    fade
  ],

})
export class NavVarComponent implements OnInit {
buscar:boolean = false;
moneda:string="";

  constructor() {

  }

  ngOnInit(): void {
  }
  busqueda(){

    this.buscar=!this.buscar;

  }

}
