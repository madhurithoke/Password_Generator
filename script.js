function generatePassword() {
    const length = document.getElementById('length').value;
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';
    let password = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }

    document.getElementById('password').textContent = password;
}

function copyPassword() {
    const password = document.getElementById('password').textContent;
    
    if (!password) {
        alert("Generate a password first!");
        return;
    }

    navigator.clipboard.writeText(password).then(() => {
        alert("Password copied to clipboard!");
    }).catch(err => {
        alert("Failed to copy password");
    });
}