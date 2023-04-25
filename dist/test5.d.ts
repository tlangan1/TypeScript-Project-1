type Food = "meat" | "plants";
interface Animal {
    eat(food: Food): void;
}
type Sound = "woof" | "meow";
interface Dog extends Animal {
    bark(): Sound;
}
declare var benny: Dog;
