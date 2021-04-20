$(document).ready(function () {
    $("form#loopTestForm").submit(runLoops);
});
function runLoops(event){
    event.preventDefault();// Stop the form from submitting
    let selectedLoop = $("input[name=loop-type]:checked").val();// This variable will contain one of three strings:
    if (selectedLoop==="while-loop"){ // "for-loop", "while-loop", or "do-while-loop"
        runWhileLoop();} //"while-loop"    ==>  runWhileLoop()
    else if(selectedLoop==="for-loop"){
        runForLoop();} //"for-loop"	    ==>  runForLoop()
    else{
        runDoWhileLoop();} //"do-while-loop" ==>  runDoWhileLoop()
}
function runWhileLoop() {
    $("div.result").empty();
    let number= parseInt($("input#myNumber").val());
    let start=0;
    let output="A";
    while(start<number){
        $("div#while-result").append(output);
        start++;
    }
}
function runDoWhileLoop() {
    $("div.result").empty();
    let number = parseInt($("input#myNumber").val());
    let start =0;
    do{
        start++;
        $("div#do-while-result").append(start);
    }while (start<number);
}
function runForLoop() {
    $("div.result").empty();
    let number = parseInt($("input#myNumber").val());
    let sum = 0;
    for (let i = 1; i <= number; i++) {
        sum+=i;
        $("div#for-result").text(sum);
    }
}
