import axios, { AxiosResponse } from 'axios'

const baseurl = 'http://localhost:1337'

export const postRequest = async (state: string) => {
  // get the name, return the amount if it's in the database
  try {
    console.log('state being passed... ', state)
    const payload: AxiosResponse = await axios.post(
      baseurl,
      {
        data: state
      }
    )
    return payload
  } catch (error) {
    throw new Error(error)
  }
}

export const getRequest = async () => {
  // get the name, return the amount if it's in the database
  try {
    const payload: AxiosResponse = await axios.get(baseurl)
    return payload
  } catch (error) {
    throw new Error(error)
  }
}