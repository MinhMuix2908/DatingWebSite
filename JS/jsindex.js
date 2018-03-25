
function carousel(){
	var i;
	var x = document.getElementsByClassName("mySlides");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";  
	}
	myIndex++;
	if (myIndex > x.length){myIndex = 1}    
		x[myIndex-1].style.display = "block";  
	setTimeout(carousel, 2000);
}

var myIndex = 0;
carousel();

function loadindex(){
	// load 3 sản phẩm đầu trong json của dòng sản phẩm Shu
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			
			var myObj = JSON.parse(this.responseText);
			$("#coverShu").html('<img src="'+myObj.array[3].link+'" alt="" style="   heigth:auto; width: 100%;" />'); // thay đổi cover hãng shu
			$("#shu1").html('<img src="'+myObj.array[0].link+'" alt="" style="   heigth:auto; width: 100%;" />   <br /> <p style="color:red; text-align:center; font-size:130%"></br>'+myObj.array[0].name+'</p> <br /><i><p style="text-align:center;">'+myObj.array[0].price+' VND</p> </i> ');
			$("#shu2").html('<img src="'+myObj.array[1].link+'" alt="" style="   heigth:auto; width: 100%;" />   <br /> <p style="color:red;text-align:center; font-size:130%"></br>'+myObj.array[1].name+'</p> <br /><i><p style="text-align:center;">'+myObj.array[1].price+' VND</p> </i> ');
			$("#shu3").html('<img src="'+myObj.array[2].link+'" alt="" style="   heigth:auto; width: 100%;" />   <br /> <p style="color:red;text-align:center; font-size:130%"></br>'+myObj.array[2].name+'</p> <br /><i><p style="text-align:center;">'+myObj.array[2].price+' VND</p> </i> ');
		}
	}
	xhttp.open("GET", "JSON/SHU.json", true);
	xhttp.send();


	//3ce
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			
			var myObj = JSON.parse(this.responseText);
			$("#cover3CE").html('<img src="'+myObj.array[3].link+'" alt="" style="   heigth:auto; width: 100%;" />'); // thay đổi cover hãng shu
			$("#ce1").html('<img src="'+myObj.array[0].link+'" alt="" style="   heigth:auto; width: 100%;" />   <br /> <p style="color:red;text-align:center; font-size:130%"></br>'+myObj.array[0].name+'</p> <br /><i><p style="text-align:center;">'+myObj.array[0].price+' VND</p> </i> ');
			$("#ce2").html('<img src="'+myObj.array[1].link+'" alt="" style="   heigth:auto; width: 100%;" />   <br /> <p style="color:red;text-align:center; font-size:130%"></br>'+myObj.array[1].name+'</p> <br /><i><p style="text-align:center;">'+myObj.array[1].price+' VND</p> </i> ');
			$("#ce3").html('<img src="'+myObj.array[2].link+'" alt="" style="   heigth:auto; width: 100%;" />   <br /> <p style="color:red;text-align:center; font-size:130%"></br>'+myObj.array[2].name+'</p> <br /><i><p style="text-align:center;">'+myObj.array[2].price+' VND</p> </i> ');
		}
	}
	xhttp.open("GET", "JSON/BaCE.json", true);
	xhttp.send();

	//mac
	
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			
			var myObj = JSON.parse(this.responseText);
			$("#coverMAC").html('<img src="'+myObj.array[3].link+'" alt="" style="   heigth:auto; width: 100%;" />'); // thay đổi cover hãng shu
			$("#mac1").html('<img src="'+myObj.array[0].link+'" alt="" style="   heigth:auto; width: 100%;" />   <br /> <p style="color:red;text-align:center; font-size:130%"></br>'+myObj.array[0].name+'</p> <br /><i><p style="text-align:center;">'+myObj.array[0].price+' VND</p> </i> ');
			$("#mac2").html('<img src="'+myObj.array[1].link+'" alt="" style="   heigth:auto; width: 100%;" />   <br /> <p style="color:red;text-align:center; font-size:130%"></br>'+myObj.array[1].name+'</p> <br /><i><p style="text-align:center;">'+myObj.array[1].price+' VND</p> </i> ');
			$("#mac3").html('<img src="'+myObj.array[2].link+'" alt="" style="   heigth:auto; width: 100%;" />   <br /> <p style="color:red;text-align:center; font-size:130%"></br>'+myObj.array[2].name+'</p> <br /><i><p style="text-align:center;">'+myObj.array[2].price+' VND</p> </i> ');
		}
	}
	xhttp.open("GET", "JSON/MAC.json", true);
	xhttp.send();

	//ysl
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			
			var myObj = JSON.parse(this.responseText);
			$("#coverYSL").html('<img src="'+myObj.array[3].link+'" alt="" style="   heigth:auto; width: 100%;" />'); // thay đổi cover hãng shu
			$("#ysl1").html('<img src="'+myObj.array[0].link+'" alt="" style="   heigth:auto; width: 100%;" />   <br /> <p style="color:red;text-align:center; font-size:130%"></br>'+myObj.array[0].name+'</p> <br /><i><p style="text-align:center;">'+myObj.array[0].price+' VND</p> </i> ');
			$("#ysl2").html('<img src="'+myObj.array[1].link+'" alt="" style="   heigth:auto; width: 100%;" />   <br /> <p style="color:red;text-align:center; font-size:130%"></br>'+myObj.array[1].name+'</p> <br /><i><p style="text-align:center;">'+myObj.array[1].price+' VND</p> </i> ');
			$("#ysl3").html('<img src="'+myObj.array[2].link+'" alt="" style="   heigth:auto; width: 100%;" />   <br /> <p style="color:red;text-align:center; font-size:130%"></br>'+myObj.array[2].name+'</p> <br /><i><p style="text-align:center;">'+myObj.array[2].price+' VND</p> </i> ');
		}
	}
	xhttp.open("GET", "JSON/YSL.json", true);
	xhttp.send();

	//bbia
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			
			var myObj = JSON.parse(this.responseText);
			$("#coverBBIA").html('<img src="'+myObj.array[3].link+'" alt="" style="   heigth:auto; width: 100%;" />'); // thay đổi cover hãng shu
			$("#bbia1").html('<img src="'+myObj.array[0].link+'" alt="" style="   heigth:auto; width: 100%;" />   <br /> <p style="color:red;text-align:center; font-size:130%"></br>'+myObj.array[0].name+'</p> <br /><i><p style="text-align:center;">'+myObj.array[0].price+' VND</p> </i> ');
			$("#bbia2").html('<img src="'+myObj.array[1].link+'" alt="" style="   heigth:auto; width: 100%;" />   <br /> <p style="color:red;text-align:center; font-size:130%"></br>'+myObj.array[1].name+'</p> <br /><i><p style="text-align:center;">'+myObj.array[1].price+' VND</p> </i> ');
			$("#bbia3").html('<img src="'+myObj.array[2].link+'" alt="" style="   heigth:auto; width: 100%;" />   <br /> <p style="color:red;text-align:center; font-size:130%"></br>'+myObj.array[2].name+'</p> <br /><i><p style="text-align:center;">'+myObj.array[2].price+' VND</p> </i> ');
		}
	}
	xhttp.open("GET", "JSON/BBIA.json", true);
	xhttp.send();

	//bbia
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			
			var myObj = JSON.parse(this.responseText);
			$("#coverBJ").html('<img src="'+myObj.array[3].link+'" alt="" style="   heigth:auto; width: 100%;" />'); // thay đổi cover hãng shu
			$("#bj1").html('<img src="'+myObj.array[0].link+'" alt="" style="   heigth:auto; width: 100%;" />   <br /> <p style="color:red;text-align:center; font-size:130%"></br>'+myObj.array[0].name+'</p> <br /><i><p style="text-align:center;">'+myObj.array[0].price+' VND</p> </i> ');
			$("#bj2").html('<img src="'+myObj.array[1].link+'" alt="" style="   heigth:auto; width: 100%;" />   <br /> <p style="color:red;text-align:center; font-size:130%"></br>'+myObj.array[1].name+'</p> <br /><i><p style="text-align:center;">'+myObj.array[1].price+' VND</p> </i> ');
			$("#bj3").html('<img src="'+myObj.array[2].link+'" alt="" style="   heigth:auto; width: 100%;" />   <br /> <p style="color:red;text-align:center; font-size:130%"></br>'+myObj.array[2].name+'</p> <br /><i><p style="text-align:center;">'+myObj.array[2].price+' VND</p> </i> ');
		}
	}
	xhttp.open("GET", "JSON/BJ.json", true);
	xhttp.send();
}