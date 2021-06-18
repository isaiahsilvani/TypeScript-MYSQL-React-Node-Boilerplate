import axios, { AxiosResponse } from 'axios'

const baseurl = 'http://localhost:1337/users/'

export const loginRequest = async (username:string, password:string) => {
  // get the name, return the amount if it's in the database
  try {
    console.log('state being passed... ', username, password)
    const payload: AxiosResponse = await axios.post(
      baseurl + 'login',
      {
        data: {
          username,
          password
        }
      }
    )
    console.log(payload)
    return payload
  } catch (error) {
    throw new Error(error)
  }
}