# About

In js code, create the class names as you write them in the `.less` or `.sass` file. Later, the generation of the css is a piece of cake since you have already generated the hierarchy and the selectors.

With this, you can rename/refactor the class names easily since both js and css are using the same class names and structure.

Semver comply.

# Benefits 
- the code is clean
- you can easy rename the selector
- you don't duplicate the selectors in the js file
- you introduce "type safe" notation for the class names

# Install

`npm install dyna-class-name`

# Play

```
    import {dynaClassName} from "dyna-class-name";
    
    // create the root class name function
    
    const className = dynaClassName("my-component");
    // returns a function to create class names based in the given class name
    // now use this function to generated class names based no "my-component"
    
    className();
    className(null);
    // returns ""
    
    className("");
    // returns "my-component"
    
    className("__header");
    // returns "my-component__header"

    className(" __header");
    className("", "__header");
    // returns "my-component my-component__header"

    className("__header");
    // returns "my-component__header"

    className("__header --style-dark");
    className("__header", "--style-dark");
    className("__header", null, "--style-dark");
    className("__header", undefined, "--style-dark");
    className("__header", true, "--style-dark");
    className("__header", false, "--style-dark");
    // returns "my-component__header my-component--style-dark"
    
    // create the nested className function, based on base class name

    const headerClassName = dynaClassName(className("__header"));
    // simply as base class name, use the return of the base class name function
    // and this returns a function to create class names based on "my-component__header" class name

    headerClassName("__label");
    // returns "my-component__header__label" (no so bem, anyway)

    headerClassName("__label", componentIsFocused ? "--highlighted" : null);
    headerClassName("__label", componentIsFocused && "--highlighted");
    // if the componentIsFocused is true 
    //      then it will return "my-component__label--highlighted" 
    //      else "my-component__label" 

```


# Example with code

## The Code

It works in JavaScript of course... anyway this example is in TypeScript.

```
    class MyComponent extends React.Component {
    
        private className = dynaClassName("my-component");
        private isActive = true;
        
        private renderHeader() {
            const className = dynaClassName(this.className("__header"));
            return (
                <div className={className()}>
                    <div className={className("__go-back-button")}>Go back</div>
                    <div className={className(`__label${this.isActive ? " --active" : "--inactive"}`)}>My app</div>
                </div>
            );
        }
        
        render() {
            return (
                <div className={this.className()}>
                    {this.renderHeader()}
                </div>
            );
        }
    }
    

```

## the Less/Sass script

```
.my-component {
    &__header {
        &__go-back-button {
        }
        &__label {
            &--active {
            }
            &--inactive {
            }
        }
    }
}
```

## Notice!

Notice in this example, that the class names in the less script, ar declared with the same way as in the Script code. 


# What's the difference with the famous classnames

[classnames](https://github.com/JedWatson/classnames) its a nice improvement but it doesn't help to build in clean way the hierarchy nature of the css structure. It forces also to repeat the class name in the code.

So the difference is
 - the `classnames` creates a class name(s) according an array of class names _while_ 
 - the `dyna-class-name` creates the class name(s) based on a class name with cleaner syntax
 
The `dyna-class-name`  makes the definition of the class names in javascript to in similar way in less/sass scripts.
 
