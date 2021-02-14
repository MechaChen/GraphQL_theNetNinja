import { useState } from 'react'
import { useQuery, gql } from '@apollo/client'
import { getAuthorsQuery } from '../queries/queries'

function AddBook() {
    const [name, setName] = useState('')
    const [genre, setGenre] = useState('')
    const [authorId, setAuthorId] = useState('')
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

    const submitForm = (e) => {
        e.preventDefault()
        console.log('name =>', name)
        console.log('genre =>', genre)
        console.log('authorId =>', authorId)
    }

    return (
        <form id="add-book" onSubmit={(e) => submitForm(e)}>
            <div className="field">
                <label>Book name:</label>
                <input type="text" onChange={(e) => setName(e.target.value)} />
            </div>

            <div className="field">
                <label>Genre</label>
                <input type="text" onChange={(e) => setGenre(e.target.value)} />
            </div>

            <div className="field">
                <label>Author</label>
                <select onChange={(e) => setAuthorId(e.target.value)}>
                    {displayAuthors()}
                </select>
            </div>

            <button>+</button>
        </form>
    )
}

export default AddBook
