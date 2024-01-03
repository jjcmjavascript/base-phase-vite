class PlayerGameState {
  constructor (
    creatures,
    items,
    deck,
    hand,
    resources,
    resourcesPile,
    usedResources,
    discardPile,
    phCreatureZones,
    phItemZones
  ) {
    this.creatures = creatures
    this.items = items
    this.deck = deck
    this.hand = hand
    this.resources = resources
    this.resourcesPile = resourcesPile
    this.usedResources = usedResources
    this.discardPile = discardPile
    this.phCreatureZones = phCreatureZones
    this.phItemZones = phItemZones
  }

  getNewState (newValues) {
    return new PlayerGameState({
      ...this,
      ...newValues
    })
  }
}
