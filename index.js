const readline = require('readline');
const colors = require('colors');
const figlet = require('figlet');

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

function sendRequests() {
  clearConsole();

  rl.question('Website: '.yellow, (website) => {
    rl.question('Spoofed IP: '.yellow, (spoofedIP) => {
      rl.question('Spoofed Agent: '.yellow, (spoofedAgent) => {
        rl.question('NoR (Number of Requests): '.yellow, (noOfRequests) => {
          const requests = parseInt(noOfRequests);
          
          for (let i = 0; i < requests; i++) {
            makeRequest(website, spoofedIP, spoofedAgent, i);
          }
          
          rl.close();
        });
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
    console.log(`Request ${index+1} sent successfully.\n`.green.bold);
  })
  .catch((error) => {
    console.log(`Request ${index+1} failed. Error: ${error.message}\n`.red.bold);
  });
}

sendRequests();
