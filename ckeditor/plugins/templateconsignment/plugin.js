CKEDITOR.plugins.add('templateconsignment', {
    icons: 'templateconsignment',
    init: function (editor) {
        // Define the editor command that inserts a timestamp.
        editor.addCommand('openConsignmentModel', {
            // Define the function that will be fired when the command is executed.
            exec: function (editor) {
                TemplateConsignmentModel.callModal(editor);

            }
        });

        // Create the toolbar button that executes the above command.
        editor.ui.addButton('Templateconsignment', {
            label: 'Từ khóa cho mẫu in',
            command: 'openConsignmentModel',
            toolbar: 'about'
        });
    }
});
var TemplateConsignmentModel = {
    callModal: function (editor) {
        this.editor = editor;
        
        BootstrapDialog.show({
            title: 'Danh sách từ khóa',
            message: $('#template-modal').html(),
            cssClass: 'consignment-dialog',
            type: BootstrapDialog.TYPE_DEFAULT,
            // chuyển đổi newline thành br nếu set true
            nl2br: false,
            animate: false,
            onshown: function (dialogRef) {
                dialogRef.$modalBody.on('click', '.btn-select-key', function () {
                    let loop = $(this).attr('data-loop')
                    TemplateConsignmentModel.editor.insertHtml('{' + $(this).attr('data-key') + '}');

                    dialogRef.close();
                });
            }
        });
    },
    editor: {}
};