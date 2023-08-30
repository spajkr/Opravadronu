function jumpToSection(id) {
  document
    .getElementById(id)
    .scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
}

let pricingMode = "monthly";

const monthlyElement = document.getElementById("monthly");
const annuallyElement = document.getElementById("annually");

const monthlyPricingElement = document.getElementById("pricing-monthly");
const annuallyPricingElement = document.getElementById("pricing-annually");

monthlyElement.addEventListener("click", () => {
  annuallyElement.classList.remove("bg-indigo-500");
  monthlyElement.classList.add("bg-indigo-500");

  if (pricingMode === "annually") {
    annuallyPricingElement.classList.add("hidden");
    monthlyPricingElement.classList.remove("hidden");
  }

  pricingMode = "monthly";
});

annuallyElement.addEventListener("click", () => {
  monthlyElement.classList.remove("bg-indigo-500");
  annuallyElement.classList.add("bg-indigo-500");

  if (pricingMode === "monthly") {
    monthlyPricingElement.classList.add("hidden");
    annuallyPricingElement.classList.remove("hidden");
  }

  pricingMode = "annually";
});
