import Graph from "graphology";
import Sigma from "sigma";

import ForceSupervisor from "graphology-layout-force/worker";

export function graph(container) {
  function rndColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const color = "#" + r.toString(16) + g.toString(16) + b.toString(16);
    return color;
  }

  fetch("http://127.0.0.1:8000/glossary/get/all")
    .then((response) => response.json())
    .then((data) => {
      const graph = new Graph();
      graph.import(data);

      graph.nodes().forEach((node, i) => {
        graph.setNodeAttribute(node, "color", rndColor());
        graph.setNodeAttribute(node, "size", Math.random() * (5 - 10) + 10);

        const angle = (i * 2 * Math.PI) / graph.order;
        graph.setNodeAttribute(node, "x", 100 * Math.cos(angle));
        graph.setNodeAttribute(node, "y", 100 * Math.sin(angle));
      });

      const layout = new ForceSupervisor(graph);
      layout.start();

      new Sigma(graph, container, {
        renderEdgeLabels: true,
        allowInvalidContainer: true,
      });
    });
}
