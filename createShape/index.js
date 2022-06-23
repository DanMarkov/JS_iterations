function createShape(shape) {
  for (key in shape) {
    console.log(shape[key]);
  }
}

// Sample usage - do not modify
createShape({
  type: 'square',
  dimensions: [10, 10],
});

createShape({
  type: 'rectangle',
  dimensions: [20, 15],
});
