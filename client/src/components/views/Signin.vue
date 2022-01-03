<template>
  <div class="flex items-center h-screen text-dark px-7 sm:px-0">
    <div class="flex flex-1 flex-col max-w-sm mx-auto gap-12">
      <img src="../../assets/images/logo.png" alt="logo" class="self-center" />
      <div class="text-center">
        <p class="font-light font-mulish">hello</p>
        <p class="font-semibold font-mulish text-2xl">sign in</p>
      </div>
      <div>
        <form action="#" class="flex flex-col gap-7">
          <div class="flex flex-col gap-1">
            <label for="fullname" class="font-mulish">full name</label>
            <input
              v-model="fullName"
              type="text"
              name="fullname"
              id="fullname"
              class="
                border border-grayLight
                rounded-md
                w-full
                placeholder-grayMedium
                font-mulish font-light
                px-4
                py-3
              "
              placeholder="enter your full name"
            />
          </div>
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
              @click.prevent="createAccount"
            >
              sign in
            </button>
            <div
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
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.1745 8.36797H17.5033V8.33338H10.0033V11.6667H14.7128C14.0258 13.6071 12.1795 15.0001 10.0033 15.0001C7.24201 15.0001 5.00326 12.7613 5.00326 10.0001C5.00326 7.2388 7.24201 5.00005 10.0033 5.00005C11.2778 5.00005 12.4374 5.48088 13.3203 6.2663L15.6774 3.90922C14.1891 2.52213 12.1983 1.66672 10.0033 1.66672C5.40117 1.66672 1.66992 5.39797 1.66992 10.0001C1.66992 14.6021 5.40117 18.3334 10.0033 18.3334C14.6053 18.3334 18.3366 14.6021 18.3366 10.0001C18.3366 9.4413 18.2791 8.89588 18.1745 8.36797Z"
                  fill="#FFC107"
                />
                <path
                  d="M2.62695 6.1213L5.36487 8.12922C6.1057 6.29505 7.89987 5.00005 9.99945 5.00005C11.274 5.00005 12.4336 5.48088 13.3165 6.2663L15.6736 3.90922C14.1853 2.52213 12.1945 1.66672 9.99945 1.66672C6.79862 1.66672 4.02279 3.4738 2.62695 6.1213Z"
                  fill="#FF3D00"
                />
                <path
                  d="M9.99687 18.3333C12.1494 18.3333 14.1052 17.5096 15.584 16.17L13.0048 13.9875C12.14 14.6451 11.0833 15.0008 9.99687 15C7.82937 15 5.98896 13.6179 5.29562 11.6891L2.57812 13.7829C3.95729 16.4816 6.75812 18.3333 9.99687 18.3333Z"
                  fill="#4CAF50"
                />
                <path
                  d="M18.1713 8.36787H17.5V8.33328H10V11.6666H14.7096C14.3809 12.5901 13.7889 13.3971 13.0067 13.9879L13.0079 13.987L15.5871 16.1695C15.4046 16.3354 18.3333 14.1666 18.3333 9.99995C18.3333 9.4412 18.2758 8.89578 18.1713 8.36787Z"
                  fill="#1976D2"
                />
              </svg>

              continue with Google
            </div>
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
import { useRouter } from 'vue-router';
import UserService from '../../services/users.service';
import { useToast } from "vue-toastification";


export default defineComponent({
  setup() {
    const router = useRouter();

    const toast = useToast();

    const fullName = ref('');
    const email = ref('');
    const password = ref('');

    const createAccount = (): void => {

    const user = {
      email: email.value,
      fullName: fullName.value,
      password: password.value ,
    }

    UserService.register(user).then(res => {
      if (res.data != "User Already Exists") {
        router.push('/login')
      } else {
        toast.clear();
        toast.error("User Already Exists", {
          timeout: 2000
        });
      }
    }).catch(error => {
      toast.clear();
        toast.error(error, {
          timeout: 2000
        });
    })
    };

    return { fullName, email, password, createAccount };
  },
});
</script>
