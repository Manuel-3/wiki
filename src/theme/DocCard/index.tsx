import type { WrapperProps } from "@docusaurus/types";
import DocCard from "@theme-original/DocCard";
import type DocCardType from "@theme/DocCard";
import React from "react";

type Props = WrapperProps<typeof DocCardType>;

export default function DocCardWrapper(props: Props): JSX.Element {
  if (props.item.type == "category" && props.item.customProps?.description) {
    props.item.description = props.item.customProps.description;
  }
  return (
    <>
      <DocCard {...props} />
    </>
  );
}
