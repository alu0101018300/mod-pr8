import {Solver} from './solver';
import {BubbleSort} from './bubbleSort';
import {MergeSort} from './mergeSort';

/**
 * Creación de variable para probar el algoritmo
 * de ordenación Bubble Sort
 */
const mySolver = new Solver([5, 4, 3, 2, 1], new BubbleSort());
mySolver.logic();

/**
 * Cambio de estrategia en tiempo de ejecución
 * para cambiar el algoritmo a Merge Sort
 */
mySolver.setStrategy(new MergeSort());
mySolver.logic();

/**
 * Creación de variable alternativa para comprobar
 * el funcionamiento de MergeSort
 */
const testMerge = new Solver([10, 4, 40, 32, 67, 12, 43, 31, 65, 1],
    new MergeSort());
testMerge.logic();
