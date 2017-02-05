const getClassTypeIndex = (bike, sorter) => {
  let c = bike.class || []
  return c.indexOf(sorter)
}


// Sort by bikes with matching class to rank higher in the order
const getClassTypeSort = (classType, sorter) => {
  if(getClassTypeIndex(classType, sorter) === -1) {
    return 1
  } else if (getClassTypeIndex(classType, sorter) > -1) {
    return -1
  } else {
    return 0
  }
}

export const sortBikesByClass = (bikes, sorter) => {
  return bikes.sort((a, b) => {
    return getClassTypeSort(a, sorter) > getClassTypeSort(b, sorter)
  })
}
