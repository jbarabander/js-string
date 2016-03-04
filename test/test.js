var assert = require('chai').assert;
var s = require('../jstring');

describe('trimStart', function() {

    it('should remove the a string from the beginning of the of the string', function() {

        var originalString = 'This is a string was multiple words';
        var newString = s.trimStart(originalString, 'This is a ');

        assert.equal(newString, 'string was multiple words');

    });

});
