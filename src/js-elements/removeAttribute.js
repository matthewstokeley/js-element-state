(($el) => {

	/**
	 * [removeClass description]
	 * @param  {[type]} element   [description]
	 * @param  {[type]} className [description]
	 * @return {[type]}           [description]
	 */
	var removeAttribute = function(element, attribute, value) {

	    if (element.dataset && element.dataset[attribute]) {
	        element.dataset[attribute] = '';
	    }

	    return element;

	};

	$el.removeAttribute = removeAttribute;

})($el);
