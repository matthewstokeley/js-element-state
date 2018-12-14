import'./translateScope';

var updateState = (stateManager, state, value, scope, remove) => {
	
	var scope = translateScope(scope);
	stateManager.setCurrentState(state);
	var setOptions = () => { return remove ? stateManager.removeOption(state) : !stateManager.hasOption(state) ? stateManager.addOption(state) : '' }
	
	setOptions();
	
	scope.forEach((value) => {
		switch value {
			case 'class'
				stateManager.hasClass(state) ? stateManager.removeClass(state) : stateManager.addCLass(state);
			break;
			case 'attribute'
				stateManager.setAttribute(state, value);				
			break;
		}	
	})
}