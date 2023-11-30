class CardEffect {
  constructor ({ cardCode, text = '', effectParts = [] }) {
    this.cardCode = cardCode
    this.text = text
    this.effectParts = effectParts
  }
}

export default CardEffect
