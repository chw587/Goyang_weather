document.addEventListener("DOMContentLoaded", () => {
  const circle = 282.6;

  const Graphs = document.querySelectorAll(".graph_wrap");

  Graphs.forEach((graph) => {
    const Text = graph.querySelector(".graph_text");
    const Bar = graph.querySelector(".graph_bar");
    
    const targetValue = parseInt(Text.textContent, 10) || 0;

    let selectedColor = "#33CC99";

    requestAnimationFrame(() => {
      Bar.style.stroke = selectedColor;
      Bar.style.strokeDashoffset = circle - (circle * targetValue / 100);
    });
  });
});