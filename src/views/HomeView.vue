<template>
  <div class="home">
    <div ref="graph_container" class="graph_container"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import { graph } from "@/service/graph";

export default {
  name: "HomeView",
  mounted() {
    graph(this.$refs.graph_container);
  },
};
</script>

<style>
.graph_container {
  width: 100%;
  height: 100%;
  min-height: 600px;
}
</style>
