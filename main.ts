enum RadioMessage {
    message1 = 49434,
    hello = 49337
}
input.onButtonPressed(Button.A, function () {
    radio.sendString("Hi :D")
    basic.showIcon(IconNames.Asleep)
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("Hello I am hamster rawr ")
    basic.showIcon(IconNames.Silly)
    basic.pause(2000)
    basic.showIcon(IconNames.Asleep)
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    music.play(music.stringPlayable("E B C5 A B G A F ", 120), music.PlaybackMode.UntilDone)
    basic.showIcon(IconNames.Asleep)
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Sad)
    soundExpression.sad.playUntilDone()
    basic.showIcon(IconNames.Sad)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showIcon(IconNames.Happy)
    soundExpression.giggle.playUntilDone()
    basic.showIcon(IconNames.Asleep)
})
radio.setGroup(1)
basic.showIcon(IconNames.Asleep)
