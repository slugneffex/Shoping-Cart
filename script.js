var reqdiv = document.querySelectorAll('.colour');
var watch = document.getElementById('main_img');
var time = document.querySelector('.time');
var heart = document.querySelector('.heart');
var text = document.getElementById('text');
var onWatch = document.getElementById('onWatch');


for(var i=0;i<reqdiv.length;i++){
    reqdiv[i].onclick = function(){        
        watch.src = `${"images/" + this.classList[1] +".png"}`
    }
}


heart.onclick = function(){
    onWatch.remove();
    time.innerHTML +=`\n
        <div id="heartbeat">
        <i class="fa fa-heartbeat" style="font-size:48px;color:red"></i>
        <h2>78</h2>
        </div> `;
        
}
