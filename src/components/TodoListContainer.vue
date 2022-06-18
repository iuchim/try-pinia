<script setup>
import TodoList from '/src/components/TodoList.vue'
import { storeToRefs } from 'pinia'
import { useTodoListStore } from '/src/stores/TodoList'

const store = useTodoListStore()
const { todos, loading } = storeToRefs(store)

const handleAdd = title => {
  store.add(title)
}

const handleToggle = ids => {
  store.toggle(ids)
}

const handleWipe = () => {
  store.wipe()
}
</script>

<template>
  <TodoList :todos="todos" :disabled="loading"
    @add="handleAdd"
    @toggle="handleToggle"
    @wipe="handleWipe"
  />
</template>
