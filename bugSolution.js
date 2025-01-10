function foo(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return NaN; //Return NaN for non-numeric inputs
  }
  return a + b; 
}