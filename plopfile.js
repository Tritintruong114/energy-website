module.exports = function (plop) {
  plop.setGenerator("component", {
    description: "Create a component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is this component's name?",
      },
      {
        type: "input",
        name: "element",
        message: "HTML element (div is default)",
        default: "div",
      },
    ],
    actions: [
      {
        type: "addMany",
        base: `templates/components`,
        templateFiles: `templates/components/*.hbs`,
        destination: "components/{{camelCase name}}",
      },
      {
        // Action type 'append' injects a template into an existing file
        type: "append",
        path: "./components/index.ts",
        // Pattern tells plop where in the file to inject the template
        pattern: `// Components`,
        template: `export * from './{{camelCase name}}';`,
      },
    ],
  });
};
