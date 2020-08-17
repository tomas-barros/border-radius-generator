// DOM OBJECTS
const 
    slider = document.getElementById('borderRange'),
    borderRadiusOutput = document.getElementById('borderRadius'),
    outputText = document.getElementById('outputText')
    ;

function setValue(value) {
    outputText.innerHTML = value;
    borderRadiusOutput.style.borderRadius = value + 'px'; 
}

// display the default slider value
setValue(slider.value);

slider.oninput = function() {
    setValue(this.value);
    console.log('Slider value is: ' + this.value + 'px');
}