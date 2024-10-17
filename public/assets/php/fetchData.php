<?php
 $url = 'https://server.lineardigital.co/api/titles/65240a3908b45b9c479349ff';
 $data = file_get_contents($url);
 $titles = json_decode($titleRes);
 ?>