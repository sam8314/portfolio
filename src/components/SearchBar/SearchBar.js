import { useState, useEffect, useRef, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { createPortal } from 'react-dom'
import SearchIcon from '@material-ui/icons/Search'
import CloseIcon from '@material-ui/icons/Close'
import { projects, skills } from '../../portfolio'
import { useLanguage } from '../../contexts/language'
import { ThemeContext } from '../../contexts/theme'
import { getLocalizedValue } from '../../utils/i18n'
import './SearchBar.css'

const SearchBar = () => {
  const { language, strings } = useLanguage()
  const [{ themeName }] = useContext(ThemeContext)
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [isFullPage, setIsFullPage] = useState(false)
  const searchBarRef = useRef(null)
  const history = useHistory()

  useEffect(() => {
    if (query.trim() === '') {
      setResults([])
      setIsFullPage(false)
      return
    }

    const lowerQuery = query.toLowerCase()

    // Search through projects
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

    // Search through skills
    const skillResults = skills
      .filter((s) => s.toLowerCase().includes(lowerQuery))
      .map((s) => ({
        type: 'skill',
        id: s,
        title: s,
      }))

    setResults([...projectResults, ...skillResults].slice(0, 8)) // Limit to 8 results
    setIsFullPage(true)
  }, [query])

  useEffect(() => {
    if (isFullPage) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isFullPage])

  const handleResultClick = (result) => {
    if (result.type === 'project') {
      history.push(`/project/${result.id}`)
      setQuery('')
      setResults([])
      setIsFullPage(false)
    } else if (result.type === 'skill') {
      history.push('/#skills')
      setQuery('')
      setResults([])
      setIsFullPage(false)
    }
  }

  const handleClear = () => {
    setQuery('')
    setResults([])
    setIsFullPage(false)
  }

  const handleSearchIconClick = () => {
    setIsFullPage(true)
  }

  const portalTarget = typeof document !== 'undefined' ? document.querySelector('.app') : null
  const searchBarClass = `search-bar search-ui search-ui--${themeName}`
  const searchOverlayClass = `search-fullpage-overlay search-ui search-ui--${themeName}`
  const searchContentClass = `search-fullpage-content search-ui search-ui--${themeName}`

  return (
    <>
      {!isFullPage && (
        <div className={searchBarClass} ref={searchBarRef}>
          <div className='search-input-wrapper'>
            <SearchIcon className='search-icon' onClick={handleSearchIconClick} style={{ cursor: 'pointer' }} />
            <input
              type='text'
              placeholder={strings.searchPlaceholder}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
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
        </div>
      )}

      {isFullPage && portalTarget && createPortal(
        <div className={searchOverlayClass}>
          <div className={searchContentClass}>
            <div className='search-fullpage-bar'>
              <SearchIcon className='search-fullpage-icon' />
              <input
                type='text'
                placeholder={strings.searchPlaceholder}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className='search-fullpage-input'
                autoFocus
              />
              <button
                onClick={() => setIsFullPage(false)}
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
            {query && results.length === 0 && (
              <div className='search-fullpage-no-results'>{strings.noResults}</div>
            )}
          </div>
        </div>,
        portalTarget
      )}
    </>
  )
}

export default SearchBar
