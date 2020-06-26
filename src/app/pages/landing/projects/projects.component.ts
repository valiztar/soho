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

  Projects: any; /* = [
    {
      mainImageURL: "/assets/img/Untitled.png",
      logoImageURL: "/assets/Logos/diners.png",
      title: "Sitio publico y privado",
      description:
        "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum has been the industrys standard dummy text ever since the 1500s",
      tags: ["usabilidad", "ui", "ux", "test_con_usuarios"],
      contrast: false,
    },
    {
      mainImageURL: "/assets/img/Untitled2.png",
      logoImageURL:
        "https://userscontent2.emaze.com/images/ba55b900-01dd-42b5-8b6d-1d0d5418466c/635429732438867392_logoblanco.png",
      title: "Sitio web 2017",
      description:
        "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum has been the industrys standard dummy text ever since the 1500s",
      tags: ["responsive", "ui", "ux"],
      contrast: false,
    },
    {
      mainImageURL: "/assets/img/Untitled3.png",
      logoImageURL:
        "https://upload.wikimedia.org/wikipedia/commons/e/e3/Copec_logo.svg",
      title: "TV App",
      description:
        "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum has been the industrys standard dummy text ever since the 1500s",
      tags: ["usabilidad", "ui", "ux", "test_con_usuarios"],
      contrast: true,
    },
  ]; */
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
