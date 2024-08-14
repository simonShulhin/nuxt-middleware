<script setup>
definePageMeta({
  middleware: () => {
    const isAuthinticated = useCookie("is-authenticated");

    if (!isAuthinticated.value) {
      return navigateTo(`/login`);
    }
  },
});

const router = useRouter();
const isAuthinticated = useCookie("is-authenticated");
const currentUser = useCookie("current-user");

function logout() {
  isAuthinticated.value = false;
  currentUser.value = "";

  router.push("/");
}
</script>

<template>
  <article class="grid">
    <div>
      <hgroup>
        <h1>Logout</h1>
        <p>This is a simple logout page.</p>
        <button @click="logout" class="secondary">Logout</button>
      </hgroup>
    </div>
  </article>
</template>

<style lang="scss" scoped></style>
