import { MockData } from './mock-data'

export const calcMinHeartRate = (mockData: MockData) => {
  return Math.min(...mockData.map((bpm) => bpm.value))
}

export const calcMaxHeartRate = (mockData: MockData) => {
  return Math.max(...mockData.map((bpm) => bpm.value))
}

export const calcAnimationDelay = (index: number) => {
  const animationDelaySpeed = 70 // 10 slow - 100 fast

  return index / animationDelaySpeed
}
