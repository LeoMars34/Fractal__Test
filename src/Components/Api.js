export async function sendProfile(formData) {
    try {
        let response = await fetch(``, {
            headers: {
                AUTHORIZATION: 'application/json',
            },
            body: formData,
            method: 'POST',
        });
        return await response.json();
    } catch (error) {
        return alert(error.message);
    }
}
