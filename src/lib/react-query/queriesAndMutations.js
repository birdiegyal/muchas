import {
    useQuery,
    useMutation,
    useQueryClient,
} from "@tanstack/react-query"

import { QUERY_KEYS } from "./queryKeys"
import { createUsrAc, signInAc, signOutAc } from "../appwrite/api"

// this'll create a mutation thats gonna be used by them components
export function useCreateUserAcMutation() {
    const queryclient = useQueryClient()
    return useMutation({
        mutationFn: (usr) => createUsrAc(usr),
        onSuccess: () => {
            queryclient.invalidateQueries({
                queryKey: [QUERY_KEYS.CREATE_USER_ACCOUNT],
            })
        },
    })
}

export function useSignInAcMutation() {
    const queryclient = useQueryClient()
    return useMutation({
        mutationFn: (usr) => signInAc(usr),
        onSuccess: () => {
            queryclient.invalidateQueries({
                queryKey: [QUERY_KEYS.GET_CURRENT_USER],
            })
        },
    })
}

export function useSignOutAcMutation() {
    return useMutation({
        mutationFn: signOutAc
    })
}
