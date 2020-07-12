// Copyright 2020 Samuele de Tomasi. All rights reserved. MIT license.

import {
  assertStrictEquals,
} from "https://deno.land/std/testing/asserts.ts";

import {
  compareDistance,
  StringWithDistance,
} from "../mod.ts";

Deno.test("compareDistance a > b", (): void => {
  const a: StringWithDistance = {
    string: "hello",
    compared: "Hello",
    distance: 1,
  };

  const b: StringWithDistance = {
    string: "hello",
    compared: "Heello",
    distance: 2,
  };
  const result = compareDistance(a, b);
  assertStrictEquals(result, -1);
});

Deno.test("compareDistance a < b", (): void => {
  const a: StringWithDistance = {
    string: "Milan",
    compared: "Milano",
    distance: 1,
  };

  const b: StringWithDistance = {
    string: "Milano",
    compared: "Milano",
    distance: 0,
  };
  const result = compareDistance(a, b);
  assertStrictEquals(result, 1);
});

Deno.test("compareDistance a = b (Milano)(Milano)", (): void => {
  const a: StringWithDistance = {
    string: "Milano",
    compared: "Milano",
    distance: 0,
  };

  const b: StringWithDistance = {
    string: "Milano",
    compared: "Milano",
    distance: 0,
  };
  const result = compareDistance(a, b);
  assertStrictEquals(result, 0);
});

Deno.test("compareDistance a = b (hello world)(HELLO WORLD)", (): void => {
  const a: StringWithDistance = {
    string: "hello world",
    compared: "HELLO world",
    distance: 5,
  };

  const b: StringWithDistance = {
    string: "HELLO WORLD",
    compared: "HELLO world",
    distance: 5,
  };
  const result = compareDistance(a, b);
  assertStrictEquals(result, 0);
});
