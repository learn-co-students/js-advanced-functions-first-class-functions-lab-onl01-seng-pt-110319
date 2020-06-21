describe('index.js', function () {
  const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

  afterEach(function () {
    expect(drivers, 'MAKE SURE YOUR ARRAY MANIPULATIONS ARE NON-DESTRUCTIVE').to.eql(['Sally', 'Bob', 'Freddy', 'Claudia']);
  });

  describe('returnFirstTwoDrivers()', function () {
    it('should return a new array containing the first two drivers from the passed-in array', function () {
      expect(returnFirstTwoDrivers(drivers)).to.eql(['Sally', 'Bob']);
    });
  });

  describe('returnLastTwoDrivers()', function () {
    it('should return an array of the last two drivers', function () {
      expect(returnLastTwoDrivers(['Sally', 'Bob', 'Freddy', 'Claudia'])).to.eql(['Freddy', 'Claudia']);
    });
  });

  describe('selectingDrivers', function () {
    it('has the `returnFirstTwoDrivers` function to as its first element', function () {
      expect(selectingDrivers()[0]).to.eql(returnFirstTwoDrivers);
    });

    it('has the `returnLastTwoDrivers` function to as its last element', function () {
      expect(selectingDrivers()[1]).to.eql(returnLastTwoDrivers);
    });

    it('allows us to invoke either function from the array', function () {
      expect(selectingDrivers()[0](drivers)).to.eql(['Sally', 'Bob']);

      expect(selectingDrivers()[1](drivers)).to.eql(['Freddy', 'Claudia']);
    });
  });

 
  });

