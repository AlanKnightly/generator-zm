#!/usr/bin/env node
const yeomanEnv = require("yeoman-environment");
const yargs = require('yargs')
const { hideBin } = require('yargs/helpers')

const env = yeomanEnv.createEnv();
const argv = yargs(hideBin(process.argv)).argv

env.registerStub(require("generator-demo"), "demo");
env.run("zm " + argv._.join(" "), argv);


