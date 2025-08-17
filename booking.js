document.getElementById('bookingForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const form = e.target;
  const data = { name: form.name.value, email: form.email.value, address: form.address.value, unit: form.unit.value, details: form.details.value };
  try {
    const response = await fetch('https://an-inside-job-worker.pages.dev/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    if (response.ok) { document.getElementById('formMessage').innerText = 'Booking submitted successfully!'; form.reset(); } 
    else { document.getElementById('formMessage').innerText = 'Error submitting booking.'; }
  } catch (err) { document.getElementById('formMessage').innerText = 'Error submitting booking.'; console.error(err); }
});
