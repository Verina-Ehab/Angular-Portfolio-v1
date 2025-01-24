import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './portfolio/hero/hero.component';
import { AboutMeComponent } from './portfolio/about-me/about-me.component';
import { SkillsComponent } from './portfolio/skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio/portfolio.component';
import { FooterComponent } from './portfolio/footer/footer.component';
import { PortfolioCardsComponent } from './portfolio/portfolio-cards/portfolio-cards.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,PortfolioCardsComponent ,HeroComponent, AboutMeComponent, SkillsComponent, PortfolioComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_day1';
}
