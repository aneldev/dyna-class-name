export declare type DynaClassName = {
    (...classNames: (string | any)[]): string;
    root(props: IProps, ...classNames: string[]): string;
};
export interface IProps {
    className?: string;
}
export declare const dynaClassName: (baseClassName: string) => DynaClassName;