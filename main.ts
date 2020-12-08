let direccion = 0
input.calibrateCompass()
basic.forever(function () {
    direccion = input.compassHeading()
    if (direccion <= 45 || direccion >= 315 && direccion <= 360) {
        basic.clearScreen()
        basic.showLeds(`
            # . . . #
            # # . . #
            # . # . #
            # . . # #
            # . . . #
            `)
    } else if (direccion > 45 && direccion <= 135) {
        basic.clearScreen()
        basic.showLeds(`
            # # # # .
            # . . . .
            # # # . .
            # . . . .
            # # # # .
            `)
    } else if (direccion > 135 && direccion <= 225) {
        basic.clearScreen()
        basic.showLeds(`
            . . # # #
            . # . . .
            . . # # .
            . . . . #
            . # # # #
            `)
    } else {
        basic.clearScreen()
        basic.showLeds(`
            . . # # .
            . # . . #
            . # . . #
            . # . . #
            . . # # .
            `)
    }
    basic.pause(1000)
})
