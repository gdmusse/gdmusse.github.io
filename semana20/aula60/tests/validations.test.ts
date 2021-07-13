import { Character, performAttack, validateCharacter } from "../src/model";

/* test("Should return false for empty name", () => {
  const result = validateCharacter({
    name: "",
    life: 1,
    strength: 1,
    defense: 1,
  });

  expect(result).toBe(false);
});

test("Should return false for life = 0 ", () => {
  const result = validateCharacter({
    name: "Abc",
    life: 0,
    strength: 1,
    defense: 1,
  });

  expect(result).toBe(false);
});

test("Should return false for strength = 0 ", () => {
  const result = validateCharacter({
    name: "Abc",
    life: 1,
    strength: 0,
    defense: 1,
  });

  expect(result).toBe(false);
});

test("Should return false for defense = 0 ", () => {
  const result = validateCharacter({
    name: "Abc",
    life: 1,
    strength: 1,
    defense: 0,
  });

  expect(result).toBe(false);
});

test("Should return false for life/defense/strength < 0 ", () => {
  const result = validateCharacter({
    name: "Abc",
    life: 1,
    strength: -1,
    defense: 1,
  });

  expect(result).toBe(false);
});

test("Should return true for correct character ", () => {
  const result = validateCharacter({
    name: "Abc",
    life: 1,
    strength: 1,
    defense: 1,
  });

  expect(result).toBe(true);
});

test("Creating Mocks", () => {
  const validatorMock = jest.fn(() => {
    return true
  })
})

test("Creating Mocks", () => {
  const validatorMock = jest.fn(() => {
    return false
  })
}) */

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
