function LoadPage(){
	$("#ProduceShow").html("") // để phần sản phẩm về rỗng trước!
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {

				//code ở đây lấy đc db vào biến myObj;
				var myObj = JSON.parse(this.responseText);
				Quatity = Object.keys(myObj.array).length; // số lượng sản phẩm trong 1 file
				for (var i = 0; i < Quatity; i++) {
					if(i%4==0){
						j=i+1;
						k=j+1;
						l=k+1;
						$("#ProduceShow").append(' <div class="row"><div class="col-md-3 sp1" id="product'+ i + '" >Chưa có sản phẩm</div><div class="col-md-3 sp1" id="product'+ j + '">Chưa có sản phẩm</div><div class="col-md-3 sp1" id="product'+ k + '" >Chưa có sản phẩm</div><div class="col-md-3 sp1" id="product'+ l + '">Chưa có sản phẩm</div></div> <br /><hr /> ');
					}
					// get thông tin từ SP1 SP2 SP3.... thành các data trong json

					$('#product'+i+'').html('<p style="font-size:130%; color:red; padding:0px 30px" >'+myObj.array[i].name + '</p>' +' <img src=" ' + myObj.array[i].link + ' " alt="" style="  heigth:auto; width: 100%;" >'+'<p style="font-size:150%; padding:0px 20px">'+myObj.array[i].price+' VND</p>');


				}

				
				
			}
		};
		xhttp.open("GET", "JSON/highlight.json", true);
		xhttp.send();
		
	};
	$(document).ready(function(){
		$("#btnALL").click(function(){


		$("#ProduceShow").html("") // để phần sản phẩm về rỗng trước!
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {

				//code ở đây lấy đc db vào biến myObj;
				var myObj = JSON.parse(this.responseText);
				Quatity = Object.keys(myObj.array).length; // số lượng sản phẩm trong 1 file
				for (var i = 0; i < Quatity; i++) {
					if(i%4==0){
						j=i+1;
						k=j+1;
						l=k+1;
						$("#ProduceShow").append(' <div class="row"><div class="col-md-3 sp1" id="product'+ i + '" >Chưa có sản phẩm</div><div class="col-md-3 sp1" id="product'+ j + '">Chưa có sản phẩm</div><div class="col-md-3 sp1" id="product'+ k + '" >Chưa có sản phẩm</div><div class="col-md-3 sp1" id="product'+ l + '">Chưa có sản phẩm</div></div> <br /><hr /> ');
					}
					// get thông tin từ SP1 SP2 SP3.... thành các data trong json

					$('#product'+i+'').html('<p style="font-size:130%; color:red; padding:0px 30px" >'+myObj.array[i].name + '</p>' +' <img src=" ' + myObj.array[i].link + ' " alt="" style="  heigth:auto; width: 100%;" >'+'<p style="font-size:150%; padding:0px 20px">'+myObj.array[i].price+' VND</p>');


				}

				
				
			}
		};
		xhttp.open("GET", "JSON/highlight.json", true);
		xhttp.send();
		
		
	});
	//nút shu
	$("#btnSHU").click(function(){


		$("#ProduceShow").html("") // để phần sản phẩm về rỗng trước!
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {

				//code ở đây lấy đc db vào biến myObj;
				var myObj = JSON.parse(this.responseText);
				Quatity = Object.keys(myObj.array).length; // số lượng sản phẩm trong 1 file
				for (var i = 0; i < Quatity; i++) {
					if(i%4==0){
						j=i+1;
						k=j+1;
						l=k+1;
						$("#ProduceShow").append(' <div class="row"><div class="col-md-3 sp1" id="product'+ i + '" >Chưa có sản phẩm</div><div class="col-md-3 sp1" id="product'+ j + '">Chưa có sản phẩm</div><div class="col-md-3 sp1" id="product'+ k + '" >Chưa có sản phẩm</div><div class="col-md-3 sp1" id="product'+ l + '">Chưa có sản phẩm</div></div> <br /><hr /> ');
					}
					// get thông tin từ SP1 SP2 SP3.... thành các data trong json

					$('#product'+i+'').html('<p style="font-size:130%; color:red; padding:0px 30px" >'+myObj.array[i].name + '</p>' +' <img src=" ' + myObj.array[i].link + ' " alt="" style="  heigth:auto; width: 100%;" >'+'<p style="font-size:150%; padding:0px 20px">'+myObj.array[i].price+' VND</p>');


				}

				
				
			}
		};
		xhttp.open("GET", "JSON/highlight.json", true);
		xhttp.send();
		
		
	});

	$("#btn3CE").click(function(){


		$("#ProduceShow").html("") // để phần sản phẩm về rỗng trước!
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {

				//code ở đây lấy đc db vào biến myObj;
				var myObj = JSON.parse(this.responseText);
				Quatity = Object.keys(myObj.array).length; // số lượng sản phẩm trong 1 file
				for (var i = 0; i < Quatity; i++) {
					if(i%4==0){
						j=i+1;
						k=j+1;
						l=k+1;
						$("#ProduceShow").append(' <div class="row"><div class="col-md-3 sp1" id="product'+ i + '" >Chưa có sản phẩm</div><div class="col-md-3 sp1" id="product'+ j + '">Chưa có sản phẩm</div><div class="col-md-3 sp1" id="product'+ k + '" >Chưa có sản phẩm</div><div class="col-md-3 sp1" id="product'+ l + '">Chưa có sản phẩm</div></div> <br /><hr /> ');
					}
					// get thông tin từ SP1 SP2 SP3.... thành các data trong json

					$('#product'+i+'').html('<p style="font-size:130%; color:red; padding:0px 30px" >'+myObj.array[i].name + '</p>' +' <img src=" ' + myObj.array[i].link + ' " alt="" style="  heigth:auto; width: 100%;" >'+'<p style="font-size:150%; padding:0px 20px">'+myObj.array[i].price+' VND</p>');


				}

				
				
			}
		};
		xhttp.open("GET", "JSON/BaCE.json", true);
		xhttp.send();
		
		
	});

	$("#btnMAC").click(function(){


		$("#ProduceShow").html("") // để phần sản phẩm về rỗng trước!
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {

				//code ở đây lấy đc db vào biến myObj;
				var myObj = JSON.parse(this.responseText);
				Quatity = Object.keys(myObj.array).length; // số lượng sản phẩm trong 1 file
				for (var i = 0; i < Quatity; i++) {
					if(i%4==0){
						j=i+1;
						k=j+1;
						l=k+1;
						$("#ProduceShow").append(' <div class="row"><div class="col-md-3 sp1" id="product'+ i + '" >Chưa có sản phẩm</div><div class="col-md-3 sp1" id="product'+ j + '">Chưa có sản phẩm</div><div class="col-md-3 sp1" id="product'+ k + '" >Chưa có sản phẩm</div><div class="col-md-3 sp1" id="product'+ l + '">Chưa có sản phẩm</div></div> <br /><hr /> ');
					}
					// get thông tin từ SP1 SP2 SP3.... thành các data trong json

					$('#product'+i+'').html('<p style="font-size:130%; color:red; padding:0px 30px" >'+myObj.array[i].name + '</p>' +' <img src=" ' + myObj.array[i].link + ' " alt="" style="  heigth:auto; width: 100%;" >'+'<p style="font-size:150%; padding:0px 20px">'+myObj.array[i].price+' VND</p>');


				}

				
				
			}
		};
		xhttp.open("GET", "JSON/MAC.json", true);
		xhttp.send();
		
	});

	$("#btnBJ").click(function(){

$("#ProduceShow").html("") // để phần sản phẩm về rỗng trước!
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {

				//code ở đây lấy đc db vào biến myObj;
				var myObj = JSON.parse(this.responseText);
				Quatity = Object.keys(myObj.array).length; // số lượng sản phẩm trong 1 file
				for (var i = 0; i < Quatity; i++) {
					if(i%4==0){
						j=i+1;
						k=j+1;
						l=k+1;
						$("#ProduceShow").append(' <div class="row"><div class="col-md-3 sp1" id="product'+ i + '" >Chưa có sản phẩm</div><div class="col-md-3 sp1" id="product'+ j + '">Chưa có sản phẩm</div><div class="col-md-3 sp1" id="product'+ k + '" >Chưa có sản phẩm</div><div class="col-md-3 sp1" id="product'+ l + '">Chưa có sản phẩm</div></div> <br /><hr /> ');
					}
					// get thông tin từ SP1 SP2 SP3.... thành các data trong json

					$('#product'+i+'').html('<p style="font-size:130%; color:red; padding:0px 30px" >'+myObj.array[i].name + '</p>' +' <img src=" ' + myObj.array[i].link + ' " alt="" style="  heigth:auto; width: 100%;" >'+'<p style="font-size:150%; padding:0px 20px">'+myObj.array[i].price+' VND</p>');


				}

				
				
			}
		};
		xhttp.open("GET", "JSON/BJ.json", true);
		xhttp.send();
		
		
	});

	$("#btnBBIA").click(function(){

$("#ProduceShow").html("") // để phần sản phẩm về rỗng trước!
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {

				//code ở đây lấy đc db vào biến myObj;
				var myObj = JSON.parse(this.responseText);
				Quatity = Object.keys(myObj.array).length; // số lượng sản phẩm trong 1 file
				for (var i = 0; i < Quatity; i++) {
					if(i%4==0){
						j=i+1;
						k=j+1;
						l=k+1;
						$("#ProduceShow").append(' <div class="row"><div class="col-md-3 sp1" id="product'+ i + '" >Chưa có sản phẩm</div><div class="col-md-3 sp1" id="product'+ j + '">Chưa có sản phẩm</div><div class="col-md-3 sp1" id="product'+ k + '" >Chưa có sản phẩm</div><div class="col-md-3 sp1" id="product'+ l + '">Chưa có sản phẩm</div></div> <br /><hr /> ');
					}
					// get thông tin từ SP1 SP2 SP3.... thành các data trong json

					$('#product'+i+'').html('<p style="font-size:130%; color:red; padding:0px 30px" >'+myObj.array[i].name + '</p>' +' <img src=" ' + myObj.array[i].link + ' " alt="" style="  heigth:auto; width: 100%;" >'+'<p style="font-size:150%; padding:0px 20px">'+myObj.array[i].price+' VND</p>');


				}

				
				
			}
		};
		xhttp.open("GET", "JSON/BBIA.json", true);
		xhttp.send();
		
	});
	$("#btnYSL").click(function(){


	$("#ProduceShow").html("") // để phần sản phẩm về rỗng trước!
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {

				//code ở đây lấy đc db vào biến myObj;
				var myObj = JSON.parse(this.responseText);
				Quatity = Object.keys(myObj.array).length; // số lượng sản phẩm trong 1 file
				for (var i = 0; i < Quatity; i++) {
					if(i%4==0){
						j=i+1;
						k=j+1;
						l=k+1;
						$("#ProduceShow").append(' <div class="row"><div class="col-md-3 sp1" id="product'+ i + '" >Chưa có sản phẩm</div><div class="col-md-3 sp1" id="product'+ j + '">Chưa có sản phẩm</div><div class="col-md-3 sp1" id="product'+ k + '" >Chưa có sản phẩm</div><div class="col-md-3 sp1" id="product'+ l + '">Chưa có sản phẩm</div></div> <br /><hr /> ');
					}
					// get thông tin từ SP1 SP2 SP3.... thành các data trong json

					$('#product'+i+'').html('<p style="font-size:130%; color:red; padding:0px 30px" >'+myObj.array[i].name + '</p>' +' <img src=" ' + myObj.array[i].link + ' " alt="" style="  heigth:auto; width: 100%;" >'+'<p style="font-size:150%; padding:0px 20px">'+myObj.array[i].price+' VND</p>');


				}

				
				
			}
		};
		xhttp.open("GET", "JSON/YSL.json", true);
		xhttp.send();
		
		
	});
	
	


});