<script setup lang="ts">
    import { getRedirectResult, signInWithRedirect } from 'firebase/auth';
    import { useFirebaseAuth } from 'vuefire';
    import { googleAuth } from '../util/firebase';
import { onMounted } from 'vue';

    const auth = useFirebaseAuth()!
    function googleSignIn() {
        signInWithRedirect(auth, googleAuth).catch(reason => {
            // TODO: handle error
        })
    }

    onMounted(() => {
        getRedirectResult(auth).then(result => {
            // TODO: redirect to dashboard
        }).catch(reason => {
            // TODO: handle error
        })
    })
</script>

<template>
    <h1>Log In</h1>
</template>