define([
    'dojo/_base/declare'
], function(
    declare
) {
    return declare(null, {
        currentSum: 0,
        
        add: function(arg) {
            this.currentSum = this.currentSum + arg;
        },

        result: function() {
            return this.currentSum;
        }

    });
});