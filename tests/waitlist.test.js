const { joinWaitlist } = require('../js/waitlist');

// השוואת מערכים לפי תוכן (assertEq משווה לפי זהות אובייקט)
function assertList(actual, expected) {
  assertEq(JSON.stringify(actual), JSON.stringify(expected));
}

test('adds a valid email', function () {
  assertList(joinWaitlist(['a@b.com'], '  Sara@Example.COM '), ['a@b.com', 'sara@example.com']);
});
test('does not mutate the original list', function () {
  const list = [];
  joinWaitlist(list, 'x@y.co');
  assertEq(list.length, 0);
});
test('invalid: no @', function () {
  assertList(joinWaitlist(['a@b.com'], 'nope'), ['a@b.com']);
});
test('invalid: no dot after @', function () {
  assertList(joinWaitlist([], 'a@b'), []);
});
test('duplicate is ignored', function () {
  assertList(joinWaitlist(['sara@example.com'], 'SARA@example.com'), ['sara@example.com']);
});
