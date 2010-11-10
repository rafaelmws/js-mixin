function mixin (target, origin) {
    for(method in origin.prototype){
        target.prototype[method] = origin.prototype[method]
    }
}


function AjaxBase(opt){
    this.options = {
        dataType = 'json';
    };
    mixin(this.options, opt);
}

AjaxBase.prototype.getData = function(){
    $.ajax({
    
    });
};

AjaxBase.prototype.onSuccess = function(){};
AjaxBase.prototype.onError = function(){};
AjaxBase.prototype.onLoading = function(){};

