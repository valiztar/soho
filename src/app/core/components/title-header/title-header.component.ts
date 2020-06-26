import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-title-header",
  templateUrl: "./title-header.component.html",
  styleUrls: ["./title-header.component.scss"],
})
export class TitleHeaderComponent implements OnInit {
  //inputs
  @Input() title: string;
  @Input() subtitle: string;
  @Input() divider: boolean;
  @Input() padding: number;

  constructor() {}

  ngOnInit() {}
}
