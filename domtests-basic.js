QUnit.module("DOM Tests", {
    beforeEach: function () {
        $('body').append("<div id='d1'>hello</div>");
        SUT.x = 2
    }
});

QUnit.test('testing the presence of the element in the dom', (assert)=> {
    // assert.strictEqual(SUT.x, 2, 'global variable');
    assert.equal($("#sample").length ,1);
    assert.equal($("#sample").text(),"hello");
});