import {Strategy} from './strategy';
/**
 * Clase Solver, la cual va a realizar un algoritmo
 * de ordenación sobre un array de números
 */
export class Solver {
  /**
   * Constructor de la clase Solver
   * @param data Arrays de números que queremos ordenar
   * @param strategy Algoritmo que deseamos emplear
   */
  constructor(private data: number[], private strategy: Strategy) {}

  /**
   * Setter necesario para cambiar el algoritmo en tiempo de
   * ejecución
   * @param strategy Estrategia a la que deseamos cambiar
   */
  setStrategy(strategy: Strategy) {
    this.strategy = strategy;
  }

  /**
   * Función que llama al algoritmo de ordenación
   */
  logic() {
    this.strategy.execute(this.data);
  }
}

