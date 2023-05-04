import { Component } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import { Cuadros } from 'src/app/interface/cuadros';
export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
  subtasks2?: Task[];
  subtasks3?: Task[];
  subtasks4?: Task[];
}

@Component({
  selector: 'app-galeria',

  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent {
  listcuadros:Cuadros[]=[
    {
      id:1,
    nombre:"Alfonso",
    precio:400,
    fecha:"Cuba la Habana 2022",
    alto:400,
    ancho:400,
  img:"../assets/img/Cafe Promotion Poster Background Material.jfif"},
  {
    id:1,
  nombre:"Alfonso",
  precio:400,
  fecha:"Cuba la Habana 2022",
  alto:400,
  ancho:400,
img:"../assets/img/Cafe Promotion Poster Background Material.jfif"},
{
  id:1,
nombre:"Alfonso",
precio:400,
fecha:"Cuba la Habana 2022",
alto:400,
ancho:400,
img:"../assets/img/Cafe Promotion Poster Background Material.jfif"},
{
  id:1,
nombre:"Alfonso",
precio:400,
fecha:"Cuba la Habana 2022",
alto:400,
ancho:400,
img:"../assets/img/Cafe Promotion Poster Background Material.jfif"},
{
  id:1,
nombre:"Alfonso",
precio:400,
fecha:"Cuba la Habana 2022",
alto:400,
ancho:400,
img:"../assets/img/Cafe Promotion Poster Background Material.jfif"},
{
  id:1,
nombre:"Alfonso",
precio:400,
fecha:"Cuba la Habana 2022",
alto:400,
ancho:400,
img:"../assets/img/Cafe Promotion Poster Background Material.jfif"},
{
  id:1,
nombre:"Alfonso",
precio:400,
fecha:"Cuba la Habana 2022",
alto:400,
ancho:400,
img:"../assets/img/Cafe Promotion Poster Background Material.jfif"},
{
  id:1,
nombre:"Alfonso",
precio:400,
fecha:"Cuba la Habana 2022",
alto:400,
ancho:400,
img:"../assets/img/Cafe Promotion Poster Background Material.jfif"},
{
  id:1,
nombre:"Alfonso",
precio:400,
fecha:"Cuba la Habana 2022",
alto:400,
ancho:400,
img:"../assets/img/Cafe Promotion Poster Background Material.jfif"},
{
  id:1,
nombre:"Alfonso",
precio:400,
fecha:"Cuba la Habana 2022",
alto:400,
ancho:400,
img:"../assets/img/Cafe Promotion Poster Background Material.jfif"},

  ];
  minprecio:number=0;
  maxprecio:number=10000;
  alto:number=0;
  ancho:number=0;
  task:Task = {
    name: 'Mostrar todas las obras',
    completed: false,
    color: 'warn',
    subtasks: [
      {name: 'Fotografia', completed: false, color: 'accent'},
      {name: 'Pintura', completed: false, color: 'accent'},
      {name: 'Dibujo', completed: false, color: 'accent'},
    ],
    subtasks2: [
      {name: 'Olleo', completed: false, color: 'accent'},
      {name: 'Collage', completed: false, color: 'accent'},
      {name: 'Pastel', completed: false, color: 'accent'},
      {name: 'Pastel al oleo', completed: false, color: 'accent'},
    ],
    subtasks3: [
      {name: 'Paisajismo', completed: false, color: 'accent'},
      {name: 'Bodegon', completed: false, color: 'accent'},
      {name: 'Conceptual', completed: false, color: 'accent'},
      {name: 'Desnudo', completed: false, color: 'accent'},
    ],
    subtasks4: [
      {name: 'La Habana', completed: false, color: 'accent'},

    ],
  };

  allComplete: boolean = false;

  updateAllComplete() {
    this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
    this.allComplete = this.task.subtasks2 != null && this.task.subtasks2.every(t => t.completed);
    this.allComplete = this.task.subtasks3 != null && this.task.subtasks3.every(t => t.completed);
    this.allComplete = this.task.subtasks4 != null && this.task.subtasks4.every(t => t.completed);
  }

  someComplete(): boolean {
    if (this.task.subtasks == null ) {
      return false;
    }

    if ( this.task.subtasks2 == null) {
      return false;
    }
    if ( this.task.subtasks3 == null) {
      return false;
    }
    if ( this.task.subtasks4 == null) {
      return false;
    }
    return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete || this.task.subtasks2.filter(t => t.completed).length > 0 && !this.allComplete || this.task.subtasks3.filter(t => t.completed).length > 0 && !this.allComplete || this.task.subtasks4.filter(t => t.completed).length > 0 && !this.allComplete ;
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.task.subtasks == null ||this.task.subtasks2 == null ||this.task.subtasks3 == null ||this.task.subtasks4 == null ) {
      return;
    }
    this.task.subtasks.forEach(t => (t.completed = completed));
    this.task.subtasks2.forEach(t => (t.completed = completed));
    this.task.subtasks3.forEach(t => (t.completed = completed));
    this.task.subtasks4.forEach(t => (t.completed = completed));
  }
  formatLabel(value: number): string {
    if (value >= 400) {
      return Math.round(value) + '+';
    }

    return `${value}`;
  }
  formatLabel2(value: number): string {
    if (value >= 1000) {
      return (value/1000) + 'k';
    }

    return `${value}`;
  }
}
