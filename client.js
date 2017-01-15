var url = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?';

var getQuote = function (data) {
  $(".quote-text").text(data.quoteText);
  $(".author-text").text('Author: ' + data.quoteAuthor);
};

$('#quote').click(function() {
  $.getJSON(url, getQuote, 'jsonp');
});
