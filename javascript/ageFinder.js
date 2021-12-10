function ageFinder() {
    var birthDate = new Date(2003, 7, 8);
    var currentDate = new Date();
    var age = currentDate.getFullYear() - birthDate.getFullYear();
    var m = currentDate.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && currentDate.getDate() < birthDate.getDate())) {
        age--;
    }
    document.getElementById("age").innerHTML = age;
}

ageFinder();