import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { DepartmentComponent } from './pages/department/department.component';
import { AccordionComponent } from './units/accordion/accordion.component';
import { CarouselComponent } from './units/carousel/carousel.component';
import { CardComponent } from './units/card/card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,AccordionComponent,CardComponent,CarouselComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular';
}
