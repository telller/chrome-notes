const BASE_URL = 'https://api.github.com'
const TOKEN = 'token fe5c46963f70e43598933ca31d7b49f4a67f16c0'

const makeRequest = async (path = '', options = {}, json = true, text, isHeaders = false) => {
  options = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: TOKEN,
    },
    mode: 'cors',
    ...options,
  }

  const response = await fetch(`${BASE_URL}${path}`, options)

  if (!response.ok) {
    // await this.processError(response, options, traceId)
    throw new Error('Req failed')
  }

  if (text) {
    return isHeaders ? { text: response.text(), headers: response.headers } : response.text()
  }
  if (json) return response.json()

  return response
}

const makePostRequest = async (path, data, responseAsJson = false) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: TOKEN,
    },
    body: JSON.stringify(data || {}),
  }
  return await makeRequest(path, options, responseAsJson)
}

const makePutRequest = async (path, data, responseAsJson = false) => {
  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: TOKEN,
    },
    body: JSON.stringify(data || {}),
  }
  return await makeRequest(path, options, responseAsJson)
}

const makePatchRequest = async (path, data, responseAsJson = false) => {
  const options = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: TOKEN,
    },
    body: JSON.stringify(data || {}),
  }
  return await makeRequest(path, options, responseAsJson)
}

const makeDeleteRequest = async (path, responseAsJson = false) => {
  const options = {
    method: 'DELETE',
    headers: {},
  }
  return await makeRequest(path, options, responseAsJson)
}

export { makeRequest, makePostRequest, makePutRequest, makePatchRequest, makeDeleteRequest }
