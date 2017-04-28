package cscie56.section3

class Artist {

    String firstName
    String lastName
    String countryOfOrigin

    static hasMany = [albums:Album]

    static constraints = {
    }
}
