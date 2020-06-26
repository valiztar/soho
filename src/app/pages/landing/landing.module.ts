import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LandingRoutingModule } from "./landing-routing.module";
import { LandingComponent } from "../landing/landing.component";
import { AboutusComponent } from "./aboutus/aboutus.component";
import { ProjectsComponent } from "./projects/projects.component";
import { ExperiencesComponent } from "./experiences/experiences.component";
import { SliderComponent } from "../../core/components/slider/slider.component";
import { NewsComponent } from "../../core/components/news/news.component";
import { TitleHeaderComponent } from "../../core/components/title-header/title-header.component";
import { ExperienceCardComponent } from "../../core/components/experience-card/experience-card.component";

@NgModule({
  declarations: [
    LandingComponent,
    AboutusComponent,
    ProjectsComponent,
    ExperiencesComponent,
    SliderComponent,
    NewsComponent,
    TitleHeaderComponent,
    ExperienceCardComponent,
  ],
  imports: [CommonModule, LandingRoutingModule],
})
export class LandingModule {}
