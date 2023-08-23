import React from 'react'
import { Container } from'react-bootstrap'

const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=b0c399171bd74b509ee6dc50418cc4c0&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

export default function Login() {
  return (
    <Container>
<a className="btn btn-primary d-flex flex-center justify-content-center" href={AUTH_URL}>Login with Spotify</a>

    </Container>
  )
}
