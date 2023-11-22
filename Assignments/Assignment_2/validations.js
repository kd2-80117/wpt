function validateForEmpty(id,errorId,errorMsg) {
    if(document.getElementById(id).value==""){
        document.getElementById(errorId).innerText=errorMsg;
    }else document.getElementById(errorId).innerText="";
}