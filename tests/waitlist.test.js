const { joinWaitlist } = require('../js/waitlist');

test('adds a valid email', function () {
  assertEq(joinWaitlist(['a@b.com'], '  Sara@Example.COM '), ['a@b.com', 'sara@example.com']);
});
test('does not mutate the original list', function () {
  const list = [];
  joinWaitlist(list, 'x@y.co');
  assertEq(list.length, 0);
});
test('invalid: no @', function () {
  assertEq(joinWaitlist(['a@b.com'], 'nope'), ['a@b.com']);
});
test('invalid: no dot after @', function () {
  assertEq(joinWaitlist([], 'a@b'), []);
});
test('duplicate is ignored', function () {
  assertEq(joinWaitlist(['sara@example.com'], 'SARA@example.com'), ['sara@example.com']);
});
