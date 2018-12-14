class StateManager {
	
	constructor(options) {
		this.element = options.element;
		this.current = options.current || '';
		this.options = options.options || [];
		this.name = options.name || 'name';
	}

	setName(name) { this.name = name; return this; }
	getName(name) { return this.name; }

    setCurrentState(state) { this.current = state; return this; }
    getCurrentState() { return this.state; }

    addClass(element, state) { $(element).addClass(state); }
    removeClass(element, state) { $(element).removeClass(state); }
    hasClass(element, state) { $(element).hasClass(state); }

    addAttribute(element, state, value) { $(element).addAttribute(state, value); }
    removeAttribte(element, state) { $(element).addAttribute(state, value) = ''; }

    addOption(state) { this.options.push(state); }
    removeOption(state) { 
    	for (var i = 0; i < this.options.length; i++) {
	    	if (state === this.options[i]) {
	    		this.options[i].remove();
	    	}	
		}
	}

	hasOption(state) { 
		for (var i = 0; i < this.options.length; i++) {
			if (state === this.options[i]) {
				return true;
			}
		} 

		return false;
	}
}