const Generator = require('yeoman-generator');
const path = require("path");

module.exports = class Demo extends Generator {
  // The name `constructor` is important here
  constructor(args, opts) {
    // Calling the super constructor is important so our generator is correctly set up
    super(args, opts);

    // Next, add your custom code
    this.option('babel'); // This method adds support for a `--babel` flag
  }
  method1(){
    this.log(1)
  }
  method2(){
    this.log(2)
  }
};
