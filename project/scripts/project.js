const currentyear = document.querySelector("#currentyear");

const today = new Date();

currentyear.innerHTML = `<span class="currentyear">${today.getFullYear()}</span>`;

const menuButton = document.querySelector("#menu");

const navigation = document.querySelector("#navigation");


menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    menuButton.classList.toggle("open");
});


const products = [
  {
    id: "usa",
    name: "United States",
  },
  {
    id: "col",
    name: "Colombia",
  },
  {
    id: "ven",
    name: "Venezuela",
  },
  {
    id: "spa",
    name: "Spain",
  },
  {
    id: "fra",
    name: "France",
  }
];

const productSelect = document.querySelector("#product");

if (productSelect) {
    products.forEach(product => {
        const option = document.createElement("option");
        option.textContent = product.name;
        option.value = product.id;
        productSelect.appendChild(option);
    });
}

const vehicles = [
  {
    image: "images/model-one-performance.webp",
    name: "Model One Performance",
    price: "$65,999",
    year: "2026",
    status: "New"

  },
  {
    image: "images/model-one.webp",
    name: "Model One",
    price: "$62,999",
    year: "2026",
    status: "Used"
    
  },
  {
    image: "images/model-suv.webp",
    name: "Model SUV",
    price: "Starting at $73,899",
    year: "2027",
    status: "Pre-Order"

  },
  {
    image: "images/model-sedan.webp",
    name: "Model Sedan",
    price: "$53,599",
    year: "2026",
    status: "New"

  },
  {
    image: "images/model-one-performance.webp",
    name: "Model One Performance",
    price: "$65,999",
    year: "2026",
    status: "Used"

  },
  {
    image: "images/model-sedan.webp",
    name: "Model Sedan",
    price: "$53,599",
    year: "2026",
    status: "New"

  }
  
];

const vehicleList = document.querySelector(".vehicle-list");

if (vehicleList) {
  createVehicleCard(vehicles);

  const allLink = document.querySelector("#all");
  allLink.addEventListener("click", () => {
    createVehicleCard(vehicles);
  });

  const newLink = document.querySelector("#new");
  newLink.addEventListener("click", () => {
    createVehicleCard(vehicles.filter(vehicle => vehicle.status === "New"));
  });

  const usedLink = document.querySelector("#used");
  usedLink.addEventListener("click", () => {
    createVehicleCard(vehicles.filter(vehicle => vehicle.status === "Used"));
  });
}


function createVehicleCard(filteredVehicles) {
  vehicleList.innerHTML = "";
  filteredVehicles.forEach(vehicle => {
    const card = document.createElement("div");
    card.classList.add("vehicle-card");
    card.innerHTML = `
    <img src="${vehicle.image}" class="vehicle-image" alt="${vehicle.name} Vehicle Image" loading=lazy>

    <div class="vehicle-card-bottom">
    <div class="vehicle-card-info">
    <p class="name">${vehicle.name}</p>
    <p class="year">${vehicle.year} | ${vehicle.status}</p>
    <p class="price">${vehicle.price}</p>
    </div>
    <a href="#" class="vehicles-button">Order Now</a>
    </div>
    `;

    vehicleList.appendChild(card);
  })
}

const submissionCountDisplay = document.querySelector("#submission-count");

if (submissionCountDisplay) {
    let submissionCount = Number(localStorage.getItem("submissionCount")) || 0;

    submissionCount++;

    localStorage.setItem("submissionCount", submissionCount);

    submissionCountDisplay.textContent = submissionCount;
}