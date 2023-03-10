setInterval(()=>{
  let horas = document.getElementById('horas');
  let min = document.getElementById('min');
  let seg = document.getElementById('seg');
  let ampm = document.getElementById('ampm');
  
let hs = document.getElementById('hr');
let ms = document.getElementById('ms');
let sg = document.getElementById('sg');

let  hrs =document.querySelector('.hrs')
let  mis =document.querySelector('.mis')
let  sec =document.querySelector('.sec')

  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let am = h >= 12 ? "PM" : "AM";
  
  if (h > 12){
    h = h - 12;
  }
  
  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;
  
  horas.innerHTML = h +"<br><span>Horas</span>";
  min.innerHTML = m +"<br><span>Minutos</span>";
  seg.innerHTML= s +"<br><span>Seconds</span>";
  ampm.innerHTML = am;

  hs.style.strokeDashoffset = 440 -(440 * h) / 12;
  ms.style.strokeDashoffset = 440 -(440 * m) / 60;
  sg.style.strokeDashoffset = 440 -(440 * s) / 60;

  hrs.style.transform =`rotate(${h *30}deg)`;
  mis.style.transform =`rotate(${m *6}deg)`;
  sec.style.transform =`rotate(${s *6}deg)`;
  
})