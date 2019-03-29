<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title></title>
    <link rel="stylesheet" href="">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="ckeditor/ckeditor.js"></script>
    <script src="ckeditor/plugins/ocupload/plugin.js"></script>
</head>
<body>
    <div id="wrapper">
        <textarea name="" id="ckeditor" cols="30" rows="10"></textarea>
    </div>
    <script>
        CKEDITOR.replace('ckeditor', {
            height: 250,
            toolbar: [{
                name: 'colors',
                items: ['TextColor', 'BGColor']
            }, {
                name: 'basicstyles',
                items: ['Bold', 'Italic', 'Underline', '-', 'RemoveFormat']
            }, {
                name: 'paragraph',
                items: ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock']
            }, {
                name: 'images',
                items: ['OcUpload']
            }],
            extraPlugins: ['ocupload']
        });
    </script>
</body>
</html>