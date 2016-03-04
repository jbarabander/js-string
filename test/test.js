var assert = require('chai').assert;
var s = require('../src/js-string');

describe('trimStart', function() {

    it('should remove a string from the beginning of another string', function() {

        var originalString = 'This is a string was multiple words';
        var stringToRemove = 'This is a ';
        var newString = s.trimStart(originalString, stringToRemove);

        assert.equal(newString, 'string was multiple words');

    });

});
