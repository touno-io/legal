<script lang="ts" setup>
import navigation from './components/navigation.vue'
import mainFooter from './components/main-footer.vue'
</script>

<template>
  <navigation />
  <div class="container main-container">
    <router-view />
  </div>
  <main-footer />
</template>

<style lang="scss">
.policy {
  line-height: 1.45;
  font-size: 1.1rem;
  padding: 0 1.5em;
  .editor {
    color: var(--bs-gray-800);
    margin: 1em 0;
  }

  h1 {
    font-family: Mulish;
    margin-bottom: 1em;
  }

  h4 {
    font-family: Arial;
    font-size: 1.35rem;
    font-weight: bold;
    margin: 1.5em 0 .6em 0;
  }

  p {
    font-size: 1.1rem;
    color: var(--bs-gray-600);
    > span {
      font-weight: bold;
    }
    &.contact {
    color: var(--bs-gray-300);
      font-weight: bold;
    }
  }
  ul {
    
    font-size: 1.1rem;
    color: var(--bs-gray-600);
    > li {
      padding-bottom: .2em;
    }
  }

}
</style>