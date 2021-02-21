$(document).ready(function () {
    $("button").click(runLoops);
});
function addImageToDiv(divId) {
    let fileName = $(":radio[name='pictureSelect']:checked").val(); // Create a new image element
    let imageElement = $("<img>");
    imageElement.attr("src", `img/${fileName}`); // Set its source attribute
    $(divId).append(imageElement); // Add it as a child of another element
}
function runLoops() {
    $("div.imageHolder").empty(); // Clear out all existing images from divs
    let num = parseInt($("input#numPics").val()); // Get the number from the box
    $("span#while-num").text(num + 1); // Print the desired number of images for each loop
    $("span#do-while-num").text(num - 1);
    $("span#for-num").text(num);
    // we need to add a while loop where
    // the num + 1 shows the addImageTo Dive("div#while-loop");
    let whileLoop=num+1;
    let whileOutput=0;
    while (whileOutput < whileLoop) {
        addImageToDiv("div#while-loop");
        whileOutput++}
    // we need to add a do while where
    // the num - 1 show the addImageToDiv("div#do-while-loop");
    let doWhile=num-1;
    let doWhileOutput=0;
    do{
        addImageToDiv("div#do-while-loop");
        doWhileOutput++
    }while(doWhileOutput<doWhile);
    // we need to add a for loop where
    // the num show the addImageToDiv("div#for-loop")
    for (let forOutput = 0; forOutput < num; forOutput++) {
        addImageToDiv("div#for-loop");}
}