/* 1. The class Movie is stated below. An instance of class Movie represents a film.
 This class has the following three properties:
a) Write a constructor for the class Movie, which takes a String representing the title of the movie,
 a String representing the studio, and a String representing the rating as its arguments, 
 and sets the respective class properties to these values.
b) The constructor for the class Movie will set the class property 
rating to "PG" as default when no rating is provided.
c) Write a method getPG, which takes an array of base type Movie as its argument,
and returns a new array of only those movies in the input array with a rating of "PG".
 You may assume the input array is full of Movie instances. The returned array need not be full.
d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, 
the studio “Eon Productions”, and the rating “PG­13”*/
// Solution

class Movie{
    constructor(Title,Studio,Rating="PG"){
  this.Title = Title;
  this.Studio = Studio;
  this.Rating = Rating;
 }
  static getPG(arr){
  return arr.filter(movies => movies.Rating === "PG");
 }
}
var casinoRoyal = new Movie("Casino Royal","Eon Productions","PG13");
var M1 = new Movie("Singam","Sun Pictures","R");
var M2 = new Movie("The Robo","Lyca Production","PG13");
var M3 = new Movie("Sky Fall","ParaMound Pictures","PG");
var M4 = new Movie("Furious 9","ParaMound Pictures");
var M5 = new Movie("Pathan","Lyca Production");
var arr = [M1,M2,M3,M4,M5];
var Movies1 = Movie.getPG(arr);
console.log(Movies1);
console.log(casinoRoyal);
