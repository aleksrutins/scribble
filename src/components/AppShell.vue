<script setup lang="ts">
    import { watch } from 'vue';
    import { useRouter } from 'vue-router';
    import { useCurrentUser } from 'vuefire';

    const router = useRouter()
    const user = useCurrentUser()

    watch(user, user => {
        if(!user) router.push('/login')
    })
</script>

<template>
    Logged in as {{ user?.displayName }}
</template>