import React from 'react';
import {VictoryChart, VictoryAxis, VictoryTheme, VictoryBar} from 'victory';

import style from './style.module.less';

const data = [
  {quarter: 1, earnings: 13000},
  {quarter: 2, earnings: 16500},
  {quarter: 3, earnings: 14250},
  {quarter: 4, earnings: 19000}
];

export default function() {
  return <VictoryChart
    theme={VictoryTheme.material}
    domainPadding={20}
  >
    <VictoryAxis
      // tickValues specifies both the number of ticks and where
      // they are placed on the axis
      tickValues={[1, 2, 3, 4]}
      tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
    />
    <VictoryAxis
      dependentAxis
      // tickFormat specifies how ticks should be displayed
      tickFormat={(x) => (`$${x / 1000}k`)}
    />
    <VictoryBar
      data={data}
      x="quarter"
      y="earnings"
    />
  </VictoryChart>
}
