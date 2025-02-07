const categoryDescriptions = {
  Kitchen: {
    small:
      "This category includes smaller kitchen knives with blade lengths under 5 inches, such as paring knives or small utility knives.",
    standard:
      "This category includes most kitchen knives between 5-10 inches, such as chef knives, santoku knives, cleavers, slicers, etc.",
    specialty:
      "This category includes knives with blade lengths over 10 inches or knives with very high flex like fillet knives, carving knives, or other unique kitchen blades.",
  },
  Pocket: {
    standard:
      "This category includes most pocket knives with standard single-edge, straight/convex blade shapes.",
    hawkbill:
      "This category includes hawkbill/talon blades which have concave blade shape such as karambit knives, and garden knives.",
    "multi-edge":
      "This category includes knives with multiple edges, such as tanto knives or double-edged knives.",
  },
  /* Serrated: {
    default:
      "This category includes serrated sections on knives with concave serrations (micro-serrations excluded). Currently all serrations are sharpened by hand and priced per inch.",
  }, */
  Other: {
    "small fixed blade":
      "This category includes small fixed-blade knives under 6 inches.",
    "large fixed blade":
      "This category includes large fixed-blade knives over 6 inches.",
    other:
      "Any unusual blades not covered by other categories. (handled on a case-by-case basis)",
  },
};

const gritDescriptions = {
  Standard: [
    "Four-stage progression",
    "Grit: 80, 200, 600, 5µm strop",
    "common flat apex edge (no microbevel).",
  ],
  "Standard Microbevel": [
    "Seven-stage progression",
    "Grit: 80, 200, 600 | 1500, 3000, 7000",
    "perfect balance between sharpness, edge retention, and cost.",
  ],
  /* "Refined Microbevel":
    "Nine-stage progression (80, 200, 600, 1000, 1500, 2200 | 3000, 7000)grit + 2 micron strop, creates a sharp sturdy edge approaching a mirror polish with a microbevel for improved durability.",
 */ Perfection: [
    "Nineteen-stage progression",
    "Grit: 80, 200, 600, 1000, 1500, 2200, 3000, 7000, 14K, 22K, 46K, 250K | 1500, 3000, 7000, 22K, 46K, 250K, 0.1µm strop",
    "for those chasing the most extreme edge possible. (with or without microbevel)",
  ],
  /* "Fine Serrations": "Over 6 serrations per inch.",
  "Large Serrations": "Under 6 serrations per inch.", */
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
};

const pricingMap = {
  Kitchen: {
    small: {
      recommended: "Standard Microbevel",
      good: {
        Standard: 8,
        "Standard Microbevel": 10,
        /* "Refined Microbevel": 12, */
        Perfection: 20,
      },
      /* fair: {
        Standard: 9,
        "Standard Microbevel": 11,
        "Refined Microbevel": 13,
        Perfection: 19,
      },
      poor: {
        Standard: 10,
        "Standard Microbevel": 12,
        "Refined Microbevel": 14,
        Perfection: 20,
      }, */
    },
    standard: {
      recommended: "Standard Microbevel",
      good: {
        Standard: 12,
        "Standard Microbevel": 14,
        /* "Refined Microbevel": 14, */
        Perfection: 28,
      },
      /* fair: {
        Standard: 12,
        "Standard Microbevel": 14,
        "Refined Microbevel": 16,
        Perfection: 27,
      },
      poor: {
        Standard: 14,
        "Standard Microbevel": 16,
        "Refined Microbevel": 18,
        Perfection: 29,
      }, */
    },
    specialty: {
      recommended: "Standard Microbevel",
      good: {
        Standard: 16,
        "Standard Microbevel": 18,
        /* "Refined Microbevel": 20, */
        Perfection: 36,
      },
      /* fair: {
        Standard: 18,
        "Standard Microbevel": 20,
        "Refined Microbevel": 22,
        Perfection: 36,
      },
      poor: {
        Standard: 20,
        "Standard Microbevel": 22,
        "Refined Microbevel": 24,
        Perfection: 38,
      }, */
    },
  },
  Pocket: {
    standard: {
      recommended: "Refined Microbevel",
      good: {
        Standard: 8,
        "Standard Microbevel": 10,
        /* "Refined Microbevel": 12, */
        Perfection: 20,
      },
      /* fair: {
        Standard: 10,
        "Standard Microbevel": 12,
        "Refined Microbevel": 14,
        Perfection: 22,
      },
      poor: {
        Standard: 13,
        "Standard Microbevel": 15,
        "Refined Microbevel": 17,
        Perfection: 25,
      }, */
    },
    hawkbill: {
      recommended: "Refined Microbevel",
      good: {
        Standard: 9,
        "Standard Microbevel": 11,
        /* "Refined Microbevel": 12, */
        Perfection: 24,
      },
      /* fair: {
        Standard: 11,
        "Standard Microbevel": 13,
        "Refined Microbevel": 15,
        Perfection: 23,
      },
      poor: {
        Standard: 15,
        "Standard Microbevel": 17,
        "Refined Microbevel": 19,
        Perfection: 26,
      }, */
    },
    "multi-edge": {
      recommended: "Refined Microbevel",
      good: {
        Standard: 14,
        "Standard Microbevel": 16,
        /* "Refined Microbevel": 16, */
        Perfection: 34,
      },
      /* fair: {
        Standard: 14,
        "Standard Microbevel": 16,
        "Refined Microbevel": 18,
        Perfection: 32,
      },
      poor: {
        Standard: 16,
        "Standard Microbevel": 18,
        "Refined Microbevel": 20,
        Perfection: 34,
      }, */
    },
  },
  /* Serrated: {
    recommended: "NA",
    good: {
      "Large Serrations": "10/inch",
      "Fine Serrations": "15/inch",
    },
    fair: {
      "Large Serrations": "12/inch",
      "Fine Serrations": "17/inch",
    },
    poor: {
      "Large Serrations": "14/inch",
      "Fine Serrations": "19/inch",
    },
  }, */
  Other: {
    "small fixed blade": {
      recommended: "Standard Microbevel",
      good: {
        Standard: 10,
        "Standard Microbevel": 12,
        /* "Refined Microbevel": 14, */
        Perfection: 25,
      },
      /* fair: {
        Standard: 12,
        "Standard Microbevel": 14,
        "Refined Microbevel": 16,
        Perfection: 27,
      },
      poor: {
        Standard: 14,
        "Standard Microbevel": 16,
        "Refined Microbevel": 18,
        Perfection: 29,
      }, */
    },
    "large fixed blade": {
      recommended: "Standard Microbevel",
      good: {
        Standard: 14,
        "Standard Microbevel": 16,
        /* "Refined Microbevel": 18, */
        Perfection: 36,
      },
      /* fair: {
        Standard: 16,
        "Standard Microbevel": 18,
        "Refined Microbevel": 20,
        Perfection: 34,
      },
      poor: {
        Standard: 18,
        "Standard Microbevel": 20,
        "Refined Microbevel": 22,
        Perfection: 36,
      }, */
    },
    other: {
      recommended: "Standard Microbevel",
      good: {},
      fair: {},
      poor: {},
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
  const { type, category } = userSelection;
  const pricingSection = document.getElementById("pricingResult");
  const descContainer = document.getElementById("categoryDescription");

  // Clear previous results
  pricingSection.innerHTML = "";
  if (descContainer) {
    descContainer.innerHTML = "";
  }

  // Exit early for Serrated knives
  if (type === "Serrated") {
    pricingSection.innerHTML =
      "<p>Not currently offering sharpening services on serrated knives.</p>";
    return;
  }

  // Display category description if available
  if (categoryDescriptions?.[type]?.[category.toLowerCase()]) {
    descContainer.innerHTML = `<p>${
      categoryDescriptions[type][category.toLowerCase()]
    }</p>`;
  } else {
    descContainer.innerHTML =
      "<p>No specific description available for this category.</p>";
  }

  // Get pricing options
  const pricingOptions = pricingMap?.[type]?.[category.toLowerCase()];
  if (!pricingOptions) {
    pricingSection.innerHTML = "<p>Price Not Available</p>";
    return;
  }

  // Get recommended grit
  const recommendedGrit =
    pricingMap?.[type]?.[category.toLowerCase()]?.recommended;

  // Loop through available grit options
  Object.entries(pricingOptions.good).forEach(([gritLevel, price]) => {
    const gritData = gritDescriptions[gritLevel] || [
      "",
      "",
      "No description available.",
    ];

    // Construct the full pricing entry inside a single <p> tag
    const priceEntry = document.createElement("p");
    priceEntry.classList.add("pricing-entry");

    priceEntry.innerHTML = `
    <strong class="price">$${price}</strong> ${
      gritLevel === recommendedGrit
        ? "<span class='recommended'>(Recommended)</span>"
        : ""
    }
    <br>
    <strong>${gritLevel.replace("-", " ")}:</strong>
    <span class="hover-text">${gritData[0]}<span class="tooltip">${
      gritData[1]
    }</span></span>, ${gritData[2]}
  `;

    // Append to pricing section
    pricingSection.appendChild(priceEntry);
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
