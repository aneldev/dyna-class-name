export const dynaClassName = (className: string) => new DynaClassName(className);


export class DynaClassName {
	constructor(private readonly className: string) {
	}

	public and2(className: string, active: boolean = true): DynaClassName {
		const ampersand: boolean = className[0] === "&";
		const comma: boolean = className[0] === ",";
		if (ampersand) className = className.slice(1);
		const addClassName: string = `${ampersand || comma ? "" : " "}${className}`;
		return new DynaClassName(`${this.className}${active ? addClassName : ""}`);
	}

	public and(className: string, active: boolean = true): DynaClassName {
		return new DynaClassName(`${this.className}${this.generateClassName(className, active)}`);
	}

	public includes(className:string, active: boolean=true): DynaClassName {
		return new DynaClassName(`${this.className} ${this.className}${this.generateClassName(className, active)}`);
	}

	public get name(): string {
		return this.className;
	}

	private generateClassName(className: string, active: boolean = true): string {
		const ampersand: boolean = className[0] === "&";
		const comma: boolean = className[0] === ",";

		if (ampersand) className = className.slice(1);

		return active ? `${ampersand || comma ? "" : " "}${className}`: "";
	}
}
