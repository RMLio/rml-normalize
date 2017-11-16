# normalize-rml

This Node.js module normalizes an set of RML rules.
It rewrites the following shortcuts:
- `rr:class`
- `rr:object`
- `rr:predicate`

The rewritten version uses the appropriate Predicate Object, Predicate, and Object Maps.

## Example

Consider the following triples.

```
ex:TM a rr:TriplesMap;
  rr:subjectMap ex:SM.
  
ex:SM a rr:SubjectMap;
  rr:class ex:Test.
```

The result of normalizing them gives

```
ex:TM a rr:TriplesMap;
  rr:subjectMap ex:SM;
  rr:predicateObjectMap ex:POM.
  
ex:SM a rr:SubjectMap.

ex:POM a rr:PredicateObjectMap;
  rr:predicateMap ex:PM;
  rr:objectMap ex:OM.
  
ex:PM a rr:PredicateMap;
  rr:constant rdf:type.
  
ex:OM a rr:ObjectMap;
  rr:constant ex:Test;
  rr:termType rr:IRI.
```

## Usage
You can find an example in `index.test.js`.

## Author
Ben De Meester