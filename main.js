function getAdder () { 
    let result = 0; 
    
    return function(x) { 

        result += x; 
        return result; 
    } 
};

let sum = getAdder();


console.log (sum (3));
console.log (sum (5));
console.log (sum (20));
  