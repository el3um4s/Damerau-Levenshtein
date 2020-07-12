// Copyright 2020 Samuele de Tomasi. All rights reserved. MIT license.

import {
  assertEquals,
} from "https://deno.land/std/testing/asserts.ts";

import { StringWithDistance, distanceDamerau, distance } from "../mod.ts";

Deno.test(`distanceDamerau: "Hello" "Hi"`, (): void => {
  const string: string = "Hello";
  const compared: string = "Hi";
  const resultExpected: StringWithDistance = {
    string: string,
    compared: compared,
    distance: 4,
  };
  const result: StringWithDistance = distanceDamerau(string, compared);
  assertEquals(result, resultExpected);
});

Deno.test(`distanceDamerau: "Hello" "Hello"`, (): void => {
  const string: string = "Hi";
  const compared: string = "Hello";
  const resultExpected: StringWithDistance = {
    string: string,
    compared: compared,
    distance: 4,
  };
  const result: StringWithDistance = distanceDamerau(string, compared);
  assertEquals(result, resultExpected);
});

Deno.test(`distanceDamerau: "Hello" "Hello"`, (): void => {
  const string: string = "Hello";
  const compared: string = "Hello";
  const resultExpected: StringWithDistance = {
    string: string,
    compared: compared,
    distance: 0,
  };
  const result: StringWithDistance = distanceDamerau(string, compared);
  assertEquals(result, resultExpected);
});

Deno.test(`distanceDamerau: "Hello" ""`, (): void => {
  const string: string = "";
  const compared: string = "Hello";
  const resultExpected: StringWithDistance = {
    string: string,
    compared: compared,
    distance: 5,
  };
  const result: StringWithDistance = distanceDamerau(string, compared);
  assertEquals(result, resultExpected);
});

Deno.test(`distanceDamerau: "" "Hello"`, (): void => {
  const string: string = "";
  const compared: string = "Hello";
  const resultExpected: StringWithDistance = {
    string: string,
    compared: compared,
    distance: 5,
  };
  const result: StringWithDistance = distanceDamerau(string, compared);
  assertEquals(result, resultExpected);
});

Deno.test(`distanceDamerau: "" ""`, (): void => {
  const string: string = "";
  const compared: string = "";
  const resultExpected: StringWithDistance = {
    string: string,
    compared: compared,
    distance: 0,
  };
  const result: StringWithDistance = distanceDamerau(string, compared);
  assertEquals(result, resultExpected);
});

Deno.test(`distanceDamerau: "hello here" "hello there"`, (): void => {
  const string: string = "hello here";
  const compared: string = "hello there";
  const resultExpected: StringWithDistance = {
    string: string,
    compared: compared,
    distance: 1,
  };
  const result: StringWithDistance = distanceDamerau(string, compared);
  assertEquals(result, resultExpected);
});

Deno.test(`distanceDamerau: "hello here" "ereh olleh"`, (): void => {
  const string: string = "hello here";
  const compared: string = "ereh olleh";
  const resultExpected: StringWithDistance = {
    string: string,
    compared: compared,
    distance: 8,
  };
  const result: StringWithDistance = distanceDamerau(string, compared);
  assertEquals(result, resultExpected);
});

Deno.test(`distanceDamerau: "hello here", "hello here"`, (): void => {
  const string: string = "hello here";
  const compared: string = "hello here";
  const resultExpected: StringWithDistance = {
    string: string,
    compared: compared,
    distance: 0,
  };
  const result: StringWithDistance = distanceDamerau(string, compared);
  assertEquals(result, resultExpected);
});

Deno.test(`distanceDamerau: "", "hello there"`, (): void => {
  const string: string = "";
  const compared: string = "hello there";
  const resultExpected: StringWithDistance = {
    string: string,
    compared: compared,
    distance: "hello there".length,
  };
  const result: StringWithDistance = distanceDamerau(string, compared);
  assertEquals(result, resultExpected);
});

Deno.test(`distanceDamerau: "hello here", ""`, (): void => {
  const string: string = "hello here";
  const compared: string = "";
  const resultExpected: StringWithDistance = {
    string: string,
    compared: compared,
    distance: "hello here".length,
  };
  const result: StringWithDistance = distanceDamerau(string, compared);
  assertEquals(result, resultExpected);
});
