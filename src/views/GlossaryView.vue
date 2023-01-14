<template>
  <div class="container mt-3">
    <div class="row row-cols-3">
      <div v-for="item in data.nodes" :key="item.key">
        <div class="card col mb-2">
          <div class="card-body bg-secondary-subtle">
            <h5 class="card-title">{{ item.attributes.label }}</h5>
            <hr />
            <p class="card-text">{{ item.attributes.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getGlossary } from "@/service/glossary";
import { defineComponent } from "vue";
export default defineComponent({
  name: "GetGlossary",
  data() {
    return {
      data: "",
    };
  },
  async mounted() {
    this.data = await getGlossary();
  },
});
</script>
