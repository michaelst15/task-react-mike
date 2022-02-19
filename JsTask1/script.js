//buat mode malam sederhana
function modeNight() {
    var element = document.body;
    element.classList.toggle("secondary-mode");
  }
 
 //buat pop up selamat datang
 window.alert("Selamat Datang Di website Saya");

 //Question
 let tanya = prompt("apakah anda mengenal mike?yes/no");
 let jawab1 = "yes";
 let jawab2 = "no";

 if (tanya === jawab1) {
     alert("ciee yang udah kenal");
 } else if(tanya === jawab2) {
     alert("kenalan dong");
 } else {
    window.open('http://www.google.com?ReportID=1', '_blank');
 }