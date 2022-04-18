import {ReduceOptions} from './templateMethod';
import {ReduceAdd} from './templateAdd';
import {ReduceSubstract} from './templateReduce';
import {ReduceProduct} from './templateProduct';

function testTemplate(templateMethod: ReduceOptions) {
  templateMethod.templateMethod();
}

testTemplate(new ReduceAdd([1, 2, 3, 4]));
testTemplate(new ReduceSubstract([1, 2, 3, 4]));
testTemplate(new ReduceProduct([1, 2, 3, 4]));
testTemplate(new ReduceProduct([1, 2, 3, 4]));
