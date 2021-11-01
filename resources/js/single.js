const singleForm = document.querySelector('.cu-form');
function serialize(data) {
  let obj = {};
  for (let [key, value] of data) {
    if (obj[key] !== undefined) {
      if (!Array.isArray(obj[key])) {
        obj[key] = [obj[key]];
      }
      obj[key].push(value);
    } else {
      obj[key] = value;
    }
  }
  return obj;
}
function postAjax(url, data, success) {
  var params = typeof data == 'string' ? data : Object.keys(data).map(
    function (k) { return encodeURIComponent(k) + '=' + encodeURIComponent(data[k]) }
  ).join('&');

  var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
  xhr.open('POST', url);
  xhr.onreadystatechange = function () {
    if (xhr.readyState > 3 && xhr.status == 200) { success(xhr.responseText); }
  };
  xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.send(params);
  return xhr;
}

singleForm.addEventListener('submit', function (event) {
  /*
  event.preventDefault();
  let data = new FormData(singleForm);
  let formObj = serialize(data);
  //console.log(formObj);
  url = singleForm.getAttribute("action");
  postAjax(url,formObj, function(data){ console.log(data); });
  let contenedor=document.querySelector('.cu-contact__info');
  contenedor.innerHTML = '<p><br><br>Hemos recibido tu información, pronto serás contactado por uno de nuestros ejecutivos de ventas</p>';
  */
});

// Convert to an object