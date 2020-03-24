import Data from '../src/modules/data';

test('Sets a name inside a data object', () => {
  Data.nameSetter('Christian');
  expect(Data.data.user).toBe('Christian');
});

test('Sets a score inside a data object', () => {
  Data.scoreSetter(765);
  expect(Data.data.score).toBe(765);
});
