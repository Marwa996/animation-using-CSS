for(var i=0;i<50;i++){

    var img=document.createElement("img");
    img.setAttribute("src","snowflake.png");
    document.body.appendChild(img);
    img.style.animationDelay=Math.floor(Math.random()*10)+"s";
    img.style.top=Math.floor(Math.random()*10)+"px";
    img.style.left=Math.floor(Math.random()*1200)+"px";

    console.log(img);

}
