import React from 'react';

declare global {
    namespace JSX {
        interface IntrinsicElements {
            "ion-icon": IoniconElement;
        }
    }
}

type IoniconElement = React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement> & {
        name: Ionicons;
        class?: string;
        src?: string;
        size?: "small" | "large";
    },
    HTMLElement
>;

type Ionicons = `${IoniconsBase}${"-outline" | "-sharp" | ""}`;

type IoniconsBase = 
	| "chevron-forward"
	| "chevron-back"
	| "add"
