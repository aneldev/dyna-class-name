export type DynaClassName = {
	(...classNames:TClassNameArguments ): string;
	root(props: IProps, ...classNames: TClassNameArguments): string;
};

export type TClassNameArguments = (string | string[] | {[className:string]: boolean})[];

export interface IProps {
	className?: string;
}

export const dynaClassName = (baseClassName: string): DynaClassName => {
	const output: any = (...classNames: (string | any)[]): string => {
		if (classNames.length === 0) return baseClassName;
		return classNames
			.reduce((acc: any[], value: any) => {
				if (typeof value === "string")
					acc = acc.concat(value.split(" "));
				else if (Array.isArray(value))
					acc = acc.concat(value);
				else if (typeof value === "object" && value != null)
					Object.keys(value).forEach((className: string) => {
						if (value[className]) acc.push(className);
					});
				else
					acc.push(value);
				return acc;
			}, [])
			.filter((cn: any) => cn != null && cn !== true && cn !== false)
			.map((subClassName: string) => {
				if (subClassName[0] === '/') return subClassName.substr(1);
				return `${baseClassName}${subClassName}`;
			})
			.join(" ");
	};

	output.root = (props: IProps, ...classNames: TClassNameArguments): string => {
		return output(
			props.className && props.className
				.split(" ")
				.map((cn: string) => "/" + cn)
				.join(" "),
			"", // for the base class
			...classNames,
		);
	};

	return output;
};