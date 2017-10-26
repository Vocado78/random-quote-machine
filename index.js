$(document).ready(function() {
  $("#getQuote").on("click", function() {
  $.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1" + Math.random(), function(a) {
      $("#quote").html(a[0].content);
      $("#author").html(a[0].title);

      $("#tweetQuote").off("click");
      
      $("#tweetQuote").on("click", function() {
        if (a[0].content.replace('<p>', '').replace('</p>', '').length + a[0].title.length <= 142) {    window.open("https://twitter.com/intent/tweet?text=" + encodeURIComponent(a[0].content.replace('<p>', '').replace('</p>', '') + a[0].title));
        } else {        window.open("https://twitter.com/intent/tweet?text=" + "Sorry the quote is too long to tweet.");
        };
      });
    });
  });
});