export declare const dynaClassName: (className: string) => DynaClassName;
export declare class DynaClassName {
    private readonly className;
    constructor(className: string);
    and2(className: string, active?: boolean): DynaClassName;
    and(className: string, active?: boolean): DynaClassName;
    includes(className: string, active?: boolean): DynaClassName;
    readonly name: string;
    private generateClassName(className, active?);
}
