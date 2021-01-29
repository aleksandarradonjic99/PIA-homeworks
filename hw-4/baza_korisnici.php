<?php

    $host = "localhost";
    $username = "root";
    $password = "";
    $dbName = "korisnici";

    $conn = mysqli_connect($host, $username, $password, $dbName);

    if(!$conn){
        die("Can't connect. ");
    }