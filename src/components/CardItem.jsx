
import { Card, Metric, Text } from "@tremor/react";

const CardItem = () => {
  return (
    <Card className="max-w-xs mx-auto" decoration="top" decorationColor="indigo">
    <Text>Sales</Text>
    <Metric>€ 12000</Metric>
  </Card>
  )
}

export default CardItem