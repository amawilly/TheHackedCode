function calculeazaAniTrecuti(data) {
  var dataCurenta = new Date();
  var dataMoment = new Date(data);
  var diferenta = dataCurenta - dataMoment;
  var aniTrecuti = Math.floor(diferenta / (1000 * 60 * 60 * 24 * 365));

  return aniTrecuti;
}
var elementAni = document.getElementById("ani");
var dataMoment = "2006";
var aniTrecuti = calculeazaAniTrecuti(dataMoment);
elementAni.textContent = aniTrecuti;

document.addEventListener('scroll', function() {
var scrollPosition = (document.documentElement.scrollTop || document.body.scrollTop) + window.innerHeight;
var totalHeight = document.documentElement.scrollHeight;
var scrollbarClass = 'scrollbar-middle';

if (scrollPosition === totalHeight) {
  scrollbarClass = 'scrollbar-end';
} else if (scrollPosition === window.innerHeight) {
  scrollbarClass = 'scrollbar-start';
}

document.body.className = scrollbarClass;
});
// fereastra de dialog----------------------------------------------
var dialog = document.getElementById('Mail');

function afiseazaMail() {
dialog.showModal();
}

function inchideMail() {
dialog.close();
}

function trimiteFeedback() {
var feedback = document.getElementById('feedback').value;
inchideFereastra();
alert('Mulțumim pentru feedback-ul tău: ' + feedback);
}
// call
function afiseazaCall() {
document.getElementById('Call').showModal();
}

function inchideCall() {
document.getElementById('Call').close();
}

function sunaNrEmilian() {
window.location.href = "tel:+37369503183";
inchideCall(); // închide dialogul după ce s-a făcut apelul
}

function sunaNrDanMihai() {
window.location.href = "tel:+37345672399";
inchideCall(); // închide dialogul după ce s-a făcut apelul
}