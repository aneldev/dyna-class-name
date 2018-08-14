import {DynaClassName, dynaClassName} from "../../src";

declare let jasmine: any, describe: any, expect: any, it: any;

if (typeof jasmine !== 'undefined') jasmine.DEFAULT_TIMEOUT_INTERVAL = 2000;

// help: https://facebook.github.io/jest/docs/expect.html

describe('dyna class name, ', () => {
	let className: DynaClassName;

	it('crete component dyna class name', () => {
		className = dynaClassName("my-component");
		expect(className).not.toBe(undefined);
	});

	it('should return base class name on no args', () => {
		expect(className()).toBe('my-component');
	});

	it('should return empty string on null values', () => {
		expect(className(null)).toBe('');
	});

	it('should return base class name', () => {
		expect(className("")).toBe("my-component");
	});

	it('should return simple class name', () => {
		expect(className("__header")).toBe("my-component__header");
	});

	it('should return simple class name with the base by string', () => {
		expect(className(" __header")).toBe("my-component my-component__header");
	});

	it('should return simple class name with the base by args', () => {
		expect(className("", "__header")).toBe("my-component my-component__header");
	});

	it('should return concat class names by string', () => {
		expect(className("__header --style-dark")).toBe("my-component__header my-component--style-dark");
	});

	it('should return concat class names by string', () => {
		expect(className("__header --style-dark")).toBe("my-component__header my-component--style-dark");
	});

	it('should return concat class names by args', () => {
		expect(className("__header", "--style-dark")).toBe("my-component__header my-component--style-dark");
	});

	it('should return concat class names by args ignoring nulls and undefined', () => {
		expect(className("__header", null, undefined, "--style-dark")).toBe("my-component__header my-component--style-dark");
	});

	it('should return concat class names with conditional args', () => {
		expect(className("__header", 1 == 1 && "--style-dark")).toBe("my-component__header my-component--style-dark");
	});

	it('should return concat class names with conditional args', () => {
		expect(className("__header", 1 == 1 + 2 && "--style-dark")).toBe("my-component__header");
	});

	it('should return concat class names with conditional objects', () => {
		expect(className({"--hidden": true, "--focused": false})).toBe("my-component--hidden");
	});

	it('should return class name without base name when the start with "/"', () => {
		expect(className("/user-class-name", "", "--active")).toBe("user-class-name my-component my-component--active");
	});

	it('should return class name without base name when the start with "/", conditional version - true', () => {
		const userClassName: string = "user-class-name";
		expect(className(userClassName && "/" + userClassName, "", "--active")).toBe("user-class-name my-component my-component--active");
	});

	it('should return class name without base name as 2nd argument', () => {
		const userClassName: string = "user-class-name";
		expect(className("", "/" + userClassName)).toBe("my-component user-class-name");
	});

	it('should return class name without base name when the start with "/", conditional version - false', () => {
		const userClassName: string = undefined;
		expect(className(userClassName && "/" + userClassName, "", "--active")).toBe("my-component my-component--active");
	});

	it('should return the base class name, using the root(props) without className property', () => {
		const myComponent: any = {
			props: {},
		};
		const className: DynaClassName = dynaClassName("my-component");
		const output = className.root(myComponent.props);
		expect(output).toBe("my-component")
	});

	it('should return the className and the base class name, using the root(props) with className property', () => {
		const myComponent: any = {
			props: {
				className: "user-class-name",
			},
		};
		const className: DynaClassName = dynaClassName("my-component");
		const output = className.root(myComponent.props);
		expect(output).toBe("user-class-name my-component")
	});

	it('should return the className and the base class name, using the root(props) with className property with more that one names', () => {
		const myComponent: any = {
			props: {
				className: "user-class-name-1 user-class-name-2",
			},
		};
		const className: DynaClassName = dynaClassName("my-component");
		const output = className.root(myComponent.props);
		expect(output).toBe("user-class-name-1 user-class-name-2 my-component")
	});

	it('should return the className and the base class name, using the root(props) with className property with more that one names and additional based class names as string', () => {
		const myComponent: any = {
			props: {
				className: "user-class-name-1 user-class-name-2",
			},
		};
		const componentClassNames: string = "--active --loaded";
		const className: DynaClassName = dynaClassName("my-component");
		const output = className.root(myComponent.props, componentClassNames);
		expect(output).toBe("user-class-name-1 user-class-name-2 my-component my-component--active my-component--loaded")
	});

	it('should return the className and the base class name, using the root(props) with className property with more that one names and additional based class names as array', () => {
		const myComponent: any = {
			props: {
				className: "user-class-name-1 user-class-name-2",
			},
		};
		const componentClassNames: string[] = ["--active", "--loaded"];
		const className: DynaClassName = dynaClassName("my-component");
		const output = className.root(myComponent.props, componentClassNames);
		expect(output).toBe("user-class-name-1 user-class-name-2 my-component my-component--active my-component--loaded")
	});
});

