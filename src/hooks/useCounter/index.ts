import { reactive, toRefs } from 'vue';

const useCounter = () => {
  const state = reactive({
    count: 0,
    add() {
      state.count++;
    },
  });
  const refState = toRefs(state);
  return refState;
};

export default useCounter;
