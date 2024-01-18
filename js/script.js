function changeOperation() {
    var operationSelect = document.getElementById("operation");
    var inputContainer = document.getElementById("inputContainer");
    var resultLabel = document.getElementById("resultLabel");

    // Reset hasil dan label
    document.getElementById("resultValue").innerText = "";

    if (operationSelect.value === "luas") {
        // Menampilkan label dan input untuk menghitung luas
        resultLabel.innerText = "Rumus Luas: s x s";
        inputContainer.innerHTML = '<label for="sideLength">Panjang Sisi:</label><input type="number" id="sideLength" required>';
    } else if (operationSelect.value === "keliling") {
        // Menampilkan label dan input untuk menghitung keliling
        resultLabel.innerText = "Rumus Keliling: 4s";
        inputContainer.innerHTML = '<label for="sideLength">Panjang Sisi:</label><input type="number" id="sideLength" required>';
    }
}

function calculate() {
    var operationSelect = document.getElementById("operation");
    var sideLength = parseFloat(document.getElementById("sideLength").value);

    if (isNaN(sideLength)) {
        alert("Panjang sisi harus berupa angka.");
        return;
    }

    var resultValue = 0;

    if (operationSelect.value === "luas") {
        resultValue = sideLength * sideLength;
    } else if (operationSelect.value === "keliling") {
        resultValue = 4 * sideLength;
    }

    document.getElementById("resultValue").innerText = resultValue;
}