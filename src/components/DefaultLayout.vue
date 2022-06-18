<script setup>
defineProps({
  title: String,
})
</script>

<template>
  <div class="app-wrap">
    <header class="app-header"><div class="app-content">
      <h1>sugoi-header: {{ title }}</h1>
    </div></header>
    <div class="app-main"><div class="app-content"><slot /></div></div>
    <footer class="app-footer"><div class="app-content">
      2022 &copy; sugoi-footer
    </div></footer>
  </div>
</template>

<style scoped>
.app-wrap {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.app-content {
  max-width: 1280px;
  margin: auto;
}

.app-header {
  color: #eee;
  background-color: #666;
  padding: 2rem 0;
}

.app-header h1 {
  margin: 0;
  line-height: 1;
}

.app-main {
  background-color: #e0e0e0;
  padding: 4rem 0;
}

.app-footer {
  background-color: #eee;
  padding: 2rem 0;
  flex-grow: 1;
}
</style>
