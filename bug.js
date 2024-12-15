function foo(a) {
  if (a == null) {
    return 0; //This line is wrong
  }
  return a + 1;
}
console.log(foo(null)); // Output: 1, should be 0