function formatJSON() {
    const input = document.getElementById('jsonInput').value;
    const output = document.getElementById('jsonOutput');
    try {
        const formatted = JSON.stringify(JSON.parse(input), null, 4);
        output.textContent = formatted;
        output.style.color = "black";
    } catch (e) {
        output.textContent = "Помилка: Невірний формат JSON";
        output.style.color = "red";
    }
}
