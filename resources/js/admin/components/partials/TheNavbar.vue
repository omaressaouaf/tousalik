<template>
  <!-- Topbar -->
  <nav
    class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow"
  >
    <!-- Sidebar Toggle (Topbar) -->
    <button
      id="sidebarToggleTop"
      class="btn btn-link d-md-none rounded-circle mr-3"
    >
      <i class="fa fa-bars"></i>
    </button>
    <!-- Search Form -->
    <search-form />

    <!-- Topbar Navbar -->
    <ul class="navbar-nav ml-auto">
    
      <notifications-list />

      <div class="topbar-divider d-none d-sm-block"></div>

      <!-- Nav Item - User Information -->
      <li class="nav-item dropdown no-arrow">
        <a
          class="nav-link dropdown-toggle"
          href="#"
          id="userDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <span class="mr-2 d-none d-lg-inline text-gray-600 small text-capitalize">{{
            authUser.name
          }}</span>
          <img class="rounded-circle avatar" :src="authUser.avatar" />
        </a>
        <!-- Dropdown - User Information -->
        <div
          class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
          aria-labelledby="userDropdown"
        >
          <router-link class="dropdown-item" :to="{ name: 'profile' }">
            <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
            Profil
          </router-link>
          <router-link class="dropdown-item" :to="{ name: 'profile.settings' }">
            <i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
            Paramètres
          </router-link>

          <div class="dropdown-divider"></div>
          <a
            class="dropdown-item"
            href="#"
            onclick="event.preventDefault();
             document.getElementById('logout-form').submit();"
          >
            <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
            Se déconnecter
          </a>
        </div>
      </li>
    </ul>
  </nav>
  <!-- End of Topbar -->
</template>

<script>
import { mapGetters } from "vuex";
import NotificationsList from "../notifications/NotificationsList";
import SearchForm from "./SearchForm.vue";
export default {
  components: { NotificationsList , SearchForm },
  computed: {
    ...mapGetters("auth", ["authUser"]),
  },
};
</script>

<style scoped>
.router-link-active {
  color: black !important;
  background-color: inherit;
}
</style>
