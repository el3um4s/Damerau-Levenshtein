import { distance } from "./mod.ts";

const firstString: string = Deno.args.length > 0 ? Deno.args[0] : "Hello";
const secondString: string = Deno.args.length > 1
  ? Deno.args[1]
  : "Hello World";

const d = distance(firstString, secondString);

console.log(
  `Damerau–Levenshtein distance between "${firstString}" and "${secondString}" is: ${d} `,
);
