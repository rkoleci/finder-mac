import React from "react";
import { Grid, GridItem, Text } from "@chakra-ui/react";
import { AddIcon, SearchIcon,  } from "@chakra-ui/icons";

import CustomIconButton, { ICON_TYPE } from "components/IconButton";

export default function Filters() {
  return (
    <Grid gridTemplateColumns="1fr 1fr 5fr 1fr 3fr 3fr" px="6" py="4" gap="1" alignItems='center'>
      <GridItem>
        <CustomIconButton
          label="back"
          icon={<AddIcon />}
          onClick={() => null}
        />
      </GridItem>
      <GridItem>
        <CustomIconButton
          label="back"
          icon={<AddIcon />}
          onClick={() => null}
        />
      </GridItem>
      <GridItem>
        <Text fontSize="16px" fontWeight="600">
          Downloads
        </Text>
      </GridItem>
      <GridItem>
      <CustomIconButton
          label="back"
          icon={<AddIcon />}
          type={ICON_TYPE.DOUBLE_CHEVRON}
          onClick={() => null}
        />
      </GridItem>
      <GridItem>
      <CustomIconButton
          label="back"
          icon={<AddIcon />}
          type={ICON_TYPE.SINGLE_CHEVRON}
          onClick={() => null}
        />
      </GridItem>
      <GridItem>
      <CustomIconButton
          label="back"
          icon={<SearchIcon />}
          type={ICON_TYPE.SINGLE_CHEVRON}
          onClick={() => null}
        />
      </GridItem>
    </Grid>
  );
}
