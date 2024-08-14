<script>
  document
    .getElementById('login-form')
    .addEventListener('submit', function (event) {
      event.preventDefault();
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      const criptografadoPassword = CryptoJS.SHA256(password).toString();

      if (username == '' || password == '') {
        alert('Está Vazioooooooooo');
      } else {
        console.log(username, criptografadoPassword);
        document.getElementById('login-form').reset();
        window.location.href = '/';
      }
    });
</script>