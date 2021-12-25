function kartAra(){
    var input, filter, kart, h1, deger, cizgiliBaslik, aramasiz, aramaContainer;
    input = document.getElementById("kartsBar");
    filter = input.value.toUpperCase();
    cizgiliBaslik = document.getElementsByClassName("c-baslik");
    kart = document.getElementsByClassName("kart");
    aramasiz = document.getElementsByClassName("aramasiz");
    aramaContainer = document.querySelector('#arama-container');
    if(input.value.length > 0){
        aramaContainer.classList.remove('vdisabled');
    }else{
        aramaContainer.classList.add('vdisabled');
    }
    for (i=0;i<aramasiz.length;i++){
        if(input.value.length > 0){
            aramasiz[i].setAttribute("class","aramasiz");
            aramasiz[i].style.display="none";
        }else{
            aramasiz[i].setAttribute("class","aramasiz row d-flex justify-content-center align-items-center");
        }
    }
    for (i=0;i<cizgiliBaslik.length;i++){
        if(input.value.length > 0){
        cizgiliBaslik[i].style.display="none";
        }else{
            cizgiliBaslik[i].style.display="";
        }
    }
    for (i=0;i<kart.length;i++){
        h1 = kart[i].getElementsByTagName('h1')[0];
        deger = h1.textContent || h1.innerText;
        if (deger.toUpperCase().indexOf(filter) > -1){
            kart[i].style.display = "";
        }else{
            kart[i].style.display = "none";
        }
    }
}