import fs from "fs/promises";
import { normalize } from "path";

// fs.readFile(filename, [options]) - чтение файла
// fs.writeFile(filename, data, [options]) - запись файла
// fs.appendFile(filename, data, [options])- добавление в файл
// fs.rename(oldPath, newPath) - переименование файла.
// fs.unlink(path, callback)

const contactsPath = normalize("db/contacts.json");

// TODO: задокументировать каждую функцию
async function listContacts() {
  // ...твой
  try {
    const text = await fs.readFile(contactsPath, "utf-8");
    return JSON.parse(text);
  } catch (error) {
    console.log(error);
  }
}

function getContactById(contactId) {
  // ...твой код
}

function removeContact(contactId) {
  // ...твой код
}

function addContact(name, email, phone) {
  // ...твой код
}

export { listContacts, getContactById, removeContact, addContact };
