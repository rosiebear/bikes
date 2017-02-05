import { mockBikes } from '../mocks/mockBikes'

const delay = (ms) =>
  new Promise(resolve => setTimeout(resolve, ms));

export const fetchBikes = () =>
  delay(500).then(() => {
    return mockBikes.items
  });