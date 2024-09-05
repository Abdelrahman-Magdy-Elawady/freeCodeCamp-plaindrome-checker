window.onload = () => {
	const textBox = document.querySelector("#text-input");
	const btn = document.querySelector("button");
	const result = document.querySelector("#result");

	//*********** Listeners *******
	btn.addEventListener("click", () => {
		const regex = /[A-Za-z0-9]/gi;
		const textBoxContent = textBox.value;
		textBox.value = "";
		if (textBoxContent === "") {
			alert("Please input a value");
		} else {
			const processedText = inputProcess(textBoxContent, regex);
			console.log(processedText);
			result.textContent =
				textBoxContent + " " + inputCheckPlaindrome(processedText);
		}
	});

	//********** Functions *********
	const inputProcess = (inputText, regex) => {
		return inputText.match(regex).join("").toLowerCase();
	};
	const inputCheckPlaindrome = (inputProcessedText) => {
		let reverse = inputProcessedText.split("").reverse().join("");
		if (inputProcessedText === reverse) {
			return "is a palindrome";
		} else {
			return "is not a palindrome";
		}
	};
};
