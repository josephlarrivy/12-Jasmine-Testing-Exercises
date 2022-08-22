describe('helpers tests', function() {
    beforeEach(function() {
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
        submitPaymentInfo();
    });

    it('should calculate total tip amount', function() {
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
        submitPaymentInfo();

        expect(sumPaymentTotal(tipAmt)).toEqual(20);
        expect(sumPaymentTotal('tipAmt')).toEqual(40);
    });

    it('should correctly calculate tips', function() {
        expect(calculateTipPercent(100,50)).toEqual(50);
        expect(calculateTipPercent(200,25)).toEqual(50);
        expect(calculateTipPercent(10,10)).toEqual(1);
    })

    afterEach(function() {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        allPayments = {};
    })








})