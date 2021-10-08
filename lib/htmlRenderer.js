const path = require("path");
const fs = require("fs")


const templatesDir = path.resolve(__dirname, "../templates");

/* ARROW FUNCTION: nameOfFunction = (parameter1, parameters2) => {} */
const render = (employee) => {
    const html = [];

    html.push(employees.filter(employee => employee.getRole() === "Manager")
        .map(manager => renderManager(manager))
      );
      html.push(employees
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => renderEngineer(engineer))
      );
      html.push(employees
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => renderIntern(intern))
      );
    // Returns a new array with all sub-array elements concatenated 
    // into it recursively up to the specified depth.
    return renderMain(html.flat().join(""));
};

/* 
If there is a period inbetween words, the second word if followed by () is a method:
EXAMPLE: parameter.method() 
*/
const renderManager = manager => {
    let template = fs.readFileSync(path.resolve(templatesDir, "manager.html"), "utf8");
    template = replacePlaceholders(template, "name", manager.getName());
    template = replacePlaceholders(template, "role", manager.getRole());
    template = replacePlaceholders(template, "email", manager.getEmail());
    template = replacePlaceholders(template, "id", manager.getID());
    template = replacePlaceholders(template, "officeNumber", manager.getOfficeNumber());
    return template;
}

const renderEngineer = engineer => {
    let template = fs.readFileSync(path.resolve(templatesDir, "engineer.html"), "utf8");
    template = replacePlaceholders(template, "name", manager.getName());
    template = replacePlaceholders(template, "role", manager.getRole());
    template = replacePlaceholders(template, "email", manager.getEmail());
    template = replacePlaceholders(template, "id", manager.getID());
    template = replacePlaceholders(template, "github", manager.getGithub());
    return template;
}

const renderIntern = intern => {
    let template = fs.readFileSync(path.resolve(templatesDir, "intern.html"), "utf8");
    template = replacePlaceholders(template, "name", manager.getName());
    template = replacePlaceholders(template, "role", manager.getRole());
    template = replacePlaceholders(template, "email", manager.getEmail());
    template = replacePlaceholders(template, "id", manager.getID());
    template = replacePlaceholders(template, "school", manager.getSchool());
    return template;
}

const renderMain = html => {
    const template = fs.readFileSync(path.resolve(templatesDir, "main.html"), "utf8");
    return replacePlaceholders(template, "team", html);
};

const replacePlaceholders = (template, placeholder, value) => {
    const pattern = new RegExp("{{" +placeholder + " }}", "gm");
    return template.replace(pattern, value);
};

module.exports = render;