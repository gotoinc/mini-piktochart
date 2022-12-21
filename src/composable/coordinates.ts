import { ref } from 'vue'

interface Coordinates {
 X: number,
 Y: number
}

export function useCoordinate(event: Event) {
  const coordinates = ref<Coordinates>({
    X: null,
    Y: null,
  })

  coordinates.value.X = Math.floor((event.target as HTMLElement).getBoundingClientRect().x)
  coordinates.value.Y = Math.floor((event.target as HTMLElement).getBoundingClientRect().y)

  return coordinates
}
