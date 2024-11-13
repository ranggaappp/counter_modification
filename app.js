// Get elements
const value = document.querySelector("#value");
const itemNameInput = document.querySelector("#item-name");
const btnIncrease = document.querySelector(".increase");
const btnDecrease = document.querySelector(".decrease");
const btnReset = document.querySelector(".reset");
const btnAddToList = document.querySelector(".add-to-list"); // New button
const itemList = document.querySelector("#item-list");

// Retrieve inventory data from localStorage or set default values
let inventory = JSON.parse(localStorage.getItem("inventory")) || { name: "", quantity: 0 };
let addedItems = JSON.parse(localStorage.getItem("addedItems")) || []; // To store the added items

// Function to update the inventory display and localStorage
function updateInventory() {
  value.textContent = inventory.quantity;
  itemNameInput.value = inventory.name || ""; // Display item name from inventory, default to empty string

  // Save updated inventory data to localStorage
  localStorage.setItem("inventory", JSON.stringify(inventory));

  // Disable buttons based on inventory count
  btnDecrease.disabled = inventory.quantity <= 0;
  btnIncrease.disabled = inventory.quantity >= 100; // Limit maximum to 100 items
}

// Function to update the item list display
function updateItemList() {
  itemList.innerHTML = ""; // Clear existing list

  // Add each item in the addedItems array to the list
  addedItems.forEach(item => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `<span>${item.name}</span><span class="quantity"> Quantity: ${item.quantity}</span>`;
    itemList.appendChild(listItem);
  });
}

// Event listener to handle input changes for the item name
itemNameInput.addEventListener("input", function () {
  inventory.name = itemNameInput.value.trim() || ""; // Update item name, default to empty string
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

// Reset inventory to zero and remove all items from the list
btnReset.addEventListener("click", function () {
  inventory.quantity = 0;
  inventory.name = ""; // Reset item name as well
  addedItems = []; // Clear the item list
  localStorage.setItem("addedItems", JSON.stringify(addedItems)); // Save the empty list to localStorage
  updateInventory();
  updateItemList(); // Update the list display
});

// Add item to the added items list
btnAddToList.addEventListener("click", function () {
  if (inventory.name && inventory.quantity > 0) {
    // Add item to addedItems array
    addedItems.push({ name: inventory.name, quantity: inventory.quantity });
    localStorage.setItem("addedItems", JSON.stringify(addedItems));

    // Clear the inventory after adding
    inventory.quantity = 0;
    inventory.name = "";
    updateInventory();
    updateItemList();
  } else {
    alert("Please provide a valid item name and quantity.");
  }
});

// Initialize display with current inventory data
updateInventory();
updateItemList();
