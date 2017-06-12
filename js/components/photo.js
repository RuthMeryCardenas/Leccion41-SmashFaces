var photo_container = $(".photo");
var reRender = function () {
  photo_container.empty();
}
var Photo_coder = function (seat, photo_url) {
  photo_container.empty();
  var static_url = "assets/img/";
  var img = $("<img alt='Foto de coder'>");
  img.attr("src", static_url + seat + "/" + photo_url);
  photo_container.append(img);
  // return img;
}
var generate_random_numbers = function (array) {
  var aux_arr = [];
  var total_elements = 5; // Cantidad de números en el arreglo
  var end_range = array.length; //Máximo valor de los números en el arreglo
  while(aux_arr.length < total_elements && total_elements < end_range){
    var ramdom_number = Math.floor(Math.random() * end_range);
    if(!aux_arr.some(function(number){return number == ramdom_number})){
        aux_arr.push(ramdom_number);
    }
  }
  return aux_arr;
}
