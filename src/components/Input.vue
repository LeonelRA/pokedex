<script setup>
import SearchIcon from '@/components/Icons/Search.vue'

const props = defineProps({
  type: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
  },
  modelValue: {
    type: String,
    default: null,
  },
})

const emit = defineEmits(['update:modelValue'])
const handleInput = value => emit('update:modelValue', value)
</script>
<template>
  <div class="shadow-input">
    <label class="flex items-center bg-white rounded-[5px]">
      <div class="px-[15px]">
        <SearchIcon />
      </div>
      <input
        :type="props.type"
        :placeholder="props.placeholder"
        class="w-full h-[50px]"
        @input="handleInput($event.target.value)"
      />
    </label>
  </div>
</template>
