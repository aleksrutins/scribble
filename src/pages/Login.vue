<script setup lang="ts">
    import { getRedirectResult, signInWithRedirect } from 'firebase/auth';
    import { useFirebaseAuth } from 'vuefire';
    import { googleAuth } from '../util/firebase';
    import { onMounted, ref } from 'vue';
    import google from '../assets/google.svg';
    import { useRouter } from 'vue-router';

    const router = useRouter()
    const auth = useFirebaseAuth()!
    const error = ref(null)

    function googleSignIn() {
        signInWithRedirect(auth, googleAuth).catch(reason => {
            error.value = reason
        })
    }

    onMounted(() => {
        getRedirectResult(auth).then(result => {
            if(result != null) router.push('/')
        }).catch(reason => {
            error.value = reason
        })
    })
</script>

<template>
    <div class="w-screen h-screen bg-stone-100 flex flex-col items-center justify-center gap-5">
        <div v-if="error" class="px-3 py-2 bg-red-300 rounded-xl">
            <strong>Error:</strong> {{ error }}
        </div>
        <h1 class="text-3xl font-bold">Log In</h1>
        <button class="btn flex flex-row items-center gap-2" @click="googleSignIn">
            <img :src="google" class="h-6 w-6">
            <p>Log In with Google</p>
        </button>
    </div>
</template>