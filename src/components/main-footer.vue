<script lang="ts" setup>
import { defineProps } from 'vue'

const props = defineProps({
  popup: {
    type: Boolean,
    required: false
  }
})
</script>

<template>
  <div class="main-footer">
    <div v-if="!popup" class="links">
      <h2 id="footer-links" class="visually-hidden">Links</h2>
      <ul aria-labelledby="footer-links" class="container d-flex flex-direction-row align-items-center justify-content-center h-100 mb-0">
        <li><router-link :to="{ name: 'terms-use' }">Terms &amp; Policies</router-link></li>
        <li><router-link :to="{ name: 'privacy' }">Legal Information</router-link></li>
      </ul>
    </div>
    <div class="licensed">
      <div class="container d-flex h-100 justify-content-end align-items-center">
        <b>TEAM TOUNO.io</b> by <a href="https://mr.touno.io/" target="_blank">Kananek T.</a> The source code is licensed MIT.
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.main-footer {
  > .links {
    > ul {
      list-style-type: none;
      column-gap: 3.5em;
      font-size: .8rem;
    }
  }
  > .licensed {
    border-top: 1px solid var(--border-navbar);
    > .container {
      column-gap: .2em;
    }
  }
}  
</style>