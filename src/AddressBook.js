function AddressBook () {
	this.contacts = [];
}

AddressBook.prototype.addContact = function(contact) {
	this.contacts.push(contact);
};

AddressBook.prototype.getContact = function(idx) {

	if( this.contacts[idx] ) {
		return this.contacts[idx];
	}

	console.error("Error: no contact added at index " + idx);

};

AddressBook.prototype.deleteContact = function(idx) {

	if( this.contacts[idx] ) {
		this.contacts.splice(idx, 1);
	}
	
}

