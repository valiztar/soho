import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  options = [
    "inicio",
    "nosotros",
    "servicios",
    "casos de éxito",
    "únete al equipo",
    "contacto",
  ];

  constructor() {}

  ngOnInit() {}
}
