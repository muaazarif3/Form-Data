
document.addEventListener("DOMContentLoaded", function () {
  const saveButton = document.getElementById("saveButton");
  const downloadButton = document.getElementById("downloadButton");
  let storedData = [];

  saveButton.addEventListener("click", function () {
    const dataInputs = document.querySelectorAll("#namedata");
    const dataEntry = {};

    dataInputs.forEach(input => {
      const key = input.name;
      const value = input.value;
      dataEntry[key] = value;
    });

    storedData.push(dataEntry);
    localStorage.setItem("data", JSON.stringify(storedData));

    console.log("Data saved in local storage:", storedData);
  });

  downloadButton.addEventListener("click", function () {
    const data = localStorage.getItem("data");
    if (data) {
      const formattedData = JSON.stringify(JSON.parse(data), null, 2);
      const blob = new Blob([formattedData], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "data.json";
      a.click();
      URL.revokeObjectURL(url);
    }
  });
});
