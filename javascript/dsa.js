// count the number of Digits in the Number
/* function countDigits(num) {
  let cnt = 0;
  if (num < 0) {
    num = Math.abs(num);
  }
  while (num > 0) {
    num = Math.floor(num / 10);
    cnt++;
  }
  return cnt;
}
console.log(countDigits(-2498437)); */

// checkfor the Prime Number
/* function isPrime(num) {
  for (let i = 0; i < Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}
console.log(isPrime(23)); */

// Reverse the number
/* function Reverse(num) {
  let reversed = 0;
  while (num > 0) {
    reversed = reversed * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  return reversed;
}
console.log(Reverse(123456789)); */

// Check for palindrome number
/* function isPalindromeNumber(number) {
  let num = Math.abs(number);
  let reversed = 0;
  while (num > 0) {
    reversed = reversed * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  if (number === reversed) return true;
  return false;
}
console.log(isPalindromeNumber(121)); */
