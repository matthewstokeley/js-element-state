export default var translateScope = (scope) => {
		switch scope {
			case undefined || ''
			    return ['class', 'attribute'];
			break;
			case 'visual-data'
			    return ['class', 'attribute'];
			break;
			case 'data'
			    return ['attribute'];
			break;
			case 'visual'
			    return ['class'];
			break;
	}
}