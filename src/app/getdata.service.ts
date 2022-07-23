import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class GetDataService {
  data = new BehaviorSubject(null);
  constructor() {
    this.getAllData();
  }

  getAllData() {
    let d = ['Ankita', 'Anubha', 'Ankit'];
    this.data.next(d);
  }
}
