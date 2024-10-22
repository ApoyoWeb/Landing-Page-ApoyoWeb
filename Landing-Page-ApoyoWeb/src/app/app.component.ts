import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ConturiasComponent } from './conturias/conturias.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { AboutComponent } from './about/about.component';
import { CasesComponent } from './cases/cases.component';
import { FaqComponent } from './faq/faq.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, ConturiasComponent, ReviewsComponent, BenefitsComponent, AboutComponent, CasesComponent, FaqComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Landing-Page-ApoyoWeb';
}
