module("Primeiro modulo");

test("Testando a função somar", function() {
	equal(2, somar(1,1), "O valor de uma mais um é 2");
	equal(2, somar(1,"1"), "Se a String for representar um numero soma");
	equal(0, somar("a", "b"), "Se a String nao for numero,  retorna 0 (zero)");
});

module("Segundo modulo");
test("Testando a funcção subtrair", function() {
	equal(9, subtrair(10,1), "Subtraindo 1 - 1 = 0");
	equal(9, subtrair(10,"1"), "Passando um argumento como string em forma de numero");
	equal(0, subtrair(10,"a"), "Passando um argumento como string alfanumerica");
});

test("Testando a funcção subtrair", function() {
	equal(30, multiplicar(10,3), "Deve retornar 30");
	equal(30, multiplicar(10,"3"), "Passando um argumento como string em forma de numero");
	equal(0, multiplicar(10,"a"), "Passando um argumento como string alfanumerica");
});

test("Testando a funcção subtrair", function() {
	equal(5, dividir(15,3), "Deve retornar 30");
	equal(5	, dividir(15,"3"), "Passando um argumento como string em forma de numero");
	equal(0, dividir(10,"a"), "Passando um argumento como string alfanumerica");
});
