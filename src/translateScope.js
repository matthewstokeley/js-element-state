var el = {};

(function(el) {
	var translateScope = (scope) => {
		switch (scope) {
			case '':
			    return ['class', 'attribute'];
			break;
			case undefined:
				return ['class', 'attribute'];
			break;
			case 'visual-data':
			    return ['class', 'attribute'];
			break;
			case 'data':
			    return ['attribute'];
			break;
			case 'visual':
			    return ['class'];
			break;
		}
	}

	el.translateScope = translateScope;

})(el)