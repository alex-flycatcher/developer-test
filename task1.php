<?php
function repeat(array $inputArray = null)
{
  $resultArray = [];
  for ($i=0; $i <= 2; $i++) {
    $resultArray = array_merge($resultArray, $inputArray);
  }
  print_r($resultArray);
}

repeat([1, 2, 3]);