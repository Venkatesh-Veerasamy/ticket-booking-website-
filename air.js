// air.js

const bookingForm = document.getElementById('bookingForm');
const flightList = document.getElementById('flight-list');
const bookFlightBtn = document.getElementById('book-flight-btn');
const bookingDetails = document.getElementById('booking-details');
const confirmBookingBtn = document.getElementById('confirm-booking-btn');

let selectedFlight = null;

bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const from = document.getElementById('from').value.trim();
    const to = document.getElementById('to').value.trim();
    const departure = document.getElementById('departure').value;
    const returnDate = document.getElementById('return').value;

    // Call API or database to retrieve available flights
    const availableFlights = [
        {
            flightNumber: 'DA101',
            departureTime: '08:00 AM',
            arrivalTime: '10:00 AM',
            price: '$100'
        },
        {
            flightNumber: 'DA102',
            departureTime: '12:00 PM',
            arrivalTime: '02:00 PM',
            price: '$120'
        },
        // Add more flights here
    ];

    // Display available flights
    flightList.innerHTML = '';
    availableFlights.forEach((flight) => {
        const flightHTML = `
            <li>
                <span>Flight ${flight.flightNumber}</span>
                <span>Departure: ${flight.departureTime}</span>
                <span>Arrival: ${flight.arrivalTime}</span>
                <span>Price: ${flight.price}</span>
                <button type="button" onclick="selectFlight('${flight.flightNumber}')">Select</button>
            </li>
        `;
        flightList.innerHTML += flightHTML;
    });
});

function selectFlight(flightNumber) {
    const flights = flightList.children;
    for (let i = 0; i < flights.length; i++) {
        flights[i].classList.remove('selected');
    }
    const selectedFlightElement = document.querySelector(`li:contains(${flightNumber})`);
    selectedFlightElement.classList.add('selected');
    selectedFlight = selectedFlightElement;
    bookFlightBtn.disabled = false;
}

bookFlightBtn.addEventListener('click', () => {
    if (selectedFlight) {
        const flightNumber = selectedFlight.querySelector('span:first-child').textContent;
        const departureTime = selectedFlight.querySelector('span:nth-child(2)').textContent;
        const arrivalTime = selectedFlight.querySelector('span:nth-child(3)').textContent;
        const price = selectedFlight.querySelector('span:nth-child(4)').textContent;

        bookingDetails.style.display = 'block';
        document.getElementById('flight-number').textContent = `Flight Number: ${flightNumber}`;
        document.getElementById('departure-time').textContent = `Departure Time: ${departureTime}`;
        document.getElementById('arrival-time').textContent = `Arrival Time: ${arrivalTime}`;
        document.getElementById('price').textContent = `Price: ${price}`;
    }
});

confirmBookingBtn.addEventListener('click', () => {
    // Call API or database to book the flight
    console.log('Flight booked successfully!');
    bookingDetails.style.display = 'none';
});