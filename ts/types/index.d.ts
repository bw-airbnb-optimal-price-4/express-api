import * as Express from 'express';

export interface DecodedToken {
  id: number,
  username: string,
}

export interface JWTRequest extends Express.Request {
  user: {
    username: string,
  },
}

export interface ValidatedCredentialsRequest extends Express.Request {
  credentials: User,
}

export interface ValidatedListingRequest extends Express.Request {
  listing: Listing,
}

export interface UserCredentials {
  id?: number,
  username?: string,
  hashedPassword?: string,
}

export interface UnknownShape {
  [key: string]: any,
}

export interface User {
  id?: number,
  email?: string,
  password?: string,
  firstName?: string,
  lastName?: string,
  city?: string,
  state?: string,
  dateOfBirth?: Date,
  profileImageId?: number,
}

export interface Listing {
  id?: number,
  userId: number,
  propertyTypeId: number,
  neighborhoodId: number,
  roomTypes: string,
  accommodates: number,
  bedrooms: number,
  bathrooms: number,
  beds: number,
  listingUrl: string,
  title: string,
  pictureUrl?: string,
  city: string,
  state: string,
  zip: number,
  country: string,
  latitude: number,
  longitude: number,
}

export interface Amenity {
  id?: number,
  amenity: AmenityType,
}

export interface Neighborhood {
  id?: number,
  neighborhood: NeighborhoodType,
}

export interface Propterty {
  id?: number,
  propertyType: PropertyType,
}

export type PropertyType =
 'Guesthouse'
 | 'House'
 | 'Apartment'
 | 'Guest suite'
 | 'Condominium'
 | 'Townhouse'
 | 'Bungalow'
 | 'Loft'
 | 'Bed and breakfast'
 | 'Other'
 | 'Cabin'
 | 'Cottage'
 | 'Campsite'
 | 'Tent'
 | 'Villa'
 | 'Camper/RV'
 | 'Nature lodge'
 | 'Tiny house'
 | 'Chalet'
 | 'Farm stay'
 | 'Boat'
 | 'Serviced apartment'
 | 'Boutique hotel'
 | 'Bus'
 | 'Tipi'
 | 'Treehouse'
 | 'Barn'
 | 'Hostel'
 | 'Yurt'
 | 'Houseboat'
 | 'Resort'
 | 'Dome house'
 | 'Aparthotel'
 | 'Hotel'
 | 'Casa particular (Cuba)'
 | 'Earth house'
 | 'Hut';

export type NeighborhoodType =
  'East Downtown'
  | 'SW Williamson Co.'
  | 'Travis Heights'
  | 'Zilker'
  | 'East Riverside'
  | 'West Campus'
  | 'Balcones Civic Association'
  | 'Clarksville'
  | 'Brentwood'
  | 'Old West Austin'
  | 'Cherry Creek'
  | 'Scofield Ridge'
  | 'Bouldin Creek'
  | 'Tarrytown'
  | 'Northwest Hills'
  | 'McKinney'
  | 'South Congress'
  | 'Hyde Park'
  | 'Barton Hills'
  | 'Dawson'
  | 'Upper Boggy Creek'
  | 'Rosedale'
  | 'Angus Valley'
  | 'South Lamar'
  | 'Govalle'
  | 'Holly'
  | 'South Manchaca'
  | 'Steiner Ranch'
  | 'Westgate'
  | 'Rosewood'
  | 'Downtown'
  | 'Galindo'
  | 'Allendale'
  | 'Windsor Park'
  | 'West Austin'
  | 'Barton Creek'
  | 'Highland'
  | 'Wooten'
  | 'University of Texas'
  | 'Rollingwood'
  | 'Copperfield'
  | 'St. Edwards'
  | 'West Congress'
  | 'East Congress'
  | 'Long Canyon'
  | 'Georgian Acres'
  | 'South First'
  | 'Westlake Hills'
  | 'Parker Lane'
  | 'MLK & 183'
  | 'Oak Hill'
  | 'Mesa Park'
  | 'Hancock'
  | 'Circle C'
  | 'Pleasant Valley'
  | 'North Loop'
  | 'Montopolis'
  | 'North Shoal Creek'
  | 'Pecan Spings'
  | 'Mueller'
  | 'Sunset Valley'
  | 'Old Enfield'
  | 'St. Johns'
  | 'Crestview'
  | 'Walnut Creek'
  | 'Bull Creek'
  | 'Cat Mountian'
  | 'Balcony Woods'
  | 'Gateway'
  | 'Anderson Mill'
  | 'Bryker Woods'
  | 'Canyon Mesa'
  | 'Windsor Hills'
  | 'Rainey Street'
  | 'Gracywoods'
  | 'Lamplight Village'
  | 'Milwood'
  | 'University Hills';

export type AmenityType =
  'TV'
  | 'Internet'
  | 'WiFi'
  | 'Kitchen'
  | 'Pets'
  | 'Breakfast'
  | 'Free Parking'
  | 'Hot Tub'
  | 'Air Conditioning'
  | 'Private Entrance';

export type RoomType =
 'Entire Home/Apt'
 | 'Private Room'
 | 'Shared Room'
 | 'Hotel Room'
