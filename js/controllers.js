'use strict';

/* Controllers */

var psPostingControllers = angular.module('psPostingControllers', ['ui.bootstrap', 'angularFileUpload']);

psPostingControllers.controller('MainCtrl', ['$scope', 'Brand', '$fileUploader',
    function($scope, Brand, $fileUploader) {
        $scope.hola = "HOLA PSPOSTING";
        $scope.opinion = 'Escribe aquí tu opinión';
        $scope.orderProp = 'name';

        $scope.brands = Brand.query();

        $scope.showUpImage = function() {
            $("#upPhotos").show();
        }

        // Creates a uploader
        var uploader = $scope.uploader = $fileUploader.create({
            scope: $scope,
            url: 'upload.php'
        });

        // Images only
        uploader.filters.push(function(item /*{File|HTMLInputElement}*/) {
            var type = uploader.isHTML5 ? item.type : '/' + item.value.slice(item.value.lastIndexOf('.') + 1);
            type = '|' + type.toLowerCase().slice(type.lastIndexOf('/') + 1) + '|';
            if (!('|jpg|png|jpeg|gif|'.indexOf(type) !== -1)) {
                alert("El archivo debe ser una imagen");
                return false;
            }
            if (!$scope.name || !$scope.brandSelected || !$scope.bodyArea) {
                alert("Por favor rellena los datos de la imagen");
                return false;
            }
            console.info(uploader.getNotUploadedItems().length);
            return true;
        });

        uploader.bind('afteraddingfile', function (event, item) {
            item.formData ["name"] = $scope.name;
            item.formData ["brand"] = $scope.brandSelected;
            item.formData ["bodyArea"] = $scope.bodyArea;
        });


        // REGISTER HANDLERS

        /*uploader.bind('afteraddingfile', function (event, item) {
            console.info('Acabo de subir un archivo', item);
        });

        uploader.bind('whenaddingfilefailed', function (event, item) {
            console.info('When adding a file failed', item);
        });

        uploader.bind('afteraddingall', function (event, items) {
            console.info('Acabo de subir todos los archivos', items);
        });

        uploader.bind('beforeupload', function (event, item) {
            console.info('Before upload', item);
        });

        uploader.bind('progress', function (event, item, progress) {
            console.info('Progress: ' + progress, item);
        });

        uploader.bind('success', function (event, xhr, item, response) {
            console.info('Success', xhr, item, response);
        });

        uploader.bind('cancel', function (event, xhr, item) {
            console.info('Cancel', xhr, item);
        });

        uploader.bind('error', function (event, xhr, item, response) {
            console.info('Error', xhr, item, response);
        });

        uploader.bind('complete', function (event, xhr, item, response) {
            console.info('Complete', xhr, item, response);
        });

        uploader.bind('progressall', function (event, progress) {
            console.info('Total progress: ' + progress);
        });

        uploader.bind('completeall', function (event, items) {
            console.info('Complete all', items);
        });*/
    }
]);
