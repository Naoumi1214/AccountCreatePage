document.addEventListener("DOMContentLoaded", function () {
	var name = document.getElementById("name");//名前入力欄
	var kana = document.getElementById("kana");//フリガナ入力欄
	var address = document.getElementById("address");//住所入力欄
	var email = document.getElementById("email");//メールアドレス入力欄
	var password = document.getElementById("password");//パスワード入力欄

	/**
	 * 名前入力をリアルタイムにチェックする
	 */
	name.addEventListener("keyup", function () {
		var text = name.value;
		console.log("name:" + text + " " + text.length);
		
		var NameRequiredMessage = document.getElementById("NameRequiredMessage");
		if (text) {
			NameRequiredMessage.textContent = "名前入力完了";
			NameRequiredMessage.style.color = "blue";
		}else {
			NameRequiredMessage.textContent = "*必須";
			NameRequiredMessage.style.color = "red";
		}
	}, false);

	/**
	 * フリガナ入力をリアルタイムにチェックする
	 */
	kana.addEventListener("keyup", function () {
		var text = kana.value;
		console.log("kana:" + text + " " + text.length);
		
		var HuriganaRequiredMessage = document.getElementById("HuriganaRequiredMessage");
		if (text) {
			HuriganaRequiredMessage.textContent = "フリガナ入力完了";
			HuriganaRequiredMessage.style.color = "blue";
		}else {
			HuriganaRequiredMessage.textContent = "*必須";
			HuriganaRequiredMessage.style.color = "red";
		}
	}, false);

	/**
	 * 住所入力をリアルタイムにチェックする
	 */
	address.addEventListener("keyup", function () {
		var text = address.value;
		console.log("address:" + text + " " + text.length);
		
		var StreetAddressRequiredMessage = document.getElementById("StreetAddressRequiredMessage");
		if (text) {
			StreetAddressRequiredMessage.textContent = "住所入力完了";
			StreetAddressRequiredMessage.style.color = "blue";
		}else {
			StreetAddressRequiredMessage.textContent = "*必須";
			StreetAddressRequiredMessage.style.color = "red";
		}
	}, false);

	/**
	 * メールアドレス入力をリアルタイムにチェックする
	 */
	email.addEventListener("keyup", function () {
		var text = email.value;
		console.log("email:" + text + " " + text.length);
		
		var　EmailRequiredMessage = document.getElementById("EmailRequiredMessage");
		if (text) {
			EmailRequiredMessage.textContent = "メールアドレス入力完了";
			EmailRequiredMessage.style.color = "blue";
		}else {
			EmailRequiredMessage.textContent = "*必須";
			EmailRequiredMessage.style.color = "red";
		}
	}, false);

	/**
	 * パスワード入力をリアルタイムにチェックする(7文字以上じゃないといけない)
	 */
	password.addEventListener("keyup", function () {
		var MinPassWordLength = 10;
		var text = password.value;
		console.log("password:" + text + " " + text.length);
		
		var　PassWordRequiredMessage = document.getElementById("PassWordRequiredMessage");
		if (text.length >= MinPassWordLength) {
			PassWordRequiredMessage.textContent = "パスワード入力完了";
			PassWordRequiredMessage.style.color = "blue";
		}else {
			PassWordRequiredMessage.textContent = "*あと"+ (MinPassWordLength - text.length) +"入力してください";
			PassWordRequiredMessage.style.color = "red";
		}
	}, false);
}, false);