function isAnagram(str1, str2) {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    if(str1.length !== str2.length) return false;
    let sortedStr1 = str1.split('').sort().join('');
    let sortedStr2 = str2.split('').sort().join('');
    return sortedStr1 === sortedStr2;
}

console.log(isAnagram("listen", "Silent"))
console.log(isAnagram("hello", "bye"))
console.log(isAnagram("hello", "hello"))