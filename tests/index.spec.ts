import { Greeter } from '../src/index';

describe('Greeter', () => {
  it('greets Carl', () => {
    expect(Greeter('Carl')).toBe('Hello Carl');
  });
});
