<script setup>
import Button from '@/components/Btn.vue'
import ButtonStar from '@/components/BtnStar.vue'
import ButtonClose from '@/components/BtnClose.vue'

const props = defineProps({
  pokemon: {
    type: Object,
    required: true,
  },
  is_favorite: {
    type: Boolean,
    default: false,
  },
})

const copyContent = () => {
  const name = `Name:\n${props.pokemon.name}`
  const abilities = `Abilities:\n${props.pokemon.abilities.map(a => a.ability.name).join(', ')}`

  const text = `${name}\n-\n${abilities}`
  navigator.clipboard.writeText(text)
}
</script>
<template>
  <div
    class="fixed top-0 left-0 w-full h-full bg-black/50 grid place-items-center px-[30px] z-10"
    @click.self="$emit('closeModal')"
  >
    <div class="bg-white w-full max-w-[500px] rounded-[5px] relative">
      <ButtonClose
        class="absolute top-2.5 right-2.5"
        @click="$emit('closeModal')"
      />
      <div
        class="h-[220px] flex justify-center bg-image-pokemon rounded-t-[5px]"
      >
        <img :src="props.pokemon.sprites.front_default" :alt="pokemon.name" />
      </div>
      <div style="padding: 30px">
        <ul class="flex flex-col gap-2.5 mb-5">
          <li class="border-b pb-2.5 font-bold text-gray-base">
            Name: {{ props.pokemon.name }}
          </li>
          <li class="border-b pb-2.5 font-bold text-gray-base">
            Weight: {{ props.pokemon.weight }}
          </li>
          <li class="border-b pb-2.5 font-bold text-gray-base">
            Height: {{ props.pokemon.height }}
          </li>
          <li class="border-b pb-2.5 font-bold text-gray-base">
            Types:
            {{ props.pokemon.types.map(type => type.type.name).join(', ') }}
          </li>
        </ul>
        <div class="flex justify-between flex-wrap gap-3">
          <Button @click="copyContent" text="Share to my friends" />
          <ButtonStar
            :is_actived="props.is_favorite"
            @click="$emit('handleFavorite', pokemon.name)"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.bg-image-pokemon {
  background-image: url('@/assets/svg/background.svg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
