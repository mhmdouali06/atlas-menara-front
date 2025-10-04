export const formatDuration = (startsAt: string | Date, endsAt: string | Date) => {
  if (!startsAt || !endsAt) return '—'
  const start = new Date(startsAt)
  const end = new Date(endsAt)
  if (isNaN(start.getTime()) || isNaN(end.getTime())) return '—'

  const diffMs = end.getTime() - start.getTime()
  if (diffMs <= 0) return '—'

  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60))

  // If you only care about days:
  if (days > 0 && hours === 0 && minutes === 0) {
    return `${days} día${days !== 1 ? 's' : ''}`
  }

  // Otherwise show detail
  const parts = []
  if (days) parts.push(`${days} día${days !== 1 ? 's' : ''}`)
//   if (hours) parts.push(`${hours}h`)
//   if (minutes) parts.push(`${minutes}m`)
  return parts.join(' ')
}
export const formatDateEs = (dateInput: string | Date) => {
  if (!dateInput) return '—'
  const date = new Date(dateInput)
  if (isNaN(date.getTime())) return '—'

  return new Intl.DateTimeFormat('es-ES', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  }).format(date)
}
export const formatDateTextEs = (dateInput: string | Date) => {
  if (!dateInput) return '—'
  const date = new Date(dateInput)
  if (isNaN(date.getTime())) return '—'

  return new Intl.DateTimeFormat('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date)
}
