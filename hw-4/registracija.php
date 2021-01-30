<!DOCTYPE html>
<html>
    <head>
        <title>IMDB</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
        <link rel="stylesheet" href="4domaci.css">
    </head>

    <body>    

        <div class="container registrovanje">

        <h2>Registrujte se</h2>

        <form action= "registracija_1.php" method="post">
            <input name="first-name" id="name" class="form-control" type="text" autocomplete="off" placeholder="Ime">
            <input name="last-name" id="surname" class="form-control" type="text" autocomplete="off" placeholder="Prezime">
            <input name="email" id="mail" class="form-control" type="text" autocomplete="off" placeholder="Email">
            <input name="username" id="fullname" class="form-control" type="text" autocomplete="off" placeholder="Korisnicko ime">
            <input name="password" id="password1" class="form-control" type="text" autocomplete="off" placeholder="Lozinka">

            <button type="submit" name= " submit"> Registrujte se</button>
            

        </form> 

        </div>

    </body>

</html>
