/**
 * Clase que contiene el template Method y la que va a ser la clase
 * abstracta de nuestro problema.
 */
export abstract class ReduceOptions {
  /**
   * Constructor de nuestra clase abstracta del Template Method.
   * @param myNumbers Array de números al que vamos a aplicar la operación
   */
  constructor(protected myNumbers: number[]) {}

  /**
   * Template Method, es decir, algoritmo común para todas las clases hijas
   * de la clase abstracta
   */
  public templateMethod(): number {
    this.initializeAcc();
    this.afterGettingAccumulator();
    this.getIteratorMax();
    this.afterGettingMaxIterator();
    const solution: number = this.doTheOperation();
    console.log(`The solution is ${solution}`);
    return solution;
  }

  /**
   * Método que genera/inicializa el acumulador, el cual varía
   * en función de la operación que vamos a realizar.
   */
  protected abstract initializeAcc(): number;

  /**
   * Función que retorna el número de iteraciones que vamos a realizar,
   * el cual es común para todas las operaciones.
   */
  protected getIteratorMax(): number {
    const maxIter: number = this.myNumbers.length;
    return maxIter;
  }

  /**
   * Función que realizará la operación deseada, y la cual
   * dependerá, obviamente, de la función que queramos hacer.
   */
  protected abstract doTheOperation(): number;

  protected afterGettingAccumulator() {}
  protected afterGettingMaxIterator() {}
}
