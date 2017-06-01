// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      indexWaldo = i;
      found(i);   // execute callback
    }
  }
}

function actionWhenFound(indexWaldow) {
  console.log("Found Waldo at index " + indexWaldow + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);