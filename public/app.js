catsArray = [
{name: "Name: Snickers", favouriteFood: "Favourite Food: Baws", image: "https://gyazo.com/d71bd77fcef4dd0210c5cefcd3515702.png"},
{name: "Name: Cats are shite", favouriteFood: "Favourite Food: Being indifferent to everything", image: "https://s-media-cache-ak0.pinimg.com/236x/50/65/b0/5065b0db8c363c7e770b720f08dcc464--swag-music-microsoft-paint.jpg"},
{name: "Name: Boba", favouriteFood: "Favourite food: Sock fluff", image: "http://1.bp.blogspot.com/_mmBw3uzPnJI/RdoNcixiLHI/AAAAAAAAA3w/YceGcRbHPJA/s400/painted_cats_30.jpg"}, {name: "Name: Barnaby", favouriteFood: "Favourite food: Tuna", image: "https://www.mylionking.com/fan/art/Artists/NikkiB123Pictures/Art/586.jpg"}, {name: "Name: Max", favouriteFood: "Favourite food: Whiskas Temptations", image: "https://static1.fjcdn.com/comments/Hey+guys+does+anyone+know+of+fairly+decent+paint+_7e580622d1f9836e1a295bb3b6fcc9b0.png"}]

var createCat = function(object) {

  var unorderedListItem = document.createElement("ul");
  unorderedListItem.classList.add("cat");

  var listItem1 = document.createElement("li");
  listItem1.innerText = object.name;

  var listItem2 = document.createElement("li");
  listItem2.innerText = object.favouriteFood;

  var image = document.createElement("img");
  image.src = object.image;
  image.width = "500";

  unorderedListItem.appendChild(listItem1);
  unorderedListItem.appendChild(listItem2);
  unorderedListItem.appendChild(image);

  var catlist = document.getElementById("cats");
  catlist.appendChild(unorderedListItem);

};

  var app = function() {
    catsArray.forEach(createCat);
  }

  window.onload = app;