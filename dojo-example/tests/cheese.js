define([
    'dojo/text!features/cheese.feature'
], function(
    featureSource
) {
    var cucumber = intern.getInterface('cucumber');
    var assert = intern.getPlugin('chai').assert;

    cucumber.registerCucumber(
        'Finding some cheese',
        featureSource,
        function() {
            cucumber.Given('I am on the Google search page', function() {
                return this.remote.get('/google.html');
            });

            cucumber.When('I search for {string}', function(value) {
                return this.remote.findById('q').type(value).pressKeys('\uE007').end();
            });

            cucumber.Then('the page title should start with {string}', function(value) {
                return this.remote.getPageTitle().then((title) => {
                    assert.equal(title, value);
                });
            });

            cucumber.After(function() {
                return this.remote.quit();
            });
        }
    );
});