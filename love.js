let more =0;
function bot1(){
    more++;
    if(more >=5){
        document.getElementById('text2').innerText='stooooooooooooop dont try more go and study (:';
        document.getElementById('bot1').remove();
        document.getElementById('bot2').remove();
        
    }
    if(document.getElementById('bot1').innerText==='YES'){
        document.getElementById('bot1').innerText='NO';
        document.getElementById('bot2').innerText='YES';
    }else{
        document.getElementById('text').innerText='you dont love me .-.';
        document.getElementById('bot1').remove();
        document.getElementById('bot2').remove();
        document.getElementById('body').style.backgroundImage="url('blove.png')";
        document.getElementById('body').style.backgroundSize='100px';
  
    }
 document.getElementById('bot2').style.fontSize='30px';

}
function bot2(){
    more++;
    if(more >=3){
        document.getElementById('text2').innerText='stooooooooooooop dont try more go and study (:';
        document.getElementById('bot1').remove();
        document.getElementById('bot2').remove();
    }
    if(document.getElementById('bot2').innerText==='YES'){
        document.getElementById('bot2').innerText='NO';
        document.getElementById('bot1').innerText='YES';
    }else{
        document.getElementById('text').innerText='you dont love me .-.';
        document.getElementById('bot1').remove();
        document.getElementById('bot2').remove();
        document.getElementById('body').style.backgroundImage="url('blove.png')";
        document.getElementById('body').style.backgroundSize='100px';
    }
    
 document.getElementById('bot1').style.fontSize='30px';
}
