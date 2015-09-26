"use strict";
class User {
	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

	greet(greeting=User.DEFAULT_GREETING) {
		alert(`${greeting} ${this.firstName} ${this.lastName}!`);
	}
}
User.DEFAULT_GREETING = "Hello";