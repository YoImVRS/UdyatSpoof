const readline = require('readline');
const colors = require('colors');
const figlet = require('figlet');
const fs = require('fs');

process.stdout.write('\x1b]2;UdyatSpoof v1 - github.com/ottersek\x1b\x5c');
process.stdout.write('\x1Bc');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function clearConsole() {
  console.clear();

  console.log(figlet.textSync('Udyat', { horizontalLayout: 'full' }).magenta);
  console.log('UdyatSpoof v1 - github.com/ottersek/UdyatSpoof\n'.cyan);
}

function getRandomAgent(agents) {
  const randomIndex = Math.floor(Math.random() * agents.length);
  return agents[randomIndex];
}

function selectAgentOption(callback) {
  rl.question('Spoofed Agent (Default / From File / Custom): '.yellow, (option) => {
    if (option.toLowerCase() === 'default') {
      callback('default');
    } else if (option.toLowerCase() === 'from file') {
      callback('from file');
    } else if (option.toLowerCase() === 'custom') {
      callback('custom');
    } else {
      console.log('Invalid option. Please try again.\n'.red);
      selectAgentOption(callback);
    }
  });
}

function sendRequests() {
  clearConsole();

  rl.question('Website: '.yellow, (website) => {
    rl.question('Spoofed IP: '.yellow, (spoofedIP) => {
      selectAgentOption((option) => {
        if (option === 'default') {
          fs.readFile('agents.udyat', 'utf8', (error, data) => {
            if (error) {
              console.error(`Error reading agents file: ${error}`);
              rl.close();
              return;
            }

            const agents = data.split('\n').filter(agent => agent.trim() !== '');
            rl.question('NoR: '.yellow, (noOfRequests) => {
              const requests = parseInt(noOfRequests);
              for (let i = 0; i < requests; i++) {
                const spoofedAgent = getRandomAgent(agents);
                makeRequest(website, spoofedIP, spoofedAgent, i);
              }
              rl.close();
            });
          });
        } else if (option === 'from file') {
          rl.question('Agents file: '.yellow, (agentsFile) => {
            fs.readFile(agentsFile, 'utf8', (error, data) => {
              if (error) {
                console.error(`Error reading agents file: ${error}`);
                rl.close();
                return;
              }

              const agents = data.split('\n').filter(agent => agent.trim() !== '');
              rl.question('NoR: '.yellow, (noOfRequests) => {
                const requests = parseInt(noOfRequests);
                for (let i = 0; i < requests; i++) {
                  const spoofedAgent = getRandomAgent(agents);
                  makeRequest(website, spoofedIP, spoofedAgent, i);
                }
                rl.close();
              });
            });
          });
        } else if (option === 'custom') {
          rl.question('Custom Spoofed Agent: '.yellow, (spoofedAgent) => {
            rl.question('NoR: '.yellow, (noOfRequests) => {
              const requests = parseInt(noOfRequests);
              for (let i = 0; i < requests; i++) {
                makeRequest(website, spoofedIP, spoofedAgent, i);
              }
              rl.close();
            });
          });
        }
      });
    });
  });
}

function makeRequest(website, spoofedIP, spoofedAgent, index) {
  const axios = require('axios');
  axios.get(website, {
    headers: {
      'X-Forwarded-For': spoofedIP,
      'User-Agent': spoofedAgent
    }
  })
    .then(() => {
      console.log(`Request ${index + 1} sent successfully.\n`.green.bold);
    })
    .catch((error) => {
      console.log(`Request ${index + 1} failed. Error: ${error.message}\n`.red.bold);
    });
}

sendRequests();
