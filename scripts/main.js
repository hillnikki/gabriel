function countdown() {
    var oneDay = 24*60*60*1000;
    var today = new Date();
    var wedding = new Date('May 18, 2019');
    document.getElementById('countdownNumber').html = Math.round(Math.abs((today.getTime() - wedding.getTime())/(oneDay)));
}
