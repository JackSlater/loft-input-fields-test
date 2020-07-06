<template>
    <v-app id="inspire">
        <v-main>
            <v-container
                class="fill-height"
                fluid
            >
                <EditUserPage />
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
import EditUserPage from './components/EditUserPage';

export default {
    name: 'App',

    components: {
        EditUserPage,
    },
};
</script>
