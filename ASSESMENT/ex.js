
document.addEventListener('DOMContentLoaded', function() {
    const bookingForm = document.getElementById('bookingForm');
    const bookingType = document.getElementById('bookingType');
    const timeGroup = document.getElementById('timeGroup');
    const slotGroup = document.getElementById('slotGroup');
    
    bookingType.addEventListener('change', function() {
        timeGroup.classList.add('hidden');
        slotGroup.classList.add('hidden');
        
        switch(this.value) {
            case 'full':
                break;
            case 'half':
                slotGroup.classList.remove('hidden');
                break;
            case 'hourly':
                timeGroup.classList.remove('hidden');
                break;
        }
    });
    
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;
        const people = document.getElementById('people').value;
        const date = document.getElementById('date').value;
        const bookingTypeValue = bookingType.value;
        
        if (!bookingTypeValue) {
            alert('Please select a booking type!');
            return;
        }
        
        let bookingDetails = `Booking Confirmation\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nPeople: ${people}\nDate: ${date}`;
        
        if (bookingTypeValue === 'hourly') {
            const time = document.getElementById('time').value;
            if (!time) {
                alert('Please select a time for hourly booking!');
                return;
            }
            bookingDetails += `\nBooking Type: Hourly\nTime: ${time}`;
        } 
        else if (bookingTypeValue === 'half') {
            const slot = document.getElementById('slot').value;
            bookingDetails += `\nBooking Type: Half Day\nSlot: ${slot.charAt(0).toUpperCase() + slot.slice(1)}`;
        }
        else {
            bookingDetails += '\nBooking Type: Full Day';
        }
        
        alert(bookingDetails);
        
        const confirmationMsg = document.createElement('div');
        confirmationMsg.textContent = 'Booking successful! Thank you.';
        confirmationMsg.style.color = 'green';
        confirmationMsg.style.marginTop = '15px';
        confirmationMsg.style.textAlign = 'center';
        
        bookingForm.appendChild(confirmationMsg);
        
        bookingForm.reset();
        timeGroup.classList.add('hidden');
        slotGroup.classList.add('hidden');
    });
});
