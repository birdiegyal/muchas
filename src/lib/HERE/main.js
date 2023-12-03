require('dotenv').config()
const axios = require('axios')
const latLngToTileTMS = require('./utils')

// DEFAULTS: 
// const appId = process.env.app_id
const apiKey = import.meta.env.VITE_HERE_API_KEY
const baseUrl = import.meta.env.VITE_HERE_ENDPOINT

// SECTION:  
// merchant location.
merch_lat = 21.169692263823002
merch_long = 79.14948942756396
zoom = 2

// NOTE: 
// converting lat & long into col and row grid repr.
const { x: col_coord, y: row_coord } = latLngToTileTMS(merch_lat, merch_long, zoom)

// making a GET req.

/*  NOTE: 
 "omv" : Specifies the tile format. 
 "mc" : Specifies the tile projection.
 "base": Specifies from what layer the tile is retrieved.another option is "core".
*/

async function getTiles() {
    /* 
     NOTE: 
     this f() returns the fetched tiles that we're going to use to render on client side as a map.

     WORKFLOW: 
     after getting the res, we got to decode hex tile data to json [or whatever format thats reqed.] using protobuf schemas.
    */

    const tiles = await axios.get(`${baseUrl}/base/mc/${zoom}/${col_coord}/${row_coord}/omv?apikey=${apiKey}`)

    return tiles.data

}

async function getProtobufSchema() {
    /* 
     NOTE: 
     this f() returns the available + vaild protobuf schema for the retrieved tile to decode it into readable format.
     this going to help devs while debugging.

     WORKFLOW: 
     1.) get the protobufsNames from the proto endpoint.
     2.) get the .proto files from the same endpoint.
    */

    const protobufsNames = await axios.get(`${baseUrl}/proto?apiKey=${apiKey}`, {
        Headers: {
            accept: 'application/json',
        }
    })

    const [schema] = protobufsNames.data.schemas
    
    const protobufSchema = await axios.get(`${baseUrl}/proto/${schema.name}?apiKey=${apiKey}`, {
        Headers: {
            accept: 'text/plain',
        }
    })

    return protobufSchema.data
}

// getTiles()
getTiles()