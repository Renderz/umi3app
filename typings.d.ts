declare module '*.css';
declare module '*.less';
declare module '*.png';
declare module '*.svg' {
  export function ReactComponent(
    props: React.SVGProps<SVGSVGElement>,
  ): React.ReactElement;
  const url: string;
  export default url;
}
declare namespace API {
  export type Params = {
    showMessage?: boolean;
  };

  export type response = {
    data?: any;
    msg?: string;
    code?: string;
    [propName: string]: any;
  };
}
