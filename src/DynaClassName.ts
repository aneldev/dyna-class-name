export const dynaClassName = (baseClassName: string): (className: string, active?: boolean) => string => {
	return (className: string = "", active: boolean = true): string =>
		active
			? className.split(" ")
				.map((subClassName: string) => `${baseClassName}${subClassName}`).join(" ")
			: "";
};