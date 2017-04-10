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

In HTML, you structure your content by placing it in between tags, which look like ```<this>``` (starting tag) and ```</this>``` (ending tag). Notice that after ```<!DOCTYPE html>``` (which identifies the file as an HTML file), everything is inside the ```<html>``` tag. The two main tags inside it are the ```<head>``` tag, which contains meta-information about the website, and the ```<body>``` tag, which contains its content.

You'll notice there's already some code in those tags – this allows our website to use the Bootstrap framework, which gives us some styling/formatting and certain elements (like buttons and templates) for free. We'll discuss what it specifically does later!

1. Let's give our website a title! Within the ```<head>``` section, add the following code:
```
<title>Be Inspired</title>
```

2. Now let's add some content to our website! Within the ```<body>``` section, add the following code:
```
<p>Click the button below for inspiration!</p>
```
(The ```<p>``` tag represents a paragraph of text.)

3. Next, let's place a button (provided by Bootstrap) for the user to click after the paragraph. In order to use the  button, we have to also identify its ```class```es so Bootstrap knows what kind of button it is. In this case, we want it to have default styling but to be large:
```
<button class="btn btn-default btn-lg">Be Inspired</button>
```
Notice that the classes are separated by spaces.

4. Let's give the paragraph and the button ```id```s as well so we can identify them later.
```
<p id="quote">Click the button below for inspiration!</p>
<button class="btn btn-default btn-lg" id="changeQuote">Be Inspired</button>
```

5. ```<div>```s define sections of a website.

Your code should now look like this inside the ```<body>``` section:
```
<div class="container-fluid">
  <div class="header">
    <p id="quote">Click the button below for inspiration!</p>
    <button class="btn btn-default btn-lg" id="changeQuote">Be Inspired</button>
  </div>
</div>
```

6. When you're done, scroll to the bottom of the page and click the "Commit changes" button.

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
