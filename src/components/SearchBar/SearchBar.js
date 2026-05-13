import { useState, useEffect, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import { createPortal } from 'react-dom'
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'
import { projects, skills } from '../../portfolio'
import { useLanguage } from '../../contexts/language'
import { getLocalizedValue } from '../../utils/i18n'
import './SearchBar.css'

const SearchBar = () => {
  const { language, strings } = useLanguage()
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [isFullPage, setIsFullPage] = useState(false)
  const history = useHistory()

  useEffect(() => {
    if (query.trim() === '') {
      setResults([])
      return
    }

    const lowerQuery = query.toLowerCase()

    const projectResults = projects
      .filter(
        (p) =>
          getLocalizedValue(p.name, language).toLowerCase().includes(lowerQuery) ||
          getLocalizedValue(p.description, language).toLowerCase().includes(lowerQuery) ||
          (p.stack && p.stack.some((s) => s.toLowerCase().includes(lowerQuery)))
      )
      .map((p) => ({
        type: 'project',
        id: p.id,
        title: getLocalizedValue(p.name, language),
        description: getLocalizedValue(p.description, language),
      }))

    const skillResults = skills
      .filter((s) => s.toLowerCase().includes(lowerQuery))
      .map((s) => ({
        type: 'skill',
        id: s,
        title: s,
      }))

    setResults([...projectResults, ...skillResults].slice(0, 8))
  }, [query, language])

  useEffect(() => {
    if (isFullPage) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
      setQuery('')
      setResults([])
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isFullPage])

  const handleResultClick = (result) => {
    if (result.type === 'project') {
      history.push(`/project/${result.id}`)
      setIsFullPage(false)
    } else if (result.type === 'skill') {
      history.push('/#skills')
      setIsFullPage(false)
    }
  }

  const handleSearchIconClick = () => {
    setIsFullPage(true)
  }

  const handleClose = () => {
    setIsFullPage(false)
  }

  const portalTarget = typeof document !== 'undefined' ? document.querySelector('.app') : null

  return (
    <>
      <button 
        className='search-icon-button'
        onClick={handleSearchIconClick}
        aria-label={strings.searchPlaceholder || 'Search'}
        title={strings.searchPlaceholder || 'Search'}
      >
        <SearchIcon />
      </button>

      {isFullPage && portalTarget && createPortal(
        <div className='search-fullpage-overlay'>
          <div className='search-fullpage-content'>
            <div className='search-fullpage-bar'>
              <SearchIcon className='search-fullpage-icon' />
              <input
                type='text'
                placeholder={strings.searchPlaceholder || 'Search projects and skills...'}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className='search-fullpage-input'
                autoFocus
              />
              <button
                onClick={handleClose}
                className='search-fullpage-close'
                aria-label='close search'
              >
                <CloseIcon />
              </button>
            </div>
            {results.length > 0 && (
              <div className='search-fullpage-results'>
                {results.map((result, index) => (
                  <div
                    key={index}
                    className={`search-fullpage-result-item search-result-${result.type}`}
                    onClick={() => handleResultClick(result)}
                    role='button'
                    tabIndex={0}
                    onKeyDown={(e) => {
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
            {query && results.length === 0 && (
              <div className='search-fullpage-no-results'>{strings.noResults || 'No results found'}</div>
            )}
          </div>
        </div>,
        portalTarget
      )}
    </>
  )
}

export default SearchBar