license = "";
//returns badge image, and on click provides the license link
function renderlicenseInfo(license) {
  switch (license) {
    case "GNU AGPLv3":
      return (license =
        "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)");
    case "GNU GPLv3":
      return (license =
        "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)");

    case "GNU LGPLv3":
      return (license =
        "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)");

    case "Mozilla Public License 2.0":
      return (license =
        "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)");

    case "Apache License 2.0":
      return (license =
        "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)");

    case "MIT License":
      return (license =
        "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)");

    case "Boost Software License 1.0":
      return (license =
        "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)");

    case "The Unlicense":
      return (license =
        "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)");
    case "Other":
      return (license =
        "[![License: TYPE LICENSE NAME HERE](PROVIDE BADGE IMAGE SRC LINK HERE)](PROVIDE BADGE LINK HERE)");
  }
}

function renderBadgeSection(answers) {
  if (answers.license !== "None") {
    return `${renderlicenseInfo(answers.license)}`;
  } else {
    return "";
  }
}

//returns the license section of README
function renderLicenseSection(answers) {
  if (answers.license !== "None") {
    return `## License
  ${answers.license}
  ${renderlicenseInfo(answers.license)}
  `;
  } else {
    return "";
  }
}

//generate markdown for README
const generateMarkdown = (answers) => {
  return `
  # ${answers.title} ${renderBadgeSection(answers)}

  ## Description
  \`\`\`
  ${answers.description}
  \`\`\`
  ## Badges
   ${answers.license}
  
  
  ## Table Of Contents
  
[Authors](#authors) <br />
[Installation](#installation)<br />
[Usage](#usage)<br />
[License](#license)<br />
[Contributing](#contributing)<br />
[Tests](#tests)<br />
[Questions](#questions)<br />

  ## Authors
  
[ ${answers.username}](https://www.github.com/${answers.username})


  ## Installation
  
  ${answers.installation}
 
  bash
    npm install 
    cd 
      
  ## Usage
  ${answers.usage}

  ${renderLicenseSection(answers)}
  
  
  
  ## Contributing
  
  ${answers.contribution}
  Contributions are always welcome!
  
  
  
  ## Tests
  
  ${answers.instructions} 
  
  
  ## Questions
 
  Have any questions? Feel free to reach ${answers.username} </br>
  at ${answers.email} </br>
  or [Twitter]("twitter.com/${answers.twitter}")</br>
  
  

  ## Pages
  [Check out this project on GitHub Pages]("https://${
    answers.username
  }.github.io/${answers.title}/")</br>
    `;
};
//exports
module.exports = generateMarkdown;
