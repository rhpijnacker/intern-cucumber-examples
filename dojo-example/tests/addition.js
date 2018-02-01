define([
    'models/Calculator',
    'dojo/text!features/addition.feature'
], function(
    Calculator,
    featureSource
) {
    var cucumber = intern.getInterface('cucumber');
    var assert = intern.getPlugin('chai').assert;

    cucumber.registerCucumber(
        'Calculator addition',
        featureSource,
        function() {
            cucumber.Given('the calculator is cleared', function() {
                this.calculator = new Calculator();
            });

            cucumber.When(/^I add (\d+) and (\d+)$/, function(x, y) {
                this.calculator.add(x);
                this.calculator.add(y);
            });

            cucumber.Then(/^the result should be (\d+)$/, function(z) {
                var result = this.calculator.result();
                assert.equal(z, result, 'Expected result to be ' + z);
            });
        }
    );
});