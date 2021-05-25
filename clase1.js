// assign the five oceans

const ocean1 = 'Pacific';
const ocean2 = 'Indian';
const ocean3 = 'Antarctic';
const ocean4 = 'Arctic';
const ocean5 = 'Atlantic';

// assign the five oceans in Array

let oceans = [
    'Pacific', // 0
    'Indian', // 1
    'Antarctic', // 2
    'Arctic', // 3
    'Atlantic', // 4
];

let sharks = new Array(
    'Great white',
    'Tiger',
    'Hammerhead'
);

console.log('sharks', sharks[1])
console.log('oceans', oceans[0]);

const mixedData = [
    'String',
    8,
    true,
    [
        "other",
        "array"
    ],
];

console.log('mixedData', mixedData);

let seaCreatures = [
    'shark',
    'seahorse',
    'starfish',
    'squid',
    'octopus'
];

console.log('seaCreature', seaCreatures.length);
console.log('seaCreature', seaCreatures[0]);
console.log('seaCreature indexOf', seaCreatures.indexOf('squid'));
console.log('seaCreature indexOf none value', seaCreatures.indexOf('cuttlefish'));

const lastIndex = seaCreatures.length - 1;

console.log('lastIndex', seaCreatures[lastIndex])
console.log('lastIndex', seaCreatures[15]);

let nestedArray = [
    [
        "Daniel",
        "Soto"
    ],
    [
        "fish",
        "shark"
    ]
];

console.log('nestedArray', nestedArray[1][0]);

seaCreatures[5] = 'whale';

console.log('seaCreatures[5]', seaCreatures);

seaCreatures[7] = 'pufferfish';

console.log('seaCreatures[7]', seaCreatures);

seaCreatures.push('lobster');
 console.log('seaCreatures.push', seaCreatures);

 seaCreatures.unshift('dragonfish');

 console.log('seaCreatures.unshift', seaCreatures);

seaCreatures.splice(7, 1);

console.log('seaCreatures.splice', seaCreatures);

// seaCreatures.splice(7, 2);

// console.log('seaCreatures.splice', seaCreatures);

seaCreatures.pop();

console.log('seaCreatures.pop()', seaCreatures);

let newArray = seaCreatures.pop();

console.log('newArray return pop', newArray);

seaCreatures.shift();
console.log('seaCreatures.shift()', seaCreatures);

seaCreatures[0] = 'manatee';

console.log('seaCreatures[0] overwrite', seaCreatures);

seaCreatures.splice(3, 1, 'sea lion')

console.log('seaCreatures.splice(3, 1)', seaCreatures)

let shellfish = [
    'shrimp',
    'mussel',
    'clam',
    'oyster'
];

// loop through th length of the array
for (let i = 0; i < shellfish.length; i++) {
    console.log('for loop', i, shellfish[i]);
}

let mammals = [
    'manatee',
    'whale',
    'dolphin'
];

for (let mammal of mammals) {
    console.log('mammal', mammal);
}

// isArray

let fish = ['1 piranha', '$eel', 'koi', 'barracuda', 'Eel'];

console.log('fish isArray', Array.isArray(fish));

// reverse()

fish.reverse();

console.log('reverse array', fish);

// fill

// fish.fill('shark');

// console.log('fish.fill', fish);

fish.fill('shark', 1, 3);
console.log('fish.fill 1-2', fish);

// sort()

fish.sort();

console.log('fish.sort()', fish);

let numbers = [42, 23, 16, 15, 8, 4];

numbers.sort();

console.log('numbers.sort()', numbers);

const sortNumerically = (a,b) => {
    return a - b
}
numbers.sort(sortNumerically);

console.log('numbers.sort(sortNumerically)', numbers);

// concat()

let monovalves = ['conch', 'abalone'];
let bivalves = ['oyster', 'mussel', 'clam'];

let shellfishs = bivalves.concat(monovalves);

console.log('shellfishs', shellfishs);

// join()

let shellfishString = shellfishs.join('|');

console.log('shellfishString', shellfishString);

let address = ['Lima', 'Lima', 'San Miguel'];

let fullAddress = address.join('|');

console.log('fullAddress', fullAddress);

// slice


let fishArray = [ "piranha", "barracuda", "koi", "eel", 'shark' ];


let fishWithShortNames = fishArray.slice(2,4);

console.log('fishWithShortNames slices', fishWithShortNames);

// lastIndexOf()

let fishs = [ "piranha", "barracuda", "koi", "eel", 'barracuda', 'shark' ];

console.log('fishs', fishs)
fishs.lastIndexOf('barracuda');

console.log('fish indexOf', fishs.indexOf('barracuda'))

console.log('fish lastIndexOf', fishs.lastIndexOf('barracuda'))


// forEarch()
fishs.forEach(individualFish => {
    console.log('individualFish', individualFish)
})

for (let i = 0; i < fishs.length; i++) {
    console.log('for loop fishs',fishs[i]);
}

// map()

let printFish = fishs.map(individualFish => {
    console.log(individualFish);
})

// pluralize all items

let pluralFish = fishs.map(individualFish => {
    console.log('individualFish', individualFish)
    return `${individualFish}s`
})
console.log('fishs', fishs)
console.log('pluralFish', pluralFish)

// filter()

let filterList = seaCreatures.filter(creature => {
    return creature[0] === 's';
})

console.log('seaCreatures', seaCreatures);

console.log('filterList seaCreatures', filterList);

// reduce

let sum = numbers.reduce((a,b) => {
    return a + b;
});
console.log('numbers', numbers);
console.log('sum', sum);

// find

let seaCreatures2 = [ "whale", "octopus", "shark", "cuttlefish", "flounder", "octopus" ];

const isCephalopod = cephalopod => {
    return ['cuttlefish', 'octopus'].includes(cephalopod);
}

seaCreatures2.find(isCephalopod);

console.log('seaCreatures2.find(isCephalopod)', seaCreatures2.find(isCephalopod))

// findIndex()


seaCreatures2.findIndex(isCephalopod);

console.log('seaCreatures2.findIndex(isCephalopod)', seaCreatures2.findIndex(isCephalopod))

