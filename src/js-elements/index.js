import './addClass';
import './removeClass';
import './addAttribute';
import './removeAttribute';

export default var elements = (element) => {
	
	return {
		addClass: (className) => { return addClass(element, className) },
		removeClass: (className) => { return addClass(element, className); },
		addAttribute: (attribute, value) => { return addClass(element, attribute, value); },
		removeAttribute: (attribute, value) => { return addClass(element, attribute, value); }
	}

}