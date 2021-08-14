function ageFinder() {
    const today = new Date();
    const birthday = new Date(2003, 07, 08);
    const diffTime = Math.abs(birthday - today);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    var age = Math.floor(diffDays/365);

    document.getElementById("age").innerHTML = age;
    return age;
}

ageFinder();