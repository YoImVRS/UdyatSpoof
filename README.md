# UdyatSpoof

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/ottersek/UdyatSpoof/blob/main/LICENSE)

UdyatSpoof is a script that allows you to send requests from a spoofed IP address. Please note that the use of IP spoofing may have legal and ethical implications. Ensure you have the necessary permissions and use it responsibly.

## Updates

1. A new system for spoofed agents has been implemented.
2. The Spoofed Agents options have been modified so that you can use 3 ways (Default: Agents from agents.udyat file | From File: with the option to select a file with several agent names and choose them randomly | Custom: write by hand the agent for all requests, having to write it only once).

# To use the agent generator we have implemented just follow these simple steps:
```js
cd agent-gen
npm i
node agent-gen.js --name (first variable of the Agent, then they will be generated from there) --output (output file, ex: agents.udyat)
```

****

## Installation

1. Clone the repository:
```shell
git clone https://github.com/ottersek/UdyatSpoof.git
```
2. Navigate to the project directory:
```
cd UdyatSpoof
```
3. Install the dependencies:
```
npm i
```

## Usage

1. Start the script
```
npm start
```
2. The UdyatSpoof panel will appear in your terminal:
```
┏━━━━━━━━━━━━━━━━━━━┓
┃    UdyatSpoof     ┃
┗━━━━━━━━━━━━━━━━━━━┛

Website: [Enter the target website URL]
Spoofed IP: [Enter the spoofed IP address]
Spoofed Agent: [Enter the spoofed User-Agent]
NoR (Number of Requests): [Enter the number of requests]
```
3. Provide the required information:
- Website: Enter the URL of the target website.
- Spoofed IP: Enter the IP address you want to spoof.
- Spoofed Agent: Enter the User-Agent you want to use for the requests (you can invent one).
- NoR (Number of Requests): Enter the number of requests you want to send to the website.
4. Press Enter to execute the requests.
5. The script will send the specified number of requests to the target website from the spoofed IP address using the provided User-Agent.

## Updated Demo

![image](https://github.com/ottersek/UdyatSpoof/assets/121310374/a1878b2f-e594-4cd4-b723-5cacb96a689b)
![image](https://github.com/ottersek/UdyatSpoof/assets/121310374/303deb3d-87b1-4285-b7bd-7bc14702b7b9)
![image](https://github.com/ottersek/UdyatSpoof/assets/121310374/4f659fd7-b831-4bdf-83e2-e070f20bd327)


## Original Demo

![image](https://github.com/ottersek/UdyatSpoof/assets/121310374/2f3509cd-12c9-4586-8ee8-750fbdd19eaa)

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Copyright

© ottersec - All rights reserved. The source code and files included in this repository are owned by ottersec. You are permitted to use and modify them for your own purposes, provided that credit is given to [Ottersec](https://github.com/ottersek) as the original source through a link to their GitHub profile.

## Disclaimer

This project is provided for educational, ethical, and lawful purposes. I assume no responsibility for the misuse of this code or any illegal or unethical activities performed by users with it. Any use of this project is solely at the user's own risk and discretion.

Please remember to always act ethically, obtain necessary permissions, and comply with applicable laws and regulations before using this code.
