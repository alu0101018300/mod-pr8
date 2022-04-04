import {Solver} from './solver';
import {BubbleSort} from './bubbleSort';
import {MergeSort} from './mergeSort';

// Client code
const mySolver = new Solver([5, 4, 3, 2, 1], new BubbleSort());
mySolver.logic();

mySolver.setStrategy(new MergeSort());
mySolver.logic();