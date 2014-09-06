var search_pick_icon = function(callback) {
  var el_header = document.getElementById('header');
  var el_imgs = el_header.getElementsByTagName('img');

  for (var i = 0; i < el_imgs.length; i++) {
    var el_img = el_imgs[i];
    var el_img_src = el_img.getAttribute('src');

    if (el_img_src && el_img_src.match('urlpick-icon')) {
      callback(el_img);
    }
  }
};

chrome.runtime.sendMessage({
  key: 'last_source_url'
}, function(resp){
  search_pick_icon(function(el){
    el.click();

    var el_form = document.getElementById('url-value');
    el_form.value = resp.value;

    var event = document.createEvent("HTMLEvents");
    event.initEvent("change", false, true);
    el_form.dispatchEvent(event);
  });
});
