import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ProyectoWeb';

  pelicula = [
  {
    Titulo: 'Moana 2',
    Fechadelanzamiento: new Date ('2024-03-05'),
    precio: 5.00
  },
  {
    Titulo: 'Lylo y Stich',
    Fechadelanzamiento: new Date ('2025-09-05'),
    precio: 7.00
  },
  {
    Titulo: 'Bad Boy',
    Fechadelanzamiento: new Date ('2025-06-05'),
    precio: 9.00
  }







]
  

}
