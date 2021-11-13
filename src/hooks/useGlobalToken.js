import { useContext } from 'react'
import AuthContext from '../context/auth'

export function useGlobalToken() {
    return useContext(AuthContext).token
}