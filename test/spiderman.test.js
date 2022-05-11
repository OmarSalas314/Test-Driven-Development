const Spiderman = require('./../app/spiderman')
describe("Test Tests fot Spiderman class", () => {
    test('1) Create an spiderman object', () => {
      //Aqui escribimos el codigo que queremos usar tal cual
      //Quiero poder intanciar un objeto Spiderman con esta info
      const andrewGarfield = new Spiderman("Spiderman Sony", 31, "Andrew Garfield", 2, "Sony")
      //Validamos que este codigo funcione de la forma esperada
      expect(andrewGarfield.namemovie).toBe("Spiderman Sony")
      expect(andrewGarfield.age).toBe(31)
      expect(andrewGarfield.name).toBe("Andrew Garfield")
      expect(andrewGarfield.numbmov).toBe(2)
      expect(andrewGarfield.produc).toBe("Sony")
    });
    test('2) Use the method getInfo()', () => {
      const tomHolland = new Spiderman("Spiderman Marvel", 25, "Tom Holland", 5, "Marvel")
      expect(tomHolland.getInfo()).toBe("Spiderman Marvel")   
    });    
  })