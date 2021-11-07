/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    let result = 0
    for(let i = 0; i < s.length; i ++){
        if(enumMap[s[i]] < enumMap[s[i + 1]]){
            result -= enumMap[s[i]]
        }
        else{
            result += enumMap[s[i]]
        }
    }
    return result
};

const enumMap = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
}