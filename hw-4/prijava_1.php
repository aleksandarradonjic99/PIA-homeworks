<?php

    if(isset($_POST["submit"])){

        $userName = $_POST["userName"];
        $passWord = $_POST["passWord"];

        require_once "baza_korisnici.php";

        function emptyLoginInput($userName, $passWord){
            if( empty($userName) ||  empty($passWord)){
                return true;
               
            }
            else{
                return false;
            }
        }

        function invalidLogin($conn, $userName, $passWord){
            $query = mysqli_query($conn, "SELECT * FROM korisnici");
    
            $korisnicka_imena = array();
            $emails = array();
            $passwords = array();
    
            while($row = mysqli_fetch_array($query)){
                $korisnicka_imena[] = $row['korisniciKorisnickoIme'];
                $emails[] = $row['korisniciEmail'];
                $passwords[] = $row['korisniciLozinka'];
            }
            
            $res = true;
    
            $i = 0;
            for($i = 0; $i < sizeof($korisnicka_imena); $i++){
                if($korisnicka_imena[$i] === $userName || $emails[$i] === $userName){
                    if($passwords[$i] === $passWord){
                        $res = false;
                        break;
                    }
                }
            }
    
            return $res;
    
        }



        if(emptyLoginInput($userName, $passWord)== true){
            header("Location: prijava.php");
            exit();
        }

        if(invalidLogin($conn, $userName, $passWord) == true){

            header("Location: prijava.php");
            exit();
        }


        else{
            header("Location: film.php");
            exit();
        }

    }

    else{
        header("Location: prijava.php");
        exit();

    }


    