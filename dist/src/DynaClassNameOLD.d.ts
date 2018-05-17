export interface IDynaClassNameConfig {
    emptyClassNameOutput: string;
}
export interface IConditionalClassName {
    [subClassName: string]: boolean;
}
export declare type INameArg = (string | IConditionalClassName | Array<string | IConditionalClassName>);
export declare class DynaClassNameOLD {
    private baseClassName;
    private readonly config;
    constructor(baseClassName?: string, config?: IDynaClassNameConfig);
    base: string;
    name(...args: INameArg[]): string;
    private applyByNameByString(subClassName?);
    private applyByConditionalClassName(ccn);
}
export declare const getDynaClassName: (baseClassName: string) => DynaClassNameOLD;
