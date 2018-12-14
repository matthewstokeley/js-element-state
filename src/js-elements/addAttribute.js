(($el) =>  {


	/**
	* [addClass description]
	* @param {[type]} element   [description]
	* @param {[type]} className [description]
	*/

	var addAttribute = function(element, attribute, value) {

		if (element.dataset) {
		    element.dataset[attribute] = value;
		}

		return element;

	};

	$el.addAttribute = addAttribute;

})($el);
