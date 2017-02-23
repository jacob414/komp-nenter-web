import './specCfg';
import * as game from '../lib/game';

describe('Core functions', () => {
  it('Should generate random numbers as challenges', () => {
    let chal;
    for(var n = 0; n <= 10000; n++) {
      chal = game.challenge(1, 100);
      chal.should.be.at.least(1);
      chal.should.be.at.most(100);
    }
  });
  it('Should be able to correct expressions', () => {
    game.correct('1+1', 2).should.be.true;
  });
  describe('Point counting', () => {

    const fixtures = [
      ["1+1", 1], ["1+1-2", 3], ["2*2", 4], ["10/2+1", 9], ["10", 0] ];

    for(let [expr, expected] of fixtures) {
      (function(expr, expected) {
        it('Should count ' + expected + 'points correctly for '+expr, () => {
          game.points(expr).should.equal(expected);
        });
      })(expr, expected);
    }
  });
});
