import {Strategy} from './strategy';

export class BubbleSort implements Strategy {
  execute(data: number[]) {
    const length: number = data.length;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < (length - i - 1); j++) {
        if (data[j] > data[j+1]) {
          const tmp: number = data[j];
          data[j] = data[j+1];
          data[j+1] = tmp;
        }
      }
    }
    console.log(data);
  }
}