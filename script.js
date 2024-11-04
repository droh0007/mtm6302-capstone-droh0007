const $boxes = document.getElementById('boxes');

const htmlTemplate = []; // Temporary array
for (let i = 1; i <= 20; i++) {
    htmlTemplate.push(`
        <div class="box">
            <img src="images/${i}.png" alt="Image ${i}">
            <span class="box-number">${i}</span>
        </div>
    `);
}
$boxes.innerHTML += htmlTemplate.join('');
