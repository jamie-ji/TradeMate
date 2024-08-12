/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { IconProps, ImageProps, ViewProps } from "@aws-amplify/ui-react";
import { CommentCardProps } from "./CommentCard";
import { NavBarHeader2Props } from "./NavBarHeader2";
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
export declare type HeroSectionOverridesProps = {
    HeroSection?: PrimitiveOverrideProps<ViewProps>;
    "bg4 1"?: PrimitiveOverrideProps<ImageProps>;
    "Vector 1"?: PrimitiveOverrideProps<IconProps>;
    "Vector 2"?: PrimitiveOverrideProps<IconProps>;
    CommentCard39154567?: CommentCardProps;
    CommentCard39154598?: CommentCardProps;
    NavBarHeader2?: NavBarHeader2Props;
} & EscapeHatchProps;
export declare type HeroSectionProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: HeroSectionOverridesProps | undefined | null;
}>;
export default function HeroSection(props: HeroSectionProps): React.ReactElement;
