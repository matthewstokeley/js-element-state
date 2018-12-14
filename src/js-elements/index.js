var element = (element) => {

	return {
		addClass: (className) => { return $$.addClass(element, className) },
		removeClass: (className) => { return $$.removeClass(element, className); },
		addAttribute: (attribute, value) => { return $$.addAttribute(element, attribute, value); },
		removeAttribute: (attribute, value) => { return $$.removeAttribute(element, attribute, value); }
	}

}


// if jQuery isn't available, 
// here is a poor substitution
if (!$) {
	var $ = element;
}