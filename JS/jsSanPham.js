//giỏ hàng
cart = []; //array giỏ

var Item = function(id,nameInput,price){ //class Item để lưu thông tin của 1 sản phẩm trong giỏ hàng
	this.id=id; //id của 1 đối tượng Item nào đó ví dụ như item7 được truyền giá trị id(argument)
	this.name= nameInput;//tương tự id
	this.price = price;//tương tự price
	this.count=1;// đây là 1 int mặc định là 1, chỉ đc thay đổi khi thực hiện các chức năng thêm sửa xóa
};
function addItem(id, name, price){ // thêm sản phẩm
	item7=new Item(id,name,price); // tạo ra 1 item7 là 1 obj của Item... có thể dùng var hoặc ko vì scope của item7 là nội hàm
	var checkExist= false;// đưa ra 1 biến check xem đã có sp này chưa
	for ( var i in cart) { //vòng for duyện toàn bộ array cart
		if(cart[i].id==item7.id){ // nếu có sp chuẩn bị add này(id sp nhập trùng với id có trong cart)
			checkExist=true; // đưa biến kiểm tra tồn tại này thành true
			cart[i].count = cart[i].count+1; //vì đã tồn tại nên chỉ cần tăng count lên 1
			break;// hủy for
		}
	}
	if(checkExist==false){ // nếu ko tồn tại
		cart.push(item7);//add thêm vào cart
	}
	console.log(cart); //đây là nơi e kiểm tra hàm đã chạy chưa
	tempAlert("Đã thêm sản phẩm vào giỏ hàng thành công sản phẩm: <br /> ", name ,price, 2000);// hàm này sẽ tạo ra 1 alert trong 2s
	showCart();//hàm này đưa thông tin show ra ở giỏ hàng cho người dùng thấy
};
function removeItem(id){ //xóa sản phẩm(-1)
	for (var i in cart){//duyệt toàn bộ cart
		if(cart[i].id == id){//nếu trùng id sẽ xóa
			if(cart[i].count > 1 ){// nếu count lớn hơn 1 thì trừ đi 1 ở count
				cart[i].count--;
				
			}
			else{//nếu chỉ có 1 thì sẽ phải xóa hẳn sp ra khỏi cart
				cart.splice(i,1);
				
			}
			break;
		}
	}
	console.log(cart);//hiển thị cart trên console để kiểm tra
	showCart();// hiển thi lại giá trị ở giỏ hàng
	
}
function MoneyComing(){//hàm này đc kích hoạt(trigger) khi người dùng ấn đặt hàng
	if(cart.length==0){ // giỏ hàng =0 thì thông báo và ngừng hàm lại
		alert("Bạn chưa có sản phẩm nào trong giỏ! ");
		return;
	}
	if (confirm("Quý khách vui lòng nhập chính xác thông tin mua hàng! Cửa hàng sẽ không chịu trách nhiệm với bất kỳ sai sót nào!")) {// đây là 1 confirm box cho người dùng chọn với 2 giá trị true hoặc false, ở dưới là khi chọn true
		var txt;//tạo biết txxt để lưu lại lời cảm ơn ở dưới
		var person = prompt("Xin mời nhập tên:", "Khách "); // đây là 1 dạng alert để cho người dùng nhập, nhập tên
		var address = prompt("Xin mời nhập địa chỉ:", "Địa chỉ khách ");// nhập địa chỉ
		var phoneNum = prompt("Xin mời nhập số điện thoại:", "Số điện thoại khách ");//nhập điện thoại
		if (person == null || person == "" ||address == null || address == ""||phoneNum == null || phoneNum == "" ) {
			MoneyComing();// nếu 1 trong các phần trên bị rỗng thì yêu cầu nhập lại
			return;// sau khi đệ quy lại hàm ta không muốn sau khi khách đặt thành công lại bị cảm ơn lần 2 nên return luôn ở đây
		} else {
			txt = "Cảm ơn " + person + "! Bạn đã đặt hàng thành công!";//lưu ra lời cảm ơn
		}
		alert(txt);//đưa ra màn hình lời cảm ơn
		removeAll();//sau khi mua đồ xong thì xóa trắng giỏ hàng để người dùng không phải xách nặng lỉnh kỉnh, có sức mua đồ mới
	} else {
		// chẳng có chuyện gì xảy ra :))
	}
	
}
function removeAll(){ //xóa cả array cart
	if(cart.length==0){// nếu cart rỗng thì hiện ra thông báo, giống ở hàm moneycoming
		alert("Bạn chưa có sản phẩm nào trong giỏ! ");
		return;//dừng luôn hàm
	}
	cart.splice(0,cart.length);//xóa mảng từ vị trí thứ 0, cùng với cart.length-1 phần tử phía sau, nghĩa là xóa sạch
	console.log(cart);// hiện ra trên console để kiểm tra
	showCart();// thay đổi thông tin ở giỏ hàng
}

function tempAlert(msg,name,price, duration){//hiện ra popup alert trong 1 thời gian
	var el = document.createElement("div"); //tạo ra 1 biến là el(element)
	el.setAttribute("style","position:fixed;width:40%;top:40%;left:30%;background-color:white;text-align:center; border:1px solid black;");// đặt thuộc tính css cho el
	el.setAttribute("class","container"); //cho el thêm class bằng container
	el.innerHTML = '<p>'+msg+ '<i style="color:red;font-size:130%; margin:0px">'+name+'</i>'+'</p> <i style="font-size:150%; margin:0px;color:brown;">'+price+'VND</i>'; //thay đổi cấu trúc html của el, hoặc có thể nói là hàm sinh HTML
	setTimeout(function(){//đưa ra thời gian để el bị remove
		el.parentNode.removeChild(el);
	},duration);// bắt đầu thời gian đếm ngược el bị xóa
	document.body.appendChild(el);//đưa nút con vào body HTML
}
function showCart(){// hiện ra giỏ hàng ở vị trí dưới phần bảng sidemenu chọn hãng son
	$("#cartName").html("<b>Tên son</b> <br>");
	$('#cartQuantity').html("<b>Số mua</b> <br>");
	$('#minus').html("<b>Giảm</b> <br>");
	//mỗi lần e đều làm động tác xóa sạch cart hiện thị
	for ( i in cart){//duyệt cả mảng
		//ở dưới đây là 3 thẻ div đc chia col-md để dễ dàng làm việc
		$("#cartName").append("<i>"+cart[i].name+"</i><br />");// thêm tên vào cột tên son
		$("#cartQuantity").append(""+cart[i].count+"<br />");//thêm tên vào cột số lượng
		$('#minus').append("<div "+'onclick=removeItem('+"'"+cart[i].id+"'"+')'+" style="+'"cursor:pointer;"'+">&#x2198</div> ");//nút trừ để giảm sản phẩm đi 1. ở 1 trừ này lại chính là 1 div với thuộc tính onclick đưa tới hàm xóa 1 count ở cart. ở đây phải thêm thuộc tính style cursor :pointer để khi hover chuột vào chuột sẽ chuyển thành hình bàn tay
	}
}

function generatorPage(url){//lấy url là 1 file json,  hàm sử dụng ajax thay đổi thông tin ở phần produceshow theo cách mình muốn
	$("#ProduceShow").html("") // để phần sản phẩm về rỗng
	var xhttp = new XMLHttpRequest(); //tạo ra biến xhttp để request xin file json
	xhttp.onreadystatechange = function(){// khi readystate thay đổi
		if (this.readyState == 4 && this.status == 200){ //nếu state =4 và status = 200 thì chạy, nếu ra các số khác thì xem lại lỗi có thể ở apache. tham khảo thêm tại https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
			var myObj = JSON.parse(this.responseText);//code ở đây lấy đc db của json vào biến myObj;
				Quatity = Object.keys(myObj.array).length; // số lượng sản phẩm trong 1 file 
				for (var i = 0; i < Quatity; i++) {// for qua toàn bộ các ptu 
					if(i%4==0){// tạo ra 1 dòng gồm 4 nơi để sản phẩm
						j=i+1; //ở đây hơi thủ công nhưng e buộc phải làm như này vì ở dưới nếu e làm là i+1 thì ctr sẽ hiểu nhầm thành i+1 là 1 chuỗi lấy giá trị i và chuỗi"1" chứ không phải là biển thức toán học i+1
						k=j+1;//tương tự j
						l=k+1;//tương tự k
						$("#ProduceShow").append(' <div class="row"><div class="col-md-3 sp1" id="product'+ i + '"'+ ' onclick="addItem('+"'" +myObj.array[i].id +"'"+','+"'"+myObj.array[i].name+"'"+','+myObj.array[i].price+')" style="cursor: pointer;" >Chưa có sản phẩm</div><div class="col-md-3 sp1" id="product'+ j + '"'+'onclick="addItem('+"'" +myObj.array[j].id +"'"+','+"'"+myObj.array[j].name+"'"+','+myObj.array[j].price+')" style="cursor: pointer;" '+'>Chưa có sản phẩm</div><div class="col-md-3 sp1" id="product'+ k + '"'+'onclick="addItem('+"'" +myObj.array[k].id +"'"+','+"'"+myObj.array[k].name+"'"+','+myObj.array[k].price+')"style="cursor: pointer;"'+' >Chưa có sản phẩm</div><div class="col-md-3 sp1" id="product'+ l + '"'+'onclick="addItem('+"'" +myObj.array[l].id +"'"+','+"'"+myObj.array[l].name+"'"+','+myObj.array[l].price+')" style="cursor: pointer;"'+'>Chưa có sản phẩm</div></div> <br /><hr /> ');
					}
					//ở đây ta sinh ra đc cấu trúc như mong muốn ở ProduceShow
					$('#product'+i+'').html('<p style="font-size:130%; color:red; padding:0px 30px" >'+myObj.array[i].name + '</p>' +' <img src=" ' + myObj.array[i].link + ' " alt="" style="  heigth:auto; width: 100%;" >'+'<p style="font-size:150%; padding:0px 20px">'+myObj.array[i].price+' VND</p>');
					//với mỗi sản phẩm trong json ta sẽ đưa vào 1 ô
				}
			}
		};
		xhttp.open("GET", url, true);//dùng giao thức get, với link là argument(tham trị) đc truyền vào ở đầu hàm
		xhttp.send();//gửi các giao thức trên đi cho server
	};




	function LoadPage(){//đc kích hoạt khi trang SanPham.html đc load
		generatorPage('JSON/highlight.json'); //gọi hàm generator ở phía trên với url là file highlight
	};
	//các hàm bên dưới là các nút đc kích hoạt bằng thuộc tính onclick, cũng sử dụng hàm generator ở trên
	$(document).ready(function(){
		$("#btnALL").click(function(){
			generatorPage('JSON/highlight.json');
		});
	//nút shu
	$("#btnSHU").click(function(){
		generatorPage('JSON/SHU.json');
	});
	//tương tự các nút còn lại
	$("#btn3CE").click(function(){
		generatorPage('JSON/BaCE.json');
	});
	$("#btnMAC").click(function(){
		generatorPage('JSON/MAC.json');
	});
	$("#btnBJ").click(function(){
		generatorPage('JSON/BJ.json');
	});
	$("#btnBBIA").click(function(){
		generatorPage('JSON/BBIA.json');
	});
	$("#btnYSL").click(function(){
		generatorPage('JSON/YSL.json');	
	});
});