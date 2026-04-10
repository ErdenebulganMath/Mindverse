document.getElementById('loginBtn').addEventListener('click', function(e) {
    e.preventDefault();

    const email = document.querySelector('input[name="email"]').value;

    if (!email.endsWith('@gmail.com')) {
        alert('Зөвхөн @gmail.com имэйл хаяг ашиглана уу!');
        return;
    }

    // Үргэлжлүүлэх логик (жишээ нь: серверт илгээх)
    console.log('Нэвтрэлт амжилттай');
    window.location.href = "main.html";
});
