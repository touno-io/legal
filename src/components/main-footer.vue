<template>
  <div class="main-footer">
    <div class="links">
      <h2 id="footer-links" class="visually-hidden">Links</h2>
      <ul aria-labelledby="footer-links" class="container d-flex flex-direction-row align-items-center justify-content-center h-100 mb-0">
        <li class="nav-item"><router-link class="nav-link" :to="{ name: 'privacy' }">Legal Information</router-link></li>
        <li class="nav-item"><router-link class="nav-link" :to="{ name: 'terms' }">Terms &amp; Policies</router-link></li>
        <li class="nav-item"><router-link class="nav-link" :to="{ name: 'cookie' }">Cookie Policies</router-link></li>
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