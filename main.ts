radio.onReceivedNumber(function (receivedNumber) {
    signal = radio.receivedPacket(RadioPacketProperty.SignalStrength)
    led.plotBarGraph(
    Math.map(signal, -95, -42, 0, 9),
    9
    )
})
let signal = 0
radio.setGroup(1)
