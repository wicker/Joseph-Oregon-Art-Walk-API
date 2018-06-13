const clone = require('clone')
const config = require('./config')

let db = {}

const defaultData = {
  art: [
		{
			'artist': 'Ramon Parmenter',
			'artistURL': 'http://josephoregon.com/ramon-parmenter',
			  'location': 'in front of The Dog Spot',
				'lat': 45.351490,
				'lng': -117.229985,
				'corner': '1st St and Main St',
			'medium': 'bronze',
			'title': 'Garden Walk',
			'imgSrc': '',
			'imgAttribution': '',
			'imgLicense': '',
			'imgLicenseLink': '',
			'arttype':'statue'
		},
		{
			'artist': 'Steve Parks',
			'artistURL': 'http://josephoregon.com/steve-parks',
			'location': 'in front of La Laguna',
				'lat': 45.357181,
				'lng': -117.230046,
				'corner': 'Maple St and Main St',
			'medium': 'bronze',
			'title': 'Spirit of Joseph',
			'imgSrc': '',
			'imgAttribution': '',
			'imgLicense': '',
			'imgLicenseLink': '',
			'arttype':'statue'
		},
		{
			'artist': 'David Manual',
			'artistURL': 'http://josephoregon.com/david-manual',
			'location': 'in front of Red Horse Coffee Traders',
				'lat': 45.355001,
				'lng': -117.229807,
				'corner': 'Pine St and Main St',
			'medium': 'bronze',
			'title': 'Rolling Thunder and Toma',
			'imgSrc': '',
			'imgAttribution': '',
			'imgLicense': '',
			'imgLicenseLink': '',
			'arttype':'statue'
		},
		{
			'artist': 'Dennis Jones',
			'artistURL': 'http://josephoregon.com/dennis-jones',
			'location': 'in front of Stewart Jones Designs',
				'lat': 45.352337,
				'lng': -117.229763,
				'corner': 'Williams Ave and Main St',
			'medium': 'bronze',
			'title': 'Running Raiders',
			'imgSrc': '',
			'imgAttribution': '',
			'imgLicense': '',
			'imgLicenseLink': '',
			'arttype':'statue'
		},
		{
			'artist': 'Shelley S. Curtiss',
			'artistURL': 'http://www.curtissstudios.com/',
			'location': 'in front of To Zion',
				'lat': 45.353454,
				'lng': -117.229753,
				'corner': 'West Joseph Ave and Main St',
			'medium': 'bronze',
			'title': "He Who Thinks He's Invisible",
			'imgSrc': '',
			'imgAttribution': '',
			'imgLicense': '',
			'imgLicenseLink': '',
			'arttype':'statue'
		},
		{
			'artist': 'J. Shirly Bothum',
			'artistURL': 'http://josephoregon.com/j-shirly-bothum',
			'location': 'in front of the Sports Corral',
				'lat': 45.355647,
				'lng': -117.230054,
				'corner': 'Pine St and Main St',
			'medium': 'bronze',
			'title': 'Tracking the Intruders',
			'imgSrc': '',
			'imgAttribution': '',
			'imgLicense': '',
			'imgLicenseLink': '',
			'arttype':'statue'
		},
		{
			'artist': 'Austin Barton',
			'artistURL': 'http://josephoregon.com/austin-barton',
			'location': 'in front of the Post Office',
				'lat': 45.352677,
				'lng': -117.230007,
				'corner': 'McCully Ave and Main St',
			'medium': 'bronze',
			'title': 'The Sentinel',
			'imgSrc': '',
			'imgAttribution': '',
			'imgLicense': '',
			'imgLicenseLink': '',
			'arttype':'statue'
		},
		{
			'artist': 'Austin Barton',
			'artistURL': 'http://josephoregon.com/austin-barton',
			'location': "in front of Kelly's Gallery",
				'lat': 45.354799,
				'lng': -117.229582,
				'corner': 'Pine St and Main St',
			'medium': 'bronze',
			'title': 'Baby Steps',
			'imgSrc': '',
			'imgAttribution': '',
			'imgLicense': '',
			'imgLicenseLink': '',
			'arttype':'statue'
		},
		{
			'artist': 'Austin Barton',
			'artistURL': 'http://josephoregon.com/austin-barton',
			'location': 'in front of BeeCrowBee',
				'lat': 45.352328,
				'lng': -117.229972,
				'corner': 'McCully Ave and Main St',
			'medium': 'bronze',
			'title': 'All-around Cowboy',
			'imgSrc': '',
			'imgAttribution': '',
			'imgLicense': '',
			'imgLicenseLink': '',
			'arttype':'statue'
		},
		{
			'artist': 'Austin Barton',
			'artistURL': 'http://josephoregon.com/austin-barton',
			'location': 'in front of City Hall',
				'lat': 45.353446,
				'lng': -117.230010,
				'corner': 'West Joseph and Main St',
			'medium': 'bronze',
			'title': 'Attitude Adjustment',
			'imgSrc': '',
			'imgAttribution': '',
			'imgLicense': '',
			'imgLicenseLink': '',
			'arttype':'statue'
		},
		{
			'artist': 'Georgia Bunn',
			'artistURL': 'http://www.valleybronze.com/georgia-bunn.html',
			'location': 'across the street from City Hall',
				'lat': 45.353318,
				'lng': -117.230010,
				'corner': 'West Joseph and Main St',
			'medium': 'bronze',
			'title': 'Chief Joseph',
			'imgSrc': '',
			'imgAttribution': '',
			'imgLicense': '',
			'imgLicenseLink': '',
			'arttype':'statue'
		},
		{
			'artist': 'Rodd Ambroson',
			'artistURL': 'http://www.roddambroson.com',
			'location': 'in front of the Josephy Center',
				'lat': 45.356065,
				'lng': -117.230065,
				'corner': 'Alder St and Main St',
			'medium': 'bronze',
			'title': 'In Her Care',
			'imgSrc': '',
			'imgAttribution': '',
			'imgLicense': '',
			'imgLicenseLink': '',
			'arttype':'statue'
		},
		{
			'artist': 'Rodd Ambroson',
			'artistURL': 'http://www.roddambroson.com',
			'location': 'in front of the Lamb Trading Company',
				'lat': 45.353678,
				'lng': -117.230027,
				'corner': 'Joseph Ave and Main St',
			'medium': 'bronze',
			'title': 'Dignity',
			'imgSrc': '',
			'imgAttribution': '',
			'imgLicense': '',
			'imgLicenseLink': '',
			'arttype':'statue'
		},
		{
			'artist': 'Unknown',
			'artistURL': '',
			'location': 'in front of the Lamb Trading Company',
				'lat': 45.353795,
				'lng': -117.230070,
				'corner': 'Joseph Ave and Main St',
			'medium': 'bronze',
			'title': 'Three leaping salmon',
			'imgSrc': '',
			'imgAttribution': '',
			'imgLicense': '',
			'imgLicenseLink': '',
			'arttype':'statue'
		},
		{
			'artist': 'Tim Norman',
			'artistURL': 'http://www.timnormanarts.com/',
			'location': 'in front of the Post Office',
				'lat': 45.352526,
				'lng': -117.229996,
				'corner': 'McCully Ave and Main St',
			'medium': 'bronze',
			'title': 'Heritage',
			'imgSrc': '',
			'imgAttribution': '',
			'imgLicense': '',
			'imgLicenseLink': '',
			'arttype':'statue'
		},
		{
			'artist': 'Walter Matia',
			'artistURL': 'http://matia.com/recent-sculptures/',
			'location': 'in front of Valley Bronze Gallery',
				'lat': 45.351498,
				'lng': -117.229720,
				'corner': '1st St and Main St',
			'medium': 'bronze',
			'title': 'Whitetail Buck',
			'imgSrc': '',
			'imgAttribution': '',
			'imgLicense': '',
			'imgLicenseLink': '',
			'arttype':'statue'
		}
	]
}

function getAllData () {
  return new Promise((res) => {
    res(clone(defaultData))
  })
}

module.exports = {
  getAllData
}
