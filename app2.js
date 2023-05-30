function ok2() {
    document.querySelector(".left").style.top = "171px"
    document.querySelector("#h2").style.color = "white"
    let color = document.querySelectorAll("#h1,#h3,#h4,.hh")
    color.forEach((element) => {
        element.style.color = '#7D808A';
    });
    

    document.querySelector(".id").innerHTML = ` 
    
     <div class="id" style="margin-top: 171px;  width: 100%;" >
    <div class="id1">
    <h1 style="margin-left: -40px;">ID</h1>
    <h1 style="margin-left: 200px;">Ism</h1>
    <h1 style="margin-left:  280px;">Telefon raqam</h1>
    <h1 style="margin-left:  280px;">Buyurtmalar</h1>
   </div>
    <div class="catagory"><h1 style="margin-left: -100px;">7</h1><h1  style="margin-left: 130px;">Bobur Mavlonov</h1><h1 style="margin-left:  200px;">+998901234567</h1><h1 style="margin-left:  300px;">1</h1></div>
   <div class="catagory1"><h1 style="margin-left: -100px;">6</h1><h1  style="margin-left: 130px;">Bobur Mavlonov</h1><h1 style="margin-left:  200px;">+998901234567</h1><h1 style="margin-left:  300px;">2</h1></div>
   <div class="catagory2"><h1 style="margin-left: -100px;">5</h1><h1  style="margin-left: 130px;">Bobur Mavlonov</h1><h1 style="margin-left:  200px;">+998901234567</h1><h1 style="margin-left:  300px;">5</h1></div>
   <div class="catagory3"><h1 style="margin-left: -100px;">4</h1><h1  style="margin-left: 130px;">Bobur Mavlonov</h1><h1 style="margin-left:  200px;">+998901234567</h1><h1 style="margin-left:  300px;">21</h1></div>
    <div class="catagory4"><h1 style="margin-left: -100px;">3</h1><h1  style="margin-left:130px;">Bobur Mavlonov</h1><h1 style="margin-left:  200px;">+998901234567</h1><h1 style="margin-left:  300px;">45</h1></div>
   <div class="catagory5"><h1 style="margin-left: -100px;">2</h1><h1  style="margin-left: 130px;">Bobur Mavlonov</h1><h1 style="margin-left:  200px;">+998901234567</h1><h1 style="margin-left:  300px;">23</h1></div>
   <div class="catagory6"><h1 style="margin-left: -100px;">1</h1><h1  style="margin-left: 130px;">Bobur Mavlonov</h1><h1 style="margin-left:  200px;">+998901234567</h1><h1 style="margin-left:  300px;">44</h1></div>


     `


document.querySelector(".menyu").style.height = "106.5vh"
    
document.querySelector("select").style.display = "none"
 
  

    }

    
function ok1() {
  

    document.querySelector(".left").style.top = "105px"
    document.querySelector("#h1").style.color = "white"
    let color = document.querySelectorAll("#h2,#h3,#h4,.hh")
    color.forEach((element) => {
        element.style.color = '#7D808A';
    });


    document.querySelector("select").style.display = "block"




    const  data = [{

    }]
    let cato = document.querySelector(".cato")
    let ui = ""
    data.map(itme =>{
        document.querySelector(".meny").innerHTML = `
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
        let form = document.querySelector("form")
        let input = document.querySelector("input")
        form.addEventListener("submit", (e) =>{
            e.preventDefault()
            restfor()
        })
        const restfor = () =>{
            input.value = ""
        }

        
    
}



 
    
