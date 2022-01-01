'use strict';

/*
 * LOOPS BASIC
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    
    const vowels = [];
    const consonants = [];
    for(let char of s){
        
        if(['a','e','i','o','u'].includes(char)){
            vowels.push(char);
        }
        else{
            consonants.push(char);
        }
        
    }
    const mix = [...vowels,...consonants];
    
    for(let char of mix){
        console.log(char);
    }
    
}

/**
 * 
 * REGEX
 */
function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */
    
    const re = /(^[aeiou])+[a-z]{1,}\1$/;
    
    
    /*
     * Do not remove the return statement
     */
    return re;
}