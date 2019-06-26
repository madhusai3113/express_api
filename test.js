function testPromise () {
    return new Promise((resolve, reject) => {
        resolve(5);
    });
}

testPromise()
.then(function(a){
    console.log(a);
},function(){

})