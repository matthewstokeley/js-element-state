import './addClass';
import './removeClass';
import './addAttribute';
import './removeAttribute';

export default var elements = (element) => {

	return {
		addClass: (className) => { return addClass(element, className) },
		removeClass: (className) => { return removeClass(element, className); },
		addAttribute: (attribute, value) => { return addAttribute(element, attribute, value); },
		removeAttribute: (attribute, value) => { return removeAttribute(element, attribute, value); }
	}

}