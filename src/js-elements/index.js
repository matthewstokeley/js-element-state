var element = (element) => {

	return {
		addClass: (className) => { return $el.addClass(element, className) },
		removeClass: (className) => { return $el.removeClass(element, className); },
		hasClass: (className) => { return $el.hasClass(element, className); },
		addAttribute: (attribute, value) => { return $el.addAttribute(element, attribute, value); },
		removeAttribute: (attribute, value) => { return $el.removeAttribute(element, attribute, value); }
	}

}


// if jQuery isn't available, 
// here is a poor substitution
if (!$) {
	var $ = element;
}