export interface IDynaClassNameConfig {
	emptyClassNameOutput: string;
}

export interface IConditionalClassName {
	[subClassName: string]: boolean;
}

export type INameArg = (string | IConditionalClassName | Array<string | IConditionalClassName>);

const defaultConfig: IDynaClassNameConfig = {
	emptyClassNameOutput: "",
};

export class DynaClassName {
	constructor(
		private baseClassName: string = "",
		private readonly config: IDynaClassNameConfig = defaultConfig,
	) {}

	public set base(baseClassName: string) {
		this.baseClassName = baseClassName;
	}

	public name(...args: INameArg[]): string {
		let output = "";
		if (args.length) {
			args.forEach((arg: INameArg) => {
				if (Array.isArray(arg)) {
					arg.forEach((subArg: INameArg) => {
						output += this.name(subArg);
					})
				}
				else if (typeof arg === "object") {
					output += this.applyByConditionalClassName(arg);
				}
				else
					output += this.applyByNameByString(arg);
			});
		}
		else {
			output += this.applyByNameByString();
		}
		return output.trim() || this.config.emptyClassNameOutput;
	}

	private applyByNameByString(subClassName: string = ""): string {
		const ampersand: boolean = subClassName[0] === "&";
		if (ampersand) subClassName = subClassName.slice(1);
		return `${ampersand ? "" : " "}.${this.baseClassName}${subClassName || ""}`;
	}

	private applyByConditionalClassName(ccn: IConditionalClassName): string {
		return Object.keys(ccn)
			.reduce((acc: string, key: string) => {
				if (!Boolean(ccn[key])) return acc;
				return acc + this.applyByNameByString(key);
			}, "");
	}
}

export const getDynaClassName = (baseClassName: string): DynaClassName => new DynaClassName(baseClassName)