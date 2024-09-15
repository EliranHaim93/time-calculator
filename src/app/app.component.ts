import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { TimeCalculatorComponent } from "./time-calculator/time-calculator.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, TimeCalculatorComponent, FooterComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "time-calculator";
}
