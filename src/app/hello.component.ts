import { Component, Input } from '@angular/core';
import { GetDataService } from './getdata.service';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`],
  providers: [GetDataService],
})
export class HelloComponent {
  @Input() name: string;
  constructor(private get: GetDataService) {
    let data = this.get.data.value;
    console.log(data, 'datttt');
  }
}
