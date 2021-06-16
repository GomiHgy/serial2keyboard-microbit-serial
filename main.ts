input.onButtonPressed(Button.A, function () {
    custom.sendKeyText("ABCDE")
    led.toggle(0, 0)
})
input.onButtonPressed(Button.AB, function () {
    custom.pressSimultaneouslyKey(SimultaneouslyKeyCode.LEFTCTRL)
    custom.sendKeyText("A")
    custom.sendKeyCode(KeyCode.DELETE)
})
input.onButtonPressed(Button.B, function () {
    custom.sendKeyText("abcde")
    led.toggle(4, 0)
})
let キー = 0
serial.redirect(
SerialPin.P0,
SerialPin.P1,
BaudRate.BaudRate115200
)
basic.forever(function () {
	
})
basic.forever(function () {
    if (キー != 0) {
        キー = 0
        basic.pause(50)
        led.unplot(2, 2)
        led.unplot(0, 2)
        led.unplot(2, 0)
        led.unplot(2, 4)
        led.unplot(4, 2)
    }
})
