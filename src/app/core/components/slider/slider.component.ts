import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-slider",
  templateUrl: "./slider.component.html",
  styleUrls: ["./slider.component.scss"],
})
export class SliderComponent implements OnInit {
  slides = [
    {
      title: "Nos especializamos en",
      subtitle: "Interfaces digitales que los usuarios aman",
      url:
        "https://images.unsplash.com/photo-1504966981333-1ac8809be1ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    },
    {
      title: "Nos especializamos en",
      subtitle: "Interfaces digitales que los usuarios aman",
      url:
        "https://images.unsplash.com/photo-1523911420251-f3e985effe56?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    },
    {
      title: "Nos especializamos en",
      subtitle: "Interfaces digitales que los usuarios aman",
      url:
        "https://images.unsplash.com/photo-1501428125680-6dd943aa7d73?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    },
  ];

  constructor() {}

  ngOnInit() {}
}
