function hideCookie() {
    document.querySelector('.cookie').remove();
}

function giveAlert() {
    alert('loading the weather report');
}

var morning = document.querySelectorAll('.morning');
var night = document.querySelectorAll('.night');

function tempChange(element) {
    if (element.value == 'cel   ') {
        for (var i = 0; i < morning.length; i++) {
            morning[i].innerText = Math.ceil((morning[i].innerText - 32) * .556);
            night[i].innerText = Math.ceil((night[i].innerText - 32) * .556);
        }
    } else {
        for (var i = 0; i < morning.length; i++) {
            morning[i].innerText = Math.ceil((morning[i].innerText * 1.8) + 32);
            night[i].innerText = Math.ceil((night[i].innerText * 1.8) + 32);
        }
    }


}