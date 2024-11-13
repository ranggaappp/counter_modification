// Get elements
const value = document.querySelector("#value");
const itemNameInput = document.querySelector("#item-name");
const btnIncrease = document.querySelector(".increase");
const btnDecrease = document.querySelector(".decrease");
const btnReset = document.querySelector(".reset");

// Retrieve inventory data from localStorage or set default values
let inventory = JSON.parse(localStorage.getItem("inventory")) || { name: "Item", quantity: 0 };

// Function to update the inventory display and localStorage
function updateInventory() {
  value.textContent = inventory.quantity;
  itemNameInput.value = inventory.name; // Display item name from inventory

  // Save updated inventory data to localStorage
  localStorage.setItem("inventory", JSON.stringify(inventory));

  // Disable buttons based on inventory count
  btnDecrease.disabled = inventory.quantity <= 0;
  btnIncrease.disabled = inventory.quantity >= 500; // Limit maximum to 500 items
}

// Event listener to handle input changes for the item name
itemNameInput.addEventListener("input", function () {
  inventory.name = itemNameInput.value.trim() || "Item"; // Update item name, default to "Item"
  updateInventory();
});

// Add item to inventory
btnIncrease.addEventListener("click", function () {
  inventory.quantity++;
  updateInventory();
});

// Remove item from inventory
btnDecrease.addEventListener("click", function () {
  if (inventory.quantity > 0) {
    inventory.quantity--;
    updateInventory();
  }
});

// Reset inventory to zero
btnReset.addEventListener("click", function () {
  inventory.quantity = 0;
  updateInventory();
});

// Initialize display with current inventory data
updateInventory();
