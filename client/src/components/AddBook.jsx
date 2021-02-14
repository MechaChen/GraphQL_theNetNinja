import { useQuery, gql } from '@apollo/client'
import { getAuthorsQuery } from '../queries/queries'

function AddBook() {
    const { loading, data } = useQuery(getAuthorsQuery)

    const displayAuthors = () => {
        if (loading) {
            return <option disabled>Loading Authors...</option>
        } else {
            return data.authors.map((author) => (
                <option key={author.id} value={author.id}>
                    {author.name}
                </option>
            ))
        }
    }

    return (
        <form id="add-book">
            <div className="field">
                <label>Book name:</label>
                <input type="text" />
            </div>

            <div className="field">
                <label>Genre</label>
                <input type="text" />
            </div>

            <div className="field">
                <label>Author</label>
                <select>{displayAuthors()}</select>
            </div>

            <button>+</button>
        </form>
    )
}

export default AddBook