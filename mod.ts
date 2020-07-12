/** Interface for string, compared string and distance beetween */
export interface StringWithDistance {
  string: string;
  compared: string;
  distance: number;
}

const initMatrix = (a: string, b: string): number[][] => {
  let d: number[][] = [];

  for (let i = 0; i <= a.length; i++) {
    d[i] = [];
    d[i][0] = i;
  }
  for (let j = 0; j <= b.length; j++) {
    d[0][j] = j;
  }

  return d;
};

const damerau = (
  i: number,
  j: number,
  a: string,
  b: string,
  d: number[][],
  cost: number,
) => {
  if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) {
    d[i][j] = Math.min.apply(null, [d[i][j], d[i - 2][j - 2] + cost]);
  }
};

/** Get the Damerau-Levenshtein distance between 2 strings */
export function distance(a: string, b: string) {
  let d: number[][] = initMatrix(a, b);
  for (var i = 1; i <= a.length; i++) {
    let cost: number;
    for (let j = 1; j <= b.length; j++) {
      if (a.charAt(i - 1) === b.charAt(j - 1)) {
        cost = 0;
      } else {
        cost = 1;
      }

      d[i][j] = Math.min.apply(null, [
        d[i - 1][j] + 1,
        d[i][j - 1] + 1,
        d[i - 1][j - 1] + cost,
      ]);

      damerau(i, j, a, b, d, cost);
    }
  }
  return d[a.length][b.length];
}

/** Return an arry of StringWithDistance with the distance from the compared string */
export function distanceList(
  target: string,
  list: Array<string>,
): Array<StringWithDistance> {
  return list.map((string) => {
    return distanceDamerau(target, string);
  });
}

/** Return an object with string, compared string and distance beetween */
export function distanceDamerau(
  string: string,
  compared: string,
): StringWithDistance {
  return {
    string: string,
    compared: compared,
    distance: distance(string, compared),
  };
}

/** Compare distance between 2 words (format like StringWithDistance). */
export function compareDistance(
  a: StringWithDistance,
  b: StringWithDistance,
): number {
  return a.distance > b.distance ? 1 : a.distance < b.distance ? -1 : 0;
}

/**  Get the minimum Damerau-Levenshtein distance between a string and an array of strings */
export function minDistance(
  string: string,
  list: Array<string>,
): number {
  const arrayStrings: Array<StringWithDistance> = distanceList(string, list);
  return arrayStrings.length === 0 ? string.length : arrayStrings.reduce(
    (min, b) => Math.min(min, b.distance),
    arrayStrings[0].distance,
  );
} /** Return an arry of StringWithDistance sorted by min distance */

export function sortByMinDistance(
  list: Array<StringWithDistance>,
): Array<StringWithDistance> {
  return list.concat().sort(compareDistance);
}

/** Return an arry of StringWithDistance sorted by min distance */
export function sortWordByMinDistance(
  target: string,
  list: Array<string>,
): Array<StringWithDistance> {
  const listWithDistance: Array<StringWithDistance> = distanceList(
    target,
    list,
  );
  return sortByMinDistance(listWithDistance);
}

// interface CompareStrings {
//   firstString: string;
//   secondString: string;
//   target: string;
// }
//
// export function compareDistanceBetweenWords(obj: CompareStrings): number {
//   return compareDistance(
//     distanceDamerau(obj.firstString, obj.target),
//     distanceDamerau(obj.secondString, obj.target),
//   );
// }
