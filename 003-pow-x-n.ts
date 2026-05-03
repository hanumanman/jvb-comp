// 3. Pow(x, n)
//
// Implement pow(x, n), which calculates x raised to the power n (i.e., xn).
//
//
//
// Example 1:
//
// Input: x = 2.00000, n = 10
// Output: 1024.00000
// Example 2:
//
// Input: x = 2.10000, n = 3
// Output: 9.26100
// Example 3:
//
// Input: x = 2.00000, n = -2
// Output: 0.25000
// Explanation: 2-2 = 1/22 = 1/4 = 0.25
//
//
// Constraints:
//
// -100.0 < x < 100.0
// -231 <= n <= 231-1
// n is an integer.
// Either x is not zero or n > 0.
// -104 <= xn <= 104
//
// Link: https://leetcode.com/problems/powx-n/

function myPow(x: number, n: number): number {
  // Handle edge cases
  if (n === 0) return 1;
  if (n < 0) return 1 / myPow(x, n);

  // Fast pow
  let result = 1,
    base = x,
    exponent = Math.abs(n);
  while (exponent > 0) {
    if (exponent % 2 === 1) {
      base *= result;
    }

    base *= base;
    exponent = Math.floor(exponent / 2);
  }
  return result;
}

const x = 2,
  n = -2;

console.log(myPow(x, n)); // 0.25
