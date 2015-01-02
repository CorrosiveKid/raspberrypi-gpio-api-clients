$(document).ready(function() {
    updateSwitchesAndLabels();

    setInterval(function(){
        updateSwitchesAndLabels();
    }, 30000);
});

function updateSwitchesAndLabels(){
    var pins = getPinStatus();
    // var pins = getPinStatusTest();
    console.log("Updating Switches and Labels");
    pins.forEach(function(pin) {
        var switchId = "#flip-select-" + pin.pin_number;
        var labelId = "#label-for-" + pin.pin_number;

        if (pin.value == 0){
            $(switchId).val('Off').slider('refresh');
        }
        else{
            $(switchId).val('On').slider('refresh');
        }

        $(labelId).html(pin.pin_name);
    });
}