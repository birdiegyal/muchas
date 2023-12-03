function haversine(longMerch, latMerch, longUsr, latUsr) {
    /* 

     NOTE: 
     we're using the haversine formula to calculate the distance between any 2 points on a sphere.
     visit https://shorturl.at/movE1 to view the formula.
    
     */

    // DEFAULTS: 
    const earthRad = 6371
    
    /* 
     SECTION: 
     here we're calculating the deltas reqed.
     */
    let deltaLats = (latMerch - latUsr) * Math.PI / 180.0
    let deltaLongs = (longMerch - longUsr) * Math.PI / 180.0


    //radians form
    latUsr = (latUsr) * Math.PI / 180.0
    latMerch = (latMerch) * Math.PI / 180.0

    /* 
     SECTION: 
     here we're putting them values inside those trig. f() and taking their sq. root.
    */
    let arg = Math.pow(Math.sin(deltaLats / 2), 2) +
        Math.pow(Math.sin(deltaLongs / 2), 2) *
        Math.cos(latUsr) *
        Math.cos(latMerch)
    let result = 2 * Math.asin(Math.sqrt(arg))

    // this is the distance between them 2 points in KM.
    return earthRad * result
}

function inRadar({ longMerch, latMerch, longUsr, latUsr, merchRadius }) {
    /* 

     NOTE: 
     this f() returns an int depending upon the condition that specifies whether or not the user
     is in the merch's radar.
    
     1.) if a positive no. is returned then the user isn't in range | radar.
     2.) if returned int is negative or 0, => user's in range | radar.

    */

    return (haversine(longMerch, latMerch, longUsr, latUsr) - merchRadius)
}

