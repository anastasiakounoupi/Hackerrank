function birthdayCakeCandles(candles) {
  const tallestCandle = Math.max(...candles)

  candles.filter(v => (v === tallestCandle)).length
}