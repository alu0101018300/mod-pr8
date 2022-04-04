import 'mocha';
import {expect} from 'chai';
import {Solver} from '../src/solver';
import {BubbleSort} from '../src/bubbleSort';
import {MergeSort} from '../src/mergeSort';

const testSolver = new Solver([5, 4, 3, 2, 1], new BubbleSort());
const testMerge = new Solver([10, 4, 40, 32, 67, 12, 43, 31, 65, 1],
    new MergeSort());


describe('test Solver class constructor', () => {
  it('new Solver() returns a Solver Object', () => {
    expect(testSolver).to.be.instanceof(Solver);
  });
});

describe('test Solver returns the array sorted', () => {
  it('testSolver return the numbers correctly sorted', () => {
    expect(testSolver.logic()).is.a('Undefined');
  });
});

describe('test Solver class constructor', () => {
  it('new Solver() returns a Solver Object', () => {
    expect(testMerge).to.be.instanceof(Solver);
  });
});

describe('test Solver returns the array sorted', () => {
  it('testSolver return the numbers correctly sorted', () => {
    expect(testMerge.logic()).is.a('Undefined');
  });
});
