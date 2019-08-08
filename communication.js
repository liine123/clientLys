//printers IP
var baseUrl = "http://10.0.0.115";
//function to create a request
function SendRequest(method, url, serviceCall, data) {
	var request = new XMLHttpRequest();
	request.open(method, url + "/" + serviceCall);
	request.responseType = "arraybuffer";
	request.send(data);
	return request;
}
// all the commands
function MainMenuIN() {
	return new Promise(function (resolve, reject) {
		var request = SendRequest("GET", baseUrl, "MainMenuIN", "");
		request.onload = function () {
			if (request.status == 200) {
				var result = new Uint8Array(request.response);
				resolve(result);
			}
		}
		request.onerror = reject;
	})
}
function getErrorCode() {
	return new Promise(function (resolve, reject) {
		var request = SendRequest("GET", baseUrl, "getErrorCode", "");
		request.onload = function () {
			if (request.status == 200) {
				var result = new Uint8Array(request.response);
				resolve(result);
			}
		}
		request.onerror = reject;
	})
}
function getWarningCode() {
	return new Promise(function (resolve, reject) {
		var request = SendRequest("GET", baseUrl, "getWarningCode", "");
		request.onload = function () {
			if (request.status == 200) {
				var result = new Uint8Array(request.response);
				resolve(result);
			}
		}
		request.onerror = reject;
	})
}
function getInfoCode() {
	return new Promise(function (resolve, reject) {
		var request = SendRequest("GET", baseUrl, "getInfoCode", "");
		request.onload = function () {
			if (request.status == 200) {
				var result = new Uint8Array(request.response);
				resolve(result);
			}
		}
		request.onerror = reject;
	})
}
function getSelectedSystem() {//not used
	return new Promise(function (resolve, reject) {
		var request = SendRequest("GET", baseUrl, "getSelectedSystem", "");
		request.onload = function () {
			if (request.status == 200) {
				var result = new Uint8Array(request.response);
				resolve(result);
			}
		}
		request.onerror = reject;
	})
}
function getImageFromFile() {//not used
	return new Promise(function (resolve, reject) {
		var request = SendRequest("GET", baseUrl, "getImageFromFile", "");
		request.onload = function () {
			if (request.status == 200) {
				var result = new Uint8Array(request.response);
				resolve(result);
			}
		}
		request.onerror = reject;
	})
}
function ResetErrorCode() {
	SendRequest("GET", baseUrl, "resetErrorCode", "");
}
function ResetWarningCode() {
	SendRequest("GET", baseUrl, "resetWarningCode", "");
}
function ResetInfoCode() {
	SendRequest("GET", baseUrl, "resetInfoCode", "");
}
function FileSelectIN() {
	return new Promise(function (resolve, reject) {
		var request = SendRequest("GET", baseUrl, "FileSelectIN", "");
		request.onload = function () {
			if (request.status == 200) {
				var result = new Uint8Array(request.response);
				resolve(result);
			}
		}
		request.onerror = reject;
	})
}
function FileSelectOUT() {
	return new Promise(function (resolve, reject) {
		var request = SendRequest("GET", baseUrl, "FileSelectOUT", "");
		request.onload = function () {
			if (request.status == 200) {
				var result = new Uint8Array(request.response);
				resolve(result);
			}
		}
		request.onerror = reject;
	})
}
function FileSelectGetItemsList(data) {
	return new Promise(function (resolve, reject) {
		var request = SendRequest("POST", baseUrl, "FileSelectGetItemsList", data);
		request.onload = function () {
			if (request.status == 200) {
				var result = new Uint8Array(request.response);
				resolve(result);
			}
		}
		request.onerror = reject;
	})
}
function FileSelectPickPrintFile(data) {
	return new Promise(function (resolve, reject) {
		var request = SendRequest("POST", baseUrl, "FileSelectPickPrintFile", data);
		request.onload = function () {
			if (request.status == 200) {
				var result = new Uint8Array(request.response);
				resolve(result);
			}
		}
		request.onerror = reject;
	})
}
function FileSelectGetDevicesList() {
	return new Promise(function (resolve, reject) {
		var request = SendRequest("GET", baseUrl, "FileSelectGetDevicesList", "");
		request.onload = function () {
			if (request.status == 200) {
				var result = new Uint8Array(request.response);
				resolve(result);
			}
		}
		request.onerror = reject;
	})
}
function PrintIN() {
	return new Promise(function (resolve, reject) {
		var request = SendRequest("GET", baseUrl, "PrintIN", "");
		request.onload = function () {
			if (request.status == 200) {
				var result = new Uint8Array(request.response);
				resolve(result);
			}
		}
		request.onerror = reject;
	})
}
function PrintOUT() {
	return new Promise(function (resolve, reject) {
		var request = SendRequest("GET", baseUrl, "PrintOUT", "");
		request.onload = function () {
			if (request.status == 200) {
				var result = new Uint8Array(request.response);
				resolve(result);
			}
		}
		request.onerror = reject;
	})
}
function PrintGetRemainingTime() {
	return new Promise(function (resolve, reject) {
		var request = SendRequest("GET", baseUrl, "PrintGetRemainingTime", "");
		request.onload = function () {
			if (request.status == 200) {
				var result = new Uint8Array(request.response);
				resolve(result);
			}
		}
		request.onerror = reject;
	})
}
function PrintGetPauseState() {
	return new Promise(function (resolve, reject) {
		var request = SendRequest("GET", baseUrl, "PrintGetPauseState", "");
		request.onload = function () {
			if (request.status == 200) {
				var result = new Uint8Array(request.response);
				resolve(result);
			}
		}
		request.onerror = reject;
	})
}
function PrintGetPrinterState() {
	return new Promise(function (resolve, reject) {
		var request = SendRequest("GET", baseUrl, "PrintGetPrinterState", "");
		request.onload = function () {
			if (request.status == 200) {
				var result = new Uint8Array(request.response);
				resolve(result);
			}
		}
		request.onerror = reject;
	})
}
function PrintPause() {
	return new Promise(function (resolve, reject) {
		var request = SendRequest("GET", baseUrl, "PrintPause", "");
		request.onload = function () {
			if (request.status == 200) {
				var result = new Uint8Array(request.response);
				resolve(result);
			}
		}
		request.onerror = reject;
	})
}
function PrintCancel() {
	return new Promise(function (resolve, reject) {
		var request = SendRequest("GET", baseUrl, "PrintCancel", "");
		request.onload = function () {
			if (request.status == 200) {
				var result = new Uint8Array(request.response);
				resolve(result);
			}
		}
		request.onerror = reject;
	})
}
function PrintPauseResume() {
	return new Promise(function (resolve, reject) {
		var request = SendRequest("GET", baseUrl, "PrintPauseResume", "");
		request.onload = function () {
			if (request.status == 200) {
				var result = new Uint8Array(request.response);
				resolve(result);
			}
		}
		request.onerror = reject;
	})
}
function PrintReprintPossible() {
	return new Promise(function (resolve, reject) {
		var request = SendRequest("GET", baseUrl, "PrintReprintPossible", "");
		request.onload = function () {
			if (request.status == 200) {
				var result = new Uint8Array(request.response);
				resolve(result);
			}
		}
		request.onerror = reject;
	})
}
function PrintReprint() {
	return new Promise(function (resolve, reject) {
		var request = SendRequest("GET", baseUrl, "PrintReprint", "");
		request.onload = function () {
			if (request.status == 200) {
				var result = new Uint8Array(request.response);
				resolve(result);
			}
		}
		request.onerror = reject;
	})
}
function PrintGetElapsedTime() {//not used
	return new Promise(function (resolve, reject) {
		var request = SendRequest("GET", baseUrl, "PrintGetElapsedTime", "");
		request.onload = function () {
			if (request.status == 200) {
				var result = new Uint8Array(request.response);
				resolve(result);
			}
		}
		request.onerror = reject;
	})
}
function PrintGetPercentage() {//not used
	return new Promise(function (resolve, reject) {
		var request = SendRequest("GET", baseUrl, "PrintGetPercentage", "");
		request.onload = function () {
			if (request.status == 200) {
				var result = new Uint8Array(request.response);
				resolve(result);
			}
		}
		request.onerror = reject;
	})
}
function ConfirmPrintIN(data) {
	return new Promise(function (resolve, reject) {
		var request = SendRequest("POST", baseUrl, "ConfirmPrintIN", data);
		request.onload = function () {
			if (request.status == 200) {
				var result = new Uint8Array(request.response);
				resolve(result);
			}
		}
		request.onerror = reject;
	})
}
function ConfirmPrintOUT() {
	SendRequest("GET", baseUrl, "ConfirmPrintOUT", "");
}
function ConfirmPrintStartPrint() {
	return new Promise(function (resolve, reject) {
		var request = SendRequest("GET", baseUrl, "ConfirmPrintStartPrint", "");
		request.onload = function () {
			if (request.status == 200) {
				var result = new Uint8Array(request.response);
				resolve(result);
			}
		}
		request.onerror = reject;
	})
}
function ConfirmPrintGetPrintFileName() {
	return new Promise(function (resolve, reject) {
		var request = SendRequest("GET", baseUrl, "ConfirmPrintGetPrintFileName", "");
		request.onload = function () {
			if (request.status == 200) {
				var result = new Uint8Array(request.response);
				resolve(result);
			}
		}
		request.onerror = reject;
	})
}
function FilChangeIN() {
	return new Promise(function (resolve, reject) {
		var request = SendRequest("GET", baseUrl, "FilChangeIN", "");
		request.onload = function () {
			if (request.status == 200) {
				var result = new Uint8Array(request.response);
				resolve(result);
			}
		}
		request.onerror = reject;
	})
}
function FilChangeOUT() {
	return new Promise(function (resolve, reject) {
		var request = SendRequest("GET", baseUrl, "FilChangeOUT", "");
		request.onload = function () {
			if (request.status == 200) {
				var result = new Uint8Array(request.response);
				resolve(result);
			}
		}
		request.onerror = reject;
	})
}
function FilChangeGetState() {
	return new Promise(function (resolve, reject) {
		var request = SendRequest("GET", baseUrl, "FilChangeGetState", "");
		request.onload = function () {
			if (request.status == 200) {
				var result = new Uint8Array(request.response);
				resolve(result);
			}
		}
		request.onerror = reject;
	})
}
function FilChangePrevious() {
	return new Promise(function (resolve, reject) {
		var request = SendRequest("GET", baseUrl, "FilChangePrevious", "");
		request.onload = function () {
			if (request.status == 200) {
				var result = new Uint8Array(request.response);
				resolve(result);
			}
		}
		request.onerror = reject;
	})
}
function FilChangeNext() {
	SendRequest("GET", baseUrl, "FilChangeNext", "");
}
function FilChangeGetIndex() {
	return new Promise(function (resolve, reject) {
		var request = SendRequest("GET", baseUrl, "FilChangeGetIndex", "");
		request.onload = function () {
			if (request.status == 200) {
				var result = new Uint8Array(request.response);
				resolve(result);
			}
		}
		request.onerror = reject;
	})
}
function UpdateIN() {
	return new Promise(function (resolve, reject) {
		var request = SendRequest("GET", baseUrl, "UpdateIN", "");
		request.onload = function () {
			if (request.status == 200) {
				var result = new Uint8Array(request.response);
				resolve(result);
			}
		}
		request.onerror = reject
	})
}
function UpdateOUT() {
	return new Promise(function (resolve, reject) {
		var request = SendRequest("GET", baseUrl, "UpdateOUT", "");
		request.onload = function () {
			if (request.status == 200) {
				var result = new Uint8Array(request.response);
				resolve(result);
			}
		}
		request.onerror = reject
	})
}
function UpdateConfirm() {
	return new Promise(function (resolve, reject) {
		var request = SendRequest("GET", baseUrl, "UpdateConfirm", "");
		request.onload = function () {
			if (request.status == 200) {
				var result = new Uint8Array(request.response);
				resolve(result);
			}
		}
		request.onerror = reject
	})
}
function TemperaturesBeginHeating() {
	SendRequest("GET", baseUrl, "TemperaturesBeginHeating", "");
}
function TemperaturesGetCurrent() {
	return new Promise(function (resolve, reject) {
		var request = SendRequest("GET", baseUrl, "TemperaturesGetCurrent", "");
		request.onload = function () {
			if (request.status == 200) {
				var result = new Uint8Array(request.response);
				resolve(result);
			}
		}
		request.onerror = reject;
	})
}
function TemperaturesGetMax() {
	return new Promise(function (resolve, reject) {
		var request = SendRequest("GET", baseUrl, "TemperaturesGetMax", "");
		request.onload = function () {
			if (request.status == 200) {
				var result = new Uint8Array(request.response);
				resolve(result);
			}
		}
		request.onerror = reject;
	})
}
function TemperaturesGetTarget() {
	return new Promise(function (resolve, reject) {
		var request = SendRequest("GET", baseUrl, "TemperaturesGetTarget", "");
		request.onload = function () {
			if (request.status == 200) {
				var result = new Uint8Array(request.response);
				resolve(result);
			}
		}
		request.onerror = reject;
	})
}
function TemperaturesSetTarget(data) {
	return new Promise(function (resolve, reject) {
		var request = SendRequest("POST", baseUrl, "TemperaturesSetTarget", data);
		request.onload = function () {
			if (request.status == 200) {
				var result = new Uint8Array(request.response);
				resolve(result);
			}
		}
		request.onerror = reject;
	})
}
function TemperaturesStopHeating() {
	SendRequest("GET", baseUrl, "TemperaturesStopHeating", "");
}
function TestPrintIN() {
	return new Promise(function (resolve, reject) {
		var request = SendRequest("GET", baseUrl, "TestPrintIN", "");
		request.onload = function () {
			if (request.status == 200) {
				var result = new Uint8Array(request.response);
				resolve(result);
			}
		}
		request.onerror = reject;
	})
}
function TestPrintOUT() {
	return new Promise(function (resolve, reject) {
		var request = SendRequest("GET", baseUrl, "TestPrintOUT", "");
		request.onload = function () {
			if (request.status == 200) {
				var result = new Uint8Array(request.response);
				resolve(result);
			}
		}
		request.onerror = reject;
	})
}
function TestPrintStart() {
	return new Promise(function (resolve, reject) {
		var request = SendRequest("GET", baseUrl, "TestPrintStart", "");
		request.onload = function () {
			if (request.status == 200) {
				var result = new Uint8Array(request.response);
				resolve(result);
			}
		}
		request.onerror = reject;
	})
}
function TestPrintGetState() {
	return new Promise(function (resolve, reject) {
		var request = SendRequest("GET", baseUrl, "TestPrintGetState", "");
		request.onload = function () {
			if (request.status == 200) {
				var result = new Uint8Array(request.response);
				resolve(result);
			}
		}
		request.onerror = reject;
	})
}
function ManualControlIN() {
	return new Promise(function (resolve, reject) {
		var request = SendRequest("GET", baseUrl, "ManualControlIN", "");
		request.onload = function () {
			if (request.status == 200) {
				var result = new Uint8Array(request.response);
				resolve(result);
			}
		}
		request.onerror = reject;
	})
}
function ManualControlOUT() {
	return new Promise(function (resolve, reject) {
		var request = SendRequest("GET", baseUrl, "ManualControlOUT", "");
		request.onload = function () {
			if (request.status == 200) {
				var result = new Uint8Array(request.response);
				resolve(result);
			}
		}
		request.onerror = reject;
	})
}
function ManualControlClickMovement(data) {
	SendRequest("POST", baseUrl, "ManualControlClickMovement", data);
}
function ManualControlClickHoming() {
	SendRequest("GET", baseUrl, "ManualControlClickHoming", "");
}
function ManualControlCancelMovement() {
	return new Promise(function (resolve, reject) {
		var request = SendRequest("GET", baseUrl, "ManualControlCancelMovement", "");
		request.onload = function () {
			if (request.status == 200) {
				var result = new Uint8Array(request.response);
				resolve(result);
			}
		}
		request.onerror = reject;
	})
}
function SettingGetPrinterID() {//not used
	return new Promise(function (resolve, reject) {
		var request = SendRequest("GET", baseUrl, "SettingGetPrinterID", "");
		request.onload = function () {
			if (request.status == 200) {
				var result = new Uint8Array(request.response);
				resolve(result);
			}
		}
		request.onerror = reject;
	})
}
function SettingGetNickName() {//not used
	return new Promise(function (resolve, reject) {
		var request = SendRequest("GET", baseUrl, "SettingGetNickName", "");
		request.onload = function () {
			if (request.status == 200) {
				var result = new Uint8Array(request.response);
				resolve(result);
			}
		}
		request.onerror = reject;
	})
}
function SettingGetPrinterName() {
	return new Promise(function (resolve, reject) {
		var request = SendRequest("GET", baseUrl, "SettingGetPrinterName", "");
		request.onload = function () {
			if (request.status == 200) {
				var result = new Uint8Array(request.response);
				resolve(result);
			}
		}
		request.onerror = reject;
	})
}
function SettingGetUniqueName() {
	return new Promise(function (resolve, reject) {
		var request = SendRequest("GET", baseUrl, "SettingGetUniqueName", "");
		request.onload = function () {
			if (request.status == 200) {
				var result = new Uint8Array(request.response);
				resolve(result);
			}
		}
		request.onerror = reject;
	})
}
function SettingGetHardwareID() {
	return new Promise(function (resolve, reject) {
		var request = SendRequest("GET", baseUrl, "SettingGetHardwareID", "");
		request.onload = function () {
			if (request.status == 200) {
				var result = new Uint8Array(request.response);
				resolve(result);
			}
		}
		request.onerror = reject;
	})
}
function SettingGetManufacturerID() {
	return new Promise(function (resolve, reject) {
		var request = SendRequest("GET", baseUrl, "SettingGetManufacturerID", "");
		request.onload = function () {
			if (request.status == 200) {
				var result = new Uint8Array(request.response);
				resolve(result);
			}
		}
		request.onerror = reject;
	})
}
function SettingGetRevisionNumber() {
	return new Promise(function (resolve, reject) {
		var request = SendRequest("GET", baseUrl, "SettingGetRevisionNumber", "");
		request.onload = function () {
			if (request.status == 200) {
				var result = new Uint8Array(request.response);
				resolve(result);
			}
		}
		request.onerror = reject;
	})
}
function SettingGetFeaturePause() {//not used
	return new Promise(function (resolve, reject) {
		var request = SendRequest("GET", baseUrl, "SettingGetFeaturePause", "");
		request.onload = function () {
			if (request.status == 200) {
				var result = new Uint8Array(request.response);
				resolve(result);
			}
		}
		request.onerror = reject;
	})
}
function SettingGetPrinterMode() {
	return new Promise(function (resolve, reject) {
		var request = SendRequest("GET", baseUrl, "SettingGetPrinterMode", "");
		request.onload = function () {
			if (request.status == 200) {
				var result = new Uint8Array(request.response);
				resolve(result);
			}
		}
		request.onerror = reject;
	})
}
function SettingGetDisplayedHeight() {
	return new Promise(function (resolve, reject) {
		var request = SendRequest("GET", baseUrl, "SettingGetDisplayedHeight", "");
		request.onload = function () {
			if (request.status == 200) {
				var result = new Uint8Array(request.response);
				resolve(result);
			}
		}
		request.onerror = reject;
	})
}
function SettingGetSensorInputHead2() {
	return new Promise(function (resolve, reject) {
		var request = SendRequest("GET", baseUrl, "SettingGetSensorInputHead2", "");
		request.onload = function () {
			if (request.status == 200) {
				var result = new Uint8Array(request.response);
				resolve(result);
			}
		}
		request.onerror = reject;
	})
}
function SettingGetSensorInputBed() {
	return new Promise(function (resolve, reject) {
		var request = SendRequest("GET", baseUrl, "SettingGetSensorInputBed", "");
		request.onload = function () {
			if (request.status == 200) {
				var result = new Uint8Array(request.response);
				resolve(result);
			}
		}
		request.onerror = reject;
	})
}
function SettingGetOutOfFilament() {
	return new Promise(function (resolve, reject) {
		var request = SendRequest("GET", baseUrl, "SettingGetOutOfFilament", "");
		request.onload = function () {
			if (request.status == 200) {
				var result = new Uint8Array(request.response);
				resolve(result);
			}
		}
		request.onerror = reject;
	})
}
function SettingGetNetworkName() {
	return new Promise(function (resolve, reject) {
		var request = SendRequest("GET", baseUrl, "SettingGetNetworkName", "");
		request.onload = function () {
			if (request.status == 200) {
				var result = new Uint8Array(request.response);
				resolve(result);
			}
		}
		request.onerror = reject;
	})
}
function WifiIN() {
	return new Promise(function (resolve, reject) {
		var request = SendRequest("GET", baseUrl, "WifiIN", "");
		request.onload = function () {
			if (request.status == 200) {
				var result = new Uint8Array(request.response);
				resolve(result);
			}
		}
		request.onerror = reject;
	})
}
function WifiGetState() {//not used
	return new Promise(function (resolve, reject) {
		var request = SendRequest("GET", baseUrl, "WifiGetState", "");
		request.onload = function () {
			if (request.status == 200) {
				var result = new Uint8Array(request.response);
				resolve(result);
			}
		}
		request.onerror = reject;
	})
}
function BedAdjustmentGetScrewList() {
	return new Promise(function (resolve, reject) {
		var request = SendRequest("GET", baseUrl, "BedAdjustmentGetScrewList", "");
		request.onload = function () {
			if (request.status == 200) {
				var result = new Uint8Array(request.response);
				resolve(result);
			}
		}
		request.onerror = reject;
	})
}
function BedAdjustmentMoveToScrew(data) {
	return new Promise(function (resolve, reject) {
		var request = SendRequest("POST", baseUrl, "BedAdjustmentMoveToScrew", data);
		request.onload = function () {
			if (request.status == 200) {
				var result = new Uint8Array(request.response);
				resolve(result);
			}
		}
		request.onerror = reject;
	})
}
function BedAdjustmentIN() {
	return new Promise(function (resolve, reject) {
		var request = SendRequest("GET", baseUrl, "BedAdjustmentIN", "");
		request.onload = function () {
			if (request.status == 200) {
				var result = new Uint8Array(request.response);
				resolve(result);
			}
		}
		request.onerror = reject;
	})
}
function BedAdjustmentOUT(data) {
	return new Promise(function (resolve, reject) {
		var request = SendRequest("POST", baseUrl, "BedAdjustmentOUT", data);
		request.onload = function () {
			if (request.status == 200) {
				var result = new Uint8Array(request.response);
				resolve(result);
			}
		}
		request.onerror = reject;
	})
}
function BedAdjustmentUp() {
	SendRequest("GET", baseUrl, "BedAdjustmentUp", "");
}
function BedAdjustmentDown() {
	SendRequest("GET", baseUrl, "BedAdjustmentDown", "");
}
function BedLevellingProcedureIN() {
	return new Promise(function (resolve, reject) {
		var request = SendRequest("GET", baseUrl, "BedLevellingProcedureIN", "");
		request.onload = function () {
			if (request.status == 200) {
				var result = new Uint8Array(request.response);
				resolve(result);
			}
		}
		request.onerror = reject;
	})
}
function BedLevellingProcedureOUT() {
	return new Promise(function (resolve, reject) {
		var request = SendRequest("GET", baseUrl, "BedLevellingProcedureOUT", "");
		request.onload = function () {
			if (request.status == 200) {
				var result = new Uint8Array(request.response);
				resolve(result);
			}
		}
		request.onerror = reject;
	})
}
function BedLevellingProcedureNext() {
	return new Promise(function (resolve, reject) {
		var request = SendRequest("GET", baseUrl, "BedLevellingProcedureNext", "");
		request.onload = function () {
			if (request.status == 200) {
				var result = new Uint8Array(request.response);
				resolve(result);
			}
		}
		request.onerror = reject;
	})
}
function BedLevellingProcedurePrevious() {
	return new Promise(function (resolve, reject) {
		var request = SendRequest("GET", baseUrl, "BedLevellingProcedurePrevious", "");
		request.onload = function () {
			if (request.status == 200) {
				var result = new Uint8Array(request.response);
				resolve(result);
			}
		}
		request.onerror = reject;
	})
}
function BedLevellingProcedureUp() {//not used
	return new Promise(function (resolve, reject) {
		var request = SendRequest("GET", baseUrl, "BedLevellingProcedureUp", "");
		request.onload = function () {
			if (request.status == 200) {
				var result = new Uint8Array(request.response);
				resolve(result);
			}
		}
		request.onerror = reject;
	})
}
function BedLevellingProcedureDown() {//not used
	return new Promise(function (resolve, reject) {
		var request = SendRequest("GET", baseUrl, "BedLevellingProcedureDown", "");
		request.onload = function () {
			if (request.status == 200) {
				var result = new Uint8Array(request.response);
				resolve(result);
			}
		}
		request.onerror = reject;
	})
}
function BedLevellingProcedureGetState() {//not used
	return new Promise(function (resolve, reject) {
		var request = SendRequest("GET", baseUrl, "BedLevellingProcedureGetState", "");
		request.onload = function () {
			if (request.status == 200) {
				var result = new Uint8Array(request.response);
				resolve(result);
			}
		}
		request.onerror = reject;
	})
}
function BedLevellingProcedureGetStateIndex() {
	return new Promise(function (resolve, reject) {
		var request = SendRequest("GET", baseUrl, "BedLevellingProcedureGetStateIndex", "");
		request.onload = function () {
			if (request.status == 200) {
				var result = new Uint8Array(request.response);
				resolve(result);
			}
		}
		request.onerror = reject;
	})
}
function BedLevellingProcedureGetStateCount() {
	return new Promise(function (resolve, reject) {
		var request = SendRequest("GET", baseUrl, "BedLevellingProcedureGetStateCount", "");
		request.onload = function () {
			if (request.status == 200) {
				var result = new Uint8Array(request.response);
				resolve(result);
			}
		}
		request.onerror = reject;
	})
}
function BedLevellingProcedureGetZDelta() {//not used
	return new Promise(function (resolve, reject) {
		var request = SendRequest("GET", baseUrl, "BedLevellingProcedureGetZDelta", "");
		request.onload = function () {
			if (request.status == 200) {
				var result = new Uint8Array(request.response);
				resolve(result);
			}
		}
		request.onerror = reject;
	})
}
function BedLevellingProcedureRepeat() {//not used
	return new Promise(function (resolve, reject) {
		var request = SendRequest("GET", baseUrl, "BedLevellingProcedureRepeat", "");
		request.onload = function () {
			if (request.status == 200) {
				var result = new Uint8Array(request.response);
				resolve(result);
			}
		}
		request.onerror = reject;
	})
}
function hasPowerFailure() {
	return new Promise(function (resolve, reject) {
		var request = SendRequest("GET", baseUrl, "hasPowerFailure", "");
		request.onload = function () {
			if (request.status == 200) {
				var result = new Uint8Array(request.response);
				resolve(result);
			}
		}
		request.onerror = reject;
	})
}
function PowerFailureIN() {
	return new Promise(function (resolve, reject) {
		var request = SendRequest("GET", baseUrl, "PowerFailureIN", "");
		request.onload = function () {
			if (request.status == 200) {
				var result = new Uint8Array(request.response);
				resolve(result);
			}
		}
		request.onerror = reject;
	})
}
function PowerFailureConfirm() {
	return new Promise(function (resolve, reject) {
		var request = SendRequest("GET", baseUrl, "PowerFailureConfirm", "");
		request.onload = function () {
			if (request.status == 200) {
				var result = new Uint8Array(request.response);
				resolve(result);
			}
		}
		request.onerror = reject;
	})
}
function PowerFailureCancel() {
	return new Promise(function (resolve, reject) {
		var request = SendRequest("GET", baseUrl, "PowerFailureCancel", "");
		request.onload = function () {
			if (request.status == 200) {
				var result = new Uint8Array(request.response);
				resolve(result);
			}
		}
		request.onerror = reject;
	})
}
function SystemInfoIN() {
	return new Promise(function (resolve, reject) {
		var request = SendRequest("GET", baseUrl, "SystemInfoIN", "");
		request.onload = function () {
			if (request.status == 200) {
				var result = new Uint8Array(request.response);
				resolve(result);
			}
		}
		request.onerror = reject;
	})
}
function StartupUpdateGetPercentage() {//not used
	return new Promise(function (resolve, reject) {
		var request = SendRequest("GET", baseUrl, "StartupUpdateGetPercentage", "");
		request.onload = function () {
			if (request.status == 200) {
				var result = new Uint8Array(request.response);
				resolve(result);
			}
		}
		request.onerror = reject;
	})
}
function StartupUpdateGetProcedure() {//not used
	return new Promise(function (resolve, reject) {
		var request = SendRequest("GET", baseUrl, "StartupUpdateGetProcedure", "");
		request.onload = function () {
			if (request.status == 200) {
				var result = new Uint8Array(request.response);
				resolve(result);
			}
		}
		request.onerror = reject;
	})
}
function SplashscreenIN() {//not used
	return new Promise(function (resolve, reject) {
		var request = SendRequest("GET", baseUrl, "SplashscreenIN", "");
		request.onload = function () {
			if (request.status == 200) {
				var result = new Uint8Array(request.response);
				resolve(result);
			}
		}
		request.onerror = reject;
	})
}
function SplashscreenOUT() {//not used
	return new Promise(function (resolve, reject) {
		var request = SendRequest("GET", baseUrl, "SplashscreenOUT", "");
		request.onload = function () {
			if (request.status == 200) {
				var result = new Uint8Array(request.response);
				resolve(result);
			}
		}
		request.onerror = reject;
	})
}