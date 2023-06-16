
var sec=0;

var mint=0;
var hr=0;
let interval;

function start(){
    interval=  setInterval(tan,1000)
    function tan(){
        if(sec<60
        )
       {
        sec++
       }

       
        else if(mint>=59){

mint=0;
hr++;
        }
        else {
            sec=0;
            
            mint++;
        }
         const minute=String(mint).padStart(2,'0');
         const hour=String(hr).padStart(2,'0');
         const secund=String(sec).padStart(2,'0');

        document.querySelector('.watch').innerHTML=hour+":"+minute+":"+secund+"";
        
    }
    
}

function stop(){
 clearTimeout(interval)
}