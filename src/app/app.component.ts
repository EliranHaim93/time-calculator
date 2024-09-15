import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { TimeCalculatorComponent } from "./time-calculator/time-calculator.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, TimeCalculatorComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "time-calculator";
}
