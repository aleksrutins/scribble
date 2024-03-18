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
    <div class="w-screen h-screen bg-stone-100 flex flex-col items-center justify-center gap-5">
        <h1 class="text-3xl font-bold">Log In</h1>
        <button class="btn btn-block" @click="googleSignIn">Log In with Google</button>
    </div>
</template>