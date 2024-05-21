<?php
$servername = "localhost";
$username = "root"; 
$password = ""; 
$dbname = "tshat"; 

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = mysqli_real_escape_string($conn, $_POST['username']);
    $password = password_hash($_POST['password'], PASSWORD_BCRYPT); 
    $countryCode = mysqli_real_escape_string($conn, $_POST['countryCode']);
    $phoneNumber = mysqli_real_escape_string($conn, $_POST['phoneNumber']);

    $stmt = $conn->prepare("INSERT INTO sign_up_info (username, password, countryCode, phoneNumber) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssss", $username, $password, $countryCode, $phoneNumber);

    if ($stmt->execute()) {
        header("Location: signup_success.php"); // Redirect to a success page
        exit();
    } else {
        // Log the error for debugging
        error_log("Error: " . $stmt->error);
        // Display a generic error message to the user
        echo "Oops! Something went wrong. Please try again later.";
    }

    $stmt->close();
    $conn->close();
}
?>
