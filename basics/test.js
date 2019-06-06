function nanana(a) {
    return function(b) {
        return function(c) {
            return function(d) {
                return function(e) {
                    return a * d * c * b * e
                }
            }
        }
    }
}
console.log(nanana(10)(5)(1)(2)(5))