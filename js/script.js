function addToGridView() {
    const dropdown = document.getElementById("countryDropdown");
    const selectedCountry = dropdown.value;
    const gridView = document.getElementById("gridView");
  
    if (selectedCountry) {
      const gridItem = document.createElement("div");
      gridItem.className = "grid-item";
  
      const countryName = document.createElement("span");
      countryName.textContent = selectedCountry;
  
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.className = "delete-button";
      deleteButton.onclick = function () {
        gridView.removeChild(gridItem);
      };
  
      const editButton = document.createElement("button");
      editButton.textContent = "Edit";
      editButton.className = "edit-button";
      editButton.onclick = function () {
        const newName = prompt("Enter new country name:", selectedCountry);
        if (newName) {
          countryName.textContent = newName;
        }
      };
  
      gridItem.appendChild(countryName);
      gridItem.appendChild(deleteButton);
      gridItem.appendChild(editButton);
  
      gridView.appendChild(gridItem);
    }
  }
  