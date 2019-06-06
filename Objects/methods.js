let restaurant = {
    name: 'ASB',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function (partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft
    }, 
    seatParty: function (newJoiners) {
        this.guestCount = this.guestCount + newJoiners
    },
    removeParty: function (newLeavers) {
        this.guestCount = this.guestCount - newLeavers
    },
}

restaurant.seatParty(72)
console.log(restaurant.checkAvailability(4))
restaurant.removeParty(5)
console.log(restaurant.checkAvailability(4))