var debug = true;

var UI = require('ui');
var ajax = require('ajax');

var menu = new UI.Menu({
  sections: [{
    title: 'Home',
    items: []
  }]
});

if (debug){
  menu.item(0, 0, {title: 'Audio System', subtitle: 'On', test: 'test'});
  menu.item(0, 1, {title: 'Fan', subtitle: 'Off', test: 'test'});
  menu.item(0, 2, {title: 'Lamp', subtitle: 'Off', test: 'test'});
  menu.item(0, 3, {title: 'TV', subtitle: 'On', test: 'test'});
  menu.item(0, 4, {title: 'Xbox 360', subtitle: 'On', test: 'test'});
  menu.show();
}
else{
  buildUI();
  menu.show();
}

setInterval(function(){
  if(debug){
    menu.item(0, 0, {title: 'Audio System', subtitle: 'On', test: 'test'});
    menu.item(0, 1, {title: 'Fan', subtitle: 'Off', test: 'test'});
    menu.item(0, 2, {title: 'Lamp', subtitle: 'Off', test: 'test'});
    menu.item(0, 3, {title: 'TV', subtitle: 'On', test: 'test'});
    menu.item(0, 4, {title: 'Xbox 360', subtitle: 'On', test: 'test'});
  }
  else{
    buildUI();
  }
}, 30000);

menu.on('select', function(e){
  var currentValue = e.item.subtitle;
  var newValue;
  var newIntValue;
  if (currentValue === 'On'){
    newValue = 'Off';
    newIntValue = 0;
  }
  else{
    newValue = 'On';
    newIntValue = 1;
  }
  if(!debug){
    setPinStatus(e.item.pin_number, newIntValue);
  }
  menu.item(e.sectionIndex, e.itemIndex, {subtitle: newValue});
});

function getPinStatus(){
    var data;
    var apiEndpoint = 'http://192.168.1.111/api/v1/gpio/status/';

    ajax(
      {
        url: apiEndpoint,
        method: 'GET',
        async: false,
        cache: false,
      },
      function (responseData){
        data = responseData;
      },
      function (error){
        console.log('The AJAX request failed: ' + error);
      }
    );

    return data.data;
}

function setPinStatus(pinNumber, value){
    var data;
    var apiEndpoint = 'http://192.168.1.111/api/v1/gpio/' + pinNumber + '/';
    var postData = {'value': value};

    ajax(
      {
        url: apiEndpoint,
        method: 'POST',
        async: false,
        data: postData,
        cache: false,
      },
      function (responseData){
        data = responseData;
      },
      function (error){
        console.log('The AJAX request failed: ' + error);
      }
    );

    return data;
}

function buildUI(){
  var pins = getPinStatus();
  pins.forEach(function(pin, index){
    var value;
    if (pin.value === 1){
      value = 'On';
    }
    else {
      value = 'Off';
    }
    menu.item(0, index, {title: pin.pin_name, subtitle: value, pin_number: pin.pin_number});
  });
}