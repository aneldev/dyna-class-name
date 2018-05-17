# About

Write the class names in JS code like your wrote them in Less or Sass.

With `dynaClassName` you can declare the css class names with the same way as you have wrote them in the `.less` or `.sass` file. 

So 
- the code is cleane
- you can easy rename the selector
- you don't duplicate the selectors in the js file
- you introduce "type save" for the class names

# What's the difference wi the class names

[classnames](https://github.com/JedWatson/classnames) are nice, almost everyone has made some methods like this before this, it's a nice _standardization_ but it doesn't approaches the hierachy nature of the css structure.

So the difference is that
 - the `classnames` creates a class name according an array of class names while 
 - the `dyna-class-name` is creating the class name through reusable chain calls using the same syntax as applied in the `.less` or `.sass` file.
 
There is no need to "develop" the class names with concatenations, simply use them as are written in less file.

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