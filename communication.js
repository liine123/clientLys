//printers IP
var baseUrl = "http://192.168.0.52";
//function to create a request
function SendRequest(method, url, serviceCall, data) {
	var request = new XMLHttpRequest();
	request.open(method, url + "/" + serviceCall);
	request.send(data);
	return request;
}

// all the commands
function Et() {
	SendRequest("GET", baseUrl, "OFF", " ");
}
function To() {
	return new Promise(function (resolve, reject) {
		var request = SendRequest("GET", baseUrl, "2", "");
		request.onload = function () {
			if (request.status == 200) {
				var result = new Uint8Array(request.response);
				resolve(result);
			}
		}
		request.onerror = reject;
	})
}
function Tre() {
	return new Promise(function (resolve, reject) {
		var request = SendRequest("GET", baseUrl, "3", "");
		request.onload = function () {
			if (request.status == 200) {
				var result = new Uint8Array(request.response);
				resolve(result);
			}
		}
		request.onerror = reject;
	})
}
function Fire() {
	return new Promise(function (resolve, reject) {
		var request = SendRequest("GET", baseUrl, "4", "");
		request.onload = function () {
			if (request.status == 200) {
				var result = new Uint8Array(request.response);
				resolve(result);
			}
		}
		request.onerror = reject;
	})
}
function Fem() {
	return new Promise(function (resolve, reject) {
		var request = SendRequest("GET", baseUrl, "5", "");
		request.onload = function () {
			if (request.status == 200) {
				var result = new Uint8Array(request.response);
				resolve(result);
			}
		}
		request.onerror = reject;
	})
}
function Seks() {
	return new Promise(function (resolve, reject) {
		var request = SendRequest("GET", baseUrl, "6", "");
		request.onload = function () {
			if (request.status == 200) {
				var result = new Uint8Array(request.response);
				resolve(result);
			}
		}
		request.onerror = reject;
	})
}
function Syv() {
	return new Promise(function (resolve, reject) {
		var request = SendRequest("GET", baseUrl, "7", "");
		request.onload = function () {
			if (request.status == 200) {
				var result = new Uint8Array(request.response);
				resolve(result);
			}
		}
		request.onerror = reject;
	})
}
function Otte() {
	return new Promise(function (resolve, reject) {
		var request = SendRequest("GET", baseUrl, "8", "");
		request.onload = function () {
			if (request.status == 200) {
				var result = new Uint8Array(request.response);
				resolve(result);
			}
		}
		request.onerror = reject;
	})
}
function Ni() {
	return new Promise(function (resolve, reject) {
		var request = SendRequest("GET", baseUrl, "9", "");
		request.onload = function () {
			if (request.status == 200) {
				var result = new Uint8Array(request.response);
				resolve(result);
			}
		}
		request.onerror = reject;
	})
}
function slider(data) {
	return new Promise(function (resolve, reject) {
		var request = SendRequest("POST", baseUrl, "10", data);
		request.onload = function () {
			if (request.status == 200) {
				var result = new Uint8Array(request.response);
				resolve(result);
			}
		}
		request.onerror = reject;
	})
}