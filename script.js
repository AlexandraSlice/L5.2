




var Swiper = new Swiper(".mySwiper", {
      pagination: {
        el: ".swiper-pagination",
      },
    });



let read_more_768 = document.getElementById("read_more_768");
let read_more_1120 = document.getElementById("read_more_1120");
const logos_768 = document.querySelectorAll(".hidden_logo_768");
const logos_1120 = document.querySelectorAll(".hidden_logo_1120");
const hidden_logo_768 = document.querySelector(".hidden_logo_768");
const hidden_logo_1120 = document.querySelector(".hidden_logo_1120"); 
const next_mnemonic_symbol_768 = document.querySelector(".next_mnemonic_symbol_768");
const next_mnemonic_symbol_1120 = document.querySelector(".next_mnemonic_symbol_1120");
const next_text_hidden = document.querySelector(".next_text_hidden"); 
const next_text_read_768 = document.querySelector(".next_text_read_768");   
const next_text_read_1120 = document.querySelector(".next_text_read_1120");  
const a = "Скрыть"; 
const hidden_text = document.querySelector(".hidden_text");   

read_more_768.addEventListener("click", function () {
    
    for (let hidden_logo_768 of logos_768) {
        if (hidden_logo_768.style.display = "none") { hidden_logo_768.style.display = "flex"; next_text_read_768.innerHTML = a; next_mnemonic_symbol_768.innerHTML = "&gg;"; next_mnemonic_symbol_768.style.transform = 'rotate(90deg)'}
else {hidden_logo_768.style.display = "none"}
        
    }
})


read_more_1120.addEventListener("click", function () {
    
    for (let hidden_logo_1120 of logos_1120) { 
if (hidden_logo_1120.style.display = "none") { hidden_logo_1120.style.display = "flex"; next_text_read_1120.innerHTML = a; next_mnemonic_symbol_1120.innerHTML = "&gg;"; next_mnemonic_symbol_1120.style.transform = 'rotate(90deg)'}
        else { hidden_logo_1120.style.display = "none"}
        
    }
})


