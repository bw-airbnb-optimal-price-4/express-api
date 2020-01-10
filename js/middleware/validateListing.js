"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../utils");
exports.validateListing = function (req, res, next) {
    var _a = req.body, id = _a.id, userId = _a.userId, propertyTypeId = _a.propertyTypeId, neighborhoodId = _a.neighborhoodId, roomTypes = _a.roomTypes, accommodates = _a.accommodates, bedrooms = _a.bedrooms, bathrooms = _a.bathrooms, beds = _a.beds, listingUrl = _a.listingUrl, title = _a.title, pictureUrl = _a.pictureUrl, city = _a.city, state = _a.state, zip = _a.zip, country = _a.country, latitude = _a.latitude, longitude = _a.longitude;
    req.listing = utils_1.filterOutUndefinedMembers({ obj: {
            id: id,
            userId: userId,
            propertyTypeId: propertyTypeId,
            neighborhoodId: neighborhoodId,
            roomTypes: roomTypes,
            accommodates: accommodates,
            bedrooms: bedrooms,
            bathrooms: bathrooms,
            beds: beds,
            listingUrl: listingUrl,
            title: title,
            pictureUrl: pictureUrl,
            city: city,
            state: state,
            zip: zip,
            country: country,
            latitude: latitude,
            longitude: longitude,
        } });
    return ((userId === undefined
        || propertyTypeId === undefined
        || neighborhoodId === undefined
        || roomTypes === undefined
        || accommodates === undefined
        || bedrooms === undefined
        || bathrooms === undefined
        || beds === undefined)
        ? res.status(400).json({
            message: 'mustp provide userId, PropertyTypeId, NeighborhoodId, roomTypes, accommodates, '
                + 'bedrooms, bathrooms and beds',
        })
        : next());
};
exports.default = {};
