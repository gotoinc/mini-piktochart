import { ref } from 'vue'

export function useCoordinate(event) {
  const coordinates = ref({
    X: null,
    Y: null,
  })

  const nodeX = event.target
  const nodeY = event.target

  coordinates.value.X = Math.floor(nodeX.getBoundingClientRect().x)
  coordinates.value.Y = Math.floor(nodeY.getBoundingClientRect().y)

  return coordinates
}
