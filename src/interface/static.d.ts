/* eslint-disable init-declarations */
declare module '*.less' {
    const content: {
        [className: string]: string;
        (...names: Array<string | null | undefined | {[key: string]: string | boolean | undefined}>): string;
    };
    export default content;
}

declare module '*.png' {
    const url: string;
    export default url;
}

declare module '*.svg' {
    const url: string;
    export default url;
}

declare module '*.svg?react' {
    import {ComponentType, SVGAttributes} from 'react';

    export type SVGComponent = ComponentType<SVGAttributes<SVGElement>>;

    declare const Component: SVGComponent;
    export default Component;
}
