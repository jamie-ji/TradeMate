/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getGoods } from "../../amplify/backend/api/trademate/build/functions/queries";
import { updateGoods } from "../../amplify/backend/api/trademate/build/functions/mutations";
const client = generateClient();
export default function GoodsUpdateForm(props) {
  const {
    id: idProp,
    goods: goodsModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    Name: "",
    ListedDate: "",
    Price: "",
    Location: "",
    Contact: "",
    Holder: "",
  };
  const [Name, setName] = React.useState(initialValues.Name);
  const [ListedDate, setListedDate] = React.useState(initialValues.ListedDate);
  const [Price, setPrice] = React.useState(initialValues.Price);
  const [Location, setLocation] = React.useState(initialValues.Location);
  const [Contact, setContact] = React.useState(initialValues.Contact);
  const [Holder, setHolder] = React.useState(initialValues.Holder);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = goodsRecord
      ? { ...initialValues, ...goodsRecord }
      : initialValues;
    setName(cleanValues.Name);
    setListedDate(cleanValues.ListedDate);
    setPrice(cleanValues.Price);
    setLocation(cleanValues.Location);
    setContact(cleanValues.Contact);
    setHolder(cleanValues.Holder);
    setErrors({});
  };
  const [goodsRecord, setGoodsRecord] = React.useState(goodsModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getGoods.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getGoods
        : goodsModelProp;
      setGoodsRecord(record);
    };
    queryData();
  }, [idProp, goodsModelProp]);
  React.useEffect(resetStateValues, [goodsRecord]);
  const validations = {
    Name: [],
    ListedDate: [],
    Price: [],
    Location: [],
    Contact: [],
    Holder: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          Name: Name ?? null,
          ListedDate: ListedDate ?? null,
          Price: Price ?? null,
          Location: Location ?? null,
          Contact: Contact ?? null,
          Holder: Holder ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updateGoods.replaceAll("__typename", ""),
            variables: {
              input: {
                id: goodsRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "GoodsUpdateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={Name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name: value,
              ListedDate,
              Price,
              Location,
              Contact,
              Holder,
            };
            const result = onChange(modelFields);
            value = result?.Name ?? value;
          }
          if (errors.Name?.hasError) {
            runValidationTasks("Name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("Name", Name)}
        errorMessage={errors.Name?.errorMessage}
        hasError={errors.Name?.hasError}
        {...getOverrideProps(overrides, "Name")}
      ></TextField>
      <TextField
        label="Listed date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={ListedDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              ListedDate: value,
              Price,
              Location,
              Contact,
              Holder,
            };
            const result = onChange(modelFields);
            value = result?.ListedDate ?? value;
          }
          if (errors.ListedDate?.hasError) {
            runValidationTasks("ListedDate", value);
          }
          setListedDate(value);
        }}
        onBlur={() => runValidationTasks("ListedDate", ListedDate)}
        errorMessage={errors.ListedDate?.errorMessage}
        hasError={errors.ListedDate?.hasError}
        {...getOverrideProps(overrides, "ListedDate")}
      ></TextField>
      <TextField
        label="Price"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={Price}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              Name,
              ListedDate,
              Price: value,
              Location,
              Contact,
              Holder,
            };
            const result = onChange(modelFields);
            value = result?.Price ?? value;
          }
          if (errors.Price?.hasError) {
            runValidationTasks("Price", value);
          }
          setPrice(value);
        }}
        onBlur={() => runValidationTasks("Price", Price)}
        errorMessage={errors.Price?.errorMessage}
        hasError={errors.Price?.hasError}
        {...getOverrideProps(overrides, "Price")}
      ></TextField>
      <TextField
        label="Location"
        isRequired={false}
        isReadOnly={false}
        value={Location}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              ListedDate,
              Price,
              Location: value,
              Contact,
              Holder,
            };
            const result = onChange(modelFields);
            value = result?.Location ?? value;
          }
          if (errors.Location?.hasError) {
            runValidationTasks("Location", value);
          }
          setLocation(value);
        }}
        onBlur={() => runValidationTasks("Location", Location)}
        errorMessage={errors.Location?.errorMessage}
        hasError={errors.Location?.hasError}
        {...getOverrideProps(overrides, "Location")}
      ></TextField>
      <TextField
        label="Contact"
        isRequired={false}
        isReadOnly={false}
        value={Contact}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              ListedDate,
              Price,
              Location,
              Contact: value,
              Holder,
            };
            const result = onChange(modelFields);
            value = result?.Contact ?? value;
          }
          if (errors.Contact?.hasError) {
            runValidationTasks("Contact", value);
          }
          setContact(value);
        }}
        onBlur={() => runValidationTasks("Contact", Contact)}
        errorMessage={errors.Contact?.errorMessage}
        hasError={errors.Contact?.hasError}
        {...getOverrideProps(overrides, "Contact")}
      ></TextField>
      <TextField
        label="Holder"
        isRequired={false}
        isReadOnly={false}
        value={Holder}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              ListedDate,
              Price,
              Location,
              Contact,
              Holder: value,
            };
            const result = onChange(modelFields);
            value = result?.Holder ?? value;
          }
          if (errors.Holder?.hasError) {
            runValidationTasks("Holder", value);
          }
          setHolder(value);
        }}
        onBlur={() => runValidationTasks("Holder", Holder)}
        errorMessage={errors.Holder?.errorMessage}
        hasError={errors.Holder?.hasError}
        {...getOverrideProps(overrides, "Holder")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || goodsModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || goodsModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
