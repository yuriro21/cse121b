//***Images Generator***

//create an array of images links.
const imagesArray = [
    'url("https://media.geeksforgeeks.org/wp-content/uploads/20200316135008/red7.png")',
    'url("https://media.geeksforgeeks.org/wp-content/uploads/20200316135014/yellow3.png")',
    'url("https://media.geeksforgeeks.org/img-practice/MaskGroup58@2x-min-1637846347.png")',
    'url("https://media.geeksforgeeks.org/img-practice/banner/dsa-self-paced-course-overview-image.png")',
    'url("https://media.geeksforgeeks.org/img-practice/banner/complete-interview-preparation-thumbnail.png")',
    'url("https://media.geeksforgeeks.org/img-practice/banner/Amazon-Test-Series-thumbnail.png")',
    'url("https://media.geeksforgeeks.org/img-practice/banner/dsa-self-paced-thumbnail.png")'
];

//select the tag of our HTML page
const image = document.querySelector('section');

//Write a function to store a random value and the length of the array, then assigned to the images inside the array and display.
function showImage() {
    var a = Math.floor(Math.random() * imagesArray.length);
    var img = imagesArray[a];
    image.style.backgroundImage = img;
}

//set the time between the images to diisplay
setInterval(showImage, 1500);