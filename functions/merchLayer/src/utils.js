import {vt2geojson} from '@mapbox/vt2geojson'

/* 
 TODO: 
 this f() accepts the vector uri and returns the geojson feed written in .txt 
 STATUS: 
 appwrite storage doesnt support .geojson

*/
export async function getGeoJson(uri){

    const tiles = await axios.get(`${baseUrl}/base/mc/${zoom}/${col_coord}/${row_coord}/omv?apikey=${apiKey}`)

    vt2geojson({
        uri,
        layer: 'base',
    }, (err, res) => {
        if (err) throw err
        return res
    })
}