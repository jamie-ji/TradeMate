/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type GoodsCreateFormInputValues = {
    Name?: string;
    ListedDate?: string;
    Price?: number;
    Location?: string;
    Contact?: string;
    Holder?: string;
};
export declare type GoodsCreateFormValidationValues = {
    Name?: ValidationFunction<string>;
    ListedDate?: ValidationFunction<string>;
    Price?: ValidationFunction<number>;
    Location?: ValidationFunction<string>;
    Contact?: ValidationFunction<string>;
    Holder?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type GoodsCreateFormOverridesProps = {
    GoodsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Name?: PrimitiveOverrideProps<TextFieldProps>;
    ListedDate?: PrimitiveOverrideProps<TextFieldProps>;
    Price?: PrimitiveOverrideProps<TextFieldProps>;
    Location?: PrimitiveOverrideProps<TextFieldProps>;
    Contact?: PrimitiveOverrideProps<TextFieldProps>;
    Holder?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type GoodsCreateFormProps = React.PropsWithChildren<{
    overrides?: GoodsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: GoodsCreateFormInputValues) => GoodsCreateFormInputValues;
    onSuccess?: (fields: GoodsCreateFormInputValues) => void;
    onError?: (fields: GoodsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: GoodsCreateFormInputValues) => GoodsCreateFormInputValues;
    onValidate?: GoodsCreateFormValidationValues;
} & React.CSSProperties>;
export default function GoodsCreateForm(props: GoodsCreateFormProps): React.ReactElement;
