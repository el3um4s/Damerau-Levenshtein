// Copyright 2020 Samuele de Tomasi. All rights reserved. MIT license.

import {
  assertStrictEquals,
} from "https://deno.land/std/testing/asserts.ts";

import { minDistance } from "../mod.ts";

Deno.test(`minDistance: "hello world" =>["hello here", "hello there", "world", "world hello"] `, (): void => {
  const search: string = "hello world";
  const list: Array<string> = [
    "hello here",
    "hello there",
    "world",
    "world hello",
  ];
  const result = minDistance(search, list);
  assertStrictEquals(result, 4);
});

Deno.test(`minDistance: "ereh olleh" =>["hello here", "hello there", "world", "world hello"] `, (): void => {
  const search: string = "ereh olleh";
  const list: Array<string> = [
    "hello here",
    "hello there",
    "world",
    "world hello",
  ];
  const result = minDistance(search, list);
  assertStrictEquals(result, 8);
});

Deno.test(`minDistance: "hello here" =>["hello here", "hello there", "world", "world hello"] `, (): void => {
  const search: string = "hello here";
  const list: Array<string> = [
    "hello here",
    "hello there",
    "world",
    "world hello",
  ];
  const result = minDistance(search, list);
  assertStrictEquals(result, 0);
});

Deno.test(`minDistance: "" =>["hello here", "hello there", "world", "world hello"] `, (): void => {
  const search: string = "";
  const list: Array<string> = [
    "hello here",
    "hello there",
    "world",
    "world hello",
  ];
  const result = minDistance(search, list);
  assertStrictEquals(result, "world".length);
});

Deno.test(`minDistance: "hello here" =>[] `, (): void => {
  const search: string = "hello here";
  const list: Array<string> = [];
  const result = minDistance(search, list);
  assertStrictEquals(result, "hello here".length);
});

Deno.test(`minDistance: "" =>[] `, (): void => {
  const search: string = "";
  const list: Array<string> = [];
  const result = minDistance(search, list);
  assertStrictEquals(result, 0);
});
