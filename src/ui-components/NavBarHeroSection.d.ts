/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { NavBarHeader2Props } from "./NavBarHeader2";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
import { FiltersProps } from "./Filters";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NavBarHeroSectionOverridesProps = {
    NavBarHeroSection?: PrimitiveOverrideProps<FlexProps>;
    NavBarHeader2?: NavBarHeader2Props;
    "Hero Image"?: PrimitiveOverrideProps<FlexProps>;
    "Text Content Title"?: PrimitiveOverrideProps<FlexProps>;
    Title?: PrimitiveOverrideProps<TextProps>;
    Subtitle?: PrimitiveOverrideProps<TextProps>;
    Filters?: FiltersProps;
} & EscapeHatchProps;
export declare type NavBarHeroSectionProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: NavBarHeroSectionOverridesProps | undefined | null;
}>;
export default function NavBarHeroSection(props: NavBarHeroSectionProps): React.ReactElement;
