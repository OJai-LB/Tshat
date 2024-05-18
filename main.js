
document.addEventListener("DOMContentLoaded", function() {
    const dropdownBtn = document.querySelector(".dropbtn");
    const dropdownContent = document.querySelector(".dropdown-content");
    const dropdownContainer = document.querySelector(".dropdown");

    dropdownBtn.addEventListener("click", function() {
        dropdownContent.classList.toggle("hidden");
    });

    dropdownBtn.addEventListener("mouseenter", function() {
        dropdownContent.classList.remove("hidden");
    });

    dropdownContainer.addEventListener("mouseleave", function() { 
        dropdownContent.classList.add("hidden");
    });

    // Retrieve username from local storage
    const username = localStorage.getItem("username");

    // Update right user section with the retrieved username
    const rightUserName = document.querySelector(".right-user-name");
    if (rightUserName) {
        rightUserName.textContent = username;
    }
});


document.addEventListener("DOMContentLoaded", function() {
    const dropdownIcon = document.getElementById("dropdownIcon");
    const body = document.body;

    // Function to detect preferred color scheme
    function detectColorScheme() {
        const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        return isDarkMode ? 'dark' : 'light';
    }

    // Function to update icon and background image based on color scheme
    function updateIconAndBackground() {
        const colorScheme = detectColorScheme();
        const iconSrc = colorScheme === 'dark' ? 'Media/Icons/caret-down-dark.svg' : 'Media/Icons/caret-down-light.svg';
        const bgImage = colorScheme === 'dark' ? 'url(Media/Background/Dark-Bg.png)' : 'url(Media/Background/Light-Bg.png)';
        
        dropdownIcon.src = iconSrc;
        body.style.backgroundImage = bgImage;
    }

    // Update icon and background initially
    updateIconAndBackground();

    // Update icon and background when color scheme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateIconAndBackground);
});

/* Color Mode Change */

document.addEventListener("DOMContentLoaded", function() {
    // Add event listener to the color mode button
    document.getElementById("color-mode").addEventListener("click", function() {
        console.log("Color mode pressed");

        // Toggle dark mode class on the <html> element
        document.documentElement.classList.toggle("dark");

        // Toggle button text
        const darkModeButton = document.getElementById("color-mode");
        if (document.documentElement.classList.contains("dark")) {
            darkModeButton.textContent = "Light Mode";
        } else {
            darkModeButton.textContent = "Dark Mode";
        }
    });
});


/* End Chat */

document.addEventListener("DOMContentLoaded", function() {
    // Add event listener to the "End Chat" button
    document.getElementById("end-chat").addEventListener("click", function() {
        // Redirect to userform.html
        window.location.href = "userform.html";
    });
});


/* Message sending static*/

document.addEventListener("DOMContentLoaded", function() {
    const sendMessageBtn = document.getElementById("sendMessageBtn");
    const messageInput = document.getElementById("messageInput");
    const messageContainer = document.getElementById("messageContainer");

    // Function to send a message
    function sendMessage() {
        const messageText = messageInput.value.trim();
        if (messageText === "") {
            return; // Don't send empty messages
        }

        // Create a new message element
        const messageElement = document.createElement("div");
   
        messageElement.classList.add("bg-[#14de9e]", "dark:bg-[#3cd6a5]","float-right", "text-white", "px-4", "py-2", "rounded-lg", "mb-4");

        messageElement.textContent = messageText;

        // Append the message to the message container
        messageContainer.appendChild(messageElement);

        // Scroll to the bottom of the message container
        messageContainer.scrollTop = messageContainer.scrollHeight;

        // Clear the message input
        messageInput.value = "";
    }

    // Event listener for the send message button
    sendMessageBtn.addEventListener("click", function() {
        sendMessage();
    });

    // Event listener for pressing Enter key in the message input
    messageInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            sendMessage();
        }
    });
});
