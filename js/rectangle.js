function rectangleFirstValue(elementId) {
    const rectangleWidthField = document.getElementById(elementId);
    const rectangleWidthFieldString = rectangleWidthField.value;
    const previousRectangleWidthField = parseFloat(rectangleWidthFieldString);


    return previousRectangleWidthField
}

document.getElementById('rectangle-btn').addEventListener('click', function () {

    var rectangleValueReturn = rectangleFirstValue('rectangle-w');

    const rectangleDisplay = document.getElementById('display-field-B');
    const rectangleDisplayString = rectangleDisplay.innerText;
    const rectangleFieldDisplay = parseFloat(rectangleDisplayString);

    const totalRectangleDisplay = previousRectangleWidthField;
    rectangleDisplay.innerText = totalRectangleDisplay;

})