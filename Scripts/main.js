document.getElementById('produse').style.display = "none";

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


function afiseazaMail() {
  document.getElementById('Mail').showModal();
}
function inchideMail() {
  document.getElementById('Mail').close();
}

function trimiteFeedback() {
  var nume = document.getElementById('nume').value;
  var prenume = document.getElementById('prenume').value;
  var telefon = document.getElementById('telefon').value;
  var feedback = document.getElementById('feedback').value;
  var data = new Date();
  var ora = data.getHours() + ":" + (data.getMinutes() < 10 ? '0' : '') + data.getMinutes(); // Ora curentă

  inchideMail();
}


function treci_la_produse() {
  document.getElementById('produse').style.display = "block";
  document.getElementById('first-page').style.display = "none";
  document.getElementById('second-page').style.display = "none";
}

function deschideAdmin() {
  document.getElementById('loginDialog').showModal();
}
function inchideAdmin() {
  document.getElementById('loginDialog').close();
}
function logareAdmin(){
  var user_name = document.getElementById('adm-username').value;
  var password = document.getElementById('adm-password').value;

  if ((user_name === 'Grenauto') && (password === 'admin')) {
    document.getElementById('first-page').style.display = "none";
    document.getElementById('second-page').style.display = "none";
    document.getElementById('loginDialog').close();

  }
  else {
    alert("Autentificare eșuată! \nVerifică numele de utilizator și parola.");
  }
}


function afiseazaCall() {
  document.getElementById('Call').showModal();
}

function inchideCall() {
  document.getElementById('Call').close();
}

function sunaNrEmilian() {
  window.location.href = "tel:+37369503183";
  inchideCall();
}

function sunaNrDanMihai() {
  window.location.href = "tel:+37345672399";
  inchideCall();
}