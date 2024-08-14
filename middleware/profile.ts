export default defineNuxtRouteMiddleware((to) => {
  const isAuthinticated = useCookie("is-authenticated");
  const currentUser = useCookie("current-user");
  console.log('wereh');
  
  if (!isAuthinticated.value) {
    console.log("here");

    return navigateTo("/login");
  } else if (to.params.username !== currentUser.value) {
    console.log("and here");

    return navigateTo("/profile/" + currentUser.value);
  }
});
