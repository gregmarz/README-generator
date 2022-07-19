const inquirer = require("inquirer");
const fs = require("fs");

const licenseList = [
  "Apache",
  "Boost",
  "BSD",
  "Eclipse",
  "GNU",
  "IBM",
  "MIT",
  "Mozilla",
  "Perl",
  "Unlicense",
];

const licenseBadge = {
  Apache:
    "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
  Boost:
    "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
  BSD: "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
  Eclipse:
    "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)",
  GNU: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
  IBM: "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)",
  MIT: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
  Mozilla:
    "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
  Perl: "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)",
  Unlicense:
    "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)",
};

const licenseDesc = {
  Apache:
    "A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.",
  Boost:
    "A simple permissive license only requiring preservation of copyright and license notices for source (and not binary) distribution. Licensed works, modifications, and larger works may be distributed under different terms and without source code.",
  BSD: "BSD licenses are a low restriction type of license for open source software that does not put requirements on redistribution. As a low restriction and requirement license type, Berkeley Source Distribution (BSD) licenses are used for the distribution of many freeware, shareware and open source software.",
  Eclipse:
    "The Eclipse Public License (EPL) is a free and open source software license most notably used for the Eclipse IDE and other projects by the Eclipse Foundation. It replaces the Common Public License (CPL) and removes certain terms relating to litigations related to patents.",
  GNU: "Permissions of this strongest copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. When a modified version is used to provide a service over a network, the complete source code of the modified version must be made available.",
  IBM: "The Programs listed in the LI are licensed under those LI terms and conditions in addition to the Program license terms previously agreed to by Client and IBM. If Client does not have previously agreed to license terms in effect for the Program, either the International Program License Agreement or the International License Agreement for Non-Warranted Programs as identified in the LI applies.",
  MIT: "A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.",
  Mozilla:
    "Permissions of this weak copyleft license are conditioned on making available source code of licensed files and modifications of those files under the same license (or in certain cases, one of the GNU licenses). Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work may be distributed under different terms and without source code for files added in the larger work.",
  Perl: "The intent of this document is to state the conditions under which a Package may be copied, such that the Copyright Holder maintains some semblance of artistic control over the development of the package, while giving the users of the package the right to use and distribute the Package in a more-or-less customary fashion, plus the right to make reasonable modifications.",
  Unlicense:
    "A license with no conditions whatsoever which dedicates works to the public domain. Unlicensed works, modifications, and larger works may be distributed under different terms and without source code.",
};

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "Enter Github Username",
    name: "name",
  },
  {
    type: "input",
    message: "Enter Email",
    name: "email",
  },
  {
    type: "input",
    message: "Enter Title",
    name: "title",
  },
  {
    type: "input",
    message: "Enter Description",
    name: "desc",
  },
  {
    type: "input",
    message: "Enter Usage",
    name: "usage",
  },
  {
    type: "input",
    message: "Enter Contribution",
    name: "cont",
  },
  {
    type: "list",
    message: "Choose License",
    choices: licenseList,
    name: "license",
  },
  {
    type: "input",
    message: "Enter Test Instructions",
    name: "test",
  },
  {
    type: "input",
    message: "Enter Installation",
    name: "install",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const Export = `
# ${data.title}
${licenseBadge[data.license]}

## Description
${data.desc}

## Usage
${data.usage}

## Contribution
${data.cont}

## Installation
${data.install}

## Test
${data.test}

## License
${data.license}
${licenseDesc[data.license]}

## User Info
*${data.name}
*${data.email}
`;
  fs.writeFile(fileName, Export, function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("generating README");
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(function (data) {
    writeToFile("./READMEGen.md", data);
  });
}

// Function call to initialize app
init();
