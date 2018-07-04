#!/usr/bin/env node
/**
 * author: Pieter Heyvaert (pheyvaer.heyvaert@ugent.be)
 * Ghent University - imec - IDLab
 */

const writeNormalizeRml = require('../index').writeNormalizeRml;
const fs                = require('fs');
const path              = require('path');
const N3                = require('n3');

let parser = new N3.Parser();
let store = new N3.Store();

let inputData = fs.readFileSync(path.resolve(process.cwd(), process.argv[2]), 'utf8');

parser.parse(inputData,
  function (error, triple, prefixes) {
    if (triple)
      store.addTriple(triple);
    else {
      let writer = N3.Writer({
        prefixes: prefixes
      });
      writeNormalizeRml(store, writer, false);
      writer.end(function (error, result) {
        console.log(result);
      });
    }
  });