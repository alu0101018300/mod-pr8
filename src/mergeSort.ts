import {Strategy} from './strategy';

/**
 * Clase que implementa el método execute, el cual
 * al pasarle un array de números los ordena siguiendo
 * el algoritmo de ordenación MergeSort
 */
export class MergeSort implements Strategy {
  /**
  * Algoritmo MergeSort
  */
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
