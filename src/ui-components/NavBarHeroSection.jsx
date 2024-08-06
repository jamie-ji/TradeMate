/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import NavBarHeader2 from "./NavBarHeader2";
import { Flex, Text } from "@aws-amplify/ui-react";
import Filters from "./Filters";
export default function NavBarHeroSection(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="column"
      width="1944px"
      height="603px"
      justifyContent="flex-start"
      alignItems="center"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "NavBarHeroSection")}
      {...rest}
    >
      <NavBarHeader2
        display="flex"
        gap="10px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="space-between"
        alignItems="center"
        overflow="hidden"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        boxShadow="0px 2px 6px rgba(0.05098039284348488, 0.10196078568696976, 0.14901961386203766, 0.15000000596046448)"
        padding="16px 32px 16px 32px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "NavBarHeader2")}
      ></NavBarHeader2>
      <Flex
        gap="32px"
        direction="column"
        width="unset"
        height="531px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="160px 24px 160px 24px"
        backgroundColor="rgba(255,255,255,0.8)"
        {...getOverrideProps(overrides, "Hero Image")}
      >
        <Flex
          gap="8px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Text Content Title")}
        >
          <Text
            fontFamily="Inter"
            fontSize="72px"
            fontWeight="700"
            color="rgba(12,12,13,1)"
            lineHeight="86.4000015258789px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="-2.01px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Turn Trash into Treasure"
            {...getOverrideProps(overrides, "Title")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="32px"
            fontWeight="400"
            color="rgba(77,0,0,1)"
            lineHeight="48px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="It’s a Shear Delight!"
            {...getOverrideProps(overrides, "Subtitle")}
          ></Text>
        </Flex>
        <Filters
          display="flex"
          gap="16px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="flex-end"
          overflow="hidden"
          shrink="0"
          position="relative"
          borderRadius="4px"
          padding="16px 16px 16px 16px"
          backgroundColor="rgba(255,255,255,0.8)"
          {...getOverrideProps(overrides, "Filters")}
        ></Filters>
      </Flex>
    </Flex>
  );
}
