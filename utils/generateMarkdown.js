// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents

  *[Installation](#installation)
  *[Usage](#Usage)
  *[License](#License)
  *[Tests](#Tests)
  *[Contributing](#Contributing)

  ## Installation

  To install the necessary dependenciesrun the following command:
  ${data.dependencies}

  ## Usage

  ${data.usage}

  ## License

  This product is licensed under the ${data.license} license.

  ## Tests

  To run tests, run the following command:
  
  ${data.tests}

  ## Contributing

  ${data.contributing}


  ## Questions 
  If you ahve any questions about the repo, open an issue, or contact me directly at ${data.email}. You can find more of my work at ${data.username}.
`;
}

module.exports = generateMarkdown;
