import { useQuery, gql } from '@apollo/client'

const getBooksQuery = gql`
    {
        books {
            name
            id
        }
    }
`

function BookList() {
    const { loading, error, data } = useQuery(getBooksQuery)

    const displayBooks = () => {
        if (loading) {
            return <div>Loading books...</div>
        } else {
            return data.books.map((book) => <li key={book.id}>{book.name}</li>)
        }
    }

    return (
        <div>
            <ul id="book-list">{displayBooks()}</ul>
        </div>
    )
}

export default BookList
