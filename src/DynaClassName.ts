export const dynaClassName = (className: string) => new DynaClassName(className);

export class DynaClassName {
	constructor(private readonly className: string) {
	}

	public and(className: string, active: boolean = true): DynaClassName {
		const ampersand: boolean = className[0] === "&";
		const comma: boolean = className[0] === ",";
		if (ampersand) className = className.slice(1);
		const addClassName: string = `${ampersand || comma ? "" : " "}${className}`;
		return new DynaClassName(`${this.className}${active ? addClassName : ""}`);
	}

	public get name(): string {
		return this.className;
	}
}
