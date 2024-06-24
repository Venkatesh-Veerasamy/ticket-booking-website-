document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.getElementById('search-form');
    const resultsContainer = document.getElementById('results-container');
    const bookingContainer = document.getElementById('booking-container');
    const confirmationMessage = document.getElementById('confirmation-message');

    if (searchForm) {
        searchForm.addEventListener('submit', function (event) {
            event.preventDefault();
            // Simulate search results
            resultsContainer.innerHTML = `
                <div>
                    <h3>Flight to Destination</h3>
                    <p>Price: $500</p>
                    <button onclick="bookService('Flight to Destination', '$500')">Book</button>
                </div>
                <div>
                    <h3>Hotel in Destination</h3>
                    <p>Price: $300</p>
                    <button onclick="bookService('Hotel in Destination', '$300')">Book</button>
                </div>
                <div>
                    <h3>Rental Car in Destination</h3>
                    <p>Price: $150</p>
                    <button onclick="bookService('Rental Car in Destination', '$150')">Book</button>
                </div>
            `;
        });
    }

    if (bookingContainer) {
        document.getElementById('confirm-booking').addEventListener('click', function () {
            confirmationMessage.innerHTML = `
                <p>Thank you! Your booking has been confirmed.</p>
            `;
        });
    }
});

function bookService(service, price) {
    localStorage.setItem('bookingDetails', JSON.stringify({ service, price }));
    window.location.href = 'booking.html';
}

document.addEventListener('DOMContentLoaded', () => {
    const bookingDetails = JSON.parse(localStorage.getItem('bookingDetails'));
    if (bookingDetails) {
        document.getElementById('booking-container').innerHTML = `
            <p>Service: ${bookingDetails.service}</p>
            <p>Price: ${bookingDetails.price}</p>
        `;
    }
});
