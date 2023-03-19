function applyMouseHoverEffect(element) {
    element.addEventListener("mousemove", (e) => {
      const rect = e.target.getBoundingClientRect();
      const x = e.clientX - rect.left - 60;
      const y = e.clientY - rect.top - 60;
  
      e.target.style.setProperty("--x", `${x}px`);
      e.target.style.setProperty("--y", `${y}px`);
      e.target.classList.add("onmousemove");
    });
  
    element.addEventListener("mouseleave", (e) => {
      e.target.classList.remove("onmousemove");
    });
  }
  
  document.querySelectorAll("button").forEach(applyMouseHoverEffect);
  document.querySelectorAll("a").forEach(applyMouseHoverEffect);
  
  // Add event listeners for the buttons
  document.querySelectorAll(".blog-summary button").forEach((button) => {
    button.addEventListener("click", (e) => {
      const blogId = e.target.parentElement.dataset.blogId;
      window.location.href = `blog-${blogId}.html`;
    });
  });
  