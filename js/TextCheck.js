document.addEventListener("DOMContentLoaded",function(){
	var name = document.getElementById("name");//名前入力欄
	
	/**
	 * 名前入力をリアルタイムにチェックする
	 */
	name.addEventListener("keyup", function(){
		var text = name.value;

		console.log(text +" "+text.length);			
		if (text) {
			var NameRequiredMessage = document.getElementById("NameRequiredMessage");
			NameRequiredMessage.textContent = "名前入力完了";
			NameRequiredMessage.style.color = "blue";
		}
	},false);
},false);