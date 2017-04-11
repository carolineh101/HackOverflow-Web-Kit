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

4. ```id```s, unlike classes, represent and identify *specific* instances of particular elements. (Think of them as HTML's version of variable names!) We'll give the paragraph and the button ```id```s so our JavaScript code will know what elements to manipulate later. Your code should now look like this:
```
<p id="quote">Click the button below for inspiration!</p>
<button class="btn btn-default btn-lg" id="changeQuote">Be Inspired</button>
```

5. ```<div>```s define sections of a website. Bootstrap offers some handy styling for certain classes of ```<div>```s, so we'll be using them here. Your code should now look like this inside the ```<body>``` section:
```
<div class="container-fluid">
  <div class="header">
    <p id="quote">Click the button below for inspiration!</p>
    <button class="btn btn-default btn-lg" id="changeQuote">Be Inspired</button>
  </div>
</div>
```

Here, ```container-fluid``` makes the webpage full-width, and ```header``` (which is inside the container) groups together the paragraph and button into one section.

6. When you're done, scroll to the bottom of the page and click the "Commit changes" button.

### CSS
If you check your website, you'll notice that it's pretty plain at the moment. To add stylings to elements of our website, we'll need to use CSS (Cascading Style Sheets).

1.  In the head section of ```index.html```, add ```<link rel="stylesheet" type="text/css" href="style.css">```. This will add the stylings from our CSS file ```style.css``` (linked via ```href```) to the website.

2. Open ```style.css```. You'll notice that

6. When you're done, scroll to the bottom of the page and click the "Commit changes" button.

### JavaScript
At the moment, clicking the button you created earlier doesn't do anything. To make our website respond to user input, we'll need to use JavaScript. (We'll be using a library called jQuery to make our job easier!)

1. Go back to ```index.html``` and add ```<script type="text/javascript" src="quote.js"></script>``` to the end of the body to link our JavaScript file ```quote.js``` to the website.

2. Open ```quote.js```. You'll notice it currently looks like this:
```
$('#changeQuote').on('click', function (e) {

})
```

What this translates to in plain English is "When the element with the id ```changeQuote``` (here, our button) is clicked, execute the function inside the curly braces." We're now going to write this function to display a random quote. Let's first declare the variables we'll be using (an array of quotes and the number of quotes):
```
var quotes = [];
var numQuotes = 5;
```

3. Now, let's add (or in JavaScript, ```push```) quotes to our array. While the quotes will be formatted as strings, they'll ultimately end up being *inserted* into ```index.html``` as HTML code between the ```<p>``` tags. This means we can do handy things like include tags in the string itself (here, we use ```<br>``` to insert a line break). Here are a few examples for inspiration (feel free to pick your own, and remember to include the escape character ```\``` before apostrophes and double quotes!):
```
quotes.push('\"A ship in port is safe, but that is not what ships are for. Sail out to sea and do new things.\"' + '<br>' + '– Grace Hopper');
quotes.push('\"Life is not easy for any of us. But what of that? We must have perseverance and above all confidence in ourselves. We must believe that we are gifted for something and that this thing must be attained.\"' + '<br>' + '—  Marie Curie');
quotes.push('\"If people don\'t agree with you, the important thing is to listen to them. But if you\'ve listened to them carefully and you still think that you\'re right, then you must have the courage of your convictions.\"' + '<br>' + '– Jane Goodall');
quotes.push('\"If you know you are on the right track, if you have this inner knowledge, then nobody can turn you off... no matter what they say.\"' + '<br>' + '– Barbara McClintock');
quotes.push('\"Forget this world and all its troubles and if possible its multitudinous Charlatans-- everything in short but the Enchantress of Numbers.\"' + '<br>' + '– Ada Lovelace');
```

4. Next, let's create a variable which will give us the index of a random quote in the array.
```
var randNum = Math.floor(Math.random() * (numQuotes));
```

5. Finally, we want to insert the random quote into the ```<p>``` tag of ```index.html```. This is where our use of ```id```s comes in handy – we can just find the correct element to insert the quote into and replace what's between it with our quote!
```
document.getElementById("quote").innerHTML = quotes[randNum];
```

(Translation: Take ```index.html```, find the element with the ```id``` ```quote```, and replace what's between its tags with the quote at index ```randNum```.)

6. When you're done, scroll to the bottom of the page and click the "Commit changes" button. Congratulations, you've just built a website!

### Now That You're Done...
- You can compare your code against ours by switching to the "completed" branch in the dropdown directly below the "Code" tab.
- Check out more things you can do with Bootstrap [here](http://getbootstrap.com).
- Want to learn more about HTML, CSS, or JavaScript? [Codecademy](https://www.codecademy.com) offers more in-depth tutorials on them, as well as JavaScript frameworks like Angular and React.
- Interested in taking a class on web dev in the future? Sign up for CS 142 or CS 193X!
