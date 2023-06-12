const fs = require('fs');
const minimist = require('minimist');

const args = minimist(process.argv.slice(2));

const leetMap = {
  a: ['a', '4', '@'],
  b: ['b', '8'],
  e: ['e', '3'],
  g: ['g', '6', '9'],
  i: ['i', '1', '!'],
  l: ['l', '1', '!'],
  o: ['o', '0'],
  s: ['s', '5', '$'],
  t: ['t', '7'],
};

function generateCombinations(name) {
  const combinations = [];

  const backtrack = (index, currentCombination) => {
    if (index === name.length) {
      combinations.push(currentCombination);
      return;
    }

    const currentChar = name[index].toLowerCase();
    const leetChars = leetMap[currentChar] || [currentChar];

    for (let char of leetChars) {
      backtrack(index + 1, currentCombination + char);
    }
  };

  backtrack(0, '');
  return combinations;
}

function saveToFile(output, combinations) {
  const data = combinations.join('\n');
  fs.writeFile(output, data, 'utf8', (err) => {
    if (err) {
      console.error(`Error writing to file: ${err}`);
    } else {
      console.log(`Combinations saved to ${output}`);
    }
  });
}

if (args.name && args.output) {
  const name = args.name;
  const output = args.output;

  const combinations = generateCombinations(name);
  saveToFile(output, combinations);
} else {
  console.error('Please provide both --name and --output options.');
}
