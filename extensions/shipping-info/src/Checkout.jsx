import {
  reactExtension,
  View,
  Text,
  useSettings, 
} from "@shopify/ui-extensions-react/checkout";

export default reactExtension("purchase.checkout.delivery-address.render-before", () => (
  <Extension />
));

function Extension() {
  const { info } = useSettings();

  return (
    <View border="none" padding="none">
      <Text size="small" appearance="critical" emphasis="bold">{ info }</Text>
    </View>
  );
}
