"use strict";

function initMap() {
  const CONFIGURATION = {
    "ctaTitle": "Checkout",
    "mapOptions": {"center":{"lat":37.4221,"lng":-122.0841},"fullscreenControl":true,"mapTypeControl":false,"streetViewControl":true,"zoom":11,"zoomControl":true,"maxZoom":22},
    "mapsApiKey": "AIzaSyB_Wq2Y-ne8EkEpm3W8z7H5sQ2tKORvHtM",
    "capabilities": {"addressAutocompleteControl":true,"mapDisplayControl":false,"ctaControl":false}
  };
  const componentForm = [
    'location',
    'locality',
    'administrative_area_level_1',
    'country',
    'postal_code',
  ];

  const getFormInputElement = (component) => document.getElementById(component + '-input');
  const autocompleteInput = getFormInputElement('location');
  const autocomplete = new google.maps.places.Autocomplete(autocompleteInput, {
    fields: ["address_components", "geometry", "name"],
    types: ["address"],
  });
  autocomplete.addListener('place_changed', function () {
    const place = autocomplete.getPlace();
    if (!place.geometry) {
      // User entered the name of a Place that was not suggested and
      // pressed the Enter key, or the Place Details request failed.
      window.alert('No details available for input: \'' + place.name + '\'');
      return;
    }
    fillInAddress(place);
  });

  function fillInAddress(place) {  // optional parameter
    const addressNameFormat = {
      'street_number': 'short_name',
      'route': 'long_name',
      'locality': 'long_name',
      'administrative_area_level_1': 'short_name',
      'country': 'long_name',
      'postal_code': 'short_name',
    };
    const getAddressComp = function (type) {
      for (const component of place.address_components) {
        if (component.types[0] === type) {
          return component[addressNameFormat[type]];
        }
      }
      return '';
    };
    getFormInputElement('location').value = getAddressComp('street_number') + ' '
              + getAddressComp('route');
    for (const component of componentForm) {
      // Location field is handled separately above as it has different logic.
      if (component !== 'location') {
        getFormInputElement(component).value = getAddressComp(component);
      }
    }
  }
}