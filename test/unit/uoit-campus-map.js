import campusMap from '../../src/uoit-campus-map';

describe('campusMap', () => {
  describe('Greet function', () => {
    beforeEach(() => {
      spy(campusMap, 'greet');
      campusMap.greet();
    });

    it('should have been run once', () => {
      expect(campusMap.greet).to.have.been.calledOnce;
    });

    it('should have always returned hello', () => {
      expect(campusMap.greet).to.have.always.returned('hello');
    });
  });
});
