document.addEventListener("DOMContentLoaded", () => {
  const faqs = document.querySelectorAll(".accordeonfaq");

  faqs.forEach((faq) => {
    const icon = faq.querySelector(".icon-faq");
    const accordeonText = faq.querySelector(".accorderon-text");
    const accordeonTitulo = faq.querySelector(".accordeon-titulo");

    if (!icon || !accordeonText || !accordeonTitulo) return;

    icon.addEventListener("click", () => {
      accordeonText.classList.toggle("active");
      accordeonTitulo.classList.toggle("active");
      icon.classList.toggle("active");
    });
  });
});
