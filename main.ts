input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.magneticForce(Dimension.Strength))
})
basic.forever(function () {
    if (input.magneticForce(Dimension.Strength) < 250) {
        music.playMelody("C5 B A G F E D C ", 120)
        basic.showIcon(IconNames.No)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        music.setBuiltInSpeakerEnabled(false)
    }
})
