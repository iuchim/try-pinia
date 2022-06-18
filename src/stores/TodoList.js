import { defineStore } from 'pinia'
import { reactive, toRefs } from 'vue'
import { TodoEntry } from '/src/models/TodoEntry'

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export const useTodoListStore = defineStore('todo-list', () => {
  const SLEEP_MSEC = 200
  const state = reactive({
    todos: [
      new TodoEntry({ title: 'sugoi-item 1', createdAt: Date.UTC(2022,0,1) }),
      new TodoEntry({ title: 'sugoi-item 2', createdAt: Date.UTC(2022,0,2) }),
      new TodoEntry({ title: 'sugoi-item 3', createdAt: Date.UTC(2022,0,3), finishedAt: Date.now() }),
    ],
    loading: false,
  })

  const wrap = fn => {
    return async (...args) => {
      try {
        state.loading = true
        await fn(...args)
      } finally {
        state.loading = false
      }
    }
  }

  const add = wrap(async title => {
    await sleep(SLEEP_MSEC)
    state.todos.push(new TodoEntry({ title }))
  })

  const toggle = wrap(async ids => {
    await sleep(SLEEP_MSEC)
    for (let i = 0; i < state.todos.length; i++) {
      const t = state.todos[i]
      if (!ids.includes(t.id))
        continue
      state.todos[i] = new TodoEntry({
        id: t.id,
        title: t.title,
        createdAt: t.createdAt,
        finishedAt: t.isFinished ? null : Date.now(),
      })
    }
  })

  const wipe = wrap(async () => {
    await sleep(SLEEP_MSEC)
    state.todos = state.todos.filter(t => !t.isFinished)
  })

  return { ...toRefs(state), add, toggle, wipe }
})
