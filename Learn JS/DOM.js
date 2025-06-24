const elemet = document.getElementById('intro');

document.getElementById('intro').innerHTML = "The text from the intro paragraph (index 0) inside 'main' is:" + elemet.innerHTML;

function LoadDoc() {
    var Xhttp = new XMLHttpRequest();
    Xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById('demo').innerHTML = this.responseText;
        }
    };

    Xhttp.open('GEt', 'ajax_info.txt', true);
    Xhttp.send();
}
