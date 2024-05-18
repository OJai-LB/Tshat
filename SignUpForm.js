document.addEventListener("DOMContentLoaded", function() {
    const signupForm = document.getElementById("signupForm")
    const countryCodeInput = document.getElementById("countryCode")
    const phoneNumberInput = document.getElementById("phoneNumber")
    const passwordInput = document.getElementById('password')
    const cpasswordInput = document.getElementById('cpassword')





    // Function to validate the username
    function validateUsername(username) {
        // Check if the username has at least 3 characters
        if (username.length < 3) {
            alert("Username must be at least 3 characters long.");
            return false; // Return false to indicate validation failure
        }

        // Updated username validation criteria
        const lettersOnly = /^[a-zA-Z]+$/;
        const prohibitedWords = ['curse', 'badword', 'bodypart', 'sex', 'female', 'male', 'penis', 'dick', 'boobs', 'intercourse', 'anal', 'boobies', 'ass', 'butt', 'fuck', 'fucking', 'kis', 'love', 'sax', 'bitch', 'milf', 'vagina', 'pussy', 'clit', 'nipple', 'orgasm', 'masturbate', 'ejaculate', 'erection', 'porn', 'erotic', 'nude', 'naked', 'sexy', 'horny', 'sperm', 'cum', 'cock', 'whore', 'slut', 'prostitute', 'faggot', 'cunt', 'shit', 'crap', 'damn', 'hell', 'bastard', 'suck', 'douche', 'jerk', 'wank'];

        if (!lettersOnly.test(username)) {
            alert("Username can only contain English letters without spaces.");
            return false; // Return false to indicate validation failure
        }

        if (prohibitedWords.some(word => username.toLowerCase().includes(word))) {
            alert("Username cannot contain prohibited words.");
            return false; // Return false to indicate validation failure
        }

        // Return true to indicate validation success
        return true;
    }
    // Function to validate the phone number length based on the selected country code
    function validatePhoneNumber(phoneNumber) {
        const countryCode = countryCodeInput.value;
    
        // Object to store phone number lengths for each country
        const phoneNumberLengths = {
            "DZ": 10, // Algeria
            "BH": 8,  // Bahrain
            "DJ": 8,  // Djibouti
            "EG": 11, // Egypt
            "IQ": 10, // Iraq
            "JO": 9,  // Jordan
            "LB": 8,  // Lebanon
            "LY": 9,  // Libya
            "MA": 10, // Morocco
            "OM": 8,  // Oman
            "PS": 9,  // Palestine
            "QA": 8,  // Qatar
            "SA": 9,  // Saudi Arabia
            "SD": 9,  // Sudan
            "SY": 9,  // Syria
            "TN": 8,  // Tunisia
            "AE": 9,  // United Arab Emirates
            "YE": 9   // Yemen
            // Add more countries and their phone number lengths here
        };
    
        // Get the length limit based on the selected country code
        const lengthLimit = phoneNumberLengths[countryCode];
    
        // Set the maximum length of the phone number input field
        phoneNumberInput.maxLength = lengthLimit;
    
        // Check if the phone number length exceeds the limit
        if (phoneNumber.length !== lengthLimit) {
            return `Phone number must be ${lengthLimit} digits long for the selected country.`;
        }
    
        return "Valid";
    }
    // Function to lock/unlock phone number input field based on country selection
    function togglePhoneNumberField() {
        if (countryCodeInput.value === "") {
            phoneNumberInput.disabled = true;
        } else {
            phoneNumberInput.disabled = false;
        }
    }
    // Function to validate password input
    function validatePassword(password) {
        // Check if the password has at least 8 characters
        if (password.length < 8) {
            alert("Password must be at least 8 characters long.");
            return false; // Return false to indicate validation failure
        }

        // Check if the password contains any spaces
        if (password.includes(" ")) {
            alert("Password cannot contain spaces.");
            return false; // Return false to indicate validation failure
        }

        // Return true to indicate validation success
        return true;
    }
    // Function to validate match of passwords
    function validateConfirmPassword(password, cpassword) {
        // Check if the confirm password matches the password
        if (password !== cpassword) {
            alert("Passwords do not match.");
            return false; // Return false to indicate validation failure
        }

        // Return true to indicate validation success
        return true;
    }
    // Function to check if all functions give valid
    function submitForm() {
        const usernameInput = document.getElementById("username")
        const username = usernameInput.value.trim()
        const phoneNumber = phoneNumberInput.value.trim()
        const password = passwordInput.value
        const cpassword = cpasswordInput.value
    
        // Validate the username
        const isUsernameValid = validateUsername(username);
        if (!isUsernameValid) {
            alert("Invalid username. Please enter a valid username.");
            usernameInput.value = ""; // Clear the username input
            return;
        }


    // Validate if phone number contains only digits
        if (!/^\d*$/.test(phoneNumber)) {
            alert("Phone number must contain only digits.");
            phoneNumberInput.value = ""; // Clear the phone number input
            return;
        }

    // Validate the phone number length based on the selected country code
        const phoneNumberValidationResult = validatePhoneNumber(phoneNumber);
        if (phoneNumberValidationResult !== "Valid") {
            alert(phoneNumberValidationResult);
            phoneNumberInput.value = ""; // Clear the phone number input
            return;
         }

    // Validates Passwords
        const isPasswordValid = validatePassword(password)
        const isCpasswordValid = validateConfirmPassword(password,cpassword)  
        
        if (!isPasswordValid){
            return
        }
        else if(!isCpasswordValid){
            return
        }

    }




    

    // Prevent form submission and validate inputs on submit
    signupForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission
        submitForm(); // Call function to validate and submit form
    });

    // Event listener for country code change
    countryCodeInput.addEventListener("change", function() {
        validatePhoneNumber(phoneNumberInput.value.trim());
        togglePhoneNumberField(); // Call function to toggle phone number input field
    });

    // Event listener for phone number change
    phoneNumberInput.addEventListener("input", function() {
        validatePhoneNumber(phoneNumberInput.value.trim());
    });

    // Initial call to toggle phone number input field
    togglePhoneNumberField();
});
