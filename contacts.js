const fs = require("fs").promises;
const path = require("path");

const contactsPath = path.resolve("./db/contacts.json");

/*
 * Раскомментируй и запиши значение
 * const contactsPath = ;
 */

// TODO: задокументировать каждую функцию

async function listContacts() {
  try {
    return console.log(await fs.readFile(contactsPath, "utf-8"));
  } catch (err) {
    return console.log(err.message);
  }
}

async function getContactById(contactId) {
  // ...твой код
  try {
    const newData = JSON.parse(await fs.readFile(contactsPath)).filter(
      (contact) => parseInt(contact.id) === contactId
    );
    return console.log(newData);
  } catch (err) {
    return console.log(err.message);
  }
}

async function removeContact(contactId) {
  try {
    const data = JSON.parse(await fs.readFile(contactsPath)).filter(
      (contact) => Number.parseInt(contact.id) !== contactId
    );
    await fs.writeFile(contactsPath, JSON.stringify(data));
    return console.log(await fs.readFile(contactsPath, "utf-8"));
  } catch (err) {
    return console.log(err.message);
  }
}

async function addContact(name, email, phone) {
  try {
    const data = JSON.parse(await fs.readFile(contactsPath, "utf-8"));
    data.push({ name, email, phone });
    await fs.writeFile(contactsPath, JSON.stringify(data));
    return console.log(data);
  } catch (error) {
    return console.log(error.message);
  }
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
