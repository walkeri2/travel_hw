const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map((journey) => {
    return journey.startLocation;
  })
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map((journey) => {
    return journey.endLocation;
  })
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter((journey) => {
    return journey.transport === transport;
  })
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter((journey) => {
    return journey.distance > minDistance;
  })
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const times = this.journeys.map(journey => journey.distance);
  return times.reduce((totalTimings, total) => totalTimings + total);
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  const transportType = this.journeys.map(journey => journey.transport);
  return transportType.filter((transport, index, array) => {
    return array.indexOf(transport) === index;
  })
};


module.exports = Traveller;
