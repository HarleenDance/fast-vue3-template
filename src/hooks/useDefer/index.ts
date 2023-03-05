import { ref } from 'vue';

export function useDefer(maxFrameCount = 1000) {
  const frameCount = ref(0);
  const refreshFrameCount = () => {
    requestAnimationFrame(() => {
      frameCount.value++;
      if (frameCount.value < maxFrameCount) {
        refreshFrameCount();
      }
    })
  }

  refreshFrameCount();
  return function (showInFrameCount: number) {
    return frameCount.value >= showInFrameCount;
  }
}