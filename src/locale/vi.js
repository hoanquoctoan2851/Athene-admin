const locale_vi = {
    common: {
        email: 'Email',
        password: 'Mật khẩu',
        password_confirm: 'Xác nhận mật khẩu mới',
        password_confirm_1: 'Xác nhận mật khẩu',
        new_password: 'Mật khẩu mới',
        old_password: 'Mật khẩu cũ',
        change_password: 'Đổi mật khẩu',
        '2fa': 'Mã 2FA',
        number_of_page: 'Số hàng trên trang:',
        is_display: 'Đang hiển thị {start}-{end} kết quả của {total} kết quả',
        items: 'items',
        placeholder_input_search: 'Tìm kiếm email, message',
        all: 'Tất cả',
        edit: 'Chỉnh sửa',
        add_new: 'Thêm mới',
        status: 'Trạng thái',
        admin: 'Admin',
        cancel: 'Hủy',
        logout: 'Đăng xuất',
        day: 'Ngày',
        week: 'Tuần',
        month: 'Tháng',
        address: 'Địa chỉ',
    },
    placeholder: {
        search_for_email: 'Tìm kiếm email',
        search_for_version_release: 'Tìm kiếm version, release',
        search_for_title_content: 'Tìm kiếm tiêu đề, nội dung'

    },
    message: {
        error: 'Lỗi',
        error_content: 'Đã có lỗi xảy ra!',
        success: 'Thành công',
        success_content: 'Thao tác thành công',
        pending: 'Pending',
        warning: 'Warning',
    },
    validate: {
        password: 'Hãy điền mật khẩu!',
        new_password: 'Hãy điền mật khẩu mới!',
        old_password: 'Hãy điền mật khẩu cũ!',
        confirm_password: 'Hãy điền mật khẩu xác nhận!',
        confirm_password_like: 'Mật khẩu mới không khớp!',
        version: 'Hãy điền phiên bản!',
        email: 'Hãy điền email!',
        '2fa': 'Hãy điền mã xác nhận!',
        title: 'Hãy điền tiêu đề!',
        content: 'Hãy điền nội dung!',
        link: 'Hãy điền liên kết!'

    },
    pop_confirm: {
        confirm_logout : 'Bạn có chắc chắn muốn đăng xuất',
    },
    page: {
        login: {
            login_success: 'Bạn đã đăng nhập thành công!'
        },
        home: {
            cart_item: {
                item_1: 'Tổng số người dùng',
                item_2: 'Người dùng đã KYC',
                item_3: 'Số người đang online',
                week_title: 'So với tuần trước',
            }
        },
        user_manager: {
            confirm_lock: 'Xác nhận khoá người dùng {user}',
            confirm_un_lock: 'Xác nhận mở khoá người dùng {user}'
        },
        version_manager: {
            confirm_delete_version: 'Xác nhận xoá version {version}',
            confirm_update_version : 'Xác nhận chỉnh sửa version {user}',
            add_new_version: 'Thêm phiên bản mới',
            add_version: 'Thêm phiên bản',
            version: 'Phiên bản',
            release_note: 'Release note'
        },
        admin_manager: {
            add_new_admin: 'Tạo Admin mới',
        },
        notification: {
            add_new_notification: 'Tạo thông báo mới',
            title: 'Tiêu đề',
            content: 'Nội dung',
            link: 'Link',
            image: 'Ảnh',
            action: 'Hành động',
            select_user: 'Chọn người dùng'
        },

        user: {
            current_statistics: 'Tổng quan người dùng hiện tại',
            new_statistics: 'Người dùng mới',
            current_user_item_1: 'Người dùng chưa KYC',
            ref: 'Ref: {ref}',
            no_ref: 'No ref: {no_ref}',
            number_day: '{number} ngày',
            chart_title: 'Người dùng đăng ký mới',
            user_country: 'Quốc gia',
            total_user: 'Tổng số lượng người dùng'
        },
        token: {
            ath: {
                total_statistics: 'Tổng lượng token ATH',
                cart_item_1_title: 'Tối đa / người dùng',
                cart_item_2_title: 'Tối thiểu / người dùng',
                cart_item_3_title: 'Trung bình / người dùng',
                chart_title_1: 'ATH được đào',
                chart_title_2: 'Thống kê lượng token',

            },
            gem: {
                gem_chart_title_statistics: 'Số liệu token GEM',
                gem_chart_title_statistics_per_day: 'GEM đào được mỗi ngày'


            }
        }
    }

}

export default locale_vi
