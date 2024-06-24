
document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.getElementById('search-form');
    const resultsContainer = document.getElementById('results-container');
    const bookingContainer = document.getElementById('booking-container');
    const confirmationMessage = document.getElementById('confirmation-message');

    if (searchForm) {
        searchForm.addEventListener('submit', function (event) {
            event.preventDefault();
        });
    }

    if (resultsContainer) {
        const searchParams = new URLSearchParams(window.location.search);
        const serviceType = searchParams.get('service');
        if (serviceType === 'flights') {
            resultsContainer.innerHTML = `
                <div>
                    <h3>Flight to Destination</h3>
                    <p>Price: $500</p>
                    <button onclick="bookService('Flight to Destination', '$500')">Book</button>
                </div>
                <!-- Add more flight results here -->
            `;
        } else if (serviceType === 'hotels') {
            resultsContainer.innerHTML = `
                <div>
                    <h3>Hotel in Destination</h3>
                    <p>Price: $300</p>
                    <button onclick="bookService('Hotel in Destination', '$300')">Book</button>
                </div>
                <!-- Add more hotel results here -->
            `;
        } else if (serviceType === 'cars') {
            resultsContainer.innerHTML = `
                <div>
                    <h3>Rental Car in Destination</h3>
                    <p>Price: $150</p>
                    <button onclick="bookService('Rental Car in Destination', '$150')">Book</button>
                </div>
                <!-- Add more car results here -->
            `;
        }
    }

    if (bookingContainer) {
        document.getElementById('confirm-booking').addEventListener('click', function () {
            confirmationMessage.innerHTML = `
                <p>Thank you! Your booking has been confirmed.</p>
            `;
        });
    }

    const bookingDetails = JSON.parse(localStorage.getItem('bookingDetails'));
    if (bookingDetails && bookingContainer) {
        bookingContainer.innerHTML = `
            <p>Service: ${bookingDetails.service}</p>
            <p>Price: ${bookingDetails.price}</p>
        `;
    }
});

function searchService(service) {
    const destination = document.getElementById('destination').value;
    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;

    if (!destination || !checkin || !checkout) {
        alert('Please fill out all fields');
        return;
    }

    window.location.href = `${service}.html?destination=${destination}&checkin=${checkin}&checkout=${checkout}`;
}

function bookService(service, price) {
    localStorage.setItem('bookingDetails', JSON.stringify({ service, price }));
    window.location.href = 'booking.html';
}

