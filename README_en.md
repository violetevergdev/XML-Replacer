# XML Replacer

Replacing data in an XML file. The program takes in the old value of the jar to be replaced in a particular XML document tag, and the new value.

Instead of opening each file and changing this value manually, the program will do it in a couple of seconds.

## Contents
- [Technology](#technology)
- [Usage](#usage)
    * [Personal Customization](#personal-customization)
    * [Using Preset Settings](#using-preset-settings)
- [Development](#development)
    * [Requirements](#requirements)
    * [Dependency](#dependency)
    * [Deploy](#deploy)

## Technology
- [xmldom](https://github.com/jindw/xmldom)
- [NodeJS](https://nodejs.org/en)



## Usage
#### Personal Customization
To customize your own paths, it is recommended to install the files located in the main branch on your PC.

Instructions for development the project on your PC are available in the [Dependency](#dependency) section

Changes should be made in the `fsb.js` file (lines 16 and 24).

After saving the develop version, run npm run build and use `fsb.bat` to run the program.

When the program is finished, the files in the directory you specified in the filepath will store the modified values.

#### Using Preset Settings
To do this, you need to have the following path on your PC :
`C:\51формат\Файлысэд\0\Выгрузка\Основной\1`.

Install the files contained in the gh-pages branch on your computer.

From the root of the folder where all our downloaded files are located, run `fsb.bat`.

In the command line, specify all the requested information.

Upon completion of the program execution, the files in the above directory will store the changed values.

## Development

### Requirements
To install and run the project, you need [NodeJS](https://nodejs.org/)

### Dependency
Clone the repository:
```sh
git clone https://github.com/violetevergdev/XML-Replacer -b gh-pages
```
To install dependencies, run the command:
```sh
$ npm i
```

### Deploy
```sh
npm run build
npm run deploy
```


