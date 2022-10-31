const baseUrl = 'http://localhost:3001/api/v1/reservations';

function checkError(response) {
  if (!response.ok) {
    throw new Error(`${response.status}`)
  }
  return response.json()
}

export const getReservations = () => {
  return fetch(`${baseUrl}`)
    .then(response => checkError(response))
}

export const postReservation = (reservation) => {
  return fetch(`${baseUrl}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(reservation)
  })
    .then(response => checkError(response))
}
