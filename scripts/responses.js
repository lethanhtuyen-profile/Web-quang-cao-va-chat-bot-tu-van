function getBotResponse(input) {

    // Greeting
    if (input == "xin chao" || input == "chao ban" || input == "xin chào" || input == "Xin Chào"
    || input == "chào bạn" || input == "Chào bạn") {
        return "Xin chào anh chị, em là chatbot hỗ trợ khách hàng của công ty. Em có thể giúp gì cho anh chị ạ ?";
    }
    else if(input == "dich vu" || input == "dịch vụ" || input == "Dịch vụ" || input == "Dich vu"
    || input == "dich vu cua cong ty" || input == "dịch vụ của công ty" || input == "Dịch vụ của công ty" 
    || input == "Dich vu cua cong ty" || input == "cong ty co dich vu gi" || input == "công ty có dịch vụ gì"
    || input == "Công ty có dịch vụ gì ?" || input == "Cong ty co dich vu gi ?" 
    || input == "Công ty có dịch vụ gì" || input == "Cong ty co dich vu gi"){
        return "Gia công cơ khí; xử lý và tráng phủ kim loại" +
        	"Sản xuất kim loại màu và kim loại quý" +
        	"Sản xuất các cấu kiện kim loại"+
        	"Sản xuất thùng, bể chứa và dụng cụ chứa đựng bằng kim loại"+
        	"Rèn, dập, ép và cán kim loại; luyện bột kim loại"+
        	"Sản xuất sản phẩm khác bằng kim loại chưa được phân vào đâu"+
        	"Sản xuất các thiết bị nâng, hạ và bốc xếp"+
        	"Sản xuất máy móc và thiết bị văn phòng (trừ máy vi tính và thiết bị ngoại vi của máy vi tính)"+
        	"Đóng tàu và cấu kiện nổi"+
        	"Sửa chữa các sản phẩm kim loại đúc sẵn"+
        	"Sửa chữa máy móc, thiết bị"+
        	"Sửa chữa thiết bị điện"+
        	"Sửa chữa và bảo dưỡng phương tiện vận tải (trừ ô tô, mô tô, xe máy và xe có động cơ khác)"+
        	"Lắp đặt máy móc và thiết bị công nghiệp" +

        	"Xây dựng nhà các loại"+
        	"Xây dựng công trình đường sắt và đường bộ"+
        	"Xây dựng công trình kỹ thuật dân dụng khác"+
        	"Phá dỡ"+
        	"Chuẩn bị mặt bằng" +
        	"Lắp đặt hệ thống điện" +
        	"Lắp đặt hệ thống cấp, thoát nước, lò sưởi và điều hoà không khí" +
        	"Bán buôn ô tô và xe có động cơ khác" +
        	"Bảo dưỡng, sửa chữa ô tô và xe có động cơ khác"+
        	"Bán phụ tùng và các bộ phận phụ trợ của ô tô và xe có động cơ khác" +
        	"Bán buôn kim loại và quặng kim loại" +
        	"Lập trình máy vi tính" +
        	"Tư vấn máy vi tính và quản trị hệ thống máy vi tính" +
        	"Hoạt động dịch vụ công nghệ thông tin và dịch vụ khác liên quan đến máy vi tính" +
        	"Cho thuê xe có động cơ"+
        	"Sửa chữa máy vi tính và thiết bị ngoại vi" +
        	"Sửa chữa thiết bị liên lạc" +
        	"Cho thuê máy móc, thiết bị và đồ dùng hữu hình khác" 
        ;
    }
    
    else if(input == "tu van" || input == "tư vấn" || input == "Tư vấn" || input == "Tu van"){
        return "Công ty bên em có thế mạnh đặc biệt về mảng xây dựng, sản xuất và gia công các sản phẩm bằng kim loại hoặc sản phẩm có tính đặc thù cao, nhờ vậy mà công ty đã ký và hoàn thành các hợp đồng với các đối tác lớn, như chế tạo 'Phao neo hàng hải' cho Cảnh Sát biển Vùng I giá trị hợp đồng 1,8 tỉ đồng hay 'Xây dựng nhà xưởng sản xuất khung thép 12000 mét vuông' cho công ty TNHH Kaler Quartz với giá trị hợp đồng lên tới 12 tỉ đồng. Nếu anh/chị cần đến những dịch vụ trên, công ty bên em sẽ đem đến cho anh/chị sự hài lòng tuyệt đối ! "

    }
    
    else if(input == "gioi thieu" || input == "giới thiệu" || input == "gioi thieu cong ty" || input == 
    "giới thiệu công ty" || input == "Gioi Thieu" || input == "Giới Thiệu" || input == "Giới Thiệu Công Ty" || "Gioi Thieu Cong Ty"){
        return "Công Ty TNHH dịch vụ kỹ thuật Toàn Phương được thành lập từ năm 2015 được Sở kế hoạch và đầu tư Thành phố Hải Phòng cấp giấy chứng nhận đăng ký kinh doanhvà đăng ký thuế công ty TNHH mã số 021624488.";
    }
    
    else{
        return "Xin lỗi anh/chị, em không hiểu câu hỏi"
    }

}