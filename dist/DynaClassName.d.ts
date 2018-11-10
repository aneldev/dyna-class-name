export declare type DynaClassName = {
    (...classNames: TClassNameArguments): string;
    root(props: any, ...classNames: TClassNameArguments): string;
};
export declare type TClassNameArguments = (string | string[] | {
    [className: string]: boolean;
})[];
export interface IProps {
    className?: string;
}
export declare const dynaClassName: (baseClassName: string) => DynaClassName;
