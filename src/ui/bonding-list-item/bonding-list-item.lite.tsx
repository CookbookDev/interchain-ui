import { useMetadata } from "@builder.io/mitosis";
import Stack from "../stack";
import BigNumber from "bignumber.js";
import Button from "../button";
import Text from "../text";
import Box from "../box";
import { store } from "../../models/store";
import * as styles from "./bonding-list-item.css";
import { BondingListItemProps } from "./bonding-list-item.types";

useMetadata({
  rsc: {
    componentType: "client",
  },
});

export default function BondingListItem(props: BondingListItemProps) {
  return (
    <Box display="grid" gridTemplateColumns="repeat(5, minmax(100px, 1fr))">
      <Text
        className={styles.textItem}
        color="$textSecondary"
        fontWeight="$semibold"
      >
        {props.title}
      </Text>

      <Text
        className={styles.numericItem}
        color="$textSecondary"
        fontSize="$xs"
      >
        {new BigNumber(props.totalApr || 0).decimalPlaces(2).toString()}%
      </Text>

      <Text
        className={styles.numericItem}
        color="$textSecondary"
        fontSize="$xs"
      >
        ${store.getState().formatNumber({ value: props.amount || 0 })}
      </Text>

      <Text
        className={styles.numericItem}
        color="$textSecondary"
        fontSize="$xs"
      >
        {new BigNumber(props.superfluidApr || 0).decimalPlaces(2).toString()}%
      </Text>

      <Stack
        attributes={{
          width: "$25",
          justifyContent: "flex-end",
        }}
      >
        <Button
          size="xs"
          variant="unstyled"
          onClick={(event) => props.onUnbond?.(event)}
          isLoading={props.isLoading}
        >
          Unbond All
        </Button>
      </Stack>
    </Box>
  );
}
