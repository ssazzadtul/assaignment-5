document.getElementById('triangle-btn').addEventListener('click', function () {

    const triangleInputField = document.getElementById('triangle-H');
    const triangleInputFieldString = triangleInputField.value;
    const newTriangleInputField = parseFloat(triangleInputFieldString);

    triangleInputField.value = '';


    const displayFieldShow = document.getElementById('display-field');
    const newDisplayField = displayFieldShow.innerText;
    const previousDisplay = parseFloat(newDisplayField);


    const displayTotal = newTriangleInputField;//previousDisplay +
    displayFieldShow.innerText = displayTotal;



    //this is base form  of triangle

    const triangleInputFieldB = document.getElementById("triangle-B");
    const triangleInputFieldBString = triangleInputFieldB.value;
    const newTriangleInputFieldB = parseFloat(triangleInputFieldBString);

    triangleInputFieldB.value = '';

    const displayFieldShowB = document.getElementById('display-field-B');
    const displayFieldShowBString = displayFieldShowB.innerText;
    const previousTriangleInputFieldB = parseFloat(displayFieldShowBString);


    const displayTotalB = newTriangleInputFieldB;
    displayFieldShowB.innerText = displayTotalB;




    const triangleTotalArea = document.getElementById('area-total');
    const triangleTotalAreaString = triangleTotalArea.innerText;
    const newTriangleTotalArea = parseFloat(triangleTotalAreaString);

    const areaTotal = 0.5 * displayTotal * displayTotalB;
    triangleTotalArea.innerText = areaTotal;

})

