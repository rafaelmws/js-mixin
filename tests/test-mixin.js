module('mixin');

test('mixando duas funcoes', function(){

        function A(){}
        A.prototype.a = function(){
            return "a";
        };

        function B(){}
        mixin(B, A);
        B.prototype.b = function(){
            return "b";
        };

        var b = new B();
        equals(typeof(b.a), 'function', 'funcoes mixadas');
});

