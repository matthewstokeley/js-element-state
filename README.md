## State

0.0.1

Non-explicit state change can be confusing at first glance, and I have built applications that handle state completely with an object's `controller`, and with a confusing mix of css and mvvm-style `model` `properties`.

`state` agrees with the popular idea (angular, for instance) that the markup is the model. `Element`'s have two browser-native `api`'s handling the state of the element - the `classList` api - css classes - and the `dataset` object - data attributes.  `classes` are states that determine something visual and `data` attributes determine not-necessarily visual properties. There are no neccessary relationships between `attributes` and `classes`, although there are often intersecting concerns.

The explicit state of an element can look something like this.

```
-------------------------------------------
| state       | class     | attribute     |
-------------------------------------------
| 'active'    | true      | true          |
| 'available' | false     | true          |
| 'loaded'    | t||f      | loading       |
-------------------------------------------
```

`state` can be injected or called manually.

```
class Controller {
	constructor() {
		this.state = options.state
	}

	doSomething(toggle) {
		this.state.update(toggle);
	}
}

var controller = new Controller({state: state(element)});

```

or

```
state(el).update('active'); 
```
