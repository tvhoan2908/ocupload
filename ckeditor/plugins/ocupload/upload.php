<?php
    $root = $_SERVER['DOCUMENT_ROOT'];
    $data = ['success' => false];
    $upload_image = [];
    $max_upload_file_size = 2*1024*1024;
    if ($_FILES['image_files']['size'] <= $max_upload_file_size) {
        $path = "/uploads/ckedtior/ocupload/" . date('Ymd') . '/';
        $target_path = $root  . $path;
        if (!file_exists($target_path)) {
            mkdir($target_path, 0777, true);
        }
        
        $ext = pathinfo($_FILES['image_files']['name'], PATHINFO_EXTENSION);
        $file_name = pathinfo(preg_replace('/\s+/', '_', $_FILES['image_files']['name']), PATHINFO_FILENAME);
        $target_path = $target_path . $file_name. '_' . time() . "." . $ext;
        $path = $path . $file_name. '_' . time() . "." . $ext;

        if(move_uploaded_file($_FILES['image_files']['tmp_name'], $target_path)) {
            $data['path'] = $path;
            $data['success'] = true;
        } else {
            $data['error'] = "Có lỗi xảy ra. Bạn vui lòng thử lại sau.";
        }
    } else {
        $data['error'] = "Chỉ cho phép upload file không quá 2MB";
    }

    echo json_encode($data);