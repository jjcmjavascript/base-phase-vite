export const setCardInZone = ({
  gameObject,
  dropZone
}) => {
  gameObject.setTint()
  const { x, y, width, height } = dropZone.getData('zoneObject')
  gameObject.x = x + width / 2
  gameObject.y = y + height / 2
}

export const returnCardToOriginalPos = ({ gameObject }) => {
  gameObject.setTint()
  gameObject.x = gameObject.input.dragStartX
  gameObject.y = gameObject.input.dragStartY
}

export const dragstart = (sceneInstance) => (pointer, gameObject) => {
  gameObject.setTint(0xff69b4)
  sceneInstance.children.bringToTop(gameObject)
}

export const dragEnd = (pointer, gameObject, dropped) => {
  if (!dropped) {
    returnCardToOriginalPos({ gameObject })
  }
}
export const drag = (pointer, gameObject, dragX, dragY) => {
  gameObject.x = dragX
  gameObject.y = dragY
}

export const drop = (pointer, gameObject, dropZone) => {
  if (!dropZone) return

  if (dropZone.getData('zoneObject').type.includes(gameObject.getData('card').type)) {
    setCardInZone({
      gameObject,
      dropZone
    })
  } else {
    returnCardToOriginalPos({ gameObject })
  }
}
