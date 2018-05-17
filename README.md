# About

In js code, create the class names as you write them in the `.less` or `.sass` file. Later, the generation of the css is a piece of cake since you have already generetated the selectors.

With this, you can rename/refactor the class names easily since both js and css are using the same class names and structure.

Benefits 
- the code is clean
- you can easy rename the selector
- you don't duplicate the selectors in the js file
- you introduce "type safe" notation for the class names

# What's the difference wi the class names

[classnames](https://github.com/JedWatson/classnames) is nice but it doesn't approaches the hierarchy nature of the css structure.

So the difference is that
 - the `classnames` creates a class name according an array of class names _while_ 
 - the `dyna-class-name` create the class name through reusable chain calls using the same syntax as applied in the `.less` or `.sass` file.
 
There is no need to "develop" the class names with concatenations, simply use them as are written in less file.

# Usage

```
    dynaClassName(".my-component").name                          // returns .my-component
    dynaClassName(".my-component").and("&__info").name           // returns .my-component__info
    dynaClassName(".my-component").and("input").name             // returns .my-component input
    dynaClassName(".my-component").and(".label").name            // returns .my-component .label
    dynaClassName(".my-component").and("&--active", false).name  // returns .my-component
```

# Usage in react

// todo

# Example

Imagine we wave this _bemsih css style_ component.

React example
```
render() {
    const className = dynaClassName(".my-component")
    return <div class={className}></div>
}
```

Less
```
	.my-component {
		&__input-field {
			background-color: white-smoke;
			
			&--validate-{
				&error {
					input {
						background-color: red;
					}
				}
			}
		}
	}
```

We can create the class name from this code

```
    dynaClassName(".my-component")
        .and('&__input-field')
        .and('&--validate-')
        .and('&error')
        .and('input')
        .name
```
Inside the application probably you won't need something like this, but probably you will need to split the class name in different methods.

```
	let componentClassName = dynaClassName(".my-component");
	let inputClassName = componentClassName.and("&__input-field");
	let inputValidationClassName = inputClassName.and('&--validate-');;
	let inputValidationErrorClassName = inputValidationClassName.and('&error');
	
	// the last returns: .my-component__input-field--validate-error input
```