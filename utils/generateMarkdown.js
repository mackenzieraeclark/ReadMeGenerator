function generateMarkdown(data) {
  
  // Set up info for specific github user BEFORE the return
  const avatar = `https://github.com/${data.username}.png?size=50`;
  const gitHub = `https://img.shields.io/badge/Github-${data.username}-4cbbb9`;

  return `
  # ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Tests](#tests)
  - [Contributors](#contributors)
  - [Details](#details)
  
  ## Installation
  Packages required to run this program: ${data.installation}

  ## Technology
  Technologies and Tools used in this program: \n![Badge](${data.technology})

  ## Usage
  Examples of how to use this program: ${data.usage}

  ## License
  ${data.license}

  ## Tests
  To test, run the following command: ${data.tests}

  ## Contributors
  ${data.contributer}

  ## Contact
  \n![Badge](${gitHub}) 
  \n![Profile Image](${avatar})
  \nView the project in GitHub at: ${data.url}
  \nIf you have any questions, contact the author directly at ${data.email}.
  
  _This file was generated using a [README generator](https://github.com/mackenzieraeclark/ReadMeGenerator)`

}

module.exports = generateMarkdown;
