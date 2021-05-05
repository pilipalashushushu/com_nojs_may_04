var x1 = "Foo, foo".replace(/[Ff]/g, "q");
console.log(x1);
var x2 = "Foo, foo".replace(/f/gi, "q");
console.log(x2);
var regex1 = new RegExp("[Ff]", "g");
var x3 = "Foo, foo, Ffoo, fFoo".replace(regex1, "q");
console.log(x3);

var regex1 = new RegExp("[d]g");
