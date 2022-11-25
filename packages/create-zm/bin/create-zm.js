#!/usr/bin/env node
const yeomanEnv = require("yeoman-environment");
const yargs = require('yargs')
const { hideBin } = require('yargs/helpers')

const env = yeomanEnv.createEnv();
const argv = yargs(hideBin(process.argv)).argv

env.registerStub(require("generator-alanshendemo"), "alanshendemo");
env.run("alanshendemo " + argv._.join(" "), argv);


