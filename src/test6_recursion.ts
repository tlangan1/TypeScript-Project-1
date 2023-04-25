type nestedNumbers = number | nestedNumbers[];

var s: nestedNumbers = [1, [2, 3], 4];

// unfortunately this is also allowed
var x: nestedNumbers = 1;
