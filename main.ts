input.onButtonPressed(Button.A, function () {
    if (godziny < 23) {
        godziny += 1
    } else {
        godziny = 0
    }
})
input.onButtonPressed(Button.AB, function () {
    ampm = !(ampm)
})
input.onButtonPressed(Button.B, function () {
    if (minuty < 59) {
        minuty += 1
    } else {
        minuty = 0
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    soundExpression.giggle.playUntilDone()
    basic.showNumber(input.temperature())
})
input.onGesture(Gesture.Shake, function () {
    dostosuj = godziny
    if (ampm) {
        if (godziny < 12) {
            dostosuj = godziny - 12
        } else {
            if (godziny == 0) {
                dostosuj = 12
            }
        }
    }
    czas = "" + dostosuj
    czas = "" + czas + ":"
    if (minuty < 10) {
        czas = "" + czas + "0"
    }
    czas = "" + czas + minuty
    if (ampm) {
        if (godziny > 11) {
            czas = "" + czas + "PM"
        } else {
            czas = "" + czas + "AM"
        }
    }
    basic.showString(czas)
})
let godziny = 0
let minuty = 0
let dostosuj = 0
let czas = ""
let ampm = false
ampm = false
czas = ""
dostosuj = 0
minuty = 0
godziny = 0
soundExpression.hello.playUntilDone()
basic.showString("CZAS")
basic.forever(function () {
    basic.pause(60000)
    if (minuty < 59) {
        minuty += 1
    } else if (false) {
        minuty = 0
        if (godziny < 23) {
            godziny += 1
        } else {
            godziny = 0
        }
    }
})
