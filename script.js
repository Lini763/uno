  let legen = 0;
  let zu = 0;
  let max = 2;
  let karten = 15;
  let punkte = 0;
  let gpunkte = localStorage.getItem("lgpunkte");
  const karte1 = ["grün", "7"];
  const karte2 = ["grün", "3"];
  const karte3 = ["rot", "9"];
  const karte4 = ["rot", "3"];
  const karte5 = ["blau", "9"];
  const karte6 = ["rot", "2"];
  const karte7 = ["gelb", "2"];
  const karte8 = ["grün", "4"];
  const karte9 = ["blau", "6"];
  const karte10 = ["lila", "2"];
  const karte11 = ["gelb", "4"];
  const karte12 = ["lila", "9"];
  const karte13 = ["lila", "8"];
  const karte14 = ["gelb", "9"];
  const karte15 = ["blau", "3"];
  const karte16 = ["lila", "-3"];
  const karte17 = ["gelb", "18"];
  const karte18 = ["rot", "12"];
  const stapel = ["gelb", "7"];

  let x1 = document.getElementById("k1");
  let x2 = document.getElementById("k2");
  let x3 = document.getElementById("k3");
  let x4 = document.getElementById("k4");
  let x5 = document.getElementById("k5");
  let x6 = document.getElementById("k6");
  let x7 = document.getElementById("k7");
  let x8 = document.getElementById("k8");
  let x9 = document.getElementById("k9");
  let x10 = document.getElementById("k10");
  let x11 = document.getElementById("k11");
  let x12 = document.getElementById("k12");
  let x13 = document.getElementById("k13");
  let x14 = document.getElementById("k14");
  let x15 = document.getElementById("k15");
  let x16 = document.getElementById("k16");
  let x17 = document.getElementById("k17");
  let x18 = document.getElementById("k18");

  document.getElementById("gpunkt").textContent = gpunkte;
/*
  let test = 3;

  test = localStorage.getItem("test") || 1;

  test = +test

  if(test === 4){
    max = localStorage.getItem("max") || 3;
  };
*/
  function sonder(){
    karte16[1]++;
    karte17[1] = karte17[1] - 1;
    karte18[1] = karte18[1] - 1;
    document.getElementById("k16").textContent = karte16[1];
    document.getElementById("k17").textContent = karte17[1];
    document.getElementById("k18").textContent = karte18[1];
    x16 = document.getElementById("k16");
    x17 = document.getElementById("k17");
    x18 = document.getElementById("k18");
    punkte++;
    document.getElementById("punkt").textContent = punkte;
    localStorage.setItem("lgpunkte", gpunkte);
  };

  function uno1(){
    if(karte1[0] == stapel[0] || karte1[1] == stapel[1]){
        stapel[0] = karte1[0];
        stapel[1] = karte1[1];
        karten = karten - 1;
        document.getElementById("stapel").style.backgroundColor = "green";
        document.getElementById("stapel").textContent = karte1[1];
        
        asd = Math.ceil(Math.random() * max);
        karte1[1] = asd;
        document.getElementById("k1").textContent = karte1[1];

        asd = Math.ceil(Math.random() * 5);
        if(asd == 1){
          karte1[0] = "blau";
          document.getElementById("k1").style.backgroundColor = "blue";
        };
        if(asd == 2){
          karte1[0] = "grün";
          document.getElementById("k1").style.backgroundColor = "green";
        };
        if(asd == 3){
          karte1[0] = "gelb";
          document.getElementById("k1").style.backgroundColor = "yellow";
        };
        if(asd == 4){
          karte1[0] = "rot";
          document.getElementById("k1").style.backgroundColor = "red";
        };
        if(asd == 5){
          karte1[0] = "lila";
          document.getElementById("k1").style.backgroundColor = "purple";
        };
        asd = Math.ceil(Math.random() * 10);
        if(asd == 1){
          karte1[0] = "weis";
          document.getElementById("k1").style.backgroundColor = "white";
        };
        console.log(asd);
        //x1.style.display = "none";

        sonder();
      };
      schwierigkeit()
    };
  function uno2(){
    if(karte2[0] == stapel[0] || karte2[1] == stapel[1]){
        stapel[0] = karte2[0];
        stapel[1] = karte2[1];
        karten = karten - 1;
        document.getElementById("stapel").style.backgroundColor = "green";
        document.getElementById("stapel").textContent = karte2[1];
        asd = Math.ceil(Math.random() * max);
        karte2[1] = asd;
        document.getElementById("k2").textContent = karte2[1];

        asd = Math.ceil(Math.random() * 5);
        if(asd == 1){
          karte2[0] = "blau";
          document.getElementById("k2").style.backgroundColor = "blue";
        };
        if(asd == 2){
          karte2[0] = "grün";
          document.getElementById("k2").style.backgroundColor = "green";
        };
        if(asd == 3){
          karte2[0] = "gelb";
          document.getElementById("k2").style.backgroundColor = "yellow";
        };
        if(asd == 4){
          karte2[0] = "rot";
          document.getElementById("k2").style.backgroundColor = "red";
        };
        if(asd == 5){
          karte2[0] = "lila";
          document.getElementById("k2").style.backgroundColor = "purple";
        };
        asd = Math.ceil(Math.random() * 10);
        if(asd == 1){
          karte2[0] = "weis";
          document.getElementById("k2").style.backgroundColor = "white";
        };
        sonder();
        };
        schwierigkeit()
    };
  function uno3(){
    if(karte3[0] == stapel[0] || karte3[1] == stapel[1]){
        stapel[0] = karte3[0];
        stapel[1] = karte3[1];
        karten = karten - 1;
        document.getElementById("stapel").style.backgroundColor = "red";
        document.getElementById("stapel").textContent = karte3[1];

        asd = Math.ceil(Math.random() * max);
        karte3[1] = asd;
        document.getElementById("k3").textContent = karte3[1];

        asd = Math.ceil(Math.random() * 5);
        if(asd == 1){
          karte3[0] = "blau";
          document.getElementById("k3").style.backgroundColor = "blue";
        };
        if(asd == 2){
          karte3[0] = "grün";
          document.getElementById("k3").style.backgroundColor = "green";
        };
        if(asd == 3){
          karte3[0] = "gelb";
          document.getElementById("k3").style.backgroundColor = "yellow";
        };
        if(asd == 4){
          karte3[0] = "rot";
          document.getElementById("k3").style.backgroundColor = "red";
        };
        if(asd == 5){
          karte3[0] = "lila";
          document.getElementById("k3").style.backgroundColor = "purple";
        };
        asd = Math.ceil(Math.random() * 10);
        if(asd == 1){
          karte3[0] = "weis";
          document.getElementById("k3").style.backgroundColor = "white";
        };
        sonder();
        };
        schwierigkeit()
    };
  function uno4(){
    if(karte4[0] == stapel[0] || karte4[1] == stapel[1]){
        stapel[0] = karte4[0];
        stapel[1] = karte4[1];
        karten = karten - 1;
        document.getElementById("stapel").style.backgroundColor = "red";
        document.getElementById("stapel").textContent = karte4[1];
        asd = Math.ceil(Math.random() * max);
        karte4[1] = asd;
        document.getElementById("k4").textContent = karte4[1];

        asd = Math.ceil(Math.random() * 5);
        if(asd == 1){
          karte4[0] = "blau";
          document.getElementById("k4").style.backgroundColor = "blue";
        };
        if(asd == 2){
          karte4[0] = "grün";
          document.getElementById("k4").style.backgroundColor = "green";
        };
        if(asd == 3){
          karte4[0] = "gelb";
          document.getElementById("k4").style.backgroundColor = "yellow";
        };
        if(asd == 4){
          karte4[0] = "rot";
          document.getElementById("k4").style.backgroundColor = "red";
        };
        if(asd == 5){
          karte4[0] = "lila";
          document.getElementById("k4").style.backgroundColor = "purple";
        };
        asd = Math.ceil(Math.random() * 10);
        if(asd == 1){
          karte4[0] = "weis";
          document.getElementById("k4").style.backgroundColor = "white";
        };
        sonder();
        };
        schwierigkeit()
    };
  function uno5(){
    if(karte5[0] == stapel[0] || karte5[1] == stapel[1]){
        stapel[0] = karte5[0];
        stapel[1] = karte5[1];
        karten = karten - 1;
        document.getElementById("stapel").style.backgroundColor = "blue";
        document.getElementById("stapel").textContent = karte5[1];
        asd = Math.ceil(Math.random() * max);
        karte5[1] = asd;
        document.getElementById("k5").textContent = karte5[1];

        asd = Math.ceil(Math.random() * 5);
        if(asd == 1){
          karte5[0] = "blau";
          document.getElementById("k5").style.backgroundColor = "blue";
        };
        if(asd == 2){
          karte5[0] = "grün";
          document.getElementById("k5").style.backgroundColor = "green";
        };
        if(asd == 3){
          karte5[0] = "gelb";
          document.getElementById("k5").style.backgroundColor = "yellow";
        };
        if(asd == 4){
          karte5[0] = "rot";
          document.getElementById("k5").style.backgroundColor = "red";
        };
        if(asd == 5){
          karte5[0] = "lila";
          document.getElementById("k5").style.backgroundColor = "purple";
        };
        asd = Math.ceil(Math.random() * 10);
        if(asd == 1){
          karte5[0] = "weis";
          document.getElementById("k5").style.backgroundColor = "white";
        };
        sonder();
        };
        schwierigkeit()
    };
  function uno6(){
    if(karte6[0] == stapel[0] || karte6[1] == stapel[1]){
        stapel[0] = karte6[0];
        stapel[1] = karte6[1];
        karten = karten - 1;
        document.getElementById("stapel").style.backgroundColor = "red";
        document.getElementById("stapel").textContent = karte6[1];
        asd = Math.ceil(Math.random() * max);
        karte6[1] = asd;
        document.getElementById("k6").textContent = karte6[1];

        asd = Math.ceil(Math.random() * 5);
        if(asd == 1){
          karte6[0] = "blau";
          document.getElementById("k6").style.backgroundColor = "blue";
        };
        if(asd == 2){
          karte6[0] = "grün";
          document.getElementById("k6").style.backgroundColor = "green";
        };
        if(asd == 3){
          karte6[0] = "gelb";
          document.getElementById("k6").style.backgroundColor = "yellow";
        };
        if(asd == 4){
          karte6[0] = "rot";
          document.getElementById("k6").style.backgroundColor = "red";
        };
        if(asd == 5){
          karte6[0] = "lila";
          document.getElementById("k6").style.backgroundColor = "purple";
        };
        asd = Math.ceil(Math.random() * 10);
        if(asd == 1){
          karte6[0] = "weis";
          document.getElementById("k6").style.backgroundColor = "white";
        };
        sonder();
        };
        schwierigkeit()
    };
  function uno7(){
    if(karte7[0] == stapel[0] || karte7[1] == stapel[1]){
        stapel[0] = karte7[0];
        stapel[1] = karte7[1];
        karten = karten - 1;
        document.getElementById("stapel").style.backgroundColor = "yellow";
        document.getElementById("stapel").textContent = karte7[1];
        asd = Math.ceil(Math.random() * max);
        karte7[1] = asd;
        document.getElementById("k7").textContent = karte7[1];

        asd = Math.ceil(Math.random() * 5);
        if(asd == 1){
          karte7[0] = "blau";
          document.getElementById("k7").style.backgroundColor = "blue";
        };
        if(asd == 2){
          karte7[0] = "grün";
          document.getElementById("k7").style.backgroundColor = "green";
        };
        if(asd == 3){
          karte7[0] = "gelb";
          document.getElementById("k7").style.backgroundColor = "yellow";
        };
        if(asd == 4){
          karte7[0] = "rot";
          document.getElementById("k7").style.backgroundColor = "red";
        };
        if(asd == 5){
          karte7[0] = "lila";
          document.getElementById("k7").style.backgroundColor = "purple";
        };
        asd = Math.ceil(Math.random() * 10);
        if(asd == 1){
          karte7[0] = "weis";
          document.getElementById("k7").style.backgroundColor = "white";
        };
        sonder();
        };
        schwierigkeit()
    };
  function uno8(){
    if(karte8[0] == stapel[0] || karte8[1] == stapel[1]){
        stapel[0] = karte8[0];
        stapel[1] = karte8[1];
        karten = karten - 1;
        document.getElementById("stapel").style.backgroundColor = "green";
        document.getElementById("stapel").textContent = karte8[1];
        asd = Math.ceil(Math.random() * max);
        karte8[1] = asd;
        document.getElementById("k8").textContent = karte8[1];

        asd = Math.ceil(Math.random() * 5);
        if(asd == 1){
          karte8[0] = "blau";
          document.getElementById("k8").style.backgroundColor = "blue";
        };
        if(asd == 2){
          karte8[0] = "grün";
          document.getElementById("k8").style.backgroundColor = "green";
        };
        if(asd == 3){
          karte8[0] = "gelb";
          document.getElementById("k8").style.backgroundColor = "yellow";
        };
        if(asd == 4){
          karte8[0] = "rot";
          document.getElementById("k8").style.backgroundColor = "red";
        };
        if(asd == 5){
          karte8[0] = "lila";
          document.getElementById("k8").style.backgroundColor = "purple";
        };
        asd = Math.ceil(Math.random() * 10);
        if(asd == 1){
          karte8[0] = "weis";
          document.getElementById("k8").style.backgroundColor = "white";
        };
        sonder();
        };
        schwierigkeit()
    };
  function uno9(){
    if(karte9[0] == stapel[0] || karte9[1] == stapel[1]){
        stapel[0] = karte9[0];
        stapel[1] = karte9[1];
        karten = karten - 1;
        document.getElementById("stapel").style.backgroundColor = "blue";
        document.getElementById("stapel").textContent = karte9[1];
        asd = Math.ceil(Math.random() * max);
        karte9[1] = asd;
        document.getElementById("k9").textContent = karte9[1];

        asd = Math.ceil(Math.random() * 5);
        if(asd == 1){
          karte9[0] = "blau";
          document.getElementById("k9").style.backgroundColor = "blue";
        };
        if(asd == 2){
          karte9[0] = "grün";
          document.getElementById("k9").style.backgroundColor = "green";
        };
        if(asd == 3){
          karte9[0] = "gelb";
          document.getElementById("k9").style.backgroundColor = "yellow";
        };
        if(asd == 4){
          karte9[0] = "rot";
          document.getElementById("k9").style.backgroundColor = "red";
        };
        if(asd == 5){
          karte9[0] = "lila";
          document.getElementById("k9").style.backgroundColor = "purple";
        };
        asd = Math.ceil(Math.random() * 10);
        if(asd == 1){
          karte9[0] = "weis";
          document.getElementById("k9").style.backgroundColor = "white";
        };
        sonder();
        };
        schwierigkeit()
    };
  function uno10(){
    if(karte10[0] == stapel[0] || karte10[1] == stapel[1]){
        stapel[0] = karte10[0];
        stapel[1] = karte10[1];
        karten = karten - 1;
        document.getElementById("stapel").style.backgroundColor = "purple";
        document.getElementById("stapel").textContent = karte10[1];
        asd = Math.ceil(Math.random() * max);
        karte10[1] = asd;
        document.getElementById("k10").textContent = karte10[1];

        asd = Math.ceil(Math.random() * 5);
        if(asd == 1){
          karte10[0] = "blau";
          document.getElementById("k10").style.backgroundColor = "blue";
        };
        if(asd == 2){
          karte10[0] = "grün";
          document.getElementById("k10").style.backgroundColor = "green";
        };
        if(asd == 3){
          karte10[0] = "gelb";
          document.getElementById("k10").style.backgroundColor = "yellow";
        };
        if(asd == 4){
          karte10[0] = "rot";
          document.getElementById("k10").style.backgroundColor = "red";
        };
        if(asd == 5){
          karte10[0] = "lila";
          document.getElementById("k10").style.backgroundColor = "purple";
        };
        asd = Math.ceil(Math.random() * 10);
        if(asd == 1){
          karte10[0] = "weis";
          document.getElementById("k10").style.backgroundColor = "white";
        };
        sonder();
        };
        schwierigkeit()
    };
  function uno11(){
    if(karte11[0] == stapel[0] || karte11[1] == stapel[1]){
        stapel[0] = karte11[0];
        stapel[1] = karte11[1];
        karten = karten - 1;
        document.getElementById("stapel").style.backgroundColor = "yellow";
        document.getElementById("stapel").textContent = karte11[1];
        asd = Math.ceil(Math.random() * max);
        karte11[1] = asd;
        document.getElementById("k11").textContent = karte11[1];

        asd = Math.ceil(Math.random() * 5);
        if(asd == 1){
          karte11[0] = "blau";
          document.getElementById("k11").style.backgroundColor = "blue";
        };
        if(asd == 2){
          karte11[0] = "grün";
          document.getElementById("k11").style.backgroundColor = "green";
        };
        if(asd == 3){
          karte11[0] = "gelb";
          document.getElementById("k11").style.backgroundColor = "yellow";
        };
        if(asd == 4){
          karte11[0] = "rot";
          document.getElementById("k11").style.backgroundColor = "red";
        };
        if(asd == 5){
          karte11[0] = "lila";
          document.getElementById("k11").style.backgroundColor = "purple";
        };
        asd = Math.ceil(Math.random() * 10);
        if(asd == 1){
          karte11[0] = "weis";
          document.getElementById("k11").style.backgroundColor = "white";
        };
        sonder();
        };
        schwierigkeit()
    };
  function uno12(){
    if(karte12[0] == stapel[0] || karte12[1] == stapel[1]){
        stapel[0] = karte12[0];
        stapel[1] = karte12[1];
        karten = karten - 1;
        document.getElementById("stapel").style.backgroundColor = "purple";
        document.getElementById("stapel").textContent = karte12[1];
        asd = Math.ceil(Math.random() * max);
        karte12[1] = asd;
        document.getElementById("k12").textContent = karte12[1];

        asd = Math.ceil(Math.random() * 5);
        if(asd == 1){
          karte12[0] = "blau";
          document.getElementById("k12").style.backgroundColor = "blue";
        };
        if(asd == 2){
          karte12[0] = "grün";
          document.getElementById("k12").style.backgroundColor = "green";
        };
        if(asd == 3){
          karte12[0] = "gelb";
          document.getElementById("k12").style.backgroundColor = "yellow";
        };
        if(asd == 4){
          karte12[0] = "rot";
          document.getElementById("k12").style.backgroundColor = "red";
        };
        if(asd == 5){
          karte12[0] = "lila";
          document.getElementById("k12").style.backgroundColor = "purple";
        };
        asd = Math.ceil(Math.random() * 10);
        if(asd == 1){
          karte12[0] = "weis";
          document.getElementById("k12").style.backgroundColor = "white";
        };
        sonder();
        };
        schwierigkeit()
    };
  function uno13(){
    if(karte13[0] == stapel[0] || karte13[1] == stapel[1]){
        stapel[0] = karte13[0];
        stapel[1] = karte13[1];
        karten = karten - 1;
        document.getElementById("stapel").style.backgroundColor = "purple";
        document.getElementById("stapel").textContent = karte13[1];
        asd = Math.ceil(Math.random() * max);
        karte13[1] = asd;
        document.getElementById("k13").textContent = karte13[1];

        asd = Math.ceil(Math.random() * 5);
        if(asd == 1){
          karte13[0] = "blau";
          document.getElementById("k13").style.backgroundColor = "blue";
        };
        if(asd == 2){
          karte13[0] = "grün";
          document.getElementById("k13").style.backgroundColor = "green";
        };
        if(asd == 3){
          karte13[0] = "gelb";
          document.getElementById("k13").style.backgroundColor = "yellow";
        };
        if(asd == 4){
          karte13[0] = "rot";
          document.getElementById("k13").style.backgroundColor = "red";
        };
        if(asd == 5){
          karte13[0] = "lila";
          document.getElementById("k13").style.backgroundColor = "purple";
        };
        asd = Math.ceil(Math.random() * 10);
        if(asd == 1){
          karte13[0] = "weis";
          document.getElementById("k13").style.backgroundColor = "white";
        };
        sonder();
        };
        schwierigkeit()
    };
  function uno14(){
    if(karte14[0] == stapel[0] || karte14[1] == stapel[1]){
        stapel[0] = karte14[0];
        stapel[1] = karte14[1];
        karten = karten - 1;
        document.getElementById("stapel").style.backgroundColor = "yellow";
        document.getElementById("stapel").textContent = karte14[1];
        asd = Math.ceil(Math.random() * max);
        karte14[1] = asd;
        document.getElementById("k14").textContent = karte14[1];

        asd = Math.ceil(Math.random() * 5);
        if(asd == 1){
          karte14[0] = "blau";
          document.getElementById("k14").style.backgroundColor = "blue";
        };
        if(asd == 2){
          karte14[0] = "grün";
          document.getElementById("k14").style.backgroundColor = "green";
        };
        if(asd == 3){
          karte14[0] = "gelb";
          document.getElementById("k14").style.backgroundColor = "yellow";
        };
        if(asd == 4){
          karte14[0] = "rot";
          document.getElementById("k14").style.backgroundColor = "red";
        };
        if(asd == 5){
          karte14[0] = "lila";
          document.getElementById("k14").style.backgroundColor = "purple";
        };
        asd = Math.ceil(Math.random() * 10);
        if(asd == 1){
          karte14[0] = "weis";
          document.getElementById("k14").style.backgroundColor = "white";
        };
        sonder();
        };
        schwierigkeit()
    };
  function uno15(){
    if(karte15[0] == stapel[0] || karte15[1] == stapel[1]){
        stapel[0] = karte15[0];
        stapel[1] = karte15[1];
        karten = karten - 1;
        document.getElementById("stapel").style.backgroundColor = "blue";
        document.getElementById("stapel").textContent = karte15[1];
        asd = Math.ceil(Math.random() * max);
        karte15[1] = asd;
        document.getElementById("k15").textContent = karte15[1];

        asd = Math.ceil(Math.random() * 5);
        if(asd == 1){
          karte15[0] = "blau";
          document.getElementById("k15").style.backgroundColor = "blue";
        };
        if(asd == 2){
          karte15[0] = "grün";
          document.getElementById("k15").style.backgroundColor = "green";
        };
        if(asd == 3){
          karte15[0] = "gelb";
          document.getElementById("k15").style.backgroundColor = "yellow";
        };
        if(asd == 4){
          karte15[0] = "rot";
          document.getElementById("k15").style.backgroundColor = "red";
        };
        if(asd == 5){
          karte15[0] = "lila";
          document.getElementById("k15").style.backgroundColor = "purple";
        };
        asd = Math.ceil(Math.random() * 10);
        if(asd == 1){
          karte15[0] = "weis";
          document.getElementById("k15").style.backgroundColor = "white";
        };
        sonder();
        };
        schwierigkeit()
    };
  function uno16(){
    if(karte16[0] == stapel[0] || karte16[1] == stapel[1]){
        stapel[0] = karte16[0];
        stapel[1] = karte16[1];
        karte16[0] = 0;
        document.getElementById("stapel").style.backgroundColor = "purple";
        document.getElementById("stapel").textContent = karte16[1];
        x16.style.display = "none";
        sonder();
        };
    };
  function uno17(){
    if(karte17[0] == stapel[0] || karte17[1] == stapel[1]){
        stapel[0] = karte17[0];
        stapel[1] = karte17[1];
        karte17[0] = 0;
        document.getElementById("stapel").style.backgroundColor = "yellow";
        document.getElementById("stapel").textContent = karte17[1];
        x17.style.display = "none";
        sonder();
        };
    };
  function uno18(){
    if(karte18[0] == stapel[0] || karte18[1] == stapel[1]){
        stapel[0] = karte18[0];
        stapel[1] = karte18[1];
        karte18[0] = 0;
        document.getElementById("stapel").style.backgroundColor = "red";
        document.getElementById("stapel").textContent = karte18[1];
        x18.style.display = "none";
        sonder();
        };
    };
    let asd = 0;
    asd = Math.ceil(Math.random() * 9);
   /* 
    karte1[1] = asd;
    document.getElementById("k1").textContent = karte1[1];
    x1 = document.getElementById("k1");
    

    asd = Math.floor(Math.random() * 1000);
    if(asd > 500){
      karte3[1] = 4;
      document.getElementById("k3").textContent = karte3[1];
      x3 = document.getElementById("k3");
    };
*/
function zufal(){
  zu++;
  asd = Math.ceil(Math.random() * max);
  document.open();
  document.write('<script>karte'+zu+'[1] = asd; document.getElementById("k'+zu+'").textContent = karte'+zu+'[1]; x'+zu+' = document.getElementById("k'+zu+'");</script>');
  document.close();
};
function setnumber(){
  max = prompt("wie gross solten die Zahlen auf den Karten werden");
  zu = 0;
  while(zu < 15.5){
    zufal();
  }
};

function nextround(){
  max++;
  zu = 0; /*
  x1.style.display = "inline-block";
  x2.style.display = "inline-block";
  x3.style.display = "inline-block";
  x4.style.display = "inline-block";
  x5.style.display = "inline-block";
  x6.style.display = "inline-block";
  x7.style.display = "inline-block";
  x8.style.display = "inline-block";
  x9.style.display = "inline-block";
  x10.style.display = "inline-block";
  x11.style.display = "inline-block";
  x12.style.display = "inline-block";
  x13.style.display = "inline-block";
  x14.style.display = "inline-block";
  x15.style.display = "inline-block";*/
  while(zu < 14.5){
    zufal();
  };
  karten = 15;
};

asd = Math.ceil(Math.random() * max);
stapel[1] = asd;
document.getElementById("stapel").textContent = stapel[1];
document.getElementById("stapel").textContent = asd;
function gratulieren(){
  if(karten === 0){
    alert("Sie haben alle Karten gelegt.");
    nextround();
  };
};
function nextlevel(){
  if(karten === 0){
    karten = 15;
    test = 4;
    localStorage.setItem("max", max);
    localStorage.setItem("test", test);
  }
}
nextround();
setInterval(nextlevel, 1000);

function farbe(){
  if(stapel[0] == "gelb"){
    document.getElementById("stapel").style.backgroundColor = "yellow";
  };
  if(stapel[0] == "lila"){
    document.getElementById("stapel").style.backgroundColor = "purple";
  };
  if(stapel[0] == "rot"){
    document.getElementById("stapel").style.backgroundColor = "red";
  };
  if(stapel[0] == "blau"){
    document.getElementById("stapel").style.backgroundColor = "blue";
  };
  if(stapel[0] == "grün"){
    document.getElementById("stapel").style.backgroundColor = "green";
  };
  if(stapel[0] == "weis"){
    document.getElementById("stapel").style.backgroundColor = "white";
  };
  if(punkte > gpunkte - 1){
    gpunkte = punkte;
    document.getElementById("gpunkt").textContent = gpunkte;
    localStorage.setItem("lgpunkte", gpunkte);
  };
};
function schwierigkeit(){
  if(karten == 10){
    max = 4;
    alert("Sie haben 10 Karten gelegt jetzt können Karten biss 5 gehen")
  };
  if(karten == 25){
    max = 7;
    alert("Sie haben 25 Karten gelegt jetzt können Karten biss 8 gehen")
  };
  if(karten == 40){
    max = 9;
    alert("Sie haben 40 Karten gelegt jetzt können Karten biss 10 gehen")
  };
  if(karten == 60){
    max = 11;
    alert("Sie haben 10 Karten gelegt jetzt können Karten biss 12 gehen")
  };
  if(karten == 100){
    max = 15;
    alert("Sie haben 100 Karten gelegt jetzt können Karten biss 16 gehen")
  };
};
setInterval(farbe, 100);
