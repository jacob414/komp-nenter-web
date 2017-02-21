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
