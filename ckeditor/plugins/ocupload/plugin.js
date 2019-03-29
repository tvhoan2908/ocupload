CKEDITOR.plugins.add('ocupload', {
    icons: 'ocupload',
    init: function (editor) {
        editor.addCommand('openOcUploadModel', {
            // Define the function that will be fired when the command is executed.
            exec: function (editor) {
                OcUploadModel.callModal(editor);

            }
        });

        editor.ui.addButton('OcUpload', {
            label: 'Upload hình ảnh',
            command: 'openOcUploadModel',
            toolbar: 'images'
        });
    }
})

var OcUploadModel = {
    callModal: function (editor) {
        this.editor = editor;
        $('#oc-upload').remove()
        $('body').append(OcUploadModel.template)

        $('#oc-image').trigger('click')
        $('#oc-image').change(function(e) {
            console.log('Changed')
            let input = event.target
            console.log(event.target)
            if (input.files && input.files[0]) {
                if (input.files[0]['size'] > (2 * 1024 * 1024)) {
                    alert('Chỉ cho phép upload file có tối đa 2MB')
                    e.target.value = null

                    return
                }

                let formData = new FormData()
                formData.append('image_files', input.files[0])
                $.ajax({
                    type: "POST",
                    url: CKEDITOR.basePath + 'plugins/ocupload/upload.php',
                    data: formData,
                    contentType: false,
                    processData: false,
                    enctype: 'multipart/form-data',
                    dataType: "json",
                    success: function(data) {
                        console.log(data)
                        if (!data.success) {
                            alert('Có lỗi xảy ra. Bạn vui lòng thử lại sau.')

                            return;
                        }

                        OcUploadModel.editor.insertHtml('<img src="'+ data.path +'" alt="" />');
                    },
                    complete: function() {
                        e.target.value = null
                    }
                })
            }
        })
    },
    editor: {},
    template: function() {
        return `
            <div id="oc-upload" style="display: none">
                <input type="file" name="oc_image" accept="image/x-png,image/gif,image/jpeg" id="oc-image" />
            </div>
        `
    }
}