# Aula 59
## _Gabriel Dienstmann Musse_

### Exercício 1
**a.** 
```
interface User {
	name: string
	balance: number
}
```

**b.** 
```
function fazerCompra(user: User, value: number): User | undefined {
	if(user.balance >= value) {
		return {
			...user,
			balance: user.balance - value		
		}
	}
	return undefined
}
```
### Exercício 2

**a.** 
```
test("Testando saldo maior do que o valor de compra", () => {
	const user: User = {
		name: "Gabriel",
		balance: 200
	}

	const result = performPurchase(user, 50)
	
	expect(result).toEqual({
		name: "Gabriel",
		balance: 150
	})
})
```

**b.** 
```
test("Testando saldo igual ao valor de compra", () => {
	const user: User = {
		name: "Gabriel",
		balance: 200
	}

	const result = performPurchase(user, 200)
	
	expect(result).toEqual({
		...user,
		balance: 0
	})
})
```

**c.** 
```
test("Testando saldo menor do que o valor de compra", () => {
	const user: User = {
		name: "Gabriel",
		balance: 200
	}

	const result = performPurchase(user, 250)
	
	expect(result).not.toBeDefined()
})
```



