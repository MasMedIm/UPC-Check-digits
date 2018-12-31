/**
 * In the context of an easy challenge made in Reddit,
 * I wanted to make an npm dependency out of it. Just so that i'll learn how to do it!
 * And if it happens that you are actually using this, please visit this link
 * for way better implementation than mine :
 * 
 * https: //www.reddit.com/r/dailyprogrammer/comments/a72sdj/20181217_challenge_370_easy_upc_check_digits/
 */

var upcCheck =
    function (digits) {
        var verificationString = ""
        let aimedDigit = ""
        if (digits.length != 12)
            throw "It's not an UPC-A code bar !"
        else {
            aimedDigit = digits.slice(11, 12)
            verificationString = digits.slice(0, 11)
        }
        verificationString = verificationString
        var checkDigit = 0
        var sumEven = 0;
        var sumOdd = 0;
        for (var i = 0; i < verificationString.length; i++) {
            if (i % 2 == 0 || i == 0) {
                sumOdd += parseInt(verificationString[i])
            } else {
                sumEven += parseInt(verificationString[i])
            }
        }

        let m = ((sumOdd * 3) + sumEven) % 10
        if (m != 0) {
            checkDigit = 10 - m
        }

        if (aimedDigit == checkDigit)
            return true
        else
            return false
    }

module.exports =
    upcCheck