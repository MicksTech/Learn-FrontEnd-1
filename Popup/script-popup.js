 document.getElementById('book-now').addEventListener('click', () => {
      document.getElementById("popup").style.display = 'block';
    });

    document.getElementsByClassName('close')[0].addEventListener('click', () => {
      document.getElementById("popup").style.display = 'none';
    });

document.getElementById('popup').style.background = 'whitesmoke';