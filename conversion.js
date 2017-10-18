function alphabetsTransormation(){
  this.alphabets = "abcdefghijklmnopqrstuvwxyz".split("");
  this.alphabetsObject ={
    'a':'1',
    'b':'2',
    'c':'3',
    'd':'4',
    'e':'5',
    'f':'6',
    'g':'7',
    'h':'8',
    'i':'9',
    'j':'10',
    'k':'11',
    'l':'12',
    'm':'13',
    'n':'14',
    'o':'15',
    'p':'16',
    'q':'17',
    'r':'18',
    's':'19',
    't':'20',
    'u':'21',
    'v':'22',
    'w':'23',
    'x':'24',
    'y':'25',
    'z':'26', 
  }

  this.alphabetsConverts = function(expression){

    console.log("Hi there :) I will invert "+expression+" for you :");
    var output = "";

    //Checks if the expression contains only alphanumric chars
    if(!(/^\w+$/.test(expression))){
      console.log("Ooops! You have to give me an alphanumeric expression !");
      return;
    }  

    //Checks if the expression contains values more than 26
    var greaterThanLimit = expression.match(/[3-9][0-9]|2[7-9]/g);
    if(greaterThanLimit && greaterThanLimit.length>0){
      console.log("Sorry! numbers greater than 26 cannot be analyzed :/");
      console.log("Numbers representing letters must be less than 26  and seprated by letters ;)")
      return;
    }

    var numericData = expression.match(/\d{1,2}/g);
    //Letters to numbers
    for(var exp in expression){ 
        if(expression[exp].toLowerCase() in this.alphabetsObject){
          output += this.alphabetsObject[expression[exp].toLowerCase()];
        } else{
          output += '#';
        }
    }

    //numbers to letters
    for(var numbers in numericData){
      if(numericData[numbers].length>1)
        output = output.replace("##", this.alphabets[parseInt(numericData[numbers]) -1]);
      else{
        
        output = output.replace("#", this.alphabets[parseInt(numericData[numbers]) - 1]);
      } 
    }

  console.log(expression+" Will be inverted like this =======> "+output);
  }
}
