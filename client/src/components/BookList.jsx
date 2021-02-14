import { useState } from 'react'
import { useQuery } from '@apollo/client'
import { getBooksQuery } from '../queries/queries'
import BookDetails from './BookDetails'

function BookList() {
    const { loading, error, data } = useQuery(getBooksQuery)
    const [selected, setSelected] = useState(null)

    const displayBooks = () => {
        if (loading) {
            return <div>Loading books...</div>
        } else {
            return data.books.map((book) => (
                <li key={book.id} onClick={() => setSelected(book.id)}>
                    {book.name}
                </li>
            ))
        }
    }

    return (
        <div>
            <ul id="book-list">{displayBooks()}</ul>
            <BookDetails selected={selected} />
        </div>
    )
}

export default BookList
