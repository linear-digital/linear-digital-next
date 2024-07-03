<?php
 $url = 'https://ld.mdtamiz.com/api/titles/65240a3908b45b9c479349ff';
 $data = file_get_contents($url);
 $titles = json_decode($titleRes);
 ?>