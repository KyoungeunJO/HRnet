import { useState } from 'react'
import './Table.css'

function Table({headers, data}) {

    const [page, setPage] = useState(1)
    const [elements, setElements] = useState(data)
    const [nbToShow, setNbToShow] = useState(10)

    let nbOfRows = 0

    const columnHeaders = headers.map((head, index) => {
        return <th key={`h-${index}`}>{head}</th>
    })

    const sliceElements = (els) => {
        const start = (page-1) * nbToShow
        const end = start + nbToShow
        console.log(start, end);
        return els.slice(start, end)
    }

    const rows = (() => {
        const elementsToDisplay = sliceElements(elements)
        if (elementsToDisplay?.length == 0) {
            return <tr><td className='row-empty' colSpan={headers.length}>No matching records found</td></tr>
        }

        return elementsToDisplay?.map((el, index) => {
            nbOfRows += 1
            return (
                <tr key={`row-${index}`} role="row" className={index % 2 == 0 ? 'even' : 'odd'}>
                    { Object.entries(el).map((val, index2) => {
                        return <td key={`cell-${index}-${index2}`}>{val[1]}</td>
                    }) }
                </tr>
            ) 
        })
    })()

    const handleSearch = (event) => {
        const text = event.target.value
        const newElements = data.filter(el => {
            let properties = []
            for (const [key, val] of Object.entries(el)) {
                properties.push(val)
            }
            const stringProp = properties.join(' ')
            return stringProp.includes(text)
        })
        setElements(newElements)
    }

    const selectChange = (event) => {
        const entriesToShow = parseInt(event.target.value)
        setNbToShow(entriesToShow)
    }

    const displayPages = () => {
        const NbPages = Math.ceil(data?.length / nbToShow)
        let pages = []
        for (let i=1; i <= NbPages; i++) {
            pages.push(
                <span key={`page-${i}`} onClick={() => moveToPage(i)} className={page == i ? 'page-active' : ''}>{i}</span>
            )
        }
        return pages
    }

    const movePage = (n) => setPage(page+n)
    const moveToPage = (n) => setPage(n)

    return (
        <div>
            <div className="flex-spaced">
                <label>
                    Show
                    <select name="table-length" onChange={selectChange}>
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                    </select>
                </label>

                <div>
                    <label htmlFor="search">Search</label>
                    <input id="search" type="text" onChange={handleSearch} />
                </div>
            </div>

            <table>
                <thead>
                    <tr role="row">
                        {columnHeaders}
                    </tr>
                </thead>

                <tbody>
                    {rows}
                </tbody>
            </table>

            <div className='flex-spaced'>
                <p>Showing {nbOfRows} of {elements.length} entries</p>
                <div>
                    {displayPages()}
                </div>
                <div>
                    <button onClick={() => movePage(-1)}>Previous</button>
                    <button onClick={() => movePage(1)}>Next</button>
                </div>
            </div>

        </div>
    )
}

export default Table