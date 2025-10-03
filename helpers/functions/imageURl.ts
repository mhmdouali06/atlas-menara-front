  const baseUrl = import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000'

  /**
   * Build the full URL for an image
   * @param filePath string | undefined - relative path from API (e.g. "screenshot-xxx.png")
   * @param position string - directory like "umrah" or "haj"
   * @returns string - full URL
   */
  


export const fileUrl = (filePath?: string, position: string = ''): string => {
    if (!filePath) return ''

    // Normalize leading/trailing slashes
    const normalizedBase = baseUrl.replace(/\/+$/, '')
    const normalizedPath = filePath.replace(/^\/+/, '')

    // If position is provided, inject it into `/uploads/images/{position}/`
    return `${normalizedBase}/uploads/images${position ? '/' + position : ''}/${normalizedPath}`
  }