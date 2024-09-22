<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Redirect Tool</title>
	<link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet">
	<link rel="stylesheet" href="style.css">
</head>
<body>
	<div class="container">
		<h1 class="title">Redirect Tool</h1>
		<form>
			<label for="url-input">Enter a URL:</label>
			<input type="text" id="url-input" name="url-input" required>
			<button type="submit" id="submit-btn">Redirect</button>
			<button type="button" id="appsButton">Apps</button>
		</form>
	</div>

	<!-- Modal for Apps Section -->
	<div id="appsModal" class="modal" style="display:none; position:fixed; z-index:1; left:0; top:0; width:100%; height:100%; background-color:rgba(0,0,0,0.5); padding-top:60px;">
		<div class="modal-content" style="background-color:#fefefe; margin:5% auto; padding:20px; border:1px solid #888; width:80%; max-width:500px;">
			<span class="close" style="color:#aaa; float:right; font-size:28px; font-weight:bold;">&times;</span>
			<h2>Apps</h2>
			<p><strong>1. Google Analytics</strong></p>
			<ul>
				<li>Track performance and analyze traffic.</li>
			</ul>
			<p><strong>2. Zapier</strong></p>
			<ul>
				<li>Automate workflows with over 3,000 apps.</li>
			</ul>
			<p><strong>3. Mailchimp</strong></p>
			<ul>
				<li>Integrate with email campaigns for better targeting.</li>
			</ul>
			<!-- Add more apps as needed -->
		</div>
	</div>

	<script src="script.js"></script>
	<script>
		// Modal functionality
		const appsButton = document.getElementById('appsButton');
		const appsModal = document.getElementById('appsModal');
		const closeModal = document.querySelector('.close');

		appsButton.onclick = function() {
			appsModal.style.display = "block";
		}

		closeModal.onclick = function() {
			appsModal.style.display = "none";
		}

		window.onclick = function(event) {
			if (event.target === appsModal) {
				appsModal.style.display = "none";
			}
		}
	</script>
</body>
</html>
