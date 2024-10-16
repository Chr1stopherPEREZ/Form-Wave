const inputs = document.querySelectorAll(".form-control input");

// Animation avec GSAP pour les labels
inputs.forEach((input) => {
  input.addEventListener("focus", () => {
    const label = input.parentElement.querySelector("label");
    label.classList.add("active");

    // Animation avec GSAP
    gsap.to(label.querySelectorAll("span"), {
      color: "rgb(18, 153, 152)", // Changement de couleur, clein d'oeil a Link
      duration: 0.5,
      stagger: 0.05, // Ajoute un leger décalage entre chaque lettre
    });
  });

  input.addEventListener("blur", () => {
    const label = input.parentElement.querySelector("label");
    if (input.value === "") {
      label.classList.remove("active");

      // Remet l'animation avec GSAP
      gsap.to(label.querySelectorAll("span"), {
        color: "rgb(63, 63, 104)", // Remet à la couleur initiale
        duration: 0.5,
        stagger: 0.05,
      });
    }
  });
});

// Initialisation des labels
const labels = document.querySelectorAll(".form-control label");

labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split("")
    .map(
      (letter, idx) =>
        `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
    )
    .join("");
});

/* Script.js */
