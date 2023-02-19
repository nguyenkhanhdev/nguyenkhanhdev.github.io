
	function loadUrl() {
		var url = document.getElementById("url").value;
		var xhr = new XMLHttpRequest();
		xhr.open("GET", url);
		xhr.onreadystatechange = function() {
			if (xhr.readyState === 4) {
				document.getElementById("content").innerHTML = xhr.responseText;
			}
		};
		xhr.send();
	}

