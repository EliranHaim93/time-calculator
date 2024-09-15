import { Component } from "@angular/core";
import { environment } from "../../environments/environment.prod";

@Component({
  selector: "app-footer",
  standalone: true,
  imports: [],
  templateUrl: "./footer.component.html",
  styleUrl: "./footer.component.scss",
})
export class FooterComponent {
  // Get the current year dynamically
  currentYear: number = new Date().getFullYear();
  version: string = environment.appVersion; // Hardcoded for simplicity

  constructor() {}
}
