package cscie56.section3

class Album {

    String title
    String genre
    Integer lengthInMinutes
    Integer releaseYear

    static belongsTo = [artist:Artist]

    static constraints = {
        title()
        releaseYear()
        genre nullable:true, inList: ['jazz','rock','classical','hiphop','rap','country','folk','fusion']
        lengthInMinutes nullable: true
    }

    String toString() {
        "$title ($releaseYear)"
    }
}
