const Spiderman = require('./../app/spiderman')
describe("Test Tests fot Spiderman class", () => {
    test('1) Create an spiderman object', () => {
      //Aqui escribimos el codigo que queremos usar tal cual
      //Quiero poder intanciar un objeto Spiderman con esta info
      const andrewGarfield = new Spiderman("Spiderman Sony", 31, "Andrew Garfield", 2, "Sony")

      //Validamos que este codigo funcione de la forma esperada
      expect(andrewGarfield.namemovie).toBe("Spiderman Sorny")
      expect(andrewGarfield.age).toBe(31)
      expect(andrewGarfield.name).toBe("Andrew Garfieldddddddddddd")
      expect(andrewGarfield.numbmov).toBe(22)
      expect(andrewGarfield.produc).toBe("Sony")
    });
  })