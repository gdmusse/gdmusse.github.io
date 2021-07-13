# Aula 60
## _Gabriel Dienstmann Musse_

### Exercício 1
**a.** 
```
export interface Character {
  name: string;
  life: number;
  defense: number;
  strength: number;
}

```

**b.** 
```
export const validateCharacter = (input: Character): boolean => {
  if (!input.name || !input.life || !input.defense || !input.strength) {
    return false;
  }

  if (input.life <= 0 || input.defense <= 0 || input.strength <= 0) {
    return false;
  }

  return true;
};
```
### Exercício 2

**a.** 
```
test("Should return false for empty name", () => {
    const result = validateCharacter({
      name: "",
      life: 1,
      strength: 1,
      defense: 1,
    });

    expect(result).toBe(false);
  });
```

**b.** 
```
test("Should return false for life = 0 ", () => {
  const result = validateCharacter({
    name: "Abc",
    life: 0,
    strength: 1,
    defense: 1,
  });

  expect(result).toBe(false);
});
```

**c.** 
```
test("Should return false for strength = 0 ", () => {
  const result = validateCharacter({
    name: "Abc",
    life: 1,
    strength: 0,
    defense: 1,
  });

  expect(result).toBe(false);
});
```

**d.** 
```
test("Should return false for defense = 0 ", () => {
  const result = validateCharacter({
    name: "Abc",
    life: 1,
    strength: 1,
    defense: 0,
  });

  expect(result).toBe(false);
});
```

**e.** 
```
test("Should return false for life/defense/strength < 0 ", () => {
  const result = validateCharacter({
    name: "Abc",
    life: 1,
    strength: -1,
    defense: 1,
  });

  expect(result).toBe(false);
});
```

**f.** 
```
test("Should return true for correct character ", () => {
  const result = validateCharacter({
    name: "Abc",
    life: 1,
    strength: 1,
    defense: 1,
  });

  expect(result).toBe(true);
})
```
### Exercício 3

**a.** 
```
export const performAttack = (attacker: Character, defender: Character) => {
  if (!validateCharacter(attacker) || !validateCharacter(defender)) {
    throw new Error("Invalid character");
  }
  if (defender.defense < attacker.strength) {
    defender.life -= attacker.strength - defender.defense;
  }
};

```

**b.**
```
export const performAttack = (attacker: Character, defender: Character, validator: (input: Character) => boolean) => {
  if (!validator(attacker) || !validator(defender)) {
    throw new Error("Invalid character");
  }
  if (defender.defense < attacker.strength) {
    defender.life -= attacker.strength - defender.defense;
  }
};

```

### Exercício 4

**b.** 
```
test("Creating Mocks", () => {
  const validatorMock = jest.fn(() => {
    return true
  })
})
```

**c.** 
```
test("Creating Mocks", () => {
  const validatorMock = jest.fn(() => {
    return false
  })
})
```

### Exercício 5

**a.** 
```
test("Should perform attack", () => {
  const validatorMock = jest.fn(() => {
    return true
  })

  const attacker: Character = ({
    name: "Attacker",
    life: 500,
    strength: 250,
    defense: 60,
  });

  const defender: Character = ({
    name: "Defender",
    life: 500,
    strength: 120,
    defense: 50,
  });

  performAttack(attacker, defender, validatorMock);

  expect(defender.life).toEqual(300)
  expect(validatorMock).toHaveBeenCalled
  expect(validatorMock).toHaveBeenCalledTimes(2)
  expect(validatorMock).toHaveReturnedTimes(2)

})
```
**b.** 
```
test("Should return invalid character error", () => {
  expect.assertions(4)
  const validatorMock = jest.fn(() => {
    return false;
  });

  const attacker: Character = {
    name: "",
    life: 500,
    strength: 250,
    defense: 60,
  };

  const defender: Character = {
    name: "Defender",
    life: 500,
    strength: 120,
    defense: 20,
  };

  try {
    performAttack(attacker, defender, validatorMock);
  } catch (error) {
    expect(error.message).toBe("Invalid character");
    expect(validatorMock).toHaveBeenCalled();
    expect(validatorMock).toHaveBeenCalledTimes(1);
    expect(validatorMock).toHaveReturnedTimes(1);
  }
});

```

