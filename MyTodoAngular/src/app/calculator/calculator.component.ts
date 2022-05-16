import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent implements OnInit {
  public displayValue: string = '';
  public result: string = '';
  public getValue(value: string) {
    if (value === '=') {
      this.result = eval(this.displayValue.toString());
      this.displayValue = '';
    } else if (
      value !== '+' &&
      value !== '-' &&
      value !== '*' &&
      value !== '/'
    ) {
      this.displayValue = this.displayValue + value;
    } else {
      if (this.displayValue.length > 0) {
        const lastChar = this.result.substr(this.displayValue.length - 1);
        if (
          lastChar === '+' ||
          lastChar === '-' ||
          lastChar === '*' ||
          lastChar === '/'
        ) {
          this.displayValue = this.displayValue.substr(
            0,
            this.displayValue.length - 1
          );
        }
      }
      this.displayValue = this.displayValue + value;
    }
    if (value === 'AC') {
      this.displayValue = '';
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
