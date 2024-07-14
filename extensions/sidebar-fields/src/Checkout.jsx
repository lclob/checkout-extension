import {
  reactExtension,
  View,
  Text,
  BlockStack,
  BlockLayout,
  TextBlock,
  useSettings,
  Divider,
  Image,
  Grid,
} from "@shopify/ui-extensions-react/checkout";

export default reactExtension("purchase.checkout.block.render", () => (
  <Extension />
));

function Extension() {
  const {
    image,
    title,
    content,
    image2,
    title2,
    content2,
    image3,
    title3,
    content3,
    image4,
    title4,
    content4,
    post_text,
  } = useSettings();

  return (
    <BlockLayout border="none" cornerRadius="none" rows={["auto", "auto"]}>
      <Divider />
      <BlockStack padding={["base", "none", "none", "none"]}>
        {image ? (
          <Grid
            columns={["15%", "fill"]}
            spacing="loose"
            blockAlignment="center"
            padding={["tight", "none", "tight", "none"]}
          >
            <Image source={image} />
            <View border="none" padding="none">
              <Text size="large" emphasis="bold">
                {title}
              </Text>
              <TextBlock>{content}</TextBlock>
            </View>
          </Grid>
        ) : (
          <View border="none" padding="none">
            <Text size="large" emphasis="bold">
              {title}
            </Text>
            <TextBlock>{content}</TextBlock>
          </View>
        )}

        {image2 ? (
          <Grid
            columns={["15%", "fill"]}
            spacing="loose"
            blockAlignment="center"
            padding={["tight", "none", "tight", "none"]}
          >
            <Image source={image2} />
            <View border="none" padding="none">
              <Text size="large" emphasis="bold">
                {title2}
              </Text>
              <TextBlock>{content2}</TextBlock>
            </View>
          </Grid>
        ) : (
          <View border="none" padding="none">
            <Text size="large" emphasis="bold">
              {title2}
            </Text>
            <TextBlock>{content2}</TextBlock>
          </View>
        )}

        {image3 ? (
          <Grid
            columns={["15%", "fill"]}
            spacing="loose"
            blockAlignment="center"
            padding={["tight", "none", "tight", "none"]}
          >
            <Image source={image3} />
            <View border="none" padding="none">
              <Text size="large" emphasis="bold">
                {title3}
              </Text>
              <TextBlock>{content3}</TextBlock>
            </View>
          </Grid>
        ) : (
          <View border="none" padding="none">
            <Text size="large" emphasis="bold">
              {title3}
            </Text>
            <TextBlock>{content3}</TextBlock>
          </View>
        )}

        {image4 ? (
          <Grid
            columns={["15%", "fill"]}
            spacing="loose"
            blockAlignment="center"
            padding={["tight", "none", "tight", "none"]}
          >
            <Image source={image4} />
            <View border="none" padding="none">
              <Text size="large" emphasis="bold">
                {title4}
              </Text>
              <TextBlock>{content4}</TextBlock>
            </View>
          </Grid>
        ) : (
          <View border="none" padding="none">
            <Text size="large" emphasis="bold">
              {title4}
            </Text>
            <TextBlock>{content4}</TextBlock>
          </View>
        )}

        <View border="none" padding="none">
          <TextBlock size="small">{post_text}</TextBlock>
        </View>
      </BlockStack>
    </BlockLayout>
  );
}
