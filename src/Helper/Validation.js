// import React,{Component} from 'react'
// event: pass event listener
// Type: 0 - for key press check validation, 1- for full form validation check, 2 - runtime error message set
// Button disable: 0 - for not disable and 1 - for disable
// errror : runtime error show
function validation(event, type, buttonDisable, error) {
	console.log(event, type)
	if (type === 1) {

		let buttonName = '';
		for (let i = 0; i < event.target.length; i++) {
			validationCheck(event.target[i]);
			if (event.target[i].type === 'submit') buttonName = event.target[i];
		}
		let note = event.target.querySelectorAll('.chapterValidation');
		if (buttonDisable === 1 && note.length > 0 && buttonName !== '')
			buttonName.disabled = true;
		else if (buttonDisable === 1 && buttonName !== '')
			buttonName.disabled = false;
		if (note.length > 0) {
			return true;
		}
	} else if (type === 2) {
		let buttonName = '';
		error = Object.entries(error).map(([key, value]) => ({ key, value }));
		for (let i = 0; i < event.target.length; i++) {
			error.find(function (element) {
				if (event.target[i].name === element.key) {
					runTimeValidation(event.target[i], element.value);
				}
			});
			if (event.target[i].type === 'submit') buttonName = event.target[i];
		}
		let note = event.target.querySelectorAll('.chapterValidation');
		if (buttonDisable === 1 && note.length > 0 && buttonName !== '')
			buttonName.disabled = true;
		else if (buttonDisable === 1 && buttonName !== '')
			buttonName.disabled = false;
		if (note.length > 0) {
			return false;
		}
	} else if (type === 3) {
		let type = validationCheck(event);
		if (buttonDisable === 1) {
			let data = event.target
				.closest('form')
				.getElementsByClassName('chapterInput');
			let errorFlag = 0;

			for (let i = 0; i < data.length; i++) {
				if (data[i].getAttribute('value') === '') {
					errorFlag++;
					break;
				}
			}
			if (
				event.target.closest('form').querySelectorAll('.chapterValidation')
					.length > 0
			)
				errorFlag++;
			let buttonName = event.target
				.closest('form')
				.querySelectorAll('.chapterButton');
			if (errorFlag > 0) buttonName[0].disabled = true;
			else buttonName[0].disabled = false;
		}
		return type;
	} else {
		let type = validationCheck(event.target);
		if (buttonDisable === 1) {
			let data = event.target
				.closest('form')
				.getElementsByClassName('chapterInput');
			let errorFlag = 0;

			for (let i = 0; i < data.length; i++) {
				if (data[i].getAttribute('value') === '') {
					errorFlag++;
					break;
				}
			}
			if (
				event.target.closest('form').querySelectorAll('.chapterValidation')
					.length > 0
			)
				errorFlag++;
			let buttonName = event.target
				.closest('form')
				.querySelectorAll('.chapterButton');
			if (errorFlag > 0) buttonName[0].disabled = true;
			else buttonName[0].disabled = false;
		}
		return type;
	}
}
function runTimeValidation(event, messageError) {
	if (
		event.getAttribute('validation') === ' ' ||
		event.getAttribute('validation') === undefined ||
		event.getAttribute('validation') === '' ||
		event.getAttribute('validation') === null
	)
		return false;
	event.parentElement.className += ' error ';
	let message = messageError ? messageError : 'This is filed required';
	let newElement = document.createElement('Div');
	newElement.setAttribute('class', 'chapterValidation text-danger');
	newElement.innerHTML = message;
	var elements = event.parentElement.getElementsByClassName(
		'chapterValidation'
	);
	while (elements.length > 0) {
		elements[0].parentNode.removeChild(elements[0]);
	}
	event.parentElement.appendChild(newElement);
}
function validationCheck(event) {
	console.log("hellokkkkkkkkkkk")
	let getdData;
	if (event.type === 'checkbox') {
		getdData = event.checked;
	} else {
		getdData = event.value;
	}
	console.log(event)
	console.log(document.getElementsByTagName("TextField"))
	if (
		event.getAttribute('validation') === ' ' ||
		event.getAttribute('validation') === undefined ||
		event.getAttribute('validation') === '' ||
		event.getAttribute('validation') === null
	)
		return false;
	let validation = event.getAttribute('validation').split(',');

	let accept = event.getAttribute('accept');
	if (accept === 'image') event.parentElement.className += ' error ';
	else event.parentElement.className += ' error ';
	let message = event.getAttribute('validationmsg').split(',');
	let newElement = document.createElement('Div');
	newElement.setAttribute('class', 'chapterValidation text-danger');
	var elements = event.parentElement.getElementsByClassName(
		'chapterValidation'
	);
	while (elements.length > 0) {
		if (accept === 'image') elements[0].parentNode.removeChild(elements[0]);
		else elements[0].parentNode.removeChild(elements[0]);
	}
	for (let i = 0; i < validation.length; i++) {
		if (message.length === 1) newElement.innerHTML = message[0];
		else if (message.length === validation.length)
			newElement.innerHTML = message[i];
		else newElement.innerHTML = 'This field is required.';
		if (eroorvali(validation[i], getdData, newElement, event)) {
			return true;
		}
	}
}

function eroorvali(mode, getdData, message, event) {
	console.log("errorvali")
	let modedata = mode.split('[');
	let textLeng = 0;
	if (modedata.length === 1) {
		mode = modedata[0];
	} else if (modedata.length === 2) {
		mode = modedata[0];
		textLeng = modedata[1].replace(']', '');
	}
	switch (mode) {
		case 'required':
			if (getdData === '') {

				event.parentElement.appendChild(message);
				return true;
			}
			break;
		case 'checkbox':
			if (getdData === false) {
				event.parentElement.appendChild(message);
				return true;
			}
			break;
		case 'file':
			var Extension = getdData
				.substring(getdData.lastIndexOf('.') + 1)
				.toLowerCase();
			var image_type = ['gif', 'png', 'bmp', 'jpeg', 'jpg'];
			if (image_type.indexOf(Extension) === -1) {
				event.parentElement.appendChild(message);
				return true;
			}
			break;
		case 'string':
			if (
				getdData !== '' &&
				!getdData.match(/^[0-9a-zA-Z][0-9a-zA-Z\W\s\S]+$/)
			) {
				event.parentElement.appendChild(message);
				return true;
			}
			break;
		case 'password':
			if (getdData !== '' && !getdData.match(/^[^\s].+[^\s]$/)) {
				event.parentElement.appendChild(message);
				return true;
			}
			break;
		case 'number':
			let phoneno = /^[0-9]+$/;
			if (getdData !== '' && !getdData.match(phoneno)) {
				event.parentElement.appendChild(message);
				return true;
			}
			break;
		case 'age':
			let age = /^[1-9][0-9]*$/;
			if (getdData !== '' && !getdData.match(age)) {
				event.parentElement.appendChild(message);
				return true;
			}
			break;
		case 'min':
			if (getdData !== '' && getdData.length < textLeng) {
				event.parentElement.appendChild(message);
				return true;
			}

			break;
		case 'max':
			if (getdData !== '' && getdData.length > textLeng) {
				event.parentElement.appendChild(message);
				return true;
			}
			break;
		case 'matchLess':
			if (
				getdData !== '' &&
				parseInt(document.getElementById(textLeng).value) !== '' &&
				parseInt(getdData) >= parseInt(document.getElementById(textLeng).value)
			) {
				event.parentElement.appendChild(message);
				return true;
			}
			break;
		case 'matchGreater':
			if (
				getdData !== '' &&
				parseInt(document.getElementById(textLeng).value) !== '' &&
				parseInt(getdData) <= parseInt(document.getElementById(textLeng).value)
			) {
				event.parentElement.appendChild(message);
				return true;
			}
			break;
		case 'email':
			var emailRegex = getdData.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
			console.log("hellocondition")
			if (getdData !== '' && !emailRegex) {
				event.parentElement.appendChild(message);
				return true;
			}
			break;
		case 'url':
			var urlRegex = getdData.match(
				/^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/
			);
			if (getdData !== '' && !urlRegex) {
				event.parentElement.appendChild(message);
				return true;
			}
			break;
		default:
			return false;
	}
}

export default validation;
