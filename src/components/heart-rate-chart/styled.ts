import styled, { keyframes } from 'styled-components'
import {
  DATA_POINTS_GAP,
  DATA_POINT_HEIGHT,
  DATA_POINT_WIDTH,
  CHART_HEIGHT,
  SCROLLBAR_HEIGHT,
} from './constants'



export const Chart = styled.div`
  display: grid;
  width: 37.5rem;
  height: ${CHART_HEIGHT + DATA_POINT_HEIGHT + SCROLLBAR_HEIGHT }rem;
  border-left: 0.0625rem solid black;
  border-right: 0.0625rem solid black;
  overflow-x: scroll;
`

type DataPointsProps = {
  maxColumns: number
}

export const DataPoints = styled.ul<DataPointsProps>`
  position: relative;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(
    ${({ maxColumns }) => maxColumns},
    ${DATA_POINT_WIDTH}rem
  );
  gap: ${DATA_POINTS_GAP}rem;
  padding: 0 0.1875rem;
`


type DataPointProps = {
  height: number
}

const showDataPoint = (height: number) => keyframes`
  0% {
    height: 0;
    opacity: 0;
  }
  100% {
    height: ${height}rem;
    opacity: 1;
  }
`


export const DataPoint = styled.li<DataPointProps>`
  position: absolute;
  width: ${DATA_POINT_WIDTH}rem;
  opacity: 0;
  background: red;
  border-radius: 999rem;
  animation: ${({ height }) => showDataPoint(height)} 0.2s ease-out forwards;

  &:hover {
    z-index: 1;

    span {
      display: grid;
    }
  }
`

const MinMaxTemplate = styled.span`
  justify-self: end;
`

export const MaxHeartRate = styled(MinMaxTemplate)``
export const MinHeartRate = styled(MinMaxTemplate)``
