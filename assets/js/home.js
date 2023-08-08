const formId = document.getElementById("create-contact");
const userName = document.getElementById("name");
const phone = document.getElementById("phone");
formId.addEventListener('submit', async (e) => {
    e.preventDefault();
    const contact = {
        name: userName.value,
        phone: phone.value
    };
    try {
        const response = await fetch("/create-contact", {
            method: "POST",
            body: JSON.stringify(contact),
            headers: {
                'Content-Type': 'application/json' // Set the appropriate content type
            }
        });
        if (response.ok) {
            // Handle successful response here
            await fetch("/")
        } else {
            // Handle error response here
            console.error('Error creating contact');
        }
    } catch (error) {
        // Handle network or other errors here
        console.error('An error occurred:', error);
    }
});
