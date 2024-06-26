# XML Replacer
 
Замена данных в файле XML. Программа принимает в себя старое значение банка которое нужно заменить в конкретном теге XML документа и новое значение.

Вместо того чтобы открывать каждый файл и менять это значение вручную, программа выполнит это за пару секунд.

## Содержание
- [Технологии](#технологии)
- [Использование](#использование)
    * [Персональная настройка](#персональная-настройка)
    * [Использование заданных настроек](#использование-заданных-настроек)
- [Разработка](#разработка)
    * [Требования](#требования)
    * [Установка зависимостей](#установка-зависимостей)
    * [Deploy](#deploy)

## Технологии
- [xmldom](https://github.com/jindw/xmldom)
- [NodeJS](https://nodejs.org/en)



## Использование
#### Персональная настройка
Для настройки собственных путей рекомендуется установить на ПК файлы располагающиеся в ветке main. 

Инструкция для развертывания проекта на своем ПК имеется в разделе [Установка зависимостей](#установка-зависимостей)

Изменения необходимо внести в файл `fsb.js` (строки 16 и 24). 

После сохранения develop версии запустить npm run build и для работы использовать `fsb.bat`

По завершению выполнения программы, файлы находящиеся в той директории, которою вы указали в filepath, будут хранить изменённые значения.

#### Использование заданных настроек
Для этого необходимо иметь следующий путь на своем ПК : 
`C:\51формат\Файлысэд\0\Выгрузка\Основной\1`

Установите на свой компьютер файлы содержащиеся в ветке gh-pages.

Из корня папки, в котором находятся все наши скаченные файлы запускаем `fsb.bat`

В командной строке указываем все запрашиваемые сведения. 

По завершению выполнения программы, файлы находящиеся в указанной выше директории, будут хранить изменённые значения.

## Разработка

### Требования
Для установки и запуска проекта, необходим [NodeJS](https://nodejs.org/)

### Установка зависимостей
Клонируем репозиторий:
```sh
git clone https://github.com/violetevergdev/XML-Replacer -b gh-pages
```
Для установки зависимостей, выполните команду:
```sh
$ npm i
```

### Deploy
```sh
npm run build
npm run deploy
```


