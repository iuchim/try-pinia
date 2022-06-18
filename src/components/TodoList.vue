<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  todos: {
    type: Array,
    required: true,
  },
  disabled: Boolean,
})
const emit = defineEmits(['add', 'toggle', 'wipe'])
const newTitle = ref('')
const sortedTodos = computed(() => [...props.todos].sort((a, b) => b.createdAt - a.createdAt))

const add = () => {
  const t = newTitle.value.trim()
  if (t === '') {
    return
  }
  newTitle.value = ''
  emit('add', t)
}

const toggle = item => {
  emit('toggle', [ item.id ])
}

const wipe = () => {
  emit('wipe')
}
</script>

<template>
  <fieldset :disabled="disabled">
    <div>
      <input type="text" v-model="newTitle" />
      <button type="button" @click="add">add</button>
    </div>
    <ul>
      <li v-for="item in sortedTodos" :key="item.id">
        <label>
          <input type="checkbox" :checked="item.isFinished" @click.prevent="toggle(item)" />
          {{ item.title }}
        </label>
      </li>
    </ul>
    <div>
      <button type="button" @click="wipe">wipe</button>
    </div>
  </fieldset>
</template>

<style scoped>
fieldset {
  border-style: none;
  border-radius: 29px;
  background: #e0e0e0;
  box-shadow:  20px 20px 60px #bebebe,
              -20px -20px 60px #ffffff;
  padding: 50px;
}
</style>
