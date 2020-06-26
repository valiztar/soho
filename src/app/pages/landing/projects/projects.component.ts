import { Component, OnInit } from "@angular/core";
import { ProjectsService } from "src/app/core/services/projects.service";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.scss"],
})
export class ProjectsComponent implements OnInit {
  Title = {
    title: "Proyectos destacados",
    subtitle:
      "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum has been the industrys standard dummy text ever since the 1500s  ",
    divider: true,
  };

  Projects: any;
  p: any;

  constructor(public projectsService: ProjectsService) {}

  ngOnInit() {
    this.projectsService.getAll().subscribe((data: any) => {
      this.Projects = data.map((e) => {
        return {
          id: e.payload.doc.id,
          mainImageURL: e.payload.doc.data().mainImageURL,
          logoImageURL: e.payload.doc.data().logoImageURL,
          title: e.payload.doc.data().title,
          description: e.payload.doc.data().description,
          tags: e.payload.doc.data().tags,
          contrast: e.payload.doc.data().contrast,
        };
      });
    });
  }
}
