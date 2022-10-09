/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
const myName = 'Edisson J. Ruiz';

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
document.querySelector('#name').textContent = myName;

// Step 3: declare and instantiate a variable to hold the current year
const currentTime = Date();

// Step 4: place the value of the current year variable into the HTML file
document.querySelector('#year').innerHTML = currentTime;

// Step 5: declare and instantiate a variable to hold the name of your picture
const newPicture = "images/skydive.png";

// Step 6: copy your image into the "images" folder

// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())
document.querySelector("img").setAttribute('src', newPicture);



/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
const foods = ['Lasagna' , 'Pasta', 'Pabellon', 'Burgers', 'Pizza'];

// Step 2: place the values of the favorite foods variable into the HTML file
document.getElementById("food").innerHTML = foods.toString();

// Step 3: declare and instantiate a variable to hold another favorite food
let fruit = 'kiwi';

// Step 4: add the variable holding another favorite food to the favorite food array
foods.push(fruit);

// Step 5: repeat Step 2
document.getElementById("food").innerHTML = foods.toString();

// Step 6: remove the first element in the favorite foods array
foods.shift();

// Step 7: repeat Step 2
document.getElementById("food").innerHTML = foods.toString();

// Step 8: remove the last element in the favorite foods array
foods.pop();

// Step 7: repeat Step 2
document.getElementById("food").innerHTML = foods.join(", ").toString();