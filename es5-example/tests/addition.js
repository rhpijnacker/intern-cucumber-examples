const fs = require('fs');
const Calculator = require('../models/Calculator');

const { registerCucumber, Given, When, Then } = intern.getInterface('cucumber');
const { assert } = intern.getPlugin('chai');

let featureSource = fs.readFileSync('features/addition.feature', 'utf-8');

registerCucumber(
    'Calculator addition',
    featureSource,
    () => {
        Given('the calculator is cleared', () => {
            this.calculator = new Calculator();
        });

        When(/^I add (\d+) and (\d+)$/, (x, y) => {
            this.calculator.add(x);
            this.calculator.add(y);
        });

        Then(/^the result should be (\d+)$/, (z) => {
            let result = this.calculator.result();
            assert.equal(z, result, 'Expected result to be ' + z);
        });
    }
);
