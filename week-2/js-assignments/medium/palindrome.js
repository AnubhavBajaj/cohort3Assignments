function isPalindrome(str){
    let reversedstr = str.split('').reverse().join('');
    console.log(reversedstr);
    return (str.toLowerCase() === reversedstr.toLowerCase());
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("madam"));