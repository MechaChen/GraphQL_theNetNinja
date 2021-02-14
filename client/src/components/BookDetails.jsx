import { useQuery } from '@apollo/client'
import { getBookQuery } from '../queries/queries'

function BookDetails({ selected }) {
    const { loading, data } = useQuery(getBookQuery, {
        variables: {
            id: selected,
        },
    })

    const displayBookDetalis = () => {
        if (data?.book) {
            const { book } = data
            return (
                <div>
                    <h2>{book.name}</h2>
                    <p>{book.genre}</p>
                    <p>{book.author.name}</p>
                    <p>All books by this author</p>
                    <ul className="other-books">
                        {book.author.books.map((item) => (
                            <li key={item.id}>{item.name}</li>
                        ))}
                    </ul>
                </div>
            )
        } else {
            return <div>No book selected</div>
        }
    }

    return <div id="book-details">{displayBookDetalis()}</div>
}

export default BookDetails
