/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    const myMap = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
    let change = s[s.length -1]
    let sum = myMap[change]
    for(let i= s.length -2; i >= 0; i--){
        let key = s[i]
        if (key === change || myMap[key] > myMap[change]){
            if(key != change){
                change = key
            }
            sum += myMap[key]
        }else {
            if(key != change){
                change = key
            }
            sum -= myMap[key]
        }
    }
    
    return sum
      
};