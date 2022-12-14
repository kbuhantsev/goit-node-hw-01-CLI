import fs from "fs/promises";
import { normalize } from "path";

const contactsPath = normalize("db/contacts.json");

async function listContacts() {
  try {
    const text = await fs.readFile(contactsPath, "utf-8");
    return JSON.parse(text);
  } catch (error) {
    console.error(error);
    return [];
  }
}

async function getContactById(contactId) {
  const contacts = await listContacts();
  return contacts.find((element) => element.id === contactId);
}

async function removeContact(contactId) {
  const contacts = await listContacts();
  const filteredContacts = contacts.filter(
    (element) => element.id !== contactId
  );
  try {
    await fs.writeFile(
      contactsPath,
      JSON.stringify(filteredContacts, null, 2),
      "utf-8"
    );
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

async function addContact(name, email, phone) {
  const contacts = await listContacts();
  const maxID = contacts.reduce((acc, element) => {
    return Math.max(acc, +element.id);
  }, 0);
  const ID = String(maxID + 1);
  contacts.push({ id: ID, name, email, phone });
  try {
    await fs.writeFile(
      contactsPath,
      JSON.stringify(contacts, null, 2),
      "utf-8"
    );
    return ID;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export { listContacts, getContactById, removeContact, addContact };
