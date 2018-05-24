window.onload=function(){
    const images=[
        ['img/batmanwb.png','img/batman.png','batman'],
        ['img/flashwb.png','img/flash.png','flash'],
        ['img/supermanwb.png','img/superman.png','superman'],
        ['img/wonder_womanwb.png','img/wonder_woman.png','wonder_woman']
    ];
    const body=document.querySelector('body');
    images.forEach(function(image){
        const img=document.createElement('img');
        img.setAttribute('src',image[0]);
        img.addEventListener('mouseover',function(){
            img.setAttribute('src',image[1]);
        });
        img.addEventListener('mouseout',function(){
            img.setAttribute('src',image[0]);
        });
        img.addEventListener('click',function(){
            window.alert(image[2].toUpperCase());
        });
        body.appendChild(img);
    });
}