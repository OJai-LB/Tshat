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
    const endChatButton = document.getElementById("end-chat");

    endChatButton.addEventListener("click", function() {
        // Show the modal
        const endChatModal = document.getElementById("endChatModal");
        endChatModal.classList.remove("hidden");
    });

    // Add event listener to the "Confirm End Chat" button
    const confirmEndChatButton = document.getElementById("confirmEndChat");

    confirmEndChatButton.addEventListener("click", function() {
        // Redirect to SignInForm
        window.location.href = "SignInForm.html";
    });

    // Add event listener to the "Cancel" button in the modal
    const cancelEndChatButton = document.getElementById("cancelEndChat");

    cancelEndChatButton.addEventListener("click", function() {
        // Hide the modal
        const endChatModal = document.getElementById("endChatModal");
        endChatModal.classList.add("hidden");
    });
});

/* Message sending with current time */
document.addEventListener("DOMContentLoaded", function() {
    const sendMessageBtn = document.getElementById("sendMessageBtn");
    const messageInput = document.getElementById("messageInput");
    const messageContainer = document.getElementById("messageContainer");

    // Function to get the current time
    function getCurrentTime() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        return `${hours}:${minutes}`;
    }

    // Function to send a message
    function sendMessage() {
        const messageText = messageInput.value.trim();
        if (messageText === "") {
            return; // Don't send empty messages
        }

        // Create a new message element
        const messageElement = document.createElement("div");
        messageElement.classList.add("flex", "items-start", "gap-2.5", "float-right");

        messageElement.innerHTML = `
        <div class="flex flex-col w-full max-w-[620px] leading-1.5 p-4 bg-[#14de9e] rounded-tl-xl rounded-bl-xl rounded-br-xl rounded-tr-none dark:bg-[#3cd6a5]">
            <span class="text-xs flex justify-end  font-normal text-[#0b7d59] dark:text-[#247d61]">${getCurrentTime()}</span>
            <p class="text-sm font-normal py-2.5 text-white dark:text-[#212121]">${messageText}</p>
            <span class="text-xs flex justify-end font-normal text-[#0b7d59] dark:text-[#247d61]">Delivered</span>
        </div>
        `;

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
