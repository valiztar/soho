import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-landing",
  templateUrl: "./landing.component.html",
  styleUrls: ["./landing.component.scss"],
})
export class LandingComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    console.log(
      "%cIf you are here, you may want to contact valiztar@gmail.com",
      "color: green; font-size:12px;"
    );
  }
}
