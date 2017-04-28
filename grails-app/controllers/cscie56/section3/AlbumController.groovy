package cscie56.section3

import static org.springframework.http.HttpStatus.*
import grails.transaction.Transactional

@Transactional(readOnly = true)
class AlbumController {

    static responseFormats = ['json', 'xml']
    static allowedMethods = [save: "POST", update: "PUT", delete: "DELETE"]

    def index(Integer max) {
        params.max = Math.min(max ?: 10, 100)
        respond Album.list(params), model:[albumCount: Album.count()]
    }

    def show(Album album) {
        respond album
    }

    @Transactional
    def save(Album album) {
        if (album == null) {
            transactionStatus.setRollbackOnly()
            render status: NOT_FOUND
            return
        }

        if (album.hasErrors()) {
            transactionStatus.setRollbackOnly()
            respond album.errors, view:'create'
            return
        }

        album.save flush:true

        respond album, [status: CREATED, view:"show"]
    }

    @Transactional
    def update(Album album) {
        if (album == null) {
            transactionStatus.setRollbackOnly()
            render status: NOT_FOUND
            return
        }

        if (album.hasErrors()) {
            transactionStatus.setRollbackOnly()
            respond album.errors, view:'edit'
            return
        }

        album.save flush:true

        respond album, [status: OK, view:"show"]
    }

    @Transactional
    def delete(Album album) {

        if (album == null) {
            transactionStatus.setRollbackOnly()
            render status: NOT_FOUND
            return
        }

        album.delete flush:true

        render status: NO_CONTENT
    }
}
