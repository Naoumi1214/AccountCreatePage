document.addEventListener("DOMContentLoaded", function () {
	var name = document.getElementById("name");//名前入力欄
	var kana = document.getElementById("kana");//フリガナ入力欄
	var address = document.getElementById("address");//住所入力欄
	var email = document.getElementById("email");//メールアドレス入力欄

	/**
	 * 名前入力をリアルタイムにチェックする
	 */
	name.addEventListener("keyup", function () {
		var text = name.value;

		console.log("name:" + text + " " + text.length);
		if (text) {
			var NameRequiredMessage = document.getElementById("NameRequiredMessage");
			NameRequiredMessage.textContent = "名前入力完了";
			NameRequiredMessage.style.color = "blue";
		}
	}, false);

	/**
	 * フリガナ入力をリアルタイムにチェックする
	 */
	kana.addEventListener("keyup", function () {
		var text = kana.value;

		console.log("kana:" + text + " " + text.length);
		if (text) {
			var HuriganaRequiredMessage = document.getElementById("HuriganaRequiredMessage");
			HuriganaRequiredMessage.textContent = "フリガナ入力完了";
			HuriganaRequiredMessage.style.color = "blue";
		}
	}, false);

	/**
	 * 住所入力をリアルタイムにチェックする
	 */
	address.addEventListener("keyup", function () {
		var text = address.value;

		console.log("address:" + text + " " + text.length);
		if (text) {
			var StreetAddressRequiredMessage = document.getElementById("StreetAddressRequiredMessage");
			StreetAddressRequiredMessage.textContent = "住所入力完了";
			StreetAddressRequiredMessage.style.color = "blue";
		}
	}, false);

	/**
	 * メールアドレス入力をリアルタイムにチェックする
	 */
	email.addEventListener("keyup", function () {
		var text = email.value;

		console.log("email:" + text + " " + text.length);
		if (text) {
			var　EmailRequiredMessage = document.getElementById("EmailRequiredMessage");
			EmailRequiredMessage.textContent = "メールアドレス入力完了";
			EmailRequiredMessage.style.color = "blue";
		}
	}, false);

}, false);