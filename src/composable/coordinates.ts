import { ref } from 'vue'

interface Coordinates {
 X: number,
 Y: number
}

export function useCoordinate(event) {
  const coordinates = ref<Coordinates>({
    X: null,
    Y: null,
  })

  coordinates.value.X = Math.floor(event.target.getBoundingClientRect().x)
  coordinates.value.Y = Math.floor(event.target.getBoundingClientRect().y)

  return coordinates
}
