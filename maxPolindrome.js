'use strict'

function maxPolindrome(str) {
    //search max polindrome in str
    let maxPol = '',
        maxPolLength = 0;

    for (let i = 0; i < str.length; i++) {
        let pos = i;
        // if we have another str[i]
        while ((pos = str.indexOf(str[i], pos + 1)) != -1) {
            if (pos - i > maxPolLength) {
                let subStr = str.slice(i, pos + 1);
                if(isPolindrome(subStr)){
                    maxPolLength = subStr.length;
                    maxPol = subStr;
                }
            }

        }
    }
    return maxPol;
}

function isPolindrome(str) {
    // if str - palindrome, return true.
    let left = 0,
        right = str.length - 1;
    while (left <= right) {
        if (str[left] != str[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

console.log(`Самый длинный полиндром: `);
console.log(maxPolindrome('fffkffgffkfdk'));