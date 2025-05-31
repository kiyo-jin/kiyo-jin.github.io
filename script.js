document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");

  const observerOptions = {
    root: null, // ビューポートをルートとする
    rootMargin: "0px",
    threshold: 0.1, // 要素の10%が見えたら発火
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target); // 一度アニメーションしたら監視を停止
      }
    });
  }, observerOptions);

  sections.forEach((section) => {
    observer.observe(section);
  });
});
