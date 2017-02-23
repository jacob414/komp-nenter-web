import {Parser} from 'expr-eval';

const parser = new Parser();
const calc = (e) => (parser.parse(e).evaluate({}))
export const correct = (expr, expected) => calc(expr) === expected

const randint = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

export const challenge = (min, max) => randint(min, max);

const ops = { '+': /\+/g, '-': /\-/g, '*': /\*/g, '/': /\//g }
export function points(expr) {
  const n = (op) => ((expr.match(ops[op])||[]).length);
  return n('+') + n('-')*2 + n('*')*4 + n('/')*8;
}
