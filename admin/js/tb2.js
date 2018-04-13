cart= [];



var Item = function(id,name,price){
	this.id =id;
	this.name = name;
	this.price =price;
}
function getJson(){
	var xhttp = new XMLHttpRequest(); //tạo ra biến xhttp để request xin file json
	
	xhttp.onreadystatechange = function(){// khi readystate thay đổi
		if (this.readyState == 4 && this.status == 200){ //nếu state =4 và status = 200 thì chạy, nếu ra các số khác thì xem lại lỗi có thể ở apache. tham khảo thêm tại https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
			var myObj = JSON.parse(this.responseText);//code ở đây lấy đc db của json vào biến myObj;

				Quatity = Object.keys(myObj.array).length; // số lượng sản phẩm trong 1 file 
				for (var i = 0; i < Quatity; i++) {// for qua toàn bộ các ptu 
					id1=myObj.array[i].id;
					name1= myObj.array[i].name;
					price1 = myObj.array[i].price;
					item7= new Item(id1,name1,price1);
					cart.push(item7);
				}
			}
		};
		xhttp.open("GET", "js/highlight.json", true);//dùng giao thức get, với link là argument(tham trị) đc truyền vào ở đầu hàm
		xhttp.send();//gửi các giao thức trên đi cho server
		showCart();
	}



	function add(){
		var id = prompt("Xin mời nhập tên mã sản phẩm:", "id ");
		var name = prompt("Xin mời nhập tên sản phẩm:", "sp ");
		var price = prompt("Xin mời nhập giá:", "500000 ");
		item7= new Item(''+id,name,price);
		var checkExist=false;
		for (var i in cart){
			if(cart[i].id==id){
				alert("Đã tồn tại mã sản phẩm này!");
				checkExist=true;
				break;
			}
		}
		if(checkExist==false){
			cart.push(item7);
		}

		showCart();
		console.log(cart);
	}
	function edit(){
		var id = prompt("Xin mời nhập tên mã sản phẩm:", "id ");
		var name = prompt("Xin mời nhập tên sản phẩm:", "sp ");
		var price = prompt("Xin mời nhập giá:", "500000 ");
		var somethingChanged=false;
		for (var i in cart){
			if(cart[i].id==id){
				somethingChanged=true;
				cart[i].name= name;
				cart[i].price=price;
				break;
			}

		}
		if(somethingChanged==false){
			alert("Không tồn tại mã sản phẩm này!");
		}
		console.log(cart);
		showCart();
	}

	function del(){
		var id = prompt("Xin mời nhập tên mã sản phẩm:", "id ");
		checkChange= false;
		for(var i in cart){
			if (cart[i].id==id){
				cart.splice(i,1);
				checkChange= true;
				break;
			}
		}
		if(checkChange==false){
			alert("không có mã sản phẩm này");
		}
		console.log(cart);
		showCart();
	}
	function showCart(){
		
		
		for (var i = 0; i < cart.length; i++) {
			index=i+1;
			$('#Info').html('<tr><td>'+index+'</td><td>'+cart[i].id+'</td><td>'+cart[i].name+'</td><td>'+cart[i].price+' VND</td></tr>');
		}
	


	}

