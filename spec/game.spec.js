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
});
