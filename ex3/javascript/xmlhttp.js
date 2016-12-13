(function(){

  function logResults(json){
  console.log(json);
  }
    
  var script = document.createElement('script');
  script.src = 'http://api.openweathermap.org/data/2.5/forecast/city?id=524901&APPID=b41b034e537cd1112edf2afa1c416790';
  document.getElementsByTagName('HEAD')[0].appendChild(script);

    
    
    

/*
  function gatherData(arr) {
    let theData = "";
    let i;
    for(i = 0; i < arr.length; i++) {
      theData += `<li>${arr[i].albumId} ${arr[i].id} ${arr[i].title} ${arr[i].url} ${arr[i].thumbnailUrl}</li>`;
    }
    demoJSON.innerHTML = theData;
  }*/

}());
