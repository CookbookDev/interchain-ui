import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import Box from "../src/ui/box";
import Text from "../src/ui/text";
import useTheme from "../src/ui/hooks/use-theme";
import ThemeProvider from "../src/ui/theme-provider";

const meta: Meta<typeof ThemeProvider> = {
  component: ThemeProvider,
  title: "ThemeProvider",
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const NestedTheme: Story = {
  args: {},
  render: (props) => {
    const { getThemeRef, themeClass } = useTheme();

    return (
      <Box
        p="$6"
        bg="$background"
        width="300px"
        height="250px"
        borderStyle="$dashed"
        borderColor="$blue300"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Text>Outer</Text>
        <ThemeProvider forceColorMode="light">
          <div ref={getThemeRef} className={themeClass}>
            <Box
              p="$6"
              bg="$background"
              width="100%"
              height="100%"
              borderStyle="$dashed"
              borderColor="$red300"
            >
              <Text>
                Inner (This Box won't change bg color because it's forced to
                light mode)
              </Text>
            </Box>
          </div>
        </ThemeProvider>
      </Box>
    );
  },
};
