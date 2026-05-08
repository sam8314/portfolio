import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'
import CloseIcon from '@material-ui/icons/Close'
import { projects, skills } from '../../portfolio'
import './SearchBar.css'

const SearchBar = () => {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [showResults, setShowResults] = useState(false)
  const history = useHistory()

  useEffect(() => {
    if (query.trim() === '') {
      setResults([])
      setShowResults(false)
      return
    }

    const lowerQuery = query.toLowerCase()

    // Search through projects
    const projectResults = projects
      .filter(
        (p) =>
          p.name.toLowerCase().includes(lowerQuery) ||
          p.description.toLowerCase().includes(lowerQuery) ||
          (p.stack && p.stack.some((s) => s.toLowerCase().includes(lowerQuery)))
      )
      .map((p) => ({
        type: 'project',
        id: p.id,
        title: p.name,
        description: p.description,
      }))

    // Search through skills
    const skillResults = skills
      .filter((s) => s.toLowerCase().includes(lowerQuery))
      .map((s) => ({
        type: 'skill',
        id: s,
        title: s,
      }))

    setResults([...projectResults, ...skillResults].slice(0, 8)) // Limit to 8 results
    setShowResults(true)
  }, [query])

  const handleResultClick = (result) => {
    if (result.type === 'project') {
      history.push(`/project/${result.id}`)
      setQuery('')
      setResults([])
      setShowResults(false)
    } else if (result.type === 'skill') {
      history.push('/#skills')
      setQuery('')
      setResults([])
      setShowResults(false)
    }
  }

  const handleClear = () => {
    setQuery('')
    setResults([])
    setShowResults(false)
  }

  return (
    <div className='search-bar'>
      <div className='search-input-wrapper'>
        <SearchIcon className='search-icon' />
        <input
          type='text'
          placeholder='Search projects, skills...'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => query && setShowResults(true)}
          onBlur={() => setTimeout(() => setShowResults(false), 200)}
          className='search-input'
        />
        {query && (
          <button
            onClick={handleClear}
            className='clear-btn'
            aria-label='clear search'
          >
            <CloseIcon />
          </button>
        )}
      </div>

      {showResults && results.length > 0 && (
        <div className='search-results'>
          {results.map((result, index) => (
            <div
              key={index}
              className={`search-result-item search-result-${result.type}`}
              onClick={() => handleResultClick(result)}
              role='button'
              tabIndex={0}
              onKeyPress={(e) => {
                if (e.key === 'Enter') handleResultClick(result)
              }}
            >
              <div className='result-title'>{result.title}</div>
              {result.description && (
                <div className='result-description'>{result.description}</div>
              )}
            </div>
          ))}
        </div>
      )}

      {showResults && query && results.length === 0 && (
        <div className='search-results'>
          <div className='search-no-results'>No results found</div>
        </div>
      )}
    </div>
  )
}

export default SearchBar
