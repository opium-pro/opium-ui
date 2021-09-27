export function fitNode(targetNode, parentNode) {
  const parentRect = parentNode?.getBoundingClientRect()
  const targetRect = targetNode?.getBoundingClientRect()

  if (!targetRect || !parentRect) {
    return
  }

  const freeSpace = {
    top: parentRect.top,
    left: parentRect.left,
    right: window.innerWidth - parentRect.left - parentRect.width,
    bottom: window.innerHeight - parentRect.top - parentRect.height,
  }

  const canBePlaced = {
    top: freeSpace.top > targetRect.height,
    left: freeSpace.left > targetRect.width,
    right: freeSpace.right > targetRect.width,
    bottom: freeSpace.bottom > targetRect.height,
  }

  return [canBePlaced, freeSpace, targetRect, parentRect]
}