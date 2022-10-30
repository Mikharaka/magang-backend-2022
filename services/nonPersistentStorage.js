class GeoJSONNonPersistentStorage{
    constructor(){
        // js object: js array 
        this._jsObject = []
    }
    
    addGeoJson(geoJSONstr){
        this._jsObject.push(geoJSONstr)
    }
    
    getGeoJSONs(){
        return this._jsObject
    }
    
    deleteGeoJSONs(index){
        this._jsObject.splice(index, 1)
    }
}

const geoDB = new GeoJSONNonPersistentStorage()

module.exports = geoDB