// boolean
var isCool = true;
// number
var age = 56;
//string
var eyeColor = "brown";
var favouriteColor = "I'm not old, i'm only " + age;
//Arrays
var pets = ["cat", "dog", "pig"];
var pets2 = ["lion", "dragon", "lizard"];
//Objects
var wizard = {
    a: "John"
};
//null and undefined
var meh = undefined;
var noo = null;
//Tuple
var basket;
basket = ["basketball", 5];
//Enum
var Size;
(function (Size) {
    Size[Size["small"] = 1] = "small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
var sizeName = Size.small;
//Any - !!!!!!!!!!!! BE CAREFUL
var whatever = "aghhhhhhhhhh noooooooooo!!!!!";
var sum = function (a, b) {
    a + b;
};
var answer = sum(4, 5);
console.log(answer);
