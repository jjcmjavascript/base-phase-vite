export const getResolution = () => {
  const { innerWidth: width, innerHeight: height } = window
  return { width, height }
}

export const getResolutionRatio = () => {
  const { width, height } = getResolution()
  return width / height
}

export const getScreenSize = () => {
  const { width, height } = getResolution()
  const ratio = getResolutionRatio()
  const isLandscape = ratio > 1
  const isPortrait = ratio < 1
  const isSquare = ratio === 1
  return { width, height, ratio, isLandscape, isPortrait, isSquare }
}

export const getScreenSizeInText = () => {
  const { width } = getScreenSize()

  if (width < 768) {
    return 'xs'
  } else if (width >= 768 && width < 992) {
    return 'sm'
  } else if (width >= 992 && width < 1200) {
    return 'md'
  } else if (width >= 1200) {
    return 'lg'
  }
}

export default {
  getResolution,
  getResolutionRatio,
  getScreenSize,
  getScreenSizeInText
}
