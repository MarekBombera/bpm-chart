import { FC } from 'react'
import { mockData } from './mock-data'
import { DATA_POINT_HEIGHT, CHART_HEIGHT } from './constants'
import { DataPoint } from './styled'

import { DataPoints, Chart, MaxHeartRate, MinHeartRate } from './styled'
import { calcAnimationDelay } from './utils'

type Props = {}

export const HeartRateChart: FC<Props> = ({}) => {
  const minHeartRate = Math.min(...mockData.map(({ value }) => value))
  const maxHeartRate = Math.max(...mockData.map(({ value }) => value))

  const renderedDataPoints = mockData.map((dataPoint, index) => {
    const { value, timestamp } = dataPoint

    const nextValue = mockData[index + 1]?.value ?? null

    const calcBottom =
      ((value - minHeartRate) / (maxHeartRate - minHeartRate)) * CHART_HEIGHT

    const calcNextBottom =
      ((nextValue - minHeartRate) / (maxHeartRate - minHeartRate)) *
      CHART_HEIGHT

    const calcHeight = nextValue
      ? Math.abs(calcBottom - calcNextBottom) + DATA_POINT_HEIGHT
      : DATA_POINT_HEIGHT

    const pickSmallerBottom = Math.min(calcBottom, calcNextBottom)

    return (
      <DataPoint
        key={timestamp + index}
        height={calcHeight}
        style={{
          gridColumn: index + 1,
          animationDelay: `${calcAnimationDelay(index)}s`,
          bottom: `${nextValue ? pickSmallerBottom : calcBottom}rem`,
        }}
      />
    )
  })

  return (
    <>
      <MaxHeartRate>max {maxHeartRate}</MaxHeartRate>
      <Chart>
        <DataPoints maxColumns={mockData.length}>
          {renderedDataPoints}
        </DataPoints>
      </Chart>
      <MinHeartRate>min {minHeartRate}</MinHeartRate>
    </>
  )
}
