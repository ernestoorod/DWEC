# Ruta al directorio que contiene las imágenes
$rutaDirectorio = "C:\Ruta\Al\Directorio"

# Ancho deseado en píxeles
$anchoDeseado = 360
$rutaDirectorio = "C:\proyectos\DWEC\examen\images\posters\"

# Obtener la lista de archivos jpg en el directorio
$archivos = Get-ChildItem -Path $rutaDirectorio -Filter *.jpg

# Recorrer cada archivo y cambiar la resolución
foreach ($archivo in $archivos) {
    # Obtener el nombre completo del archivo
    $nombreCompleto = $archivo.FullName

    # Cargar la imagen
    $imagen = [System.Drawing.Image]::FromFile($nombreCompleto)

    # Cambiar la resolución al ancho deseado (manteniendo la proporción original)
    $nuevoAncho = $anchoDeseado
    $nuevoAlto = [math]::Round($imagen.Height * ($anchoDeseado / $imagen.Width))
    
    # Crear una nueva imagen con la resolución cambiada
    $nuevaImagen = New-Object System.Drawing.Bitmap -ArgumentList $imagen, $nuevoAncho, $nuevoAlto

    # Guardar la nueva imagen sobre la original
    $nuevaImagen.Save($nombreCompleto)

    # Liberar recursos de la imagen original y la nueva imagen
    $imagen.Dispose()
    $nuevaImagen.Dispose()
}

Write-Host "Proceso completado. Se cambiaron las resoluciones de las imágenes a un ancho de $anchoDeseado píxeles."
