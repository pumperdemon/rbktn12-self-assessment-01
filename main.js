// -------------------------------------------------------------------------------------------------
// 1 - Complete the function cube that returns the cube of x:

var cubed = function(x) {
    // your code here
    //console.log(x*x*x)
    return x*x*x
};
cubed(3)


// -------------------------------------------------------------------------------------------------
// 2 - Write a function rentalCar that accepts a person's name and age as arguments,
// and returns either 'You cannot have the keys, .', or 'Have fun driving, !'
// depending on whether or not the person is old enough.
// In the US, most rental car companies do not allow you to rent a car until you are 21.
// your code here
var rentalCar = function(name, age) {
    if (age < 21) {
        return 'You cannot have the keys, ' + name + ' .'
    } else {
        return 'Have fun driving, ' + name + ' !'
    }

}

// -------------------------------------------------------------------------------------------------
// 3 - You should have noticed a large amount of repetitive code when modifying
// scoreToGrade to accommodate + or - grades. When we do lots of repetitive things,
// that's a clear signal that there is a better way. Write a helper function letterGrade
// that accepts two arguments, letter and score, and works like this:
function letterGrade(letter, score) {
    // your code here
    if (score > 100 || score < 60) {
        return 'monkey'
    } else
        if (score % 10 <= 2) {
            return letter + '-'
        } else
            if (score % 10 >= 8) {
                return letter + '+'
            } else {
                return letter
            }
}


// These are examples of what a *working* function would output.
// letterGrade("A", 95); // => 'A'
// letterGrade("A", 91); // => 'A-'
// letterGrade("B", 88); // => 'B+'
// letterGrade("monkey", 160); // => 'monkey-'

// -------------------------------------------------------------------------------------------------
// 4 - Write a function called counter that, when invoked, always returns a number that
// is one more than the previous invocation. For instance:
function counter() {

function counter(){
    var count = 0;
    function subcounter(){
        count++
    }
    return count
  }

  counter()

    // TODO: your code here
}
// counter(); // => 1
// counter(); // => 2
// counter(); // => 3