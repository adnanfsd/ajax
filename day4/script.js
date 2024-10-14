var text = document.getElementById('text');
function ajax(){
    console.log("btn clicked");
    // step 1
    var xhttp = new XMLHttpRequest();

    // step 2
    // xhttp.open("GET","content.txt",true);
    xhttp.open("GET","https://jsonplaceholder.typicode.com/users",true);

    
    // step 3
    xhttp.send();

    // step 4
    xhttp.onreadystatechange = function(){
        if((this.readyState == 4)&&(this.readyState == 200));
        // console.log(this.response)
        var data=JSON.parse(this.response)
        // text.innerHTML=`Name:${data[1].name} Age:${data[1].age}`
        let output = '';
        for(let i=0;i<data.length;i++){
            console.log(data[i])
        output += `<li>${data[i].name} Age:${data[i].age}</li>`
        text.innerHTML = output
        }
 
}


}