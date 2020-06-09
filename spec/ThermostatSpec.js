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

  describe('reduces degrees', function() {
    it('reduces the temperature', function (){
      thermostat.decrease(5)
      expect(thermostat.degrees).toEqual(15);
    });
  });


});
