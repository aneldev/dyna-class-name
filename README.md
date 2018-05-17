# About

Write the class names in JS code like your wrote them in Less or Sass.

With `dynaClassName` you can declare the css class names with the same way as you have write them in the Less or Sass file. 

This make the class generation in js the same as in css file and the code looks almost the same.

So... it is maintainable!

# Usage

```
    dynaClassName(".my-component");                         // returns .my-component
    dynaClassName(".my-component").add("&__info");          // returns .my-component__info
    dynaClassName(".my-component").add("input");            // returns .my-component input
    dynaClassName(".my-component").add(".label");           // returns .my-component .label
    dynaClassName(".my-component").add("&--active", false); // returns .my-component
```

# Example

Imagine we wave this _bemsih_ css style component.

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