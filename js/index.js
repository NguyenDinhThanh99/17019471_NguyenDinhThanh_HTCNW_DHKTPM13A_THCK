$(document).ready(function () {
    var i=1;
    $("#btn2").click(function () {
        $("#myModal").modal();
    });

    function kiemTraTen() {
        var i=1;
        let mauKT = /([A-Z]{1}[a-z]+)((\s[A-Z]{1}[a-z]+){1,})$/;
        if ($("#Name").val() == "") {
            $("#tbName").html("không để trống");
            return false;
        } if (!mauKT.test($("#Name").val())) {
            $("#tbName").html("Mỗi ký tự đầu tiên đều viết hoa không sử dụng số");
        }
        $("#tbName").html("*");
        return true;
    }
    $("#Name").blur(kiemTraTen);

    function kiemTraAo() {
        let mauKT = /^\d*$/;
        if ($("#Ao").val() == "") {
            $("#tbAo").html("không để trống");
            return false;
        } if (!mauKT.test($("#Ao").val())) {
            $("#tbAo").html("Dùng từ 1 đến 100");
            return true;
        }else{
            var soAo = $("#Ao").val();
            if (soAo <1 || soAo >100) {
                $("#tbAo").html("Dùng từ 1 đến 100");
            } else {
                $("#tbAo").html("*");
                return true;
            }
        }
    }
    $("#Ao").blur(kiemTraAo);

    function kiemTraCLB() {
        let mauKT = /([A-Z]{1}[a-z]+)((\s[A-Z]{1}[a-z]+){1,})$/;
        if ($("#CLB").val() == "") {
            $("#tbCLB").html("không để trống");
            return false;
        } if (!mauKT.test($("#CLB").val())) {
            $("#tbCLB").html("Mỗi ký tự đầu tiên đều viết hoa không sử dụng số");
        }
        $("#tbCLB").html("*");
        return true;
    }
    $("#CLB").blur(kiemTraCLB);

    function kiemTraNTT() {
       
        if ($("#NTT").val() == "") {
            $("#tbNTT").html("không để trống");
            return false;
        }
        var today = new Date();
        var ntt = new Date($("#NTT").val());
        today = today.setDate(today.getDate() +7);
        
        if (today > ntt) {
            $("#tbNTT").html("Phải sau ngày hiện tại 7 ngày");
        }
        $("#tbNTT").html("*");
        return true;
    }
    $("#NTT").blur(kiemTraNTT);

    function kiemTraSDT() {
        
        let mauKT = /^0\d{3}-\d{3}-\d{3}$/;
        if ($("#SDT").val() == "") {
            $("#tbSDT").html("không để trống");
            return false;
        } if (!mauKT.test($("#SDT").val())) {
            $("#tbSDT").html("Theo dạng 0xxx-xxx-xxx trong đó x là số");
            return true;
        }
        $("#tbSDT").html("*");
        return true;
    }
    $("#SDT").blur(kiemTraSDT);

    $("#Save").click(function() {
        if (kiemTraTen()==true && kiemTraAo() && kiemTraSDT() && kiemTraNTT() && kiemTraCLB()) {
            row="<tr>";
            row +="<th>" + (i++) + "</th>";
            row +="<th>" + $("#Name").val() +"<//th>";
            row +="<th>" + $("#Ao").val() +"<//th>";
            row +="<th>" + $("#CLB").val() +"<//th>";
            row +="<th>" + $("#NTT").val() +"<//th>";
            row +="<th>" + $("#SDT").val() +"<//th>";
            row +="<th>" + $("#ADD").val() +"<//th>";
            $("#danhSach").append(row);
            $("#myModal").modal("hide");
        }
    })
})