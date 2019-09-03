<?php

function searchImage($directory, $name, $extensions = ['jpg', 'png'])
{
    $pattern = $directory.'/' . $name . '.';
    $flags = 0;

    if ($extensions) {
        $pattern .=  '{' . implode(',', $extensions) . '}';
        $flags = GLOB_BRACE;
    }
    $files = glob($pattern, $flags);
    if (empty($files)) {
        return '';
    }
    return basename($files[0]);
}

function formatMoeda($value)
{
    return "R$ " . number_format((float)$value, 2, ',', '.');
}