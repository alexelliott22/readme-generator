// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadgeAndLink(license) {
  if(license == "APACHE 2.0") {
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-yellowgreen.svg)](https://opensource.org/licenses/Apache-2.0)`;
  }
  else if(license == 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
  else if(license == 'GPL 2.0') {
    return `[![License: GPL 2.0](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`
  }
  else if(license == 'BSD 2.0') {
    return `[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`;
  }
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license == 'None') {
    return '';
  }
  else {
    return `
      ## License 
      
      ${renderLicenseBadgeAndLink(license)}
      
      This project is licensed under ${license} license.
    `;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  <${renderLicenseLink(data.license)}>

  ## Description
  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#Usage)
  * [License](#License)
  * [Tests](#Tests)
  * [Contributing](#Contributing)

  ## Installation

  To install the necessary dependenciesrun the following command:
  ${data.dependencies}

  ## Usage

  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Tests

  To run tests, run the following command:
  
  ${data.tests}

  ## Contributing

  ${data.contributing}


  ## Questions 
  If you ahve any questions about the repo, open an issue, or contact me directly at <${data.email}>. You can find more of my work at <https://github.com/${data.username}>.
`;
}

module.exports = generateMarkdown;
