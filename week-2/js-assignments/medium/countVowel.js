function countVowel(str){
    let count = 0;
    str = str.toLowerCase();
    for(let i=0; i<str.length; i++){
        if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u'){
            count++;
        }
    }
    return count;
}

console.log(countVowel("hello"));
console.log(countVowel("hello world"));
console.log(countVowel("aldfnlandlfna;ldnlansd;lna;sdnf;ln"))