import { ref, onMounted, onUnmounted, Ref } from 'vue-demi'

export function useMouse(): {
  x: Ref<number>,
  y: Ref<number>,
} {
  const x = ref(0)
  const y = ref(0)
  const update = (e: MouseEvent) => {
    x.value = e.pageX
    y.value = e.pageY
  }

  onMounted(() => window.addEventListener('mousemove', update))
  onUnmounted(() => window.removeEventListener('mousemove', update))

  return { x, y, }
}
