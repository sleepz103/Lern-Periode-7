const API_URL = "http://localhost:3000";


// Simulated CRUD operation functions
function createItem() {
	let app_element = document.getElementById("content");
	// your code starts here
	const bookUrl = "http://localhost:3000/data/books";


	// clearing to make ui
	function Clear() {
		let list = app_element.children;
		for (let k = list.length - 1; k >= 0; k--) {
			let item = list[k];
			if(item.tagName !== "UL") {
				item.remove();
			}
		}
	}
	
	Clear()

	// making ui
	const form = document.createElement("form"); 

	const bookNameLabel = Object.assign(document.createElement("label"), {
		id: "blabel",
		htmlFor: "bname",
		innerText: "Book name:"
	});

	const bookNameInput = Object.assign(document.createElement("input"), {
		id: "bname",
		type: "text",
		name: "bname"
	});
	const br1 = document.createElement("br");

	const bookIDLabel = Object.assign(document.createElement("label"), {
		htmlFor: "bid",
		innerText: "ID:"
	});

	const bookIDInput = Object.assign(document.createElement("input"), {
		id: "bid",
		type: "text",
		name: "bid"
	});

	const br2 = document.createElement("br");

	const bookAutLabel = Object.assign(document.createElement("label"), {
		id: "balabel",
		htmlFor: "bainput",
		innerText: "Author name:"
	});

	const bookAutInput = Object.assign(document.createElement("input"), {
		id: "bainput",
		type: "text",
		name: "bainput"
	});
	const br3 = document.createElement("br");


	const submitButton = Object.assign(document.createElement("button"), {
		id: "create-submit",
		innerText: "Submit",
		type: "button" 
	});


	form.appendChild(bookIDLabel);
	form.appendChild(bookIDInput);
	form.appendChild(br1); 
	form.appendChild(bookNameLabel);
	form.appendChild(bookNameInput);
	form.appendChild(br2); 
	form.appendChild(bookAutLabel);
	form.appendChild(bookAutInput);
	form.appendChild(br3); 
	form.appendChild(submitButton);

	app_element.appendChild(form);


	// send data
	submitButton.addEventListener("click", function() {
		SendData(bookUrl);
	})

	async function SendData(url) {
		fetch(url, {
			method: "POST",
			body: JSON.stringify({
			  id: bookIDInput.value,
			  title: bookNameInput.value,
			  author: bookAutInput.value
			}),
			headers: {
			  "Content-type": "application/json"
			}
		  })
	}






	// your code ends here
}

function readItem() {
	let app_element = document.getElementById("content");
	// your code starts here
	const bookUrl = "http://localhost:3000/data/books";


	function Clear() {
		let list = app_element.children;
		for (let k = list.length - 1; k >= 0; k--) {
			let item = list[k];
			if(item.tagName !== "UL") {
				item.remove();
			}
		}
	}
	
	// getting content from server
	async function FetchData(url) {
		const response = await fetch(url);
		const responseJson = await response.json();
		return responseJson;
	}

	// appending books to result list
	async function appendData(url) {
		const data = await FetchData(url);
		for (let i = 0; i < data.length; i++) {
			const dataObject = data[i];
			const bookEntry = document.createElement("p");
			bookEntry.textContent += dataObject.id + ": ";
			bookEntry.textContent += dataObject.title;
			app_element.append(bookEntry);
		}
	}

	Clear();
	appendData(bookUrl);
	// your code ends here
}


function updateItem() {
	let app_el = document.getElementById("content");
	// your code starts here
	// your code ends here
}


function deleteItem() {
	let app_el = document.getElementById("content");
	// your code starts here
	// your code ends here
}


const createButton = document.getElementsByClassName("create");
createButton[0].addEventListener("click", createItem);

const readButton = document.getElementsByClassName("read");
readButton[0].addEventListener("click", readItem);

const updateButton = document.getElementsByClassName("update");
updateButton[0].addEventListener("click", updateItem);

const deleteButton = document.getElementsByClassName("delete");
deleteButton[0].addEventListener("click", deleteItem);