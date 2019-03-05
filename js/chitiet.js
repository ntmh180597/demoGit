import $ from 'jquery';
import Swal from 'sweetalert2';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import 'popper.js';


NguoiDung,hoTen

// Import kiểu 1
import '../css/chitiet.css';

// Import kiểu 2
import {NguoiDung,hoTen} from '../models/nguoidung.js';

// Import kiểu 3
import nguoiDung from '../models/nguoidung';
nguoiDung

function getParamsFromURL(){
    var params = window.location.search.substr(1,).split('=');
    console.log(params)
    var courseId = params[1];
}
getParamsFromURL();

  let timerInterval
Swal.fire({
  title: 'Auto close alert!',
  html: 'I will close in <strong></strong> seconds.',
  timer: 2000,
  onBeforeOpen: () => {
    Swal.showLoading()
    timerInterval = setInterval(() => {
      Swal.getContent().querySelector('strong')
        .textContent = Swal.getTimerLeft()
    }, 100)
  },
  onClose: () => {
    clearInterval(timerInterval)
  }
}).then((result) => {
  if (
    // Read more about handling dismissals
    result.dismiss === Swal.DismissReason.timer
  ) {
    console.log('I was closed by the timer')
  }
})