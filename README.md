# Damerau-Levenshtein

[![GitHub license](https://img.shields.io/github/license/el3um4s/Damerau-Levenshtein.svg)](https://github.com/el3um4s/Damerau-Levenshtein/blob/master/LICENSE)
[![GitHub tag](https://img.shields.io/github/tag/el3um4s/Damerau-Levenshtein.svg)](https://GitHub.com/el3um4s/Damerau-Levenshtein/tags/)
[![HitCount](http://hits.dwyl.com/el3um4s/Damerau-Levenshtein.svg)](http://hits.dwyl.com/el3um4s/Damerau-Levenshtein)

Calculate the Damerau–Levenshtein distance between strings.

### Usage

Call to "distance" functions outputs an integer, the calculated Damerau-Levenshtein distance between 2 strings given as parameters. If the result is 0, strings are identical. The higher the result, the less similar strings are.

```typescript
import { distance } from "https://deno.land/x/damerau_levenshtein/mod.ts";

const firstString: string = "Hello";
const secondString: string = "Hello World";

const d = distance(firstString, secondString);

console.log(
  `Damerau–Levenshtein distance between "${firstString}" and "${secondString}" is: ${d} `,
);
```

There are 1 demo available. The first demo queries Wikipedia and print the first result

```
deno run .\demo.ts "Hello Wordl" "Hello world"
```

You can run the demo directly from the repository with the commands:

```
deno run https://deno.land/x/damerau_levenshtein/demo.ts  "Hello Wordl" "Hello world"
```

I was inspirated by [fabvalaaah](https://github.com/fabvalaaah)'s repository [damerau-levenshtein-js](https://github.com/fabvalaaah/damerau-levenshtein-js)

### API

* **function compareDistance(a: StringWithDistance, b: StringWithDistance): number** : _Compare distance between 2 words (format like StringWithDistance)._
* **function distance(a: string, b: string)** : _Get the Damerau-Levenshtein distance between 2 strings_
* **function distanceDamerau(string: string, compared: string): StringWithDistance** : _Return an object with string, compared string and distance beetween_
* **function distanceList(target: string, list: Array<string>): Array<StringWithDistance>** : _Return an arry of StringWithDistance with the distance from the compared string_
* **function minDistance(string: string, list: Array<string>): number** : _Get the minimum Damerau-Levenshtein distance between a string and an array of strings_
* **function sortByMinDistance(list: Array<StringWithDistance>): Array<StringWithDistance>** : _Return an arry of StringWithDistance sorted by min distance_
* **function sortWordByMinDistance(target: string, list: Array<string>): Array<StringWithDistance>** :  _Return an arry of StringWithDistance sorted by min distance_
* **interface StringWithDistance** : _Interface for string, compared string and distance beetween_
