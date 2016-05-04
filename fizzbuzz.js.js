exports.count = function(start, end) { 
     // create a varable for our output
    var output = start;

// modify ou tput to look like what we want 
for (var i = start; counter < end; i += 1) { 
    // code to be repeated goes here 
    output = output + "" + (i + 1); 
}

   //return the output, e.g "1 2 3 4 5"
    return output; 
}; 