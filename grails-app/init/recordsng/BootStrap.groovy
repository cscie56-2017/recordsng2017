package recordsng

import cscie56.section3.Album
import cscie56.section3.Artist

class BootStrap {

    def init = { servletContext ->
        Artist a1 = new Artist(firstName: "David", lastName: "Bowie", countryOfOrigin: "U.K.")
        saveObject(a1)

        createAlbum('Low',1977,a1,'rock')
        createAlbum('Pin Ups',1973,a1,'rock')
        createAlbum('Young Americans',1975,a1,'rock')
    }
    def destroy = {
    }

    def createAlbum(title, year, artist, genre) {
        Album a = new Album(title: title, releaseYear: year, artist: artist, genre: genre)
        saveObject(a)
    }

    def saveObject(object) {
        if (!object.save(flush:true)) {
            object.errors.allErrors.each { log.error it}
        }
    }
}
