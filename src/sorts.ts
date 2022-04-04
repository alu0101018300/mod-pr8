export class Solver {
  /**
   * The context has a reference to a Strategy object. It should only works
   * with strategies through the Strategy interface
   */
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

/**
 * Common interface to all Strategy objects. The context uses this
 * interface to work with strategies
 */
export interface Strategy {
  execute(data: number[]): void;
}

/**
 * Some concrete strategy
 */
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
  }
}


/**
 * Some concrete strategy
 */
class SecondAlgorithm implements Strategy {
  execute(data: number[]) {
    console.log(`Second algorithm applied to ${data}`);
  }
}

// Client code
const mySolver = new Solver([1, 2, 3], new BubbleSort());
mySolver.logic();

mySolver.setStrategy(new SecondAlgorithm());
mySolver.logic();

