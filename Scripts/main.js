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

  var experienta = document.getElementById("produse");
  experienta.textContent = 1524;

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
var dialog = document.getElementById('dialog');

function afiseazaFereastra() {
  dialog.showModal();
}

function inchideFereastra() {
  dialog.close();
}

function trimiteFeedback() {
  var feedback = document.getElementById('feedback').value;
  inchideFereastra();
  alert('Mulțumim pentru feedback-ul tău: ' + feedback);
}