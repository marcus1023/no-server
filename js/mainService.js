angular.module('resources' ).service('mainService', function($http, $q){

var questions = [{
  question: "Write a JavaScript function to convert an amount to coins.",
  id: 0
},
{
  question: " Write a JavaScript function to compute the factors of a positive integer.",
  id: 1
},
{
  question: " Write a JavaScript function that reverse a number.",
  id: 2
},
{
  question: " Write a JavaScript function that checks whether a passed string is palindrome or not?",
  id: 3
},{
  question: "Write a JavaScript function that generates all combinations of a string.",
  id: 4
},{
  question: " Write a JavaScript function that returns a passed string with letters in alphabetical order.",
  id: 5
},{
  question: "Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.",
  id: 6
},{
  question: "Write a JavaScript function that accepts a string as a parameter and find the longest word within the string",
  id: 7
},{
  question: "Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.",
  id: 8
},{
  question: "Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.",
  id: 9
},{
  question: "Write a JavaScript function which accepts an argument and returns the type.",
  id: 10
},{
  question: "Write a JavaScript function which returns the n rows by n columns identity matrix.",
  id: 11
},{
  question: "Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.",
  id: 12
}]

//
this.getWeather = function(){
var defer = $q.defer();
  $http({
   method: "GET",
   url: 'http://api.wunderground.com/api/d58705ef6515bfbc/conditions/q/PA/Philadelphia.json'
 }).then(function(res){
   var data = res.data.current_observation
    defer.resolve(data.feelslike_f)
 })
 return defer.promise;
}
this.getNewWeather = function(){
var defer = $q.defer();
  $http({
   method: "GET",
   url: 'http://api.wunderground.com/api/d58705ef6515bfbc/conditions/q/' + state + city +'.json'
 }).then(function(res){
   var data = res.data.current_observation
    console.log('worked' + data)
 })
 return defer.promise;
}


oldQuestionArray = []
console.log(oldQuestionArray)

 this.getQuestion = function(){

   return questions

}

this.getAllResources = [[
  {
    sref: "enjoyCss",
    name: "Enjoy CSS"
  },
  {
    sref: "cssbutton",
    name: "CSS Button"
  },
  {
   sref: "cssanimate",
   name: "CSS Animate"
 },
 {
   sref: "cssgradient",
   name: "CSS Gradient"
 },
 {
   sref: "flexfroggy",
   name: "Flexbox Froggy"
 }],
[{
    sref: "pixlr",
    name: "Pixlr"
  },
  {
   sref: "wireframe",
   name: "Wireframe"
 }]]

})
