document.getElementById('car-form').addEventListener('submit', function(e) {
    e.preventDefault();
    addCar();
});

let cars = [];
let editIndex = -1;

function addCar() {
    const make = document.getElementById('car-make').value;
    const model = document.getElementById('car-model').value;
    const year = document.getElementById('car-year').value;

    if (!make || !model || !year) {
        alert('Please fill out all fields.');
        return;
    }

    const car = { make, model, year };

    if (editIndex === -1) {
        cars.push(car);
    } else {
        cars[editIndex] = car;
        editIndex = -1;
    }

    document.getElementById('car-form').reset();
    renderCars();
}

function renderCars() {
    const carList = document.getElementById('car-list');
    carList.innerHTML = '';

    cars.forEach((car, index) => {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.innerHTML = `
            <span>${car.make} ${car.model} (${car.year})</span>
            <div>
                <button class="btn btn-info btn-sm" onclick="editCar(${index})">Edit</button>
                <button class="btn btn-danger btn-sm" onclick="deleteCar(${index})">Delete</button>
            </div>
        `;
        carList.appendChild(li);
    });
}

function editCar(index) {
    const car = cars[index];
    document.getElementById('car-make').value = car.make;
    document.getElementById('car-model').value = car.model;
    document.getElementById('car-year').value = car.year;
    editIndex = index;
}

function deleteCar(index) {
    cars.splice(index, 1);
    renderCars();
}
