
var txtIp = undefined;

// const $ = require('../jquery-3.3.1.slim');

QUnit.module("XSS Vulnerability test for element selectors", {
    beforeEach: () => {
        txtIp = "asdfqwerty123123109oasdfad"
    },
    afterEach: () => console.log(txtIp)
});

var sanitizeInput = (x) => {
    var result = $.parseHTML(x)[0].textContent;
    console.log('the parsed safe content is : '+ result);
    return result;
}

QUnit.test("testing with alphanumeric", (at) => {
    at.equal(txtIp, sanitizeInput(txtIp));
});

QUnit.test("testing with numeric values", (at)=>{
    txtIp = "12345677890.00910123";
    at.equal(txtIp, sanitizeInput(txtIp));
});

QUnit.test("testing with numeric values and comma", (at)=>{
    txtIp = "123,45677890.00910123";
    at.equal(txtIp, sanitizeInput(txtIp));
});

QUnit.test("testing with special characters", (at)=>{
    txtIp = 'ABCD!@#$%^&*()23-=`][{}"/\|';
    at.equal(txtIp, sanitizeInput(txtIp));
});

QUnit.test("testing with angle brackets", (at)=>{
    txtIp = 'ABCD<qwe>23';
    at.equal('ABCD', sanitizeInput(txtIp));
});

QUnit.test("testing with script tags", (at)=>{
    txtIp = 'ABCD<script>alert("123")</script>23';
    at.equal('ABCD', sanitizeInput(txtIp));
});

QUnit.test("testing with HTML tags", (at)=>{
    txtIp = 'ABCD<div>alert("123")</div>23';
    at.equal('ABCD', sanitizeInput(txtIp));
});

QUnit.test("testing with encoded HTML tags", (at)=>{
    txtIp = 'ABCD&#x3C;script&#x3E;alert("123")&#x3C;/script&#x3E;23';
    at.equal("ABCD", sanitizeInput(txtIp));
});
