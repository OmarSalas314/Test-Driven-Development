const Spiderman = require('./../app/spiderman')
describe("Test Tests fot Spiderman class", () => {
    test('1) Create an spiderman object', () => {
      //Aqui escribimos el codigo que queremos usar tal cual
      //Quiero poder intanciar un objeto Spiderman con esta info
      const andrewGarfield = new Spiderman("Spiderman Sony", 31, "Andrew Garfield", 2, "Sony")

      //Validamos que este codigo funcione de la forma esperada
      expect(andrewGarfield.name).toBe("Spiderman Sony")
      expect(andrewGarfield.name).toBe(31)
      expect(andrewGarfield.name).toBe("Andrew Garfield")
      expect(andrewGarfield.name).toBe(31)
      expect(andrewGarfield.name).toBe("Sony")
    });
  })