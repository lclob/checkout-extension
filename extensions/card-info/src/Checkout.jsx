import {
  reactExtension,
  View,
  Text,
  BlockStack,
  BlockLayout,
  TextBlock,
  useSettings,
  Image,
  Grid
} from "@shopify/ui-extensions-react/checkout";

export default reactExtension("purchase.checkout.block.render", () => (
  <Extension />
));

function Extension() {
  const { title, content, image_url } = useSettings();

  if (image_url) {
    return (
      <BlockLayout border="base" cornerRadius="base" rows={["auto", "auto"]}>
        <Grid columns={["15%", "fill"]} spacing="loose" blockAlignment="center" padding="base">
          <View border="none" padding="none">
            <Image source={image_url} />
          </View>
          <View border="none" padding="none">
            <View border="none" padding="none">
              <Text size="large" appearance="accent" emphasis="bold">
                {title}
              </Text>
            </View>
            <View border="none" padding={["tight", "none", "none", "none"]}>
              <BlockStack>
                <TextBlock>{content}</TextBlock>
              </BlockStack>
            </View>
          </View>
        </Grid>
      </BlockLayout>
    );
  } else {
    return (
      <BlockLayout border="base" cornerRadius="base" rows={["auto", "auto"]}>
        <View border="none" padding={["base", "base", "none", "base"]}>
          <Text size="large" appearance="accent" emphasis="bold">
            {title}
          </Text>
        </View>
        <View border="none" padding={["tight", "base", "base", "base"]}>
          <BlockStack>
            <TextBlock>{content}</TextBlock>
          </BlockStack>
        </View>
      </BlockLayout>
    );
  }
}
