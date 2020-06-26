import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-aboutus",
  templateUrl: "./aboutus.component.html",
  styleUrls: ["./aboutus.component.scss"],
})
export class AboutusComponent implements OnInit {
  Title = {
    title: "17 años de experiencia en pos de tu proyecto",
    subtitle:
      "especializados desde 1996 en usabilidad, experiencia del usuario (U/X) y diseño de experiencias del proyecto digitales is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.   ",
    divider: true,
  };

  information = [
    {
      title: "Estrategia, usabilidad & ux",
      subtitle:
        " Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley",
      divider: false,
    },
    {
      title: "Mejoramos la experiencia",
      subtitle:
        " Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley",
      divider: false,
    },
    {
      title: "Medicion continua de objetivos",
      subtitle:
        " Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley",
      divider: false,
    },
  ];

  constructor() {}

  ngOnInit() {}
}
