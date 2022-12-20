import { ref } from 'vue'

export function useCoordinate(event) {
  const coordinates = ref({
    X: null,
    Y: null,
  })

  coordinates.value.X = Math.floor(event.target.getBoundingClientRect().x)
  coordinates.value.Y = Math.floor(event.target.getBoundingClientRect().y)

  return coordinates
}
