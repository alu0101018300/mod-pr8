import {Strategy} from './strategy';

export class Solver {
  constructor(private data: number[], private strategy: Strategy) {}

  /**
   * A setter is required in order to change the strategy in execution time
   * @param strategy Current strategy applied
   */
  setStrategy(strategy: Strategy) {
    this.strategy = strategy;
  }

  /**
   * The context delegates some work to the Strategy object
   */
  logic() {
    this.strategy.execute(this.data);
  }
}
