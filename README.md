# About

In js code, create the class names as you write them in the `.less` or `.sass` file. Later, the generation of the css is a piece of cake since you have already generated the selectors.

With this, you can rename/refactor the class names easily since both js and css are using the same class names and structure.

Benefits 
- the code is clean
- you can easy rename the selector
- you don't duplicate the selectors in the js file
- you introduce "type safe" notation for the class names

# What is it

```
    const className = dynaClassName("my-component");
    // returns a function to create class names based in the given class name
    
    className();
    // returns "my-component"
    
    className("__header");
    // returns "my-component__header"

    className("__header --style-dark");
    // returns "my-component__header my-component--style-dark"

    const headerClassName = dynaClassName(className("__header"));
    // returns a function to create class names based on "my-component__header" class name

    headerClassName("__label");
    // returns "my-component__header__label"

    headerClassName("__label--focus", componentIsFocused);
    // if the 2nd argument componentIsFocused is true 
    //      then it will return "my-component__header__label--active" 
    //      else an empty string

```


# Example

## TS Code

It works in JavaScript of course... this example is in TypeScript.

```
    class MyComponent extends React.Component {
    
        private className = dynaClassName("my-component");
        private isActive = true;
        
        private renderHeader() {
            const className = dynaClassName(this.className("__header"));
            return (
                <div className={className()}>
                    <div className={className("__go-back-button")}>Go back</div>
                    <div className={className(`__label${this.isActive ? " --active" : ""}`)}>My app</div>
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

## the Less/Sass

```
.my-component {
    &__header {
        &__go-back-button {
        }
        &__label {
            &--active {
            }
        }
    }
}
```

## Notice!

Notice in this example, that the class names in the less script, ar declared with the same way as in the Script code. 


# What's the difference with the famous classnames

[classnames](https://github.com/JedWatson/classnames) is great improvement but it doesn't help to build the hierarchy nature of the css structure.

So the difference is that
 - the `classnames` creates a class name according an array of class names _while_ 
 - the `dyna-class-name` create the `className` function that create string class names with a base class name.
 
