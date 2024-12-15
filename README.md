# JavaScript Loose Comparison Bug: Incorrect Null Handling

This repository demonstrates a common error in JavaScript: incorrect handling of null values due to loose comparison. The `foo` function is intended to return 0 when the input `a` is null, but because of loose comparison (`==`), it treats null as 0 and returns 1.

## Bug Description
The function `foo` uses loose comparison (`==`) to check if the input `a` is null. This comparison can lead to unexpected behavior because loose comparison does not always distinguish between different types of falsy values. In this case, `null == 0` evaluates to `true` causing the function to return 1 instead of the expected 0.

## Solution
The solution is to use strict comparison (`===`) to ensure that null is treated as a distinct value.  Strict comparison only evaluates to true if both the type and value are the same.
