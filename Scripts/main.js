document.getElementById('produse').style.display = "none";
document.getElementById('administrator').style.display = "none";


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


var mesajeSalvate = localStorage.getItem('mesaje') ? JSON.parse(localStorage.getItem('mesaje')) : [];

afiseazaMesaje();

function afiseazaMail() {
    var dialog = document.getElementById('Mail');
    dialog.showModal();
}

function inchideMail() {
    var dialog = document.getElementById('Mail');
    dialog.close();
}

function adaugaMesaj(numePrenume, telefon, mesaj) {
    var mesajNou = {
        numePrenume: numePrenume,
        telefon: telefon,
        mesaj: mesaj
    };
    mesajeSalvate.push(mesajNou);
    localStorage.setItem('mesaje', JSON.stringify(mesajeSalvate));
    afiseazaMesaje();
    alert("Mesaj trimis cu succes!");
}

function stergeMesaj(index) {
    mesajeSalvate.splice(index, 1);
    localStorage.setItem('mesaje', JSON.stringify(mesajeSalvate));
    afiseazaMesaje();
}

function afiseazaMesaje() {
    var mesajeContainer = document.getElementById('administrator');
    mesajeContainer.innerHTML = '';
    mesajeSalvate.forEach(function(mesaj, index) {
        var mesajHTML = "<div class='mesaj'>" +
                        "<p><strong>Nume și Prenume:</strong> " + mesaj.numePrenume + "</p>" +
                        "<p><strong>Număr de Telefon:</strong> " + mesaj.telefon + "</p>" +
                        "<p><strong>Mesaj:</strong> " + mesaj.mesaj + "</p>" +
                        "<button class='close-button' onclick='stergeMesaj(" + index + ")'>Închide</button>" +
                        "</div>";
        mesajeContainer.innerHTML += mesajHTML;
    });
}

document.getElementById('mesaj-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var numePrenume = document.getElementById('nume-prenume').value;
    var telefon = document.getElementById('telefon').value;
    var mesaj = document.getElementById('mesaj').value;
    
    adaugaMesaj(numePrenume, telefon, mesaj);
    
    inchideMail();
});


function treci_la_produse() {
  document.getElementById('produse').style.display = "block";
  document.getElementById('first-page').style.display = "none";
  document.getElementById('second-page').style.display = "none";
  document.getElementById('administrator').style.display = "none";

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
    document.getElementById('produse').style.display = "none";
    document.getElementById('administrator').style.display = "block";
  }
  else {
    alert("Autentificare eșuată!\nVerifică numele de utilizator și parola.");
  }
}

function afiseazaCall() {
  document.getElementById('Call').showModal();
}

function inchideCall() {
  document.getElementById('Call').close();
}

function sunaNrTatiana() {
  window.location.href = "tel:+37360454650";
  inchideCall();
}

function sunaMihai() {
  window.location.href = "tel:+37368216670";
  inchideCall();
}

var mesajeSalvate = localStorage.getItem('mesaje') ? JSON.parse(localStorage.getItem('mesaje')) : [];

afiseazaMesaje();

function afiseazaMailForm(Id_Produs) {
    var dialogFormular = document.getElementById('MailFormular');
    document.getElementById('card_id').value = Id_Produs;
    dialogFormular.showModal();
}

function inchideMailForm() {
    var dialogFormular = document.getElementById('MailFormular');
    dialogFormular.close();
}

function adaugaMesaj(numePrenume, telefon, strada, cardId) {
    var mesajNou = {
        numePrenume: numePrenume,
        telefon: telefon,
        strada: strada,
        cardId: cardId
    };
    mesajeSalvate.push(mesajNou);
    localStorage.setItem('mesaje', JSON.stringify(mesajeSalvate));
    afiseazaMesaje();
    alert("Comandă trimisă cu succes!");
}

function stergeMesaj(index) {
    mesajeSalvate.splice(index, 1);
    localStorage.setItem('mesaje', JSON.stringify(mesajeSalvate));
    afiseazaMesaje();
}

function afiseazaMesaje() {
    var mesajeContainer = document.getElementById('administrator');
    mesajeContainer.innerHTML = '';
    mesajeSalvate.forEach(function(mesaj, index) {
        var mesajHTML = "<div class='mesaj'>" +
                        "<p><strong>Nume și Prenume:</strong> " + mesaj.numePrenume + "</p>" +
                        "<p><strong>Număr de Telefon:</strong> " + mesaj.telefon + "</p>" +
                        "<p><strong>Strada:</strong> " + mesaj.strada + "</p>" +
                        "<p><strong>Produs:</strong> " + mesaj.cardId + "</p>" +
                        "<button class='close-button' onclick='stergeMesaj(" + index + ")'>Închide</button>" +
                        "</div>";
        mesajeContainer.innerHTML += mesajHTML;
    });
}

document.getElementById('mesaj-formular').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var numePrenume = document.getElementById('card-nume-prenume').value;
    var telefon = document.getElementById('card-telefon').value;
    var strada = document.getElementById('card-strada').value;
    var cardId = document.getElementById('card_id').value;
    
    adaugaMesaj(numePrenume, telefon, strada, cardId);
    
    inchideMailForm();
});
