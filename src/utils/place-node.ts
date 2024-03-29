import { fitNode } from './fit-node.js'


export function placeNode(
  targetNode,
  parentNode,
  placeOrder = ['bottom', 'top', 'right', 'left'],
  place = undefined
) {
  if (!targetNode || !parentNode) { return }

  const fits = fitNode(targetNode, parentNode)
  if (!fits) {
    return
  }
  
  const [canPlace, freeSpace, targetRect, parentRect]: any = fits
  let finalPlace

  if (place) {
    finalPlace = place
  } else {
    for (const newPlace of placeOrder) {
      if (canPlace[newPlace.split('-')[0]]) {
        finalPlace = newPlace
        break
      }
    }
  }

  if (!finalPlace) {
    let maxFreeSpace = 0
    let placeWIthMoreSpace = placeOrder[0]
    for (const key in freeSpace) {
      if (freeSpace[key] > maxFreeSpace) {
        maxFreeSpace = freeSpace[key]
        placeWIthMoreSpace = key
      }
    }
    finalPlace = placeWIthMoreSpace
  }

  const firstPlace = finalPlace?.split('-')[0]
  let secondPlace = finalPlace?.split('-')[1]

  const topValue = {
    top: freeSpace.top - targetRect.height,
    left: freeSpace.top,
    right: freeSpace.top,
    bottom: parentRect.top + parentRect.height,
  }
  const leftValue = {
    top: freeSpace.left,
    left: freeSpace.left - targetRect.width,
    right: parentRect.left + parentRect.width,
    bottom: freeSpace.left,
  }

  targetNode.style.position = 'fixed'

  if (['top', 'bottom'].includes(firstPlace)) {
    targetNode.style.top = topValue[firstPlace] + 'px'
    // if (targetNode.offsetHeight > freeSpace[firstPlace]) {
    //   targetNode.style.height = freeSpace[firstPlace] + 'px'
    // }
  }
  if (['left', 'right'].includes(firstPlace)) {
    targetNode.style.left = leftValue[firstPlace] + 'px'
    // if (targetNode.offsetWidth > freeSpace[firstPlace]) {
    //   targetNode.style.width = freeSpace[firstPlace] + 'px'
    // }
  }


  // Handling second walue in position

  if (!secondPlace) {
    ['top', 'bottom'].includes(firstPlace) && (secondPlace = 'horCenter');
    ['right', 'left'].includes(firstPlace) && (secondPlace = 'vertCenter');
  }

  const topSecondValue = {
    top: freeSpace.top,
    vertCenter: parentRect.top + (parentRect.height / 2) - (targetRect.height / 2),
    bottom: parentRect.top + parentRect.height - targetRect.height,
  }
  const leftSecondValue = {
    left: freeSpace.left,
    horCenter: parentRect.left + (parentRect.width / 2) - (targetRect.width / 2),
    right: freeSpace.left + parentRect.width - targetRect.width,
  }

  if (['top', 'bottom', 'vertCenter'].includes(secondPlace)) {
    targetNode.style.top = topSecondValue[secondPlace] + 'px'
  }
  if (['right', 'left', 'horCenter'].includes(secondPlace)) {
    targetNode.style.left = leftSecondValue[secondPlace] + 'px'
  }

  if (['top', 'bottom'].includes(firstPlace) && (secondPlace === 'stretch')) {
    targetNode.style.left = freeSpace.left + 'px'
    targetNode.style.right = freeSpace.right + 'px'
  }

  if (['right', 'left'].includes(firstPlace) && (secondPlace === 'stretch')) {
    targetNode.style.top = freeSpace.top + 'px'
    targetNode.style.bottom = freeSpace.bottom + 'px'
  }
}