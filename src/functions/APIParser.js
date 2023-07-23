function GoldPrice(callback) {
  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener('readystatechange', function () {
    if (this.readyState === 4) {
      try {
        var res = JSON.parse(this.response);
        callback(res);
        xhr.abort();
      } catch (e) {}
    }
  });

  xhr.open('POST', 'https://hpbrokers.in/APIs/V1/golddata.php');
  xhr.setRequestHeader(
    'User-Agent',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/112.0',
  );
  xhr.setRequestHeader('Accept', 'application/json');
  //xhr.setRequestHeader("Connection", "keep-alive");
  // WARNING: Cookies will be stripped away by the browser before sending the request.

  xhr.send();
}
function Connected(callback) {
  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener('readystatechange', function () {
    if (this.readyState === 4) {
      try {
        var res = JSON.parse(this.response);
        callback(res);
        xhr.abort();
      } catch (e) {}
    }
  });

  xhr.open('POST', 'https://hpbrokers.in/APIs/V1/ivlink.php');
  xhr.setRequestHeader(
    'User-Agent',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/112.0',
  );
  xhr.setRequestHeader('Accept', 'application/json');
  //xhr.setRequestHeader("Connection", "keep-alive");
  // WARNING: Cookies will be stripped away by the browser before sending the request.

  xhr.send();
}

export { GoldPrice, Connected };
