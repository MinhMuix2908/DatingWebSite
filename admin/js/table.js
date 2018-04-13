	var count=1;
	alert("đang sử dụng table.js")
	var xhttp = new XMLHttpRequest(); //tạo ra biến xhttp để request xin file json
	xhttp.onreadystatechange = function(){// khi readystate thay đổi
		if (this.readyState == 4 && this.status == 200){ //nếu state =4 và status = 200 thì chạy, nếu ra các số khác thì xem lại lỗi có thể ở apache. tham khảo thêm tại https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
			var myObj = JSON.parse(this.responseText);//code ở đây lấy đc db của json vào biến myObj;
				Quatity = Object.keys(myObj.array).length; // số lượng sản phẩm trong 1 file 
				for (var i = 0; i < Quatity; i++) {// for qua toàn bộ các ptu 
					console.log(myObj.array[i]);
					$('#Info').append('<tr id="r'+i+'"><td>'+count+'</td><td>'+myObj.array[i].id+'</td><td>'+myObj.array[i].name+'</td><td>'+myObj.array[i].price+' VND</td></tr>')
					count++;
				}
			}
		};
		xhttp.open("GET", "js/highlight.json", true);//dùng giao thức get, với link là argument(tham trị) đc truyền vào ở đầu hàm
		xhttp.send();//gửi các giao thức trên đi cho server

		function add(){
			var id = prompt("Xin mời nhập tên mã sản phẩm:", "id ");
			var name = prompt("Xin mời nhập tên sản phẩm:", "sp ");
			var price = prompt("Xin mời nhập giá:", "500000 ");
			$('#Info').append('<tr><td>'+count+'</td><td>'+id+'</td><td>'+name+'</td><td>'+price+' VND</td></tr>');
			count++;
		}
