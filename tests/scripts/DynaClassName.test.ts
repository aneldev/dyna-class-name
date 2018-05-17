import {DynaClassName, dynaClassName} from "../../src";

declare let jasmine: any, describe: any, expect: any, it: any;

if (typeof jasmine !== 'undefined') jasmine.DEFAULT_TIMEOUT_INTERVAL = 2000;

// help: https://facebook.github.io/jest/docs/expect.html

describe('dyna class, css class representation with add', () => {
	/*

	// source less
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

	// generated css
	.my-component__input-field {
		background-color: white-smoke;
	}
	.my-component__input-field--validate-error input{
		background-color: red;
	}

	 */

	let componentClassName: DynaClassName;
	let inputClassName: DynaClassName;
	let inputValidationClassName: DynaClassName;

	it('component class name', () => {
		componentClassName = dynaClassName(".my-component");
		expect(componentClassName.name)
			.toBe('.my-component');
	});
	it('import control class name', () => {
		inputClassName = componentClassName.and("&__input-field");
		expect(inputClassName.name)
			.toBe('.my-component__input-field');
	});
	it('input control validation class name', () => {
		inputValidationClassName = inputClassName.and('&--validate-').and('&error');
		expect(inputValidationClassName.name)
			.toBe('.my-component__input-field--validate-error');
	});
	it('input control validation class name, with nested element', () => {
		expect(inputValidationClassName.and('input').name)
			.toBe('.my-component__input-field--validate-error input');
	});
	it('input control validation class name, with nested element, all together', () => {
		expect(
			dynaClassName(".my-component")
				.and('&__input-field')
				.and('&--validate-')
				.and('&error')
				.and('input')
				.name
		)
			.toBe('.my-component__input-field--validate-error input');
	});
});

describe('dyna class, css class representation with include', () => {
	/*

	// source less
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

	// generated css
	.my-component__input-field {
		background-color: white-smoke;
	}
	.my-component__input-field--validate-error input{
		background-color: red;
	}

	 */

	it('component class name', () => {
		expect(
			dynaClassName(".my-component")
				.includes("&__input-field")
				.name
		)
			.toBe('.my-component .my-component__input-field');
	});
});
