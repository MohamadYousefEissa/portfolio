<template>
  <button class="transition-colors"><slot /></button>
</template>

<style scoped>
button {
  width: 110px;
  height: 40px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  border: 1px solid var(--sec-clr);
  color: var(--sec-clr);
  &:hover {
    color: #000;
    background-color: var(--sec-clr);
  }
}
</style>
