let names = prompt("İsim gir:")

let h1 = document.querySelector("#h1")
let elementDate = document.querySelector("#date")
let elementTime = document.querySelector("#time")

function showTime(){
    let date = new Date();

    let year = date.getFullYear();
    let month = date.getMonth() +1;
    let day = date.getDay() - 1;

    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    let month_;

    switch(month){
        case 1: month_ = "Ocak"; break;
        case 2: month_ = "Şubat"; break;
        case 3: month_ = "Mart"; break;
        case 4: month_ = "Nisan"; break;
        case 5: month_ = "Mayıs"; break;
        case 6: month_ = "Haziran"; break;
        case 7: month_ = "Temmuz"; break;
        case 8: month_ = "Ağustos"; break;
        case 9: month_ = "Eylül"; break;
        case 10: month_ = "Ekim"; break;
        case 11: month_ = "Kasım"; break;
        case 12: month_ = "Aralık"; break;
    }
    day = (day<10) ? "0"+day : day;
    hour = (hour<10) ? "0"+hour : hour;
    min = (min<10) ? "0"+min : min;
    sec = (sec<10) ? "0"+sec : sec;
   
    let message = `Merhaba, ${names}! Hoşgeldin!
    ${day} ${month_} ${year} tarihinde 
    Kodluyoruz Frontend Web Development Patikasının JavaScript 
    Bölümü 1. Ödevindesiniz.`
    h1.innerText = message;

    let getDate = `Tarih: ${day} ${month_} ${year}
    (${day}.${month}.${year})`
    let getTime = `Saat: ${hour}:${min}:${sec}`

    elementDate.innerText = getDate;
    elementDate.textContent = getDate;

    elementTime.innerText = getTime;
    elementTime.textContent = getTime;

    setTimeout(showTime, 1000);
}

showTime();