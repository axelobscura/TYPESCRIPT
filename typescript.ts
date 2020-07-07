// boolean
let isCool: boolean = true;

// number
let age: number = 56;

//string
let eyeColor: string = "brown";
let favouriteColor: string = `I'm not old, i'm only ${age}`;

//Arrays
let pets: string[] = ["cat", "dog", "pig"];
let pets2: Array<string> = ["lion", "dragon", "lizard"];

//Objects
let wizard: object = {
  a: "John",
};

//null and undefined
let meh: undefined = undefined;
let noo: null = null;

//Tuple
let basket: [string, number];
basket = ["basketball", 5];

//Enum
enum Size {
  small = 1,
  Medium = 2,
  Large = 3,
}
let sizeName: number = Size.small;

//Any - !!!!!!!!!!!! BE CAREFUL
let whatever: any = "aghhhhhhhhhh noooooooooo!!!!!";

const sum = (a: number, b: number) => {
  a + b;
};

const answer = sum(4, 5);

console.log(answer);
