(function(el) {
	var updateState = (stateManager, state, value, scope, remove) => {
		
		var scopes = el.translateScope(scope);
		stateManager.setCurrentState(state);
		var setOptions = () => { return remove ? stateManager.removeOption(state) : !stateManager.hasOption(state) ? stateManager.addOption(state) : '' }
		
		setOptions();
		
		scopes.forEach((scope) => {
			switch (scope) {
				case 'class':
					stateManager.hasClass(state) ? stateManager.removeClass(state) : stateManager.addClass(state);
				break;
				case 'attribute':
					if (!value) {
						stateManager.hasAttribute(state) ? stateManager.removeAttribute(state) : stateManager.addAttribute(state, 'true');
					} else {
						stateManager.setAttribute(state, value);
					}
				break;
			}
		})
	}

	el.updateState = updateState;

})(el);