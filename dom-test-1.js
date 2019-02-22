QUnit.module("sample dom testing");

QUnit.test("check if element is present", (assert) => {
    assert.equal($(".row-line").length ,1);
    assert.equal($(".row-line").text(), "hello");
});

QUnit.test("loading the weather data", (at) => {
    var done = assert.async();
    setTimeout(function() {

        assert.equal( document.activeElement, input[0], "Input was focused" );
        done();
    });
})