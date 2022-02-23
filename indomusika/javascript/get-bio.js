function populatePre(url) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        document.getElementById(&#39;bio&#39;).textContent = this.responseText;
    };
    xhr.open(&#39;GET&#39;, url);
    xhr.send();
}
