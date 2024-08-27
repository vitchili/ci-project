const main = require('./app_fatorial');

test('Testa fatorial de 5', () => {
  expect(main(5)).toBe(120);
});