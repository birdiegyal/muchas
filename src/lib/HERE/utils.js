function latLngToTileTMS(latitude, longitude, zoom) {
    // Convert latitude and longitude to radians
    const latRad = latitude * Math.PI / 180.0

    // Calculate tile X
    const tileX = Math.floor((longitude + 180.0) / 360.0 * Math.pow(2, zoom))

    // Calculate tile Y
    const tileY = Math.floor(
        (1.0 - Math.log(Math.tan(latRad) + 1.0 / Math.cos(latRad)) / Math.PI) / 2.0
        * Math.pow(2, zoom)
    )

    return { x: tileX, y: tileY }
}

module.exports = latLngToTileTMS