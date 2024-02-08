  function calculeazaAniTrecuti(data) {
    var dataCurenta = new Date();
    var dataMoment = new Date(data);
    var diferenta = dataCurenta - dataMoment;
    var aniTrecuti = Math.floor(diferenta / (1000 * 60 * 60 * 24 * 365));

    return aniTrecuti;
  }
  var elementAni = document.getElementById("ani");
  var dataMoment = 2006 ;
  var aniTrecuti = calculeazaAniTrecuti(dataMoment);
  elementAni.textContent = aniTrecuti;

  var experienta = document.getElementById("produse");
  experienta.textContent = 1524;