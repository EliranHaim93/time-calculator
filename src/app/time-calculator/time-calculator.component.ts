import { Component, signal, computed, HostListener } from "@angular/core";
import {
  FormBuilder,
  FormArray,
  FormGroup,
  ReactiveFormsModule,
} from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatTooltipModule } from "@angular/material/tooltip";

import { CommonModule } from "@angular/common";

@Component({
  selector: "app-time-calculator",
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatTooltipModule,
    CommonModule,
  ],
  templateUrl: "./time-calculator.component.html",
  styleUrls: ["./time-calculator.component.scss"],
})
export class TimeCalculatorComponent {
  @HostListener("window:keyup", ["$event"])
  handleKeyUp(event: KeyboardEvent) {
    if (event.key === "+") {
      this.addTime();
    } else if (event.key === "Escape" || event.key === "-") {
      this.removeTime(-1);
    }
  }

  timeForm: FormGroup;
  totalHours = signal(0);
  totalMinutes = signal(0);

  constructor(private fb: FormBuilder) {
    this.timeForm = this.fb.group({
      times: this.fb.array([this.createTime()]),
    });

    this.timeForm.valueChanges.subscribe(() => this.calculateTotalTime());
  }

  get timeArray(): FormArray {
    return this.timeForm.get("times") as FormArray;
  }

  createTime(): FormGroup {
    return this.fb.group({
      hours: [""],
      minutes: [""],
    });
  }

  addTime() {
    this.timeArray.push(this.createTime());
  }

  removeTime(index: number) {
    this.timeArray.removeAt(index);
  }

  calculateTotalTime() {
    let totalMinutes = 0;

    this.timeArray.controls.forEach((control) => {
      const hours = control.get("hours")?.value || 0;
      const minutes = control.get("minutes")?.value || 0;
      totalMinutes += hours * 60 + minutes;
    });

    this.totalHours.set(Math.floor(totalMinutes / 60));
    this.totalMinutes.set(totalMinutes % 60);
  }
}
