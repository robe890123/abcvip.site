$(document).ready(function() {
    $('.popup-trigger').click(function(e) {
        e.preventDefault();
        $('#myModal').toggleClass('hidden');
        document.getElementById("closetc").style.display = "block";
        document.getElementById("pp-trigger").style.display = "none"
    });
    $('#closetc').click(function(e){
        var element = document.getElementById('myModal');
        document.getElementById("pp-trigger").style.display = "block"
        document.getElementById("closetc").style.display ="none";
        element.classList.add('hidden');
    });
    let arr = rankItems;

    var obj1 = new Array();

    for (let i = 0; i < arr.length; i++) {
        obj1.push(arr[i]);
    };

    const webList = document.getElementsByClassName('weblist')[0];
    webList.innerHTML=null;
    obj1.forEach(item => {
        const li1 = document.createElement('li');
        const spanElement1 =document.createElement('span');
        const imgElement1 =document.createElement('img');
        const pElement1 =document.createElement('p');
        const bElement1 =document.createElement('b');
        const spanElement2 =document.createElement('span');
        const aElement1 =document.createElement('a');
        imgElement1.loading = "lazy"; 
        li1.classList.add('tip_list')
        aElement1.classList.add('weblink');
        bElement1.classList.add('gametitle');
        spanElement1.classList.add('ranktitle');
        spanElement2.classList.add('gamedetail');
        // imgElement1.src=item.img;
        // spanElement1.innerHTML=item.rnum;
        // bElement1.innerHTML=item.numflag;
        // spanElement2.innerHTML=item.detail;
        // aElement1.href=item.link;

        // custom code
        imgElement1.src=item.image;
        spanElement1.innerHTML=item.id;
        bElement1.innerHTML=item.title;
        spanElement2.innerHTML=item.content;
        aElement1.href=item.url;

        aElement1.innerHTML='PLAY';
        aElement1.target='_blank';
        pElement1.appendChild(bElement1);
        pElement1.appendChild(spanElement2);
        li1.appendChild(spanElement1);
        li1.appendChild(imgElement1);
        li1.appendChild(pElement1);
        li1.appendChild(aElement1);
        webList.appendChild(li1);
    });

    // const divs = document.querySelectorAll('.tip_list');
    // const container = document.getElementById('weblist');
    // const divArray = Array.from(divs);

    // for (let i = divArray.length - 1; i > 0; i--) {
    //     const j = Math.floor(Math.random() * (i + 1));
    //     [divArray[i], divArray[j]] = [divArray[j], divArray[i]];
    // }

    // container.innerHTML = '';

    // divArray.forEach(div => container.appendChild(div));
    // const tiplogo = document.querySelectorAll('.ranktitle');
    // for(let j = 1;j<=tiplogo.length;j++){
    //     tiplogo[j-1].textContent=j;
    // }
});
