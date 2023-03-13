import type { NextPage } from 'next'
import { HeartRateChart } from '~/components/heart-rate-chart'
import { StyledHome } from './styled'

const Home: NextPage = () => {
  return (
    <StyledHome>
      <HeartRateChart />
    </StyledHome>
  )
}

export default Home
