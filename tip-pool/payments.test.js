describe('payments tests', function () {
    beforeEach (function () {
        billAmtInput = 100;
        tipAmtInput = 20;
    });

    it ('accept and add new payment info', function () {
        submitPaymentInfo();
        expect(allPayments['payment1'].billAmt).toEqual('100');
        expect(allPayments['payment1'].tipAmt).toEqual('20');
        expect(allPayments['payment1'].tipPercent).toEqual(20);
    });

    it('should create a new payment on createCurPayemnt', function () {
        let expectedPayment = {
            billAmt: '100',
            tipAmt: '20';
            tipPercent:20;
        }
    })

    it ('should update payment table', function () {
        appendPaymentTable(createCurPayment() = allPayments['payment1'];)

        let curTdList = document.querySelectorAll('#paymentTable tbody tr td');
        expect(curTdList[0].innertext).toEqual('$100');
        expect(curTdList[1].innertext).toEqual('$20');
        expect(curTdList[2].innertext).toEqual('%20');
        expect(curTdList[3].innertext).toEqual('X');
    });

    afterEach (function() {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        summaryTds[3].innerHTML = '';
        paymentId = 0;
        allPayments = {};

    })
})