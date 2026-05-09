export const getLocalizedValue = (value, language) => {
  if (value == null) return value

  if (typeof value === 'object' && !Array.isArray(value)) {
    return value[language] ?? value.en ?? ''
  }

  return value
}

export const getLocalizedText = (value, language) => getLocalizedValue(value, language)
