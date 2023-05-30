
function ok3() {
    document.querySelector(".left").style.top = "239px"
    document.querySelector("#h3").style.color = "white"
    let color = document.querySelectorAll("#h1,#h2,#h4,.hh")
    color.forEach((element) => {
        element.style.color = '#7D808A';
    });
}
function ok4() {
    document.querySelector(".left").style.top = "305px"
    document.querySelector("#h4").style.color = "white"
    let color = document.querySelectorAll("#h2,#h3,#h1,.hh")
    color.forEach((element) => {
        element.style.color = '#7D808A';
    });
}
function ok5() {
    document.querySelector(".left").style.top = "83%"
    document.querySelector(".hh").style.color = "white"
    let color = document.querySelectorAll("#h2,#h3,#h4,#h1")
    color.forEach((element) => {
        element.style.color = '#7D808A';
    });
}



function icon1() {
    document.querySelector(".fa-chevron-down").style.zIndex = "-1"
    document.querySelector(".fa-chevron-up").style.zIndex = "1"
    document.querySelector(".fa-chevron-down").style.opacity = "-1"
    document.querySelector(".fa-chevron-up").style.opacity = "1"
    document.querySelector(".out").style.top = "0%"

}
function icon2() {
    document.querySelector(".fa-chevron-up").style.zIndex = "-1"
    document.querySelector(".fa-chevron-down").style.zIndex = "1"
    document.querySelector(".fa-chevron-down").style.opacity = "1"
    document.querySelector(".fa-chevron-up").style.opacity = "-1"
    document.querySelector(".out").style.top = "-100%"
}





function ok1() {
    document.querySelector(".left").style.top = "105px"
    document.querySelector("#h1").style.color = "white"
    let color = document.querySelectorAll("#h2,#h3,#h4,.hh")
    color.forEach((element) => {
        element.style.color = '#7D808A';
    });

    document.querySelector(".menyu").style.height = "101vh"





    let cat = document.querySelector(".catagory")

    cat.addEventListener("click" , () =>{
        cat.style.backgroundColor = "#F6F6F6"
        const divElement = document.querySelectorAll('.catagory1 ,.catagory2,.catagory3,.catagory4,.catagory5 ,.catagory6')
    
        divElement.forEach((element) => {
            element.style.backgroundColor = 'white';
        });
    
    })
    let cat1 = document.querySelector(".catagory1")
    
    cat1.addEventListener("click" , () =>{
        cat1.style.backgroundColor = "#F6F6F6"
           const divElement = document.querySelectorAll('.catagory ,.catagory2,.catagory3,.catagory4,.catagory5 ,.catagory6')
    
        divElement.forEach((element) => {
            element.style.backgroundColor = 'white';
        });
    })
    let cat2 = document.querySelector(".catagory2")
    
    cat2.addEventListener("click" , () =>{
        cat2.style.backgroundColor = "#F6F6F6"
           const divElement = document.querySelectorAll('.catagory ,.catagory1,.catagory3,.catagory4,.catagory5 ,.catagory6')
    
        divElement.forEach((element) => {
            element.style.backgroundColor = 'white';
        });
    })
    let cat3 = document.querySelector(".catagory3")
    
    cat3.addEventListener("click" , () =>{  
        cat3.style.backgroundColor = "#F6F6F6"
        const divElement = document.querySelectorAll('.catagory1 ,.catagory,.catagory2,.catagory4,.catagory5 ,.catagory6')
    
        divElement.forEach((element) => {
            element.style.backgroundColor = 'white';
        });
       
    })
    let cat4 = document.querySelector(".catagory4")
    
    cat4.addEventListener("click" , () =>{
        cat4.style.backgroundColor = "#F6F6F6"
           const divElement = document.querySelectorAll('.catagory ,.catagory2,.catagory3,.catagory1,.catagory5 ,.catagory6')
    
        divElement.forEach((element) => {
            element.style.backgroundColor = 'white';
        });
    })
    let cat5 = document.querySelector(".catagory5")
    
    cat5.addEventListener("click" , () =>{
        cat5.style.backgroundColor = "#F6F6F6"
           const divElement = document.querySelectorAll('.catagory1 ,.catagory2,.catagory3,.catagory4,.catagory ,.catagory6')
    
        divElement.forEach((element) => {
            element.style.backgroundColor = 'white';
        });
    })
    let cat6 = document.querySelector(".catagory6")
    
    cat6.addEventListener("click" , () =>{
        cat6.style.backgroundColor = "#F6F6F6"
           const divElement = document.querySelectorAll('.catagory1 ,.catagory2,.catagory3,.catagory4,.catagory5 ,.catagory')
    
        divElement.forEach((element) => {
            element.style.backgroundColor = 'white';
        });
    })
    

    
    
     
    
}

let modal  = document.querySelector(".modal")
    
function o1() {
  
    modal.style.top = "50px"
    document.querySelector(".hed").style.display = "block"
}
//   yangi
let modal1  = document.querySelector(".modal1")
  
function o2() {
  
    modal1.style.top = "50px"
    document.querySelector(".hed").style.display = "block"
}

let modal2  = document.querySelector(".modal2")
function o3() {
  
    modal2.style.top = "50px"
    document.querySelector(".hed").style.display = "block"
}
let modal3  = document.querySelector(".modal3")
function o4() {
  
    modal3.style.top = "50px"
    document.querySelector(".hed").style.display = "block"
}
let modal4  = document.querySelector(".modal4")
function o5() {
  
    modal4.style.top = "50px"
    document.querySelector(".hed").style.display = "block"
}
let modal5  = document.querySelector(".modal5")
function o6() {
  
    modal5.style.top = "50px"
    document.querySelector(".hed").style.display = "block"
}
let modal6  = document.querySelector(".modal6")
function o7() {
  
    modal6.style.top = "50px"
    document.querySelector(".hed").style.display = "block"
}
let modal7  = document.querySelector(".modal7")
function o8() {
  
    modal7.style.top = "50px"
    document.querySelector(".hed").style.display = "block"
}

function xx() {
    modal.style.top = "-100%"
    document.querySelector(".hed").style.display = "none"

}




function xx1() {
    modal1.style.top = "-100%"
    document.querySelector(".hed").style.display = "none"

}

function xx2() {
    modal2.style.top = "-100%"
    document.querySelector(".hed").style.display = "none"

}
function xx3() {
    modal3.style.top = "-100%"
    document.querySelector(".hed").style.display = "none"

}
function xx4() {
    modal4.style.top = "-100%"
    document.querySelector(".hed").style.display = "none"

}
function xx5() {
    modal5.style.top = "-100%"
    document.querySelector(".hed").style.display = "none"

}
function xx6() {
    modal6.style.top = "-100%"
    document.querySelector(".hed").style.display = "none"

}
function xx7() {
    modal7.style.top = "-100%"
    document.querySelector(".hed").style.display = "none"

}
function btn() {
    modal.style.top = "-100%"
    document.querySelector(".hed").style.display = "none"

}
function btn1() {
    modal1.style.top = "-100%"
    document.querySelector(".hed").style.display = "none"

}
function btn2() {
    modal2.style.top = "-100%"
    document.querySelector(".hed").style.display = "none"

}
function btn3() {
    modal3.style.top = "-100%"
    document.querySelector(".hed").style.display = "none"

}
function btn4() {
    modal4.style.top = "-100%"
    document.querySelector(".hed").style.display = "none"

}
function btn5() {
    modal5.style.top = "-100%"
    document.querySelector(".hed").style.display = "none"

}
function btn6() {
modal6.style.top = "-100%"
    document.querySelector(".hed").style.display = "none"

}
// yangi
const  data = [{

}]
let cato = document.querySelector(".meny")
let ui = ""
data.map(itme =>{
 ui = `
    <select>
                <option value="barchasi">Barchasi</option>
                <option value="Savatdagi">Savatdagi</option>
                <option value="Buyurtma">Buyurtma</option>
                <option value="Tasdiqlangan">Tasdiqlangan</option>
                <option value="Yetkazishdagi">Yetkazishdagi</option>
                <option value="Yakunlangan">Yakunlangan</option>
                <option value="Bekor qilingan">Bekor qilingan</option>
                <option value="Tozalangan">Tozalangan</option>
            </select>
            
            <div class="id">
 <div class="id1">
 <h1 style="margin-left: 10px;">ID</h1>
 <h1 style="margin-left:  50px;">Sana</h1>
 <h1 style="margin-left: 90px;">Ism</h1>
 <h1 style="margin-left:  90px;">Telefon raqam</h1>
 <h1 style="margin-left: 40px;">Soni</h1>
 <h1 style="margin-left: 40px;">Narxi</h1>
 <h1 style="margin-left: 50px;">Manzil</h1>
 <h1 style="margin-left: 110px; ">Driver</h1>
 <h1 style="margin-left: 140px;">Holat</h1>
 <h1 style="margin-left: 55px;">Batafsil</h1>
</div>
 <div class="catagory"><p class="c1">7</p> <p class="c2"> May 22, 11:29</p>
 <p class="c3">Boburbr <br> Mavlonov</p> <p class="c4">+998901234567</p> <p class="c5">1</p> <p class="c6">20 000</p>
<img src="./img/lokal8.jpg" alt="" class="lokal"> <div class="not">NOT SELECTED </div><div class="holat" id="hol1">buyurtma </div>
<div class="bat" onclick="o1()"><div class="span"></div>
<div class="span"></div><div class="span"></div></div></div>
<div class="catagory1"><p class="c1">6</p> <p class="c2"> May 22, 11:29</p>
<p class="c3">Boburbr <br> Mavlonov</p> <p class="c4">+998901234567</p> <p class="c5">1</p> <p class="c6">20 000</p>
<img src="./img/lokal8.jpg" alt="" class="lokal"> <div class="not">01 | S 777 AA </div><div class="holat" id="hol2">qabul </div>
<div class="bat" onclick="o2()"><div class="span"></div>
<div class="span"></div><div class="span"></div></div></div>
<div class="catagory2"><p class="c1">5</p> <p class="c2"> May 22, 11:29</p>
<p class="c3">Boburbr <br> Mavlonov</p> <p class="c4">+998901234567</p> <p class="c5">1</p> <p class="c6">20 000</p>
<img src="./img/lokal8.jpg" alt="" class="lokal"> <div class="not">01 | S 777 AA </div><div class="holat" id="hol3">yetkazish </div>
<div class="bat" onclick="o3()"><div class="span"></div>
<div class="span"></div><div class="span"></div></div></div>
<div class="catagory3"><p class="c1">4</p> <p class="c2"> May 22, 11:29</p>
<p class="c3">Boburbr <br> Mavlonov</p> <p class="c4">+998901234567</p> <p class="c5">1</p> <p class="c6">20 000</p>
<img src="./img/lokal8.jpg" alt="" class="lokal"> <div class="not">01 | S 777 AA </div><div class="holat" id="hol4"> yakun</div>
<div class="bat" onclick="o4()"><div class="span"></div>
<div class="span"></div><div class="span"></div></div></div>
 <div class="catagory4"><p class="c1">3</p> <p class="c2"> May 22, 11:29</p>
 <p class="c3">Boburbr <br> Mavlonov</p> <p class="c4">+998901234567</p> <p class="c5">1</p> <p class="c6">20 000</p>
<img src="./img/lokal8.jpg" alt="" class="lokal"> <div class="not">01 | S 777 AA </div><div class="holat" id="hol5">bekor </div>
<div class="bat" onclick="o5()"><div class="span"></div>
<div class="span"></div><div class="span"></div></div></div>
<div class="catagory5"><p class="c1">2</p> <p class="c2"> May 22, 11:29</p>
<p class="c3">Boburbr <br> Mavlonov</p> <p class="c4">+998901234567</p> <p class="c5">1</p> <p class="c6">20 000</p>
<img src="./img/lokal8.jpg" alt="" class="lokal"> <div class="not">01 | S 777 AA </div><div class="holat" id="hol6">tayyorlanmoqda </div>
<div class="bat" onclick="o6()"><div class="span"></div>
<div class="span"></div><div class="span"></div></div></div>
<div class="catagory6"><p class="c1">1</p> <p class="c2"> May 22, 11:29</p>
<p class="c3">Boburbr <br> Mavlonov</p> <p class="c4">+998901234567</p> <p class="c5">1</p> <p class="c6">20 000</p>
<img src="./img/lokal8.jpg" alt="" class="lokal"> <div class="not">01 | S 777 AA </div><div class="holat" id="hol7">bekor </div>
<div class="bat" onclick="o7()"><div class="span"></div>
<div class="span"></div><div class="span"></div></div></div>
 
 `
 cato.innerHTML = ui
    
})

let cat = document.querySelector(".catagory")

cat.addEventListener("click" , () =>{
    cat.style.backgroundColor = "#F6F6F6"
    const divElement = document.querySelectorAll('.catagory1 ,.catagory2,.catagory3,.catagory4,.catagory5 ,.catagory6')

    divElement.forEach((element) => {
        element.style.backgroundColor = 'white';
    });

})
let cat1 = document.querySelector(".catagory1")

cat1.addEventListener("click" , () =>{
    cat1.style.backgroundColor = "#F6F6F6"
       const divElement = document.querySelectorAll('.catagory ,.catagory2,.catagory3,.catagory4,.catagory5 ,.catagory6')

    divElement.forEach((element) => {
        element.style.backgroundColor = 'white';
    });
})
let cat2 = document.querySelector(".catagory2")

cat2.addEventListener("click" , () =>{
    cat2.style.backgroundColor = "#F6F6F6"
       const divElement = document.querySelectorAll('.catagory ,.catagory1,.catagory3,.catagory4,.catagory5 ,.catagory6')

    divElement.forEach((element) => {
        element.style.backgroundColor = 'white';
    });
})
let cat3 = document.querySelector(".catagory3")

cat3.addEventListener("click" , () =>{  
    cat3.style.backgroundColor = "#F6F6F6"
    const divElement = document.querySelectorAll('.catagory1 ,.catagory,.catagory2,.catagory4,.catagory5 ,.catagory6')

    divElement.forEach((element) => {
        element.style.backgroundColor = 'white';
    });
   
})
let cat4 = document.querySelector(".catagory4")

cat4.addEventListener("click" , () =>{
    cat4.style.backgroundColor = "#F6F6F6"
       const divElement = document.querySelectorAll('.catagory ,.catagory2,.catagory3,.catagory1,.catagory5 ,.catagory6')

    divElement.forEach((element) => {
        element.style.backgroundColor = 'white';
    });
})
let cat5 = document.querySelector(".catagory5")

cat5.addEventListener("click" , () =>{
    cat5.style.backgroundColor = "#F6F6F6"
       const divElement = document.querySelectorAll('.catagory1 ,.catagory2,.catagory3,.catagory4,.catagory ,.catagory6')

    divElement.forEach((element) => {
        element.style.backgroundColor = 'white';
    });
})
let cat6 = document.querySelector(".catagory6")

cat6.addEventListener("click" , () =>{
    cat6.style.backgroundColor = "#F6F6F6"
       const divElement = document.querySelectorAll('.catagory1 ,.catagory2,.catagory3,.catagory4,.catagory5 ,.catagory')

    divElement.forEach((element) => {
        element.style.backgroundColor = 'white';
    });
})





    


function buy() {
    document.querySelector("#hol1").style.backgroundColor = "#FCF1C9"
    document.querySelector("#hol1").style.color = "#937200"
    document.querySelector("#hol1").textContent = "buyurtma"


}

function buy1() {
    document.querySelector("#hol1").style.backgroundColor = "#D9EDFF"
    document.querySelector("#hol1").style.color = "#004D92"
    document.querySelector("#hol1").textContent = "qabul"


}
function buy2() {
    document.querySelector("#hol1").style.backgroundColor = "#D9FFDA"
    document.querySelector("#hol1").style.color = "#008C06"
    document.querySelector("#hol1").textContent = "yetkazish"


}
function buy3() {
    document.querySelector("#hol1").style.backgroundColor = "#E7D9FF"
    document.querySelector("#hol1").style.color = "#320088"
    document.querySelector("#hol1").textContent = "yakun"


}
function buy4() {
    document.querySelector("#hol1").style.backgroundColor = "#FFD9D9"
    document.querySelector("#hol1").style.color = "#BE0707"
    document.querySelector("#hol1").textContent = "bekor"


}
function buy5() {
    document.querySelector("#hol1").style.backgroundColor = "#D9FFF4"
    document.querySelector("#hol1").style.color = "#06523C"
    document.querySelector("#hol1").textContent = "tayyorlanmoqda"


}

// buy 2
function buy6() {
    document.querySelector("#hol2").style.backgroundColor = "#FCF1C9"
    document.querySelector("#hol2").style.color = "#937200"
    document.querySelector("#hol2").textContent = "buyurtma"


}

function buy7() {
    document.querySelector("#hol2").style.backgroundColor = "#D9EDFF"
    document.querySelector("#hol2").style.color = "#004D92"
    document.querySelector("#hol2").textContent = "qabul"
    


}
function buy8() {
    document.querySelector("#hol2").style.backgroundColor = "#D9FFDA"
    document.querySelector("#hol2").style.color = "#008C06"
    document.querySelector("#hol2").textContent = "yetkazish"


}
function buy9() {
    document.querySelector("#hol2").style.backgroundColor = "#E7D9FF"
    document.querySelector("#hol2").style.color = "#320088"
    document.querySelector("#hol2").textContent = "yakun"


}
function buy10() {
    document.querySelector("#hol2").style.backgroundColor = "#FFD9D9"
    document.querySelector("#hol2").style.color = "#BE0707"
    document.querySelector("#hol2").textContent = "bekor"


}
function buy11() {
    document.querySelector("#hol2").style.backgroundColor = "#D9FFF4"
    document.querySelector("#hol2").style.color = "#06523C"
    document.querySelector("#hol2").textContent = "tayyorlanmoqda"


}


// buy 2
// buy 3
function buy12() {
    document.querySelector("#hol3").style.backgroundColor = "#FCF1C9"
    document.querySelector("#hol3").style.color = "#937200"
    document.querySelector("#hol3").textContent = "buyurtma"


}

function buy13() {
    document.querySelector("#hol3").style.backgroundColor = "#D9EDFF"
    document.querySelector("#hol3").style.color = "#004D92"
    document.querySelector("#hol3").textContent = "qabul"
    


}
function buy14() {
    document.querySelector("#hol3").style.backgroundColor = "#D9FFDA"
    document.querySelector("#hol3").style.color = "#008C06"
    document.querySelector("#hol3").textContent = "yetkazish"


}
function buy15() {
    document.querySelector("#hol3").style.backgroundColor = "#E7D9FF"
    document.querySelector("#hol3").style.color = "#320088"
    document.querySelector("#hol3").textContent = "yakun"


}
function buy16() {
    document.querySelector("#hol3").style.backgroundColor = "#FFD9D9"
    document.querySelector("#hol3").style.color = "#BE0707"
    document.querySelector("#hol3").textContent = "bekor"


}
function buy17() {
    document.querySelector("#hol3").style.backgroundColor = "#D9FFF4"
    document.querySelector("#hol3").style.color = "#06523C"
    document.querySelector("#hol3").textContent = "tayyorlanmoqda"


}


// buy 3
// buy 4
function buy18() {
    document.querySelector("#hol4").style.backgroundColor = "#FCF1C9"
    document.querySelector("#hol4").style.color = "#937200"
    document.querySelector("#hol4").textContent = "buyurtma"


}

function buy19() {
    document.querySelector("#hol4").style.backgroundColor = "#D9EDFF"
    document.querySelector("#hol4").style.color = "#004D92"
    document.querySelector("#hol4").textContent = "qabul"
    


}
function buy20() {
    document.querySelector("#hol4").style.backgroundColor = "#D9FFDA"
    document.querySelector("#hol4").style.color = "#008C06"
    document.querySelector("#hol4").textContent = "yetkazish"


}
function buy21() {
    document.querySelector("#hol4").style.backgroundColor = "#E7D9FF"
    document.querySelector("#hol4").style.color = "#320088"
    document.querySelector("#hol4").textContent = "yakun"


}
function buy22() {
    document.querySelector("#hol4").style.backgroundColor = "#FFD9D9"
    document.querySelector("#hol4").style.color = "#BE0707"
    document.querySelector("#hol4").textContent = "bekor"


}
function buy23() {
    document.querySelector("#hol4").style.backgroundColor = "#D9FFF4"
    document.querySelector("#hol4").style.color = "#06523C"
    document.querySelector("#hol4").textContent = "tayyorlanmoqda"


}


// buy 4

// buy 5
function buy24() {
    document.querySelector("#hol5").style.backgroundColor = "#FCF1C9"
    document.querySelector("#hol5").style.color = "#937200"
    document.querySelector("#hol5").textContent = "buyurtma"


}

function buy25() {
    document.querySelector("#hol5").style.backgroundColor = "#D9EDFF"
    document.querySelector("#hol5").style.color = "#004D92"
    document.querySelector("#hol5").textContent = "qabul"
    


}
function buy26() {
    document.querySelector("#hol5").style.backgroundColor = "#D9FFDA"
    document.querySelector("#hol5").style.color = "#008C06"
    document.querySelector("#hol5").textContent = "yetkazish"


}
function buy27() {
    document.querySelector("#hol5").style.backgroundColor = "#E7D9FF"
    document.querySelector("#hol5").style.color = "#320088"
    document.querySelector("#hol5").textContent = "yakun"


}
function buy28() {
    document.querySelector("#hol5").style.backgroundColor = "#FFD9D9"
    document.querySelector("#hol5").style.color = "#BE0707"
    document.querySelector("#hol5").textContent = "bekor"


}
function buy29() {
    document.querySelector("#hol5").style.backgroundColor = "#D9FFF4"
    document.querySelector("#hol5").style.color = "#06523C"
    document.querySelector("#hol5").textContent = "tayyorlanmoqda"


}


// buy 5


// buy 6
function buy30() {
    document.querySelector("#hol6").style.backgroundColor = "#FCF1C9"
    document.querySelector("#hol6").style.color = "#937200"
    document.querySelector("#hol6").textContent = "buyurtma"


}

function buy31() {
    document.querySelector("#hol6").style.backgroundColor = "#D9EDFF"
    document.querySelector("#hol6").style.color = "#004D92"
    document.querySelector("#hol6").textContent = "qabul"
    


}
function buy32() {
    document.querySelector("#hol6").style.backgroundColor = "#D9FFDA"
    document.querySelector("#hol6").style.color = "#008C06"
    document.querySelector("#hol6").textContent = "yetkazish"


}
function buy33() {
    document.querySelector("#hol6").style.backgroundColor = "#E7D9FF"
    document.querySelector("#hol6").style.color = "#320088"
    document.querySelector("#hol6").textContent = "yakun"


}
function buy34() {
    document.querySelector("#hol6").style.backgroundColor = "#FFD9D9"
    document.querySelector("#hol6").style.color = "#BE0707"
    document.querySelector("#hol6").textContent = "bekor"


}
function buy35() {
    document.querySelector("#hol6").style.backgroundColor = "#D9FFF4"
    document.querySelector("#hol6").style.color = "#06523C"
    document.querySelector("#hol6").textContent = "tayyorlanmoqda"


}


// buy 6

// buy 7
function buy36() {
    document.querySelector("#hol7").style.backgroundColor = "#FCF1C9"
    document.querySelector("#hol7").style.color = "#937200"
    document.querySelector("#hol7").textContent = "buyurtma"


}

function buy37() {
    document.querySelector("#hol7").style.backgroundColor = "#D9EDFF"
    document.querySelector("#hol7").style.color = "#004D92"
    document.querySelector("#hol7").textContent = "qabul"
    


}
function buy38() {
    document.querySelector("#hol7").style.backgroundColor = "#D9FFDA"
    document.querySelector("#hol7").style.color = "#008C06"
    document.querySelector("#hol7").textContent = "yetkazish"


}
function buy39() {
    document.querySelector("#hol7").style.backgroundColor = "#E7D9FF"
    document.querySelector("#hol7").style.color = "#320088"
    document.querySelector("#hol7").textContent = "yakun"


}
function buy40() {
    document.querySelector("#hol7").style.backgroundColor = "#FFD9D9"
    document.querySelector("#hol7").style.color = "#BE0707"
    document.querySelector("#hol7").textContent = "bekor"


}
function buy41() {
    document.querySelector("#hol7").style.backgroundColor = "#D9FFF4"
    document.querySelector("#hol7").style.color = "#06523C"
    document.querySelector("#hol7").textContent = "tayyorlanmoqda"


}


// buy 7







    let form = document.querySelector("form")
    let input = document.querySelector("#inn")
    form.addEventListener("submit", (e) =>{
        e.preventDefault()
        restfor()
    })
    const restfor = () =>{
        input.value = ""
    }

 