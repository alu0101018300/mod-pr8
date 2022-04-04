import {Strategy} from './strategy';

export class MergeSort implements Strategy {
  execute(data: number[]) {
    const l = data.length;
    for (let i = 0; i < l; i++ ) {
      for (let j = 0; j < l - 1 - i; j++ ) {
        if ( data[j] > data[j + 1] ) {
          [data[j], data[j + 1]] = [data[j + 1], data[j]];
        }
      }
    }
    console.log(data);
  }
}
