'use strict';

(function () {
  $('.button__click').on('click', () => {
    $.ajax({
      url: '/api/v1/create',
      method: 'post',
      data: {
        'brand': $('.brand').val(),
        'price':$('.price').val()
      },
      success: function (data) {
        alert(data);
      },
      error: function (data) {
        console.log(data);
      }
    });
  });

  $('.button__delete').on('click', () => {
    $.ajax({
      url: '/api/v1/delete/'+$('.brand').val(),
      method: 'delete',
      success: function (data) {
        alert(data);
      },
      error: function (data) {
        console.log(data);
      }
    });
  });

  $('.button__update').on('click', () => {
    $.ajax({
      url: '/api/v1/update/'+$('.brand').val(),
      method: 'patch',
      data: {
        'price':$('.price').val()
      },
      success: function (data) {
        alert(data);
      },
      error: function (data) {
        console.log(data);
      }
    });
  });

  $('.button__index').on('click', () => {
    $.ajax({
      url: '/api/v1/cars',
      method: 'get',
      success: function (data) {
        alert(data);
      },
      error: function (data) {
        console.log(data);
      }
    });
  });
})();
