import {DynaClassName, getDynaClassName} from "../../src";

declare let jasmine: any, describe: any, expect: any, it: any;

if (typeof jasmine !== 'undefined') jasmine.DEFAULT_TIMEOUT_INTERVAL = 2000;

// help: https://facebook.github.io/jest/docs/expect.html

describe('dyna class names main test', () => {
	const dcn: DynaClassName = getDynaClassName("my-base");
	it('base class only', () => {
		expect(dcn.name()).toBe(".my-base");
	});
	it('additional class by string', () => {
		expect(dcn.name("__component")).toBe(".my-base__component");
	});
	it('additional class by strings', () => {
		expect(dcn.name("__componentA", "__componentB")).toBe(".my-base__componentA .my-base__componentB");
	});
	it('additional class by strings with ampersand', () => {
		expect(dcn.name("__componentA", "&__componentB")).toBe(".my-base__componentA.my-base__componentB");
	});
	it('additional class by strings with ampersand mixed', () => {
		expect(dcn.name("__componentA", "&__componentB", "__componentC")).toBe(".my-base__componentA.my-base__componentB .my-base__componentC");
	});
	it('additional class by conditional class objects', () => {
		expect(dcn.name({__componentA: true})).toBe(".my-base__componentA");
	});
	it('additional class by conditional class objects', () => {
		expect(dcn.name({__componentA: true, "&__componentA--hide": true})).toBe(".my-base__componentA.my-base__componentA--hide");
	});
	it('additional class by string and conditional class objects', () => {
		expect(dcn.name(
			"__main-window",
			{
				"__main-window--open": true,
				"__main-window--with-tooltip": false,
			},
			[
				"&--active",
				{
					"&--selected": true,
				}
			],
		))
			.toBe(".my-base__main-window .my-base__main-window--open.my-base--active.my-base--selected");
	});
});

