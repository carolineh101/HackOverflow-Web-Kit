$('#changeQuote').on('click', function (e) {

     var quotes = [];
     var numQuotes = 5;
 
     quotes.push('A ship in port is safe, but that is not what ships are for. Sail out to sea and do new things.'+'<br>'+'– Grace Hopper');
     quotes.push('Life is not easy for any of us. But what of that? We must have perseverance and above all confidence in ourselves. We must believe that we are gifted for something and that this thing must be attained.'+'<br>'+'—  Marie Curie');
     quotes.push('If people don\'t agree with you, the important thing is to listen to them. But if you\'ve listened to them carefully and you still think that you\'re right, then you must have the courage of your convictions.'+'<br>'+'– Jane Goodall');
     quotes.push('If you know you are on the right track, if you have this inner knowledge, then nobody can turn you off... no matter what they say.'+'<br>'+'– Barbara McClintock');
     quotes.push('Forget this world and all its troubles and if possible its multitudinous Charlatans-- everything in short but the Enchantress of Numbers.'+'<br>'+'– Ada Lovelace');
 
     var randNum = Math.floor(Math.random() * (numQuotes));
     document.getElementById("quote").innerHTML = quotes[randNum];

})
