/*In the snippet of code below please replace all functions
 with arrows and then run the file using npm run babel-node */
 var obJ = {}

 function add1(number) {
    number = number + 1;
    return number;
 }

 function multiplyBy5(number) {
    number = number * 5;
    return number;
 }

 function writeLine(obj) {
   var number =  add1(1)
   number = multiplyBy5(number);
   var that = this;

   obj.howOldAreYou(function () {
     console.log('I am ' that.number + 'years old' )
   });
 }

 writeLine(obj);
 obj.howOldAreYou();
