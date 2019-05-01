describe('filterHouse', () => {
  //declaro un arreglo el cual voy a utilizar para realizar mis test
  const data = [
    {
      "name": "Harry Potter",
      "house": "Gryffindor"
    },
    {
      "name": "Draco Malfoy",
      "house": "Slytherin"
    },
    {
      "name": "Cedric Diggory",
      "house": "Hufflepuff"
    }
  ]
  //hago mi test bàsico de que deberia ser una funciòn
  it('deberia ser una function', () => {
    assert.equal(typeof filterHouse, 'function');
  });

  //Hago mi test sobre mi funcion filtrar, utilizo mi arreglo que declarè màs arriba
  it('debería retornar el objeto Harry Potter al filtrar por house Gryffindor', () => {
    //acà le digo que funciòn quiero testear, le paso mi funciòn entera con sus parametros y luego que espero como resultado
    assert.deepEqual(window.filterHouse(data, 'Gryffindor'), [{"name": "Harry Potter",
    "house": "Gryffindor"}])
  });

  it('debería retornar el objeto Draco Malfoy al filtrar por house Slytherin', () => {
    assert.deepEqual(window.filterHouse(data, 'Slytherin'), [{"name": "Draco Malfoy",
    "house": "Slytherin"}])
  });

})

//assert.deepEqual(function(parametro1, parametro2), resultado)