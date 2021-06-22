const A = require('arcsecond');
const { validIdentifier, address } = require('./common');
const t = require('./types');

const interpretAs = A.coroutine(function* () {
  yield A.char('<');
  const structure = yield validIdentifier;
  yield A.char('>');

  yield A.optionalWhitespace;
  const symbol = yield A.choice([
    validIdentifier,
    address
  ]);
  yield A.char('.');
  const property = yield validIdentifier;
  yield A.optionalWhitespace;

  return t.interpretAs({
    structure,
    symbol,
    property
  });
});

module.exports = interpretAs;
