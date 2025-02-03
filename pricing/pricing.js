const categoryDescriptions = {
  Kitchen: {
    small:
      "This category includes smaller kitchen knives, such as paring knives or small utility knives.",
    standard:
      "These are your everyday kitchen knives—chef, santoku, cleaver, slicer, etc.",
    specialty:
      "Specialty knives like fillet knives, carving knives, or other unique kitchen blades.",
  },
  Pocket: {
    standard:
      "Standard pocket knives with straight edges, typically used for EDC tasks.",
    hawkbill:
      "Hawkbill blades have a curved tip, useful for tasks like cutting rope or cable.",
    "multi-edge":
      "Knives featuring multiple edges or compound/tanto tips for specialized cutting.",
  },
  Serrated: {
    default:
      "Serrated knives with scalloped edges, great for bread or tomatoes.",
  },
  Other: {
    "small fixed blade": "Smaller fixed-blade hunting or utility knives.",
    "large fixed blade":
      "Larger fixed-blade knives for outdoors, hunting, or heavy-duty tasks.",
    other:
      "Any unusual blades not covered by other categories (machetes, axes, etc.).",
  },
};

const gritDescriptions = {
  Standard:
    "Three-stage progression up to 200 grit + 4 micron, best for meat knives and non-chopping uses.",
  "Standard Micro-Bevel":
    "Six-stage progression up to 1000 grit + 2 micron, with microbevel best for precision cutting.",
  "Refined Micro-Bevel":
    "Six-stage progression up to 1000 grit + 2 micron, with microbevel for extra sharpness.",
  Perfection:
    "Fourteen-stage progression up to 250k grit for those chasing the most extreme edge, best for high-end collector knives.",
};

const knifeCategories = {
  Kitchen: [
    {
      name: "Small",
      icons: ["/images/BKS-paring.svg", "/images/BKS-paring2.svg"],
    },
    {
      name: "Standard",
      icons: [
        "/images/BKS-slicer.svg",
        "/images/BKS-kitchen.svg",
        "/images/BKS-santoku.svg",
        "/images/BKS-cleaver.svg",
      ],
    },
    {
      name: "Specialty",
      icons: ["/images/BKS-carving.svg", "/images/BKS-fillet.svg"],
    },
  ],
  Pocket: [
    { name: "Standard", icons: ["/images/BKS-pocketStandard.svg"] },
    { name: "Hawkbill", icons: ["/images/BKS-pocketHawkbill.svg"] },
    { name: "Multi-Edge", icons: ["/images/BKS-pocketTanto.svg"] },
  ],
  Other: [
    { name: "Small Fixed Blade", icons: ["/images/BKS-skinning.svg"] },
    { name: "Large Fixed Blade", icons: ["/images/BKS-hunting.svg"] },
    { name: "Other", icons: ["/images/BKS-other.svg"] },
  ],
};

let userSelection = {
  type: null,
  category: null,
  condition: "good",
  grit: "Standard",
};

const pricingMap = {
  Kitchen: {
    small: {
      recommended: "Standard Micro-Bevel",
      good: {
        Standard: 20,
        "Standard Micro-Bevel": 25,
        "Refined Micro-Bevel": 30,
        Perfection: 35,
      },
      fair: {
        Standard: 25,
        "Standard Micro-Bevel": 30,
        "Refined Micro-Bevel": 35,
        Perfection: 40,
      },
      poor: {
        Standard: 30,
        "Standard Micro-Bevel": 35,
        "Refined Micro-Bevel": 40,
        Perfection: 45,
      },
    },
    standard: {
      recommended: "Standard Micro-Bevel",
      good: {
        Standard: 15,
        "Standard Micro-Bevel": 20,
        "Refined Micro-Bevel": 25,
        Perfection: 30,
      },
      fair: {
        Standard: 20,
        "Standard Micro-Bevel": 25,
        "Refined Micro-Bevel": 30,
        Perfection: 35,
      },
      poor: {
        Standard: 25,
        "Standard Micro-Bevel": 30,
        "Refined Micro-Bevel": 35,
        Perfection: 40,
      },
    },
    specialty: {
      recommended: "Standard Micro-Bevel",
      good: {
        Standard: 20,
        "Standard Micro-Bevel": 25,
        "Refined Micro-Bevel": 30,
        Perfection: 35,
      },
      fair: {
        Standard: 25,
        "Standard Micro-Bevel": 30,
        "Refined Micro-Bevel": 35,
        Perfection: 40,
      },
      poor: {
        Standard: 30,
        "Standard Micro-Bevel": 35,
        "Refined Micro-Bevel": 40,
        Perfection: 45,
      },
    },
  },
  Pocket: {
    standard: {
      recommended: "Standard Micro-Bevel",
      good: {
        Standard: 10,
        "Standard Micro-Bevel": 15,
        "Refined Micro-Bevel": 20,
        Perfection: 25,
      },
      fair: {
        Standard: 15,
        "Standard Micro-Bevel": 20,
        "Refined Micro-Bevel": 25,
        Perfection: 30,
      },
      poor: {
        Standard: 20,
        "Standard Micro-Bevel": 25,
        "Refined Micro-Bevel": 30,
        Perfection: 35,
      },
    },
    hawkbill: {
      recommended: "Standard Micro-Bevel",
      good: {
        Standard: 15,
        "Standard Micro-Bevel": 20,
        "Refined Micro-Bevel": 25,
        Perfection: 30,
      },
      fair: {
        Standard: 20,
        "Standard Micro-Bevel": 25,
        "Refined Micro-Bevel": 30,
        Perfection: 35,
      },
      poor: {
        Standard: 25,
        "Standard Micro-Bevel": 30,
        "Refined Micro-Bevel": 35,
        Perfection: 40,
      },
    },
    "multi-edge": {
      recommended: "Standard Micro-Bevel",
      good: {
        Standard: 20,
        "Standard Micro-Bevel": 25,
        "Refined Micro-Bevel": 30,
        Perfection: 35,
      },
      fair: {
        Standard: 25,
        "Standard Micro-Bevel": 30,
        "Refined Micro-Bevel": 35,
        Perfection: 40,
      },
      poor: {
        Standard: 30,
        "Standard Micro-Bevel": 35,
        "Refined Micro-Bevel": 40,
        Perfection: 45,
      },
    },
  },
  Serrated: {
    recommended: "Standard Micro-Bevel",
    good: {
      Standard: 10,
      "Standard Micro-Bevel": 15,
      "Refined Micro-Bevel": 20,
      Perfection: 25,
    },
    fair: {
      Standard: 15,
      "Standard Micro-Bevel": 20,
      "Refined Micro-Bevel": 25,
      Perfection: 30,
    },
    poor: {
      Standard: 20,
      "Standard Micro-Bevel": 25,
      "Refined Micro-Bevel": 30,
      Perfection: 35,
    },
  },
  Other: {
    "small fixed blade": {
      recommended: "Standard Micro-Bevel",
      good: {
        Standard: 10,
        "Standard Micro-Bevel": 15,
        "Refined Micro-Bevel": 20,
        Perfection: 25,
      },
      fair: {
        Standard: 15,
        "Standard Micro-Bevel": 20,
        "Refined Micro-Bevel": 25,
        Perfection: 30,
      },
      poor: {
        Standard: 20,
        "Standard Micro-Bevel": 25,
        "Refined Micro-Bevel": 30,
        Perfection: 35,
      },
    },
    "large fixed blade": {
      recommended: "Standard Micro-Bevel",
      good: {
        Standard: 15,
        "Standard Micro-Bevel": 20,
        "Refined Micro-Bevel": 25,
        Perfection: 30,
      },
      fair: {
        Standard: 20,
        "Standard Micro-Bevel": 25,
        "Refined Micro-Bevel": 30,
        Perfection: 35,
      },
      poor: {
        Standard: 25,
        "Standard Micro-Bevel": 30,
        "Refined Micro-Bevel": 35,
        Perfection: 40,
      },
    },
    other: {
      recommended: "Standard Micro-Bevel",
      good: {
        Standard: 20,
        "Standard Micro-Bevel": 25,
        "Refined Micro-Bevel": 30,
        Perfection: 35,
      },
      fair: {
        Standard: 25,
        "Standard Micro-Bevel": 30,
        "Refined Micro-Bevel": 35,
        Perfection: 40,
      },
      poor: {
        Standard: 30,
        "Standard Micro-Bevel": 35,
        "Refined Micro-Bevel": 40,
        Perfection: 45,
      },
    },
  },
};

function goToStep2(knifeType) {
  userSelection.type = knifeType;

  if (knifeType === "Serrated") {
    goToStep3("Serrated");
    return;
  }

  const categoryOptions = knifeCategories[knifeType] || [];
  const categoryContainer = document.getElementById("knifeCategoryOptions");
  categoryContainer.innerHTML = "";

  categoryOptions.forEach((category) => {
    const button = document.createElement("button");
    button.classList.add("knife-button");

    const iconContainer = document.createElement("div");
    iconContainer.classList.add("knife-icons");

    if (category.icons && category.icons.length > 0) {
      category.icons.forEach((iconSrc) => {
        const img = document.createElement("img");
        img.classList.add("pricing-icons");
        img.src = iconSrc;
        img.alt = `${category.name} Knife`;
        iconContainer.appendChild(img);
      });
    }

    const categoryName = document.createElement("span");
    categoryName.textContent = category.name;

    button.appendChild(iconContainer);
    button.appendChild(categoryName);
    button.onclick = () => goToStep3(category.name);
    categoryContainer.appendChild(button);
  });

  goToStep(2, knifeType);
}

function goToStep3(category) {
  userSelection.category = category;
  displayPricing();
  goToStep(3, category);
}

function displayPricing() {
  const { type, category, condition } = userSelection;
  const pricingSection = document.getElementById("pricingResult");
  const descContainer = document.getElementById("categoryDescription");

  // Clear previous results
  pricingSection.innerHTML = "";
  if (descContainer) {
    descContainer.innerHTML = "";
  }

  // Show the category description if it exists
  // For Serrated or Other, if you want a single default text, do that here
  if (type === "Serrated") {
    descContainer.innerHTML =
      categoryDescriptions.Serrated.default ||
      "Serrated knives with scalloped edges, ideal for breads, etc.";
  } else if (type === "Other") {
    const catKey = category.toLowerCase();
    const otherDesc =
      categoryDescriptions.Other?.[catKey] ||
      "Miscellaneous blades not covered by standard categories.";
    descContainer.innerHTML = otherDesc;
  } else {
    // For Kitchen or Pocket
    const catKey = category.toLowerCase();
    const desc =
      categoryDescriptions?.[type]?.[catKey] ||
      "No specific description available for this category.";
    descContainer.innerHTML = desc;
  }

  // Now handle actual pricing
  const recommendedGrit =
    pricingMap?.[type]?.[category?.toLowerCase()]?.recommended ||
    pricingMap?.[type]?.recommended;
  const pricingOptions =
    pricingMap?.[type]?.[category?.toLowerCase()]?.[condition] ||
    pricingMap?.[type]?.[condition];

  if (!pricingOptions) {
    pricingSection.innerHTML = "<p>Price Not Available</p>";
    return;
  }

  if (type === "Serrated") {
    pricingSection.innerHTML =
      "<p>CUSTOM SERRATED PRICING DATA (it also needs to be fairly wide to not screw up the buttons)</p>";
    return;
  }

  if (category === "Other") {
    pricingSection.innerHTML =
      "<p>CUSTOM OTHER PRICING DATA (it also needs to be fairly wide to not screw up the buttons)</p>";
    return;
  }

  Object.entries(pricingOptions).forEach(([gritLevel, price]) => {
    const description =
      gritDescriptions[gritLevel] || "No description available.";
    const priceElement = document.createElement("p");
    priceElement.innerHTML = `
        <strong class="price">$${price}</strong> ${
      gritLevel === recommendedGrit ? "(Recommended)" : ""
    } <br>
        <strong>${gritLevel.replace("-", " ")}</strong>: ${description}
      `;
    pricingSection.appendChild(priceElement);
  });
}

function goToStep(stepNumber, selection) {
  document
    .querySelectorAll(".step")
    .forEach((s) => s.classList.remove("active"));
  document.getElementById(`step${stepNumber}`).classList.add("active");

  if (stepNumber === 2) {
    document.getElementById("knifeType").textContent = selection;
  }
  if (stepNumber === 3) {
    if (userSelection.type === "Serrated" || userSelection.type === "Other") {
      document.getElementById("knifeCategory").textContent =
        userSelection.category;
      return;
    }
    document.getElementById("knifeCategory").textContent =
      selection + " " + userSelection.type;
  }
}

function updateCondition(condition) {
  userSelection.condition = condition;
  displayPricing();
}

function goBack(stepNumber) {
  if (userSelection.type === "Serrated" && stepNumber === 2) {
    stepNumber = 1;
  }
  document
    .querySelectorAll(".step")
    .forEach((s) => s.classList.remove("active"));
  document.getElementById(`step${stepNumber}`).classList.add("active");
}

function resetCalculator() {
  goToStep(1, "");
  document.getElementById("knifeCondition").value = "good";
}
