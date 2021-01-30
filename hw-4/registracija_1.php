<?php

    if(isset($_POST["submit"])) {

        $firstName = $_POST["first-name"];
        $lastName = $_POST["last-name"];
        $email = $_POST["email"];
        $userName = $_POST["username"];
        $passWord = $_POST["password"];
        $typeOfUser = "regular";

        require_once "baza_korisnici.php";

        function emptySignupInput($firstName, $lastName, $email, $userName, $passWord){
            if(empty($firstName) || empty($lastName) || empty($email) || empty($userName) ||  empty($passWord)){
                return true;
               
            }
            else{
                return false;
            }
        }


        function addUser($conn, $firstName, $lastName, $email, $userName, $passWord, $typeOfUser){
            $data = "INSERT INTO korisnici (korisniciIme, korisniciPrezime, korisniciEmail, korisniciKorisnickoIme, korisniciLozinka, korisniciTip) VALUES ('$firstName', '$lastName', '$email', '$userName', '$passWord', '$typeOfUser')";

            mysqli_query($conn, $data);
        }

        if(emptySignupInput($firstName, $lastName, $email, $userName, $passWord) == true){
            header("Location: registracija.php");
            exit();
        }

        else{
            addUser($conn, $firstName, $lastName, $email, $userName, $passWord, $typeOfUser);
            header("Location: film.php");
            exit();
        }


    }

    else{
        header("Location: registracija.php");


    }