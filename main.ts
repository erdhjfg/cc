cbit_IR.onPressEvent(RemoteButton.CH_MINUS, function () {
    basic.showString("CH-")
})
cbit_IR.onPressEvent(RemoteButton.NUM_200, function () {
    basic.showString("200+")
})
cbit_IR.onPressEvent(RemoteButton.CH, function () {
    basic.showString("CH")
})
cbit_IR.onPressEvent(RemoteButton.NUM_100, function () {
    basic.showString("100+")
})
cbit_IR.onPressEvent(RemoteButton.Minus, function () {
    basic.showString("Vol-")
})
cbit_IR.onPressEvent(RemoteButton.PREV, function () {
    basic.showString("Prev|<<")
})
cbit_IR.onPressEvent(RemoteButton.CH_Add, function () {
    basic.showString("CH+")
})
cbit_IR.onPressEvent(RemoteButton.Add, function () {
    basic.showString("Vol+")
})
cbit_IR.onPressEvent(RemoteButton.PLAY, function () {
    basic.showString("Play>>>")
})
cbit_IR.onPressEvent(RemoteButton.EQ, function () {
    basic.showString("EQ")
})
cbit_IR.onPressEvent(RemoteButton.NEXT, function () {
    basic.showString("Next>>|")
})
cbit_IR.init(Pins.P0)
basic.forever(function () {
	
})
