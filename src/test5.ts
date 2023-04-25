type Food = "meat" | "plants";

interface Animal {
  eat(food: Food): void;
}

type Sound = "woof" | "meow";

interface Dog extends Animal {
  bark(): Sound;
}

var benny: Dog = {
  bark: (): Sound => {
    return "woof";
  },
  eat: (a: Food): void => {},
};
