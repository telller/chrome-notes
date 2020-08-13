import { makeRequest, makePatchRequest } from './baseService'

export const getGist = () => {
  return makeRequest(`/gists/05981ad2074325e610f2000dccedfde7`)
}

export const updateGist = params => {
  return makePatchRequest(`/gists/05981ad2074325e610f2000dccedfde7`, params)
}
