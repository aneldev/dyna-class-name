import {DynaClassName, dynaClassName} from "../../src";

declare let jasmine: any, describe: any, expect: any, it: any;

if (typeof jasmine !== 'undefined') jasmine.DEFAULT_TIMEOUT_INTERVAL = 2000;

// help: https://facebook.github.io/jest/docs/expect.html

describe('dyna class name, ', () => {
	let className: DynaClassName;

	it('crete component dyna class name', () => {
		className = dynaClassName("my-component");
		expect(className()).toBe('');
		expect(className(null)).toBe('');
	});

	it('should export base class name', () => {
		expect(className("")).toBe("my-component");
	});

	it('should export simple class name', () => {
		expect(className("__header")).toBe("my-component__header");
	});

	it('should export simple class name with the base by string', () => {
		expect(className(" __header")).toBe("my-component my-component__header");
	});

	it('should export simple class name with the base by args', () => {
		expect(className("", "__header")).toBe("my-component my-component__header");
	});

	it('should export concat class names by string', () => {
		expect(className("__header --style-dark")).toBe("my-component__header my-component--style-dark");
	});

	it('should export concat class names by string', () => {
		expect(className("__header --style-dark")).toBe("my-component__header my-component--style-dark");
	});

	it('should export concat class names by args', () => {
		expect(className("__header", "--style-dark")).toBe("my-component__header my-component--style-dark");
	});

	it('should export concat class names by args ignoring nulls and undefined', () => {
		expect(className("__header", null, undefined, "--style-dark")).toBe("my-component__header my-component--style-dark");
	});

	it('should export concat class names with conditional args', () => {
		expect(className("__header", 1 == 1 && "--style-dark")).toBe("my-component__header my-component--style-dark");
	});

	it('should export concat class names with conditional args', () => {
		expect(className("__header", 1 == 1 + 2 && "--style-dark")).toBe("my-component__header");
		debugger;
	});


});

