function validation() {
    var a = document.forms["myfrm"]["mobilenmbr"];
    if(isNaN(a.value)) {
        alert('Not a number');
        return false;
    }
}
