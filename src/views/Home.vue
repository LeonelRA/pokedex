<script setup>
import Button from '@/components/Btn.vue'
</script>
<template>
  <div class="mt-[70px]">
    <div class="text-center">
      <div class="mb-[60px]">
        <img
          src="@/assets/svg/logo-pikachu.svg"
          alt="PokeAPI"
          class="m-auto aspect-square"
        />
      </div>
      <h1 class="mb-[30px] font-bold text-[26px]">Welcome to Pokédex</h1>
      <p class="mb-[50px]">
        The digital encyclopedia created by Professor Oak is an invaluable tool
        to Trainers in the Pokémon world.
      </p>
      <Button
        @click="$router.push({ name: 'Pokedex' })"
        text="Get started"
        class="m-auto"
      />
    </div>
  </div>
</template>
