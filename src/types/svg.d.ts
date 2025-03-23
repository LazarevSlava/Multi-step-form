declare module '*.svg?react' {
  import { FunctionComponent, SVGProps } from 'react';
  const ReactComponent: FunctionComponent<SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}

declare module '*.svg' {
  const content: string;
  export default content;
}
