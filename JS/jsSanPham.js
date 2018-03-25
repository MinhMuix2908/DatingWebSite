$(document).ready(function(){

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
						$("#ProduceShow").append(' <div class="row"><div class="col-md-3" id="product'+ i + '" >Chưa có sản phẩm</div><div class="col-md-3" id="product'+ j + '">Chưa có sản phẩm</div><div class="col-md-3" id="product'+ k + '" >Chưa có sản phẩm</div><div class="col-md-3" id="product'+ l + '">Chưa có sản phẩm</div></div>');
					}
					// get thông tin từ SP1 SP2 SP3.... thành các data trong json

					$('#product'+i+'').html(myObj.array[i].name + ' <img src=" ' + myObj.array[i].link + ' " alt="" style="   heigth:auto; width: 100%;" > ');


				}

				
				
			}
		};
		xhttp.open("GET", "JSON/SHU.json", true);
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
						$("#ProduceShow").append(' <div class="row"><div class="col-md-3" id="product'+ i + '" >Chưa có sản phẩm</div><div class="col-md-3" id="product'+ j + '">Chưa có sản phẩm</div><div class="col-md-3" id="product'+ k + '" >Chưa có sản phẩm</div><div class="col-md-3" id="product'+ l + '">Chưa có sản phẩm</div></div>');
					}
					// get thông tin từ SP1 SP2 SP3.... thành các data trong json

					$('#product'+i+'').html(myObj.array[i].name + ' <img src=" ' + myObj.array[i].link + ' " alt="" style="   heigth:auto; width: 100%;" > ');


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
						$("#ProduceShow").append(' <div class="row"><div class="col-md-3" id="product'+ i + '" >Chưa có sản phẩm</div><div class="col-md-3" id="product'+ j + '">Chưa có sản phẩm</div><div class="col-md-3" id="product'+ k + '" >Chưa có sản phẩm</div><div class="col-md-3" id="product'+ l + '">Chưa có sản phẩm</div></div>');
					}
					// get thông tin từ SP1 SP2 SP3.... thành các data trong json

					$('#product'+i+'').html(myObj.array[i].name + ' <img src=" ' + myObj.array[i].link + ' " alt="" style="   heigth:auto; width: 100%;" > ');


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
						$("#ProduceShow").append(' <div class="row"><div class="col-md-3" id="product'+ i + '" >Chưa có sản phẩm</div><div class="col-md-3" id="product'+ j + '">Chưa có sản phẩm</div><div class="col-md-3" id="product'+ k + '" >Chưa có sản phẩm</div><div class="col-md-3" id="product'+ l + '">Chưa có sản phẩm</div></div>');
					}
					// get thông tin từ SP1 SP2 SP3.... thành các data trong json

					$('#product'+i+'').html(myObj.array[i].name + ' <img src=" ' + myObj.array[i].link + ' " alt="" style="   heigth:auto; width: 100%;" > ');


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
						$("#ProduceShow").append(' <div class="row"><div class="col-md-3" id="product'+ i + '" >Chưa có sản phẩm</div><div class="col-md-3" id="product'+ j + '">Chưa có sản phẩm</div><div class="col-md-3" id="product'+ k + '" >Chưa có sản phẩm</div><div class="col-md-3" id="product'+ l + '">Chưa có sản phẩm</div></div>');
					}
					// get thông tin từ SP1 SP2 SP3.... thành các data trong json

					$('#product'+i+'').html(myObj.array[i].name + ' <img src=" ' + myObj.array[i].link + ' " alt="" style="   heigth:auto; width: 100%;" > ');


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
						$("#ProduceShow").append(' <div class="row"><div class="col-md-3" id="product'+ i + '" >Chưa có sản phẩm</div><div class="col-md-3" id="product'+ j + '">Chưa có sản phẩm</div><div class="col-md-3" id="product'+ k + '" >Chưa có sản phẩm</div><div class="col-md-3" id="product'+ l + '">Chưa có sản phẩm</div></div>');
					}
					// get thông tin từ SP1 SP2 SP3.... thành các data trong json

					$('#product'+i+'').html(myObj.array[i].name + ' <img src=" ' + myObj.array[i].link + ' " alt="" style="   heigth:auto; width: 100%;" > ');


				}

				
				
			}
		};
		xhttp.open("GET", "JSON/YSL.json", true);
		xhttp.send();
		
		
	});
	
	


});