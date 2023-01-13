<template>
  <ul class="nav nav-tabs pt-3 bg-body-secondary">
    <h4 class="mx-3">Дуйшеналиев Аким P42081</h4>
    <li class="nav-item">
      <router-link class="nav-link" to="/" active-class="active"
        >Граф</router-link
      >
    </li>
    <li class="nav-item">
      <router-link class="nav-link" to="/glossary" active-class="active"
        >Глоссарий</router-link
      >
    </li>
    <!-- <li class="nav-item">
      <router-link class="nav-link" to="/add_to_glossary" active-class="active"
        >Добавить в глоссарий</router-link
      >
    </li> -->
  </ul>
  <router-view />
</template>

<style>
html,
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
