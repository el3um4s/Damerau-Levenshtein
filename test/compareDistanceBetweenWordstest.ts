//
// Copyright 2020 Samuele de Tomasi. All rights reserved. MIT license.

import {
  assertStrictEquals,
} from "https://deno.land/std/testing/asserts.ts";

import {
  compareDistanceBetweenWords,
} from "../mod.ts";

Deno.test("compareDistanceBetweenWords (hello)(Heello)(hello)", (): void => {
  const a: string = "hello";
  const b: string = "Heello";
  const target: string = "hello";
  const result = compareDistanceBetweenWords(
    { firstString: a, secondString: b, target: target },
  );
  assertStrictEquals(result, -1);
});

Deno.test("compareDistanceBetweenWords (Milan)(Milano)(Milano)", (): void => {
  const a: string = "Milan";
  const b: string = "Milano";
  const target: string = "Milano";
  const result = compareDistanceBetweenWords(
    { firstString: a, secondString: b, target: target },
  );
  assertStrictEquals(result, 1);
});

Deno.test("compareDistanceBetweenWords (Milano)(Milano)(Milano)", (): void => {
  const a: string = "Milano";
  const b: string = "Milano";
  const target: string = "Milano";
  const result = compareDistanceBetweenWords(
    { firstString: a, secondString: b, target: target },
  );
  assertStrictEquals(result, 0);
});

Deno.test("compareDistanceBetweenWords (hello world)(HELLO WORLD)(HELLO world)", (): void => {
  const a: string = "hello world";
  const b: string = "HELLO WORLD";
  const target: string = "HELLO world";
  const result = compareDistanceBetweenWords(
    { firstString: a, secondString: b, target: target },
  );
  assertStrictEquals(result, 0);
});
