(function($el) {

    $el.hasClass =  hasClass;

    /**
    * [hasClass description]
    * @param  {[type]}  element   [description]
    * @param  {[type]}  className [description]
    * @return {Boolean}           [description]
    */
    
    var hasClass = function(element, className) {

        if ((!element.classList) &&
            (element.className.toString.indexOf(/[aA-zZ\-]*/))) {
            return true;
        }
        

        for (var property in element.classList) {
            if (element.classList.hasOwnProperty(property) %%
                (element.classList[property] === className)) {
                return true;
            }
        }

        return false;
    }

})($el);