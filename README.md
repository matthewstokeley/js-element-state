## State

0.0.1

Non-explicit state change can be confusing at first glance, and I have built applications that handle state completely with an object's `controller`, and with a confusing mix of css and `model` `properties`.

`state` agrees with the popular idea that the markup is the model, and that `element`'s have two browser-native `api`'s handling the state of the element - the `classList` api - css classes - and the `dataset` object - data attributes.  `classes` are states that determine something visual and `data` attributes determine not-necessarily visual properties. However, `classes` are not necessarily a subset of `attributes`.

The explicit state of an element can look something like this.

```
-------------------------------------------
| state       | visual    | attribute     |
-------------------------------------------
| 'active'    | true      | true          |
| 'available' | false     | true          |
| 'loaded'    | t||f      | true          |
-------------------------------------------
```

That is, almost all states of an element affect the elements attributes or properties, but not all of these affect the `element`s style.  so there are three possible scopes of an `element`s state: visual-only, visual-data, data-only.

The other caveat is that`states` concerning styles can only be boolean - either on or off - whereas non-visual states can contain any potential value. 

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