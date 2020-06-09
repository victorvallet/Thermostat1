describe('Thermostat', function () {
  var thermostat;
  beforeEach(function () {
    thermostat = new Thermostat();
  });

  describe('starting degrees', function () {
    it('equal to 20', function () {
      expect(thermostat.degrees).toEqual(20);
    });
  });

  describe('increase degrees', function () {
    it('increases the temperature', function () {
      thermostat.increase(15)
      expect(thermostat.degrees).toEqual(35);
    });
  });


});
