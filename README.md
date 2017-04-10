# HackOverflow Web Development Kit

### Description
This tutorial will teach you how to build a website which displays random quotes like the one [here](http://carolineho.me/HackOverflow-Web-Kit/).

### Before Starting...
If you don't already have one, create a GitHub account!

### Getting Started
1. Fork this repository by clicking the button in the top right corner. This will copy over the starter templates and code to your own account.
2. Click on the "Settings" tab of your newly forked repository and scroll down to the GitHub Pages section. Select "master branch" as the source. Now, when you make changes to the code, you can view the changes live on http://your-username-here.github.io/HackOverflow-Web-Kit.
3. Go back to the "Code" tab.

### HTML
To create the structure and content of your website, we'll need to use HTML (HyperText Markup Language). Open up ```index.html``` and click the pen icon in the corner to get started!

In HTML, you structure your content by placing it in between tags, which look like ```<this>``` (starting tag) and ```</this>``` (ending tag). Notice that after ```<!DOCTYPE html>``` (which identifies the file as an HTML file), everything is inside the ```<html>``` tag. The two main tags inside it are the ```<head>``` tag, which contains meta-information about the website, and the ```<body>``` tag, which contains its content. (There's already some code in those tags – just ignore it for now. We'll discuss what it does later!)

1. Let's give our website a title! Within the ```<head>``` section, add the following code:
```
<title>Be Inspired</title>
```
(You can change what's inside the ```<title>``` tag to whatever you want your website's title to be.)
2. Now let's add some content to our website! Within the ```<body>``` section, add the following code:
```
<h2>Click the button below for inspiration!</h2>
```
X. When you're done, scroll to the bottom of the page and click the "Commit changes" button.

### CSS
If you check your website, you'll notice that it's pretty plain at the moment. To add style, we'll need to use CSS (Cascading Style Sheets).
1.  In the head section of ```index.html```, add ```<link rel="stylesheet" type="text/css" href="style.css">```. This will add the stylings from our CSS file ```style.css``` to the website.
2. Open ```style.css```.
X. When you're done, scroll to the bottom of the page and click the "Commit changes" button.

### JavaScript
At the moment, clicking the button you created earlier doesn't do anything. To make our website respond to user input, we'll need to use JavaScript. (We'll be using a library called jQuery to make our job easier!)
1. Go back to ```index.html``` and add ```<script type="text/javascript" src="quote.js"></script>``` to the end of the body to link our JavaScript file ```quote.js``` to the website.
2. Open ```quote.js```.
X. When you're done, scroll to the bottom of the page and click the "Commit changes" button.

### Now That You're Done...
- You can compare your code against ours by switching to the "completed" branch in the dropdown directly below the "Code" tab.
- Check out more things you can do with Bootstrap [here](http://getbootstrap.com).
- Want to learn more about HTML, CSS, or JavaScript? [Codecademy](https://www.codecademy.com) offers more in-depth tutorials on them, as well as JavaScript frameworks like Angular and React.
- Interested in taking a class on web dev in the future? Sign up for CS 142 or CS 193X!
