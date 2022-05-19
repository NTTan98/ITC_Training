import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent implements OnInit {
  public displayValue: string = '';
  public result: string = '';
  public getNum(num: string) {
    if (this.displayValue == '' && num == '.') {
      this.displayValue = '0.';
      return;
    }
    if (num == '0' && this.displayValue == '') {
      return;
    }
    this.displayValue += num;
  }
  public getOperator(operator: string) {
    if (
      this.displayValue.slice(-1) == '+' ||
      this.displayValue.slice(-1) == '-' ||
      this.displayValue.slice(-1) == '*' ||
      this.displayValue.slice(-1) == '/'
    ) {
      this.displayValue = this.displayValue.slice(0, -1) + operator;
      return;
    }
    console.log(this.displayValue.slice(-1));
    if (this.displayValue == '') {
      return;
    } else {
      this.displayValue += operator;
    }
    //replace the last operator with the new operator
  }
  public getResult(result: string) {
    if (this.displayValue == '') {
      return;
    }
    this.result = eval(this.displayValue);
    this.displayValue = '';
  }
  public clear() {
    this.displayValue = '';
    this.result = '';
  }

  constructor() {}

  ngOnInit(): void {}
}
