function myModul() {
    this.hello = function () {
        return 'Hello';
    }
    this.goodbye = function() {
        return 'GoodBye'
    }
}

module.exports = myModul;