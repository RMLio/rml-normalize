const writeNormalizeRml = require('./index').writeNormalizeRml;
const fs                = require('fs');
const path              = require('path');
const N3                = require('n3');


describe('index', () => {
  it('#1', () => {
    let parser = new N3.Parser();
    let store = new N3.Store();

    let inputData = fs.readFileSync(path.resolve(__dirname, './resources/example.rml.ttl'), 'utf8');
    parser.parse(inputData,
      function (error, triple, prefixes) {
        if (triple)
          store.addTriple(triple);
        else {
          let writer = N3.Writer({
            prefixes: prefixes
          });
          writeNormalizeRml(store, writer);
          writer.end(function (error, result) {
            console.log(result);
          });
        }
      });
  });
});