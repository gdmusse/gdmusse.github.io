describe("Testing", () => {
  /*   test("number should be even", () => {
      const input = 10
      const output = isEven(10);
      expect(output).toBe(true);  
    }) */

    test("monstrando o toContain", () => {
        const myArray = [1, "dois", 3];

        expect(myArray).toContain(1)
    })

    test("monstrando o toContainEqual", () => {
        const myArray = [1, {chave: "dois", valor: 2}, 3];

        expect(myArray).toContainEqual({chave: "dois", valor:2})
    })

    test("monstrando o not, com toContainEqual", () => {
        const myArray = [1, {chave: "dois", valor: 2}, 3];

        expect(myArray).not.toContainEqual({chave: "joao", valor:5})
    })
})  1