let baseUrl = 'https://sqa-be.herokuapp.com'

const createFetcher = async (url, options) => {
  const urler = baseUrl + url
  const response = await fetch(urler, {
    headers: {
      //'Authorization': 'Bearer ' + getToken(),
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    ...options,
  })
  const body = await response.json()

  if (!response.ok) {
    const error = new Error(body.error.message)

    error.info = body
    error.status = response.status

    throw error
  }

  return body
}

export const getter = createFetcher

export const poster = (url, params) =>
  createFetcher(url, { method: 'POST', body: JSON.stringify(params) })

export const patcher = (url, params) =>
  createFetcher(url, { method: 'PATCH', body: JSON.stringify(params) })
