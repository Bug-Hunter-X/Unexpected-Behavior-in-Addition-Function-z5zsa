function foo(a, b) {
  if (a === null || b === null) {
    return 0; //This will cause error if a and b are not numbers
  }
  return a + b; 
}