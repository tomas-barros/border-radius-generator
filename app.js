// DOM
const
    // inputs
    topLeft = document.getElementById('topLeft'),
    topRight = document.getElementById('topRight'),
    bottomLeft = document.getElementById('bottomLeft'),
    bottomRight = document.getElementById('bottomRight'),
    // finalPreview
    borderRadius = document.getElementById('borderRadius')
;

topLeft.addEventListener('keyup', function() {
    borderRadius.style.borderTopLeftRadius = `${topLeft.value}px`;
    console.info(`> New topleft border radius: ${topLeft.value}px`);  
});

topRight.addEventListener('keyup', function() {
    borderRadius.style.borderTopRightRadius = `${topRight.value}px`;
    console.info(`> New topright border radius: ${topLeft.value}px`);  
});

bottomLeft.addEventListener('keyup', function() {
    borderRadius.style.borderBottomLeftRadius = `${bottomLeft.value}px`;
    console.info(`> New bottomleft border radius: ${topLeft.value}px`);  
});

bottomRight.addEventListener('keyup', function() {
    borderRadius.style.borderBottomRightRadius = `${bottomRight.value}px`;
    console.info(`> New bottomright border radius: ${topLeft.value}px`);  
});