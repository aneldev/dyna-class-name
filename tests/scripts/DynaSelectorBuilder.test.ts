import {DynaClassName, getDynaClassName} from "../../src";

declare let jasmine: any, describe: any, expect: any, it: any;

if (typeof jasmine !== 'undefined') jasmine.DEFAULT_TIMEOUT_INTERVAL = 2000;

// help: https://facebook.github.io/jest/docs/expect.html

describe('dyna class, css class representation', () => {
	/*
	.my-component {
		&__input-field {
			background-color: white-smoke;
			&--validate-{
				&error {
					background-color: red;
				}
			}
		}
	}

	.my-component__input-field {
		background-color: white-smoke;
	}
	.my-component__input-field--validate-error {
		background-color: red;
	}

	 */

	// const dcn: DynaClassName = getDynaClassName("my-component");
	// it('field input class name', () => {
	// 	expect(dcn.name('__input-field')).toBe('.my-component__input-field');
	// });
	// it('field input class name', () => {
	// 	expect(dcn.name('__input-field','&--validate-','&error')).toBe('.my-component__input-field--validate-error');
	// });
});
