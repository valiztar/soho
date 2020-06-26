import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-experience-card",
  templateUrl: "./experience-card.component.html",
  styleUrls: ["./experience-card.component.scss"],
})
export class ExperienceCardComponent implements OnInit {
  @Input() sentence: string;
  @Input() role: string;
  @Input() imageurl: string;

  constructor() {}

  ngOnInit() {}
}
