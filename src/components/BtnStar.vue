<script setup>
import Star from '@/components/Icons/Star.vue'

const props = defineProps({
  is_actived: {
    type: Boolean,
    default: false,
  },
})
</script>
<template>
  <button
    class="w-11 h-11 rounded-full cursor-pointer bg-gray-star grid place-items-center"
  >
    <Star :color="props.is_actived ? '#ECA539' : '#BFBFBF'" />
  </button>
</template>
