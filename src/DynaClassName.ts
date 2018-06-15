export type DynaClassName = (...classNames: (string | any)[]) => string;

export const dynaClassName = (baseClassName: string): DynaClassName => {
	return (...classNames: (string | any)[]): string =>
		classNames
			.reduce((acc: any[], v: any) => {
				if (typeof v === "string")
					acc = acc.concat(v.split(" "));
				else
					acc.push(v);
				return acc;
			}, [])
			.filter((cn: any) => cn != null && cn !== true && cn !== false)
			.map((subClassName: string) => `${baseClassName}${subClassName}`)
			.join(" ");
};