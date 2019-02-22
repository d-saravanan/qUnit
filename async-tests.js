
QUnit.module('async code test', {});

QUnit.async("testing whether the ajax calls are testable", (at) => {
    // let assert = at;
    loadWeatherData(x=>{
        at.equal($(".results").length >0, true);
        start();
    })
})