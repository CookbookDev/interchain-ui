import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import NftProfileCardList from "../../src/ui/nft-profile-card-list";

// Assets
import badkid1 from "../../static/nft/badkid-3543.jpeg";
import badkid2 from "../../static/nft/badkid-6674.jpeg";
import badkid3 from "../../static/nft/badkid-8051.jpeg";
import badkid4 from "../../static/nft/badkid-8052.jpeg";
import badkid5 from "../../static/nft/badkid-9168.jpeg";
import badkid6 from "../../static/nft/badkid-9486.jpeg";

const meta: Meta<typeof NftProfileCardList> = {
  component: NftProfileCardList,
  title: "nft/NftProfileCardList",
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

const list1: NftProfileCardProps[] = [
  {
    imgSrc: badkid1,
    name: "Bad Kid #3543",
    priceItems: [
      {
        label: "Highest offer",
        value: "450",
      },
      {
        label: "Listing price",
        value: "373",
      },
    ],
  },
  {
    imgSrc: badkid2,
    name: "Bad Kid #6674",
    priceItems: [
      {
        label: "Highest offer",
        value: "450",
      },
      {
        label: "Listing price",
        value: "373",
      },
    ],
  },
  {
    imgSrc: badkid3,
    name: "Bad Kid #8051",
    priceItems: [
      {
        label: "Highest offer",
        value: "450",
      },
      {
        label: "Listing price",
        value: "373",
      },
    ],
  },
  {
    imgSrc: badkid4,
    name: "Bad Kid #8052",
    priceItems: [
      {
        label: "Highest offer",
        value: "450",
      },
      {
        label: "Listing price",
        value: "373",
      },
    ],
  },
  {
    imgSrc: badkid5,
    name: "Bad Kid #9168",
    priceItems: [
      {
        label: "Highest offer",
        value: "450",
      },
      {
        label: "Listing price",
        value: "373",
      },
    ],
  },
  {
    imgSrc: badkid6,
    name: "Bad Kid #9486",
    priceItems: [
      {
        label: "Highest offer",
        value: "450",
      },
      {
        label: "Listing price",
        value: "373",
      },
    ],
  },
];

/* This is primary NftProfileCardList */
export const Primary: Story = {
  args: {
    list: list1,
  },
};
