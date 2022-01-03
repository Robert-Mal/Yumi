<template>
  <div class="flex items-center h-screen text-dark px-7 sm:px-0">
    <div class="flex flex-1 flex-col max-w-sm mx-auto gap-12">
      <img src="../../assets/images/logo.png" alt="logo" class="self-center" />
      <div class="text-center">
        <p class="font-light font-mulish">hello</p>
        <p class="font-semibold font-mulish text-2xl">log in</p>
      </div>
      <div>
        <form action="#" class="flex flex-col gap-7">
          <div class="flex flex-col gap-1">
            <label for="email" class="font-mulish">e-mail</label>
            <input
              v-model="email"
              type="text"
              name="email"
              id="email"
              class="
                border border-grayLight
                rounded-md
                w-full
                placeholder-grayMedium
                font-mulish font-light
                px-4
                py-3
              "
              placeholder="enter your email address"
            />
          </div>
          <div class="grid grid-cols-2 gap-1">
            <label for="password" class="font-mulish">password</label>
            <input
              v-model="password"
              type="text"
              name="password"
              id="password"
              placeholder="enter your password"
              class="
                placeholder-grayMedium
                font-mulish font-light
                border border-grayLight
                rounded-md
                w-full
                row-start-3
                col-span-2
                px-4
                py-3
              "
            />
            <p class="place-self-end text-primary">can't log in?</p>
          </div>
          <div class="flex items-center">
            <input
              type="radio"
              name="staylogged"
              id="staylogged"
              class="border-primary"
            />
            <label for="staylogged" class="ml-2 font-mulish font-thin"
              >remember me</label
            >
          </div>
          <div class="flex flex-col gap-4">
            <button
              class="
                flex
                items-center
                justify-center
                w-full
                gap-2
                px-8
                py-3
                rounded-3xl
                sm:rounded-md
                bg-primary
                hover:bg-primaryDark
                text-white
                font-mulish font-medium
              "
              @click.prevent="triggerLogin"
            >
              log in
            </button>
            <router-link
              to="/signin"
              class="
                flex
                items-center
                justify-center
                gap-2
                w-full
                px-8
                py-3
                rounded-3xl
                sm:rounded-md
                border-2 border-dark
                text-dark
                hover:bg-dark hover:text-white
                font-mulish font-medium
              "
            >
              create free account
            </router-link>
          </div>
          <div
            class="
              text-grayMedium
              font-thin font-mulish
              text-sm
              mt-12
              flex
              gap-2
              items-center
              justify-center
            "
          >
            <p>privacy policy</p>
            <span class="bg-grayMedium w-1 h-1 rounded-3xl"></span>
            <p>terms of service</p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import UserService from '../../services/users.service';
import { useStore } from 'vuex';
import axios from 'axios';
import { useRouter } from 'vue-router';

export default defineComponent({
  setup() {
    const email = ref('');
    const password = ref('');

    const store = useStore()
    const router = useRouter();

    const user = {
      email,
      password,
    }

    const triggerLogin = (): void => {

    // axios.post("localhost:5000/sigin", {email, password})
    //   .then(response => {console.log('succesful login'); store.dispatch('setUserId', response.data.user.userId); router.push(`/dashboard`);})
    //   .catch(error => console.log(error))
    axios({
      method: "POST",
      data: {
        username: email.value,
        password: password.value,
      },
      url: "http://localhost:5000/signin",
    }).then((res) => {
      if (res.data != "No User Exists") {
        store.commit('setUser', res.data);
        router.push("/dashboard");
      } else {
        // toast user not found
        console.log('user not found')
      }
    });

    // UserService.login(user).then((response) => {
    //   console.log(response.data)
    //   store.dispatch('setUserId', response.data.user.userId);
    //   console.log(response);
    //   }).catch((error) => {
    //     console.log(error);
    //   })
    };
    

    return { email, password, triggerLogin };
  },
});
</script>
