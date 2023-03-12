let url = 'https://www.googleapis.com/youtube/v3/search?';
url += 'type=video';
url += '&part=snippet';
url += '&q=THE FIRST TAKE';
url += '&videoEmbeddable=true';
url += '&videoSyndicated=true';
url += '&maxResults=30';
url += '&key=AIzaSyC5AChC9ey3PPaczW15qZTEI6bmSkPV24g';

$(function() {
  $.ajax({
    url: url,
    dataType : 'jsonp'
  }).done(function(data) {
    if (data.items) {
      setData(data);
    } else {
      console.log(data);
      alert('該当するデータが見つかりませんでした');
    }
  }).fail(function(data) {
    alert('通信に失敗しました');
  });
});

function setData(data) {
  let result = '';
  let video  = '';

  for (let i = 0; i < data.items.length; i++) {
    video  = '<iframe src="https://www.youtube.com/embed/';
    video  +=  data.items[i].id.videoId;
    video  += '" allowfullscreen></iframe>';
    result += '<div class="video">' + video + '</div>'
  }
  $('#videoList').html(result);
}
