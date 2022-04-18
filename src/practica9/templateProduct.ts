import {ReduceOptions} from './templateMethod';


/**
 * Clase hija que se encarga de hacer la operación de multiplicar
 */
export class ReduceProduct extends ReduceOptions {
  /**
   * Constructor que llama al constructor de la superclase.
   * @param myNumbers Array de números con el que vamos a trabajar
   */
  constructor(protected myNumbers: number[]) {
    super(myNumbers);
  }

  /**
   * Inicializador del acumuador, en este caso, como se trata de una
   * multiplicación se inicializa en 1.
   */
  initializeAcc(): number {
    return 1;
  }


  /**
   * Realización de la operación de la suma, recorriendo todos los valores
   * del array y sumandolos en el acumulador.
   */
  doTheOperation(): number {
    let acc: number = this.initializeAcc();
    for (let i: number = 0; i < this.getIteratorMax(); ++i) {
      acc *= this.myNumbers[i];
    }
    return acc;
  }

  protected afterGettingAccumulator() {
    console.log(`I've just get the accumulator`);
  }

  protected afterGettingMaxIterator() {
    console.log(`I've just get the max iterator`);
  }
}
