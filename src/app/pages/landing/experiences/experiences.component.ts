import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-experiences",
  templateUrl: "./experiences.component.html",
  styleUrls: ["./experiences.component.scss"],
})
export class ExperiencesComponent implements OnInit {
  Title = {
    title: "Lo que dicen nuestros clientes",
    subtitle: "",
    divider: true,
  };

  People = [
    {
      sentence:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
      role: "Cristobal Fernandez - CEO Copec",
      imageurl:
        "https://images.pexels.com/photos/2955247/pexels-photo-2955247.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
      sentence:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
      role: "Maria Paz Segars - Lead Digital BBVA",
      imageurl:
        "https://images.pexels.com/photos/3218973/pexels-photo-3218973.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
      sentence:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
      role: "Renato Bascuñan - Lead Digital Chilena",
      imageurl:
        "https://lh3.googleusercontent.com/proxy/UZh4nxcDOIryGXEMPJ6Xk8lNkInvtk2ONu1xPo5AfjT2ljp3ijiWiNEzf3zec08qqdtW92J9S4LB0v8pHEWnY9zvyKPNI4CrHJj34TvcccwI0PifYgW3aDFVNDTQaPj5",
    },
  ];

  constructor() {}

  ngOnInit() {}
}
