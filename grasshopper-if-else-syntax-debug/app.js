let checkAlive = (health) => {
    if (-10 <= health && health <= 0) {
        return false
    } else if (0 < health && health <= 10) {
        return true
    } else {
        return 'Please Give Valuable Input'
    }
}

console.log(checkAlive(11))