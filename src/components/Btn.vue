<script setup>
import { computed } from 'vue'
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: 'primary',
  },
  icon: {
    type: Object,
  },
  customClass: {
    type: String,
    default: '',
  },
})

const colorButton = computed(() => {
  return {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
  }
})
</script>
<template>
  <button
    :class="`${colorButton[color]} cursor-pointer text-lg text-white py-[11px] px-[20px] rounded-[80px] font-bold flex justify-center`"
  >
    <span v-if="props.icon" class="mr-2.5"><component :is="props.icon" /></span>
    {{ props.text }}
  </button>
</template>
