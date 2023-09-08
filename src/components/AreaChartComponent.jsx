import React from "react";
import { Card, Title, AreaChart } from "@tremor/react";

const chartdata = [
  {
    date: "Jan 23",
    SemiAnalysis: 2890,
    "The Pragmatic Engineer": 2338,
  },
  {
    date: "Feb 23",
    SemiAnalysis: 2756,
    "The Pragmatic Engineer": 2103,
  },
  {
    date: "Mar 23",
    SemiAnalysis: 3323,
    "The Pragmatic Engineer": 2194,
  },
  {
    date: "Apr 23",
    SemiAnalysis: 3470,
    "The Pragmatic Engineer": 2108,
  },
  {
    date: "May 23",
    SemiAnalysis: 3475,
    "The Pragmatic Engineer": 1812,
  },
  {
    date: "Jun 23",
    SemiAnalysis: 3129,
    "The Pragmatic Engineer": 1726,
  },
];

const dataFormatter = (number) => {
  return "€    " + Intl.NumberFormat("de-DE").format(number).toString();
};

const AreaChartComponent = () => {
  return (
    <Card>
    <Title>Newsletter revenue over time (EUR)</Title>
    <AreaChart
      className="h-72 mt-4"
      data={chartdata}
      index="date"
      categories={["SemiAnalysis", "The Pragmatic Engineer"]}
      colors={["violet", "cyan"]}
      valueFormatter={dataFormatter}
    />
  </Card>
  )
}

export default AreaChartComponent