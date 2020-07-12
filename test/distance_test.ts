// Copyright 2020 Samuele de Tomasi. All rights reserved. MIT license.

import {
  assertStrictEquals,
} from "https://deno.land/std/testing/asserts.ts";

import { distance } from "../mod.ts";

Deno.test(`distance "hello here", "hello there"`, (): void => {
  const result = distance("hello here", "hello there");
  assertStrictEquals(result, 1);
});

Deno.test(`distance "hello here", "ereh olleh"`, () => {
  const result = distance("hello here", "ereh olleh");
  assertStrictEquals(result, 8);
});

Deno.test(`distance "hello here", "hello here"`, () => {
  const result = distance("hello here", "hello here");
  assertStrictEquals(result, 0);
});

Deno.test(`distance "", "hello there"`, () => {
  const result = distance("", "hello there");
  assertStrictEquals(result, "hello there".length);
});

Deno.test(`distance "hello here", ""`, () => {
  const result = distance("hello here", "");
  assertStrictEquals(result, "hello here".length);
});

Deno.test(`distance "", ""`, () => {
  const result = distance("", "");
  assertStrictEquals(result, 0);
});
