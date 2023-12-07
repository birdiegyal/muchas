import axios from 'axios'
import { latLngToTileTMS } from './utils.js'

import {
    apiKey,
    baseUrl,
    geocodeEndpoint,
} from './config.js'


// SECTION:  
// merchant location.
const merch_lat = 21.169692263823002
const merch_long = 79.14948942756396
const zoom = 2

// NOTE: 
// converting lat & long into col and row grid repr.
const { x: col_coord, y: row_coord } = latLngToTileTMS(merch_lat, merch_long, zoom)

// making a GET req.

/*  NOTE: 
 "omv" : Specifies the tile format. 
 "mc" : Specifies the tile projection.
 "base": Specifies from what layer the tile is retrieved.another option is "core".
*/

export async function getTiles() {
    /* 
     NOTE: 
     this f() returns the fetched tiles that we're going to use to render on client side as a map.

     WORKFLOW: 
     after getting the res, we got to decode hex tile data to json [or whatever format thats reqed.] using protobuf schemas.
    */

    const tiles = await axios.get(`${baseUrl}/base/mc/${zoom}/${col_coord}/${row_coord}/omv?apikey=${apiKey}`)

    return tiles.data

}

export async function getProtobufSchema() {
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

export async function getGeocode(addy) {
    // got to replace them spaces with + to query.
    addy = addy.replaceAll(" ", "+")
    const res = await axios.get(`${geocodeEndpoint}?q=${addy}&apiKey=${apiKey}`)
    // console.log(res.data.items[0].position)
    return res.data.items[0]?.position

    /* 
     NOTE: 
     {
  "items": [
    {
      "title": "Invalidenstraße 117, 10115 Berlin, Deutschland",
      "id": "here:af:streetsection:tVuvjJYhO86yd5jk1cmzNB:CgcIBCCf2912EAEaAzExNyhk",
      "resultType": "houseNumber",
      "houseNumberType": "PA",
      "address": {
        "label": "Invalidenstraße 117, 10115 Berlin, Deutschland",
        "countryCode": "DEU",
        "countryName": "Deutschland",
        "stateCode": "BE",
        "state": "Berlin",
        "countyCode": "B",
        "county": "Berlin",
        "city": "Berlin",
        "district": "Mitte",
        "street": "Invalidenstraße",
        "postalCode": "10115",
        "houseNumber": "117"
      },
      "position": { "lat": 52.53041, "lng": 13.38527 },
      "access": [{ "lat": 52.53105, "lng": 13.3848 }],
      "mapView": { "west": 13.38379, "south": 52.52951, "east": 13.38675, "north": 52.53131 },
      "scoring": { "queryScore": 1, "fieldScore": { "city": 1, "streets": [1], "houseNumber": 1 } }
    }
  ]
}

    */
}
