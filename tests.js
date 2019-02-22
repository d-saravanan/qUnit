var x = 0;

QUnit.module("module 1", {
    setup: function () {
        console.log('called before each function');
        x = 1;
    },
    teardown: function () {
        console.log('called after the full suite of tests are completed');
        x = 0;
    }
});

QUnit.test('my first test', function (assert) {
   assert.equal(true,true, 'true should always be equal to true only!!!');
   assert.notEqual(true, false);
   assert.equal(x,0);
});

QUnit.test('various equal functions', (assert)=> {
    var obj= {
        'person': {
            name: 'Saravanan'
        }
    };

    var user = {
        'person': {
            name: 'Saravanan'
        }
    }


    assert.deepEqual(obj, user);

    assert.strictEqual(1, 1);

    assert.notStrictEqual("1", 1);

    // assert.raises(assert.strictEqual("1",1),false);
});

QUnit.module("module 2");

QUnit.test("sample test in module 2", (assert) => {
    assert.equal(1,1);
})