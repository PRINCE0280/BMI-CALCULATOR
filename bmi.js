const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseFloat(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if (!height || height < 0 || isNaN(height)) {
        results.innerHTML = `<span style="color: red;">Please enter a valid height.</span>`;
    } else if (!weight || weight < 0 || isNaN(weight)) {
        results.innerHTML = `<span style="color: red;">Please enter a valid weight.</span>`;
    } else {
        // Calculate BMI
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        
        // Determine BMI category
        let message;
        const paragraphs = document.getElementsByTagName('p');
        
        if (bmi < 18.6) {
            message = paragraphs.length > 2 ? paragraphs[2].textContent : 'Underweight';
        } else if (bmi >= 18.6 && bmi <= 24.9) {
            message = paragraphs.length > 3 ? paragraphs[3].textContent : 'Normal weight';
        } else {
            message = paragraphs.length > 4 ? paragraphs[4].textContent : 'Overweight';
        }
        document.getElementById("reset").addEventListener("click", function() {
            document.getElementById("height").value = "";
            document.getElementById("weight").value = "";
            document.getElementById("results").innerHTML = "";
        });
        
        
        // Show the result
        results.innerHTML = `<span>Your BMI is: ${bmi}</span><br><strong>${message}</strong>`;
    }
});
