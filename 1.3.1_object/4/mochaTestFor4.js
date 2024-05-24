describe('calculateSallary', function() {
  it('Для данных из задачи должно вывести 390', function() {
      assert.equal(calculateSallary({
        John: 100,
        Ann: 160,
        Pete: 130
      }), 390)
  })
})