# Fork Differences
This is a modified version of the [live sass compiler extension](https://github.com/ritwickdey/vscode-live-sass-compiler).
* Removed dependency on live-server extension.
* Added input/output folder options for non-relative folder structure.
* Turning on watch-mode does not compile all sass in the project.

Even with these changes, I'm not satisfied with this yet. The changes I made are 'quick and dirty' just to make it usable for myself. I may pick up rewriting this extension as a project later.

# Live Sass Compiler

**_[If you like the extension, [please leave a review](https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass#review-details), it puts a smile on my face.]_**

**_[If you found any bug or if you have any suggestion, feel free to report or suggest me.]_**

[![VSCode Marketplace Badge](https://img.shields.io/vscode-marketplace/v/ritwickdey.live-sass.svg?label=VSCode%20Marketplace&style=flat-square)](https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass) [![Total Install](https://img.shields.io/vscode-marketplace/d/ritwickdey.live-sass.svg?style=flat-square)](https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass) [![Avarage Rating Badge](https://img.shields.io/vscode-marketplace/r/ritwickdey.live-sass.svg?style=flat-square)](https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/ritwickdey/vscode-live-sass-compiler/)

A VSCode Extension that help you to compile/transpile your SASS/SCSS files to CSS files at realtime with live browser reload.

![App Preview](./images/Screenshot/AnimatedPreview.gif)

## Usage/Shortcuts
1. Click to `Watch Sass` from Statusbar to turn on the live compilation and then click to `Stop Watching Sass` from Statusbar to turn on live compilation . 
![Statusbar control](./images/Screenshot/statusbar.jpg)

2. Press `F1` or `ctrl+shift+P` and type `Live Sass: Watch Sass` to start live compilation or, type `Live Sass: Stop Watching Sass` to stop a live compilation.
3. Press `F1` or `ctrl+shift+P` and type `Live Sass: Compile Sass - Without Watch Mode ` to compile Sass or Scss for one time.

## Features
* Live SASS & SCSS Compile.
* Customizable file location of exported CSS.
* Customizable exported CSS Style (`expanded`, `compact`, `compressed`, `nested`).
* Customizable extension name (`.css` or `.min.css`).
* Quick Status bar control.
* Exclude Specific Folders by settings. 
* Live Reload to browser (Dependency on `Live Server` extension).
* Autoprefix Supported (See setting section)

## Installation
Open VSCode Editor and Press `ctrl+P`, type `ext install live-sass`.

## Settings
All settings are now listed here  [Settings Docs](./docs/settings.md).

## FAQ
*All FAQs are now listed here [FAQ Docs](./docs/faqs.md)*

## Extension Dependency 
This extension has dependency on _[Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)_ extension for live browser reload.

## What's new ?

* #### Version 3.0.0 (11.07.2018)
    *  Upgrade `sass.js` library that included fixes for 8 digit Hex code & grid name. [Fixes [#39](https://github.com/ritwickdey/vscode-live-sass-compiler/issues/39), [#40](https://github.com/ritwickdey/vscode-live-sass-compiler/issues/40), [#78](https://github.com/ritwickdey/vscode-live-sass-compiler/issues/77)]  

## Changelog
To check full changelog click here [changelog](CHANGELOG.md).

## LICENSE
This extension is licensed under the [MIT License](LICENSE)
