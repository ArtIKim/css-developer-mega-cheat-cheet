const animal = {
    name: "Bob",
    legs: 4,
    shell: true,
    type: "amphibious",
    meal: 10,
    diet: "berries",
};

const feed = ({ name, meal, diet }) => {
    console.log(`Feed ${name} ${meal} kilos of ${diet}`);
};
feed(animal);

// OR

const feed2 = (animal) => {
    const { name, meal, diet } = animal;
    console.log(`Feed ${name} ${meal} kilos of ${diet}`);
};
feed2(animal);
