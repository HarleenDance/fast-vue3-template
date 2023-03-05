# useDate

一个用来操作时间的 Hook 。

内部使用了 dayjs 作为 format 工具

## 使用 Demo

```vue
<template>
  <div class="hello">
    <button @click="add">{{ count }}</button>
  </div>
</template>

<script lang="ts">
  import { useCounter } from '/@/hooks/useCounter';
  const { add, count } = useCounter();

  export default {
    setup() {
      return {};
    },
  };
</script>
```
