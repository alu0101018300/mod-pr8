import {Strategy} from './strategy';

/**
 * Clase que implementa el método execute, el cual
 * al pasarle un array de números los ordena siguiendo
 * el algoritmo de ordenación BubbleSort
 */
export class BubbleSort implements Strategy {
  /**
   * Algoritmo MergeSort
   * @param data Array de números que vamos a ordenar
   */
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
