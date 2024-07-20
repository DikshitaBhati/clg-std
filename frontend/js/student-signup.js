const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

// Signup Form Handling
document.getElementById('signupForm')?.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            set(ref(db, 'students/' + user.uid), {
                name: name,
                email: email
            });
            alert('Signup successful!');
            // Redirect to login or dashboard page if needed
        })
        .catch((error) => {
            alert('Error: ' + error.message);
        });
});