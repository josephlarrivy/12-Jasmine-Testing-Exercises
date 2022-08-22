
it('should calculate the monthly rate correctly', function () {
  const values = {amount:15000, years:8, rate:4};
  
  expect(calculateMonthlyPayment(values)).toEqual('182.84');
});


it("should return a result with 2 decimal places", function() {
  const values = {amount:12345, years:5.234, rate:3.234};
  
  expect(calculateMonthlyPayment(values)).toEqual('216.48');
});

it ('should handle high interest rates', function() {
  const values = {amount:1000, years: 40, rate:99};
  
  expect(calculateMonthlyPayment(values)).toEqual('82.50');
});