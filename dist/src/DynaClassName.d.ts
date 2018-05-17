export declare const dynaClassName: (className: string) => DynaClassName;
export declare class DynaClassName {
    private readonly className;
    constructor(className: string);
    and(className: string, active?: boolean): DynaClassName;
    readonly name: string;
}
