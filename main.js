let content , setting
let btn_status = 1
let result_cnt = 0

function preload(){

    content = loadStrings("./content.txt")
    setting = loadJSON("./setting.json")

}

function setup(){

    document.querySelector("body > button").innerHTML = content[0]

}

async function Roll(){

    if(!btn_status) return;

    btn_status = 0;

    var cnt = 0;
    
    while(cnt < setting["count"]){
        await delay(setting["time"]);
        document.querySelector("body > button").innerHTML = content[Math.floor(Math.random() * content.length)];
        cnt += 1;
    }

    if(setting['result'][result_cnt] != -1)
    document.querySelector("body > button").innerHTML = content[setting['result'][result_cnt]];

    result_cnt += 1

    if(result_cnt >= setting['result'].length) 
    result_cnt = setting['result'].length - 1;

    btn_status = 1

}

function delay(n) {
	return new Promise(function(resolve) {
	  setTimeout(resolve, n);
	});
}

