# goit-node-hw-01-CLI

# Получаем и выводим весь список контактов в виде таблицы (console.table)
node index.js -a list

# Получаем контакт по id
node index.js -a get -id 5

# Добавялем контакт
node index.js -a add -n Mango -e mango@gmail.com -p 322-22-22

# Удаляем контакт
node index.js -action remove -i 3
