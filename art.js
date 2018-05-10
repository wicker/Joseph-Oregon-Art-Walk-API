
const clone = require('clone')
const config = require('./config')

let db = {}

const defaultData = {
  art: [
		{
			'artist': 'Ramon Parmenter',
			'artistURL': '',
			'location': '',
				'lat': '',
				'lng': '',
				'corner': '',
			'medium': 'bronze',
			'title': 'Garden Walk',
			'imgSrc': '',
			'imgAttribution': 'Jenner Hanni',
			'imgLicense': 'CC-BY-SA 2.0',
			'imgLicenseLink': 'https://creativecommons.org/licenses/by-sa/2.0/'
		},
		{
			'artist': 'Steve Parks',
			'artistURL': '',
			'location': '',
				'lat': '',
				'lng': '',
				'corner': '',
			'medium': 'bronze',
			'title': 'Spirit of Joseph',
			'imgSrc': '',
			'imgAttribution': 'Jenner Hanni',
			'imgLicense': 'CC-BY-SA 2.0',
			'imgLicenseLink': 'https://creativecommons.org/licenses/by-sa/2.0/'
		},
		{
			'artist': 'David Manual',
			'artistURL': '',
			'location': '',
				'lat': '',
				'lng': '',
				'corner': '',
			'medium': 'bronze',
			'title': 'Rolling Thunder and Toma',
			'imgSrc': '',
			'imgAttribution': 'Jenner Hanni',
			'imgLicense': 'CC-BY-SA 2.0',
			'imgLicenseLink': 'https://creativecommons.org/licenses/by-sa/2.0/'
		},
		{
			'artist': 'Dennis Jones',
			'artistURL': '',
			'location': '',
				'lat': '',
				'lng': '',
				'corner': '',
			'medium': 'bronze',
			'title': 'Running Raiders',
			'imgSrc': '',
			'imgAttribution': 'Jenner Hanni',
			'imgLicense': 'CC-BY-SA 2.0',
			'imgLicenseLink': 'https://creativecommons.org/licenses/by-sa/2.0/'
		},
		{
			'artist': 'Shelley S. Curtiss',
			'artistURL': 'http://www.curtissstudios.com/',
			'location': '',
				'lat': '',
				'lng': '',
				'corner': '',
			'medium': 'bronze',
			'title': "He Who Thinks He's Invisible",
			'imgSrc': '',
			'imgAttribution': 'Jenner Hanni',
			'imgLicense': 'CC-BY-SA 2.0',
			'imgLicenseLink': 'https://creativecommons.org/licenses/by-sa/2.0/'
		},
		{
			'artist': 'J. Shirly Bothum',
			'location': '',
				'lat': '',
				'lng': '',
				'corner': '',
			'medium': 'bronze',
			'title': 'Tracking the Intruders',
			'imgSrc': '',
			'imgAttribution': 'Jenner Hanni',
			'imgLicense': 'CC-BY-SA 2.0',
			'imgLicenseLink': 'https://creativecommons.org/licenses/by-sa/2.0/'
		},
		{
			'artist': 'Austin Barton',
			'location': '',
				'lat': '',
				'lng': '',
				'corner': '',
			'medium': 'bronze',
			'title': 'The Sentinel',
			'imgSrc': '',
			'imgAttribution': 'Jenner Hanni',
			'imgLicense': 'CC-BY-SA 2.0',
			'imgLicenseLink': 'https://creativecommons.org/licenses/by-sa/2.0/'
		},
		{
			'artist': 'Austin Barton',
			'location': '',
				'lat': '',
				'lng': '',
				'corner': '',
			'medium': 'bronze',
			'title': 'Baby Steps',
			'imgSrc': '',
			'imgAttribution': 'Jenner Hanni',
			'imgLicense': 'CC-BY-SA 2.0',
			'imgLicenseLink': 'https://creativecommons.org/licenses/by-sa/2.0/'
		},
		{
			'artist': 'Austin Barton',
			'location': '',
				'lat': '',
				'lng': '',
				'corner': '',
			'medium': 'bronze',
			'title': 'All-around Cowboy',
			'imgSrc': '',
			'imgAttribution': 'Jenner Hanni',
			'imgLicense': 'CC-BY-SA 2.0',
			'imgLicenseLink': 'https://creativecommons.org/licenses/by-sa/2.0/'
		},
		{
			'artist': 'Austin Barton',
			'location': '',
				'lat': '',
				'lng': '',
				'corner': '',
			'medium': 'bronze',
			'title': 'Attitude Adjustment',
			'imgSrc': '',
			'imgAttribution': 'Jenner Hanni',
			'imgLicense': 'CC-BY-SA 2.0',
			'imgLicenseLink': 'https://creativecommons.org/licenses/by-sa/2.0/'
		},
		{
			'artist': 'Georgia Bunn',
			'location': '',
				'lat': '',
				'lng': '',
				'corner': '',
			'medium': 'bronze',
			'title': 'Chief Joseph',
			'imgSrc': '',
			'imgAttribution': 'Jenner Hanni',
			'imgLicense': 'CC-BY-SA 2.0',
			'imgLicenseLink': 'https://creativecommons.org/licenses/by-sa/2.0/'
		},
		{
			'artist': '',
			'location': '',
				'lat': '',
				'lng': '',
				'corner': '',
			'medium': 'bronze',
			'title': '',
			'imgSrc': '',
			'imgAttribution': 'Jenner Hanni',
			'imgLicense': 'CC-BY-SA 2.0',
			'imgLicenseLink': 'https://creativecommons.org/licenses/by-sa/2.0/'
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
