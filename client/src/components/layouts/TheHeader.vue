<template>
  <header class="flex justify-between items-center z-10">
    <router-link to="/">
      <img src="../../assets/images/logo.png" alt="logo" class="relative z-30" />
    </router-link>
    <nav class="hidden sm:block">
      <ul
        class="
          flex
          gap-6
          items-center
          text-dark
          lg:text-white
          font-mulish font-light
          text-base
        "
      >
        <li>
          <router-link
            to="/"
            :class="mode === 'light' ? 'text-dark lg:text-white' : 'text-dark '"
            class="active:border-2"
          >
            home
          </router-link>
        </li>
        <li>
          <router-link
            to="/about"
            :class="mode === 'light' ? 'text-dark lg:text-white' : 'text-dark'"
          >
            about
          </router-link>
        </li>
        <li>
          <router-link
            to="/how-to-use"
            :class="mode === 'light' ? 'text-dark lg:text-white' : 'text-dark'"
          >
            how to use
          </router-link>
        </li>
        <li>
          <router-link
            :class="
              mode === 'light'
                ? 'text-white lg:text-dark bg-primary lg:bg-white'
                : 'bg-primary text-white'
            "
            to="/login"
            class="flex items-center gap-1.5 font-medium px-3.5 py-1 rounded-md"
          >
            <svg
              class="fill-current"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.4141 11.9312C13.1194 11.2331 12.6916 10.5989 12.1547 10.0641C11.6195 9.52767 10.9854 9.10001 10.2875 8.80469C10.2813 8.80156 10.275 8.8 10.2688 8.79688C11.2422 8.09375 11.875 6.94844 11.875 5.65625C11.875 3.51562 10.1407 1.78125 8.00004 1.78125C5.85941 1.78125 4.12504 3.51562 4.12504 5.65625C4.12504 6.94844 4.75785 8.09375 5.73129 8.79844C5.72504 8.80156 5.71879 8.80312 5.71254 8.80625C5.01254 9.10156 4.38441 9.525 3.84535 10.0656C3.30896 10.6009 2.8813 11.235 2.58598 11.9328C2.29585 12.616 2.13939 13.3485 2.12504 14.0906C2.12462 14.1073 2.12755 14.1239 2.13364 14.1394C2.13974 14.1549 2.14888 14.1691 2.16053 14.181C2.17218 14.193 2.1861 14.2025 2.20147 14.2089C2.21684 14.2154 2.23336 14.2188 2.25004 14.2188H3.18754C3.25629 14.2188 3.31098 14.1641 3.31254 14.0969C3.34379 12.8906 3.82816 11.7609 4.68441 10.9047C5.57035 10.0188 6.74691 9.53125 8.00004 9.53125C9.25316 9.53125 10.4297 10.0188 11.3157 10.9047C12.1719 11.7609 12.6563 12.8906 12.6875 14.0969C12.6891 14.1656 12.7438 14.2188 12.8125 14.2188H13.75C13.7667 14.2188 13.7832 14.2154 13.7986 14.2089C13.814 14.2025 13.8279 14.193 13.8396 14.181C13.8512 14.1691 13.8603 14.1549 13.8664 14.1394C13.8725 14.1239 13.8755 14.1073 13.875 14.0906C13.8594 13.3438 13.7047 12.6172 13.4141 11.9312ZM8.00004 8.34375C7.28285 8.34375 6.60785 8.06406 6.10004 7.55625C5.59223 7.04844 5.31254 6.37344 5.31254 5.65625C5.31254 4.93906 5.59223 4.26406 6.10004 3.75625C6.60785 3.24844 7.28285 2.96875 8.00004 2.96875C8.71723 2.96875 9.39223 3.24844 9.90004 3.75625C10.4079 4.26406 10.6875 4.93906 10.6875 5.65625C10.6875 6.37344 10.4079 7.04844 9.90004 7.55625C9.39223 8.06406 8.71723 8.34375 8.00004 8.34375Z"
              />
            </svg>

            login
          </router-link>
        </li>
      </ul>
    </nav>
    <div class="block sm:hidden relative z-30" :class="'hamburger'">
      <span class="hamburger__box" @click="toggleMenu">
        <span
          class="hamburger__bar"
          :class="isActive ? 'hamburger__bar--active' : ''"
        ></span>
      </span>
    </div>
    <div
      :class="isActive ? 'block absolute' : 'hidden'"
      class="
        absolute
        top-0
        left-0
        z-20
        h-full
        overflow-hidden
        w-full
        bg-white
        flex flex-col
        items-center
      "
    >
      <div>
        <nav>
          <ul
            class="
              flex flex-col
              gap-10
              items-center
              mt-64
              text-2xl
              font-mulish font-semibold
            "
          >
            <li @click="toggleMenu"><router-link to="/">home</router-link></li>
            <li @click="toggleMenu">
              <router-link to="/about">about</router-link>
            </li>
            <li @click="toggleMenu">
              <router-link to="/how-to-use">how to use</router-link>
            </li>
            <li @click="toggleMenu">
              <router-link
                to="/login"
                class="
                  flex
                  items-center
                  gap-3
                  bg-primary
                  text-white
                  px-16
                  py-2
                  rounded-3xl
                "
              >
                <svg
                  class="fill-current"
                  width="24"
                  height="24"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.4141 11.9312C13.1194 11.2331 12.6916 10.5989 12.1547 10.0641C11.6195 9.52767 10.9854 9.10001 10.2875 8.80469C10.2813 8.80156 10.275 8.8 10.2688 8.79688C11.2422 8.09375 11.875 6.94844 11.875 5.65625C11.875 3.51562 10.1407 1.78125 8.00004 1.78125C5.85941 1.78125 4.12504 3.51562 4.12504 5.65625C4.12504 6.94844 4.75785 8.09375 5.73129 8.79844C5.72504 8.80156 5.71879 8.80312 5.71254 8.80625C5.01254 9.10156 4.38441 9.525 3.84535 10.0656C3.30896 10.6009 2.8813 11.235 2.58598 11.9328C2.29585 12.616 2.13939 13.3485 2.12504 14.0906C2.12462 14.1073 2.12755 14.1239 2.13364 14.1394C2.13974 14.1549 2.14888 14.1691 2.16053 14.181C2.17218 14.193 2.1861 14.2025 2.20147 14.2089C2.21684 14.2154 2.23336 14.2188 2.25004 14.2188H3.18754C3.25629 14.2188 3.31098 14.1641 3.31254 14.0969C3.34379 12.8906 3.82816 11.7609 4.68441 10.9047C5.57035 10.0188 6.74691 9.53125 8.00004 9.53125C9.25316 9.53125 10.4297 10.0188 11.3157 10.9047C12.1719 11.7609 12.6563 12.8906 12.6875 14.0969C12.6891 14.1656 12.7438 14.2188 12.8125 14.2188H13.75C13.7667 14.2188 13.7832 14.2154 13.7986 14.2089C13.814 14.2025 13.8279 14.193 13.8396 14.181C13.8512 14.1691 13.8603 14.1549 13.8664 14.1394C13.8725 14.1239 13.8755 14.1073 13.875 14.0906C13.8594 13.3438 13.7047 12.6172 13.4141 11.9312ZM8.00004 8.34375C7.28285 8.34375 6.60785 8.06406 6.10004 7.55625C5.59223 7.04844 5.31254 6.37344 5.31254 5.65625C5.31254 4.93906 5.59223 4.26406 6.10004 3.75625C6.60785 3.24844 7.28285 2.96875 8.00004 2.96875C8.71723 2.96875 9.39223 3.24844 9.90004 3.75625C10.4079 4.26406 10.6875 4.93906 10.6875 5.65625C10.6875 6.37344 10.4079 7.04844 9.90004 7.55625C9.39223 8.06406 8.71723 8.34375 8.00004 8.34375Z"
                  /></svg
                >login</router-link
              >
            </li>
          </ul>
        </nav>
      </div>
      <div class="flex justify-center mt-44 gap-4">
        <svg
          class="cursor-pointer fill-current text-dark hover:text-gray"
          width="20"
          height="20"
          viewBox="0 0 25 25"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24.6282 5.14272C23.7584 5.52813 22.824 5.78855 21.8417 5.90626C22.8552 5.29979 23.6135 4.34529 23.975 3.22084C23.0228 3.78646 21.9806 4.18459 20.8938 4.39793C20.1629 3.61758 19.1949 3.10035 18.14 2.92654C17.085 2.75274 16.0022 2.93208 15.0597 3.43673C14.1171 3.94138 13.3675 4.74309 12.9273 5.71741C12.487 6.69172 12.3808 7.78412 12.625 8.82501C10.6955 8.72813 8.80798 8.22662 7.08485 7.35304C5.36172 6.47945 3.84153 5.2533 2.62295 3.75418C2.20628 4.47293 1.9667 5.30626 1.9667 6.19376C1.96623 6.99271 2.16298 7.77943 2.53949 8.48411C2.916 9.18878 3.46062 9.78963 4.12503 10.2333C3.35449 10.2088 2.60094 10.0006 1.92712 9.62605V9.68855C1.92704 10.8091 2.31465 11.8952 3.02418 12.7625C3.73371 13.6298 4.72146 14.2249 5.81982 14.4469C5.10502 14.6403 4.35559 14.6688 3.62816 14.5302C3.93805 15.4944 4.54169 16.3375 5.35458 16.9416C6.16747 17.5457 7.1489 17.8804 8.16149 17.899C6.44257 19.2484 4.31971 19.9803 2.13441 19.9771C1.7473 19.9772 1.36053 19.9546 0.976074 19.9094C3.19428 21.3356 5.77643 22.0925 8.41357 22.0896C17.3407 22.0896 22.2209 14.6958 22.2209 8.28334C22.2209 8.07501 22.2157 7.86459 22.2063 7.65626C23.1555 6.96977 23.9749 6.11969 24.6261 5.14584L24.6282 5.14272Z"
          />
        </svg>
        <svg
          class="cursor-pointer fill-current text-dark hover:text-gray"
          width="20"
          height="20"
          viewBox="0 0 25 25"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.77612 1.11041C8.998 1.05416 9.38758 1.04166 12.5001 1.04166C15.6126 1.04166 16.0022 1.0552 17.223 1.11041C18.4438 1.16561 19.2772 1.36041 20.0063 1.6427C20.7699 1.93124 21.4626 2.38228 22.0355 2.96561C22.6188 3.53749 23.0688 4.22916 23.3563 4.99374C23.6397 5.72291 23.8334 6.55624 23.8897 7.77499C23.9459 8.99895 23.9584 9.38853 23.9584 12.5C23.9584 15.6125 23.9449 16.0021 23.8897 17.2239C23.8345 18.4427 23.6397 19.276 23.3563 20.0052C23.0688 20.7699 22.6181 21.4627 22.0355 22.0354C21.4626 22.6187 20.7699 23.0687 20.0063 23.3562C19.2772 23.6396 18.4438 23.8333 17.2251 23.8896C16.0022 23.9458 15.6126 23.9583 12.5001 23.9583C9.38758 23.9583 8.998 23.9448 7.77612 23.8896C6.55737 23.8344 5.72404 23.6396 4.99487 23.3562C4.23021 23.0687 3.53739 22.618 2.96466 22.0354C2.38173 21.4632 1.93062 20.7707 1.64279 20.0062C1.3605 19.2771 1.16675 18.4437 1.1105 17.225C1.05425 16.001 1.04175 15.6114 1.04175 12.5C1.04175 9.38749 1.05529 8.99791 1.1105 7.77707C1.16571 6.55624 1.3605 5.72291 1.64279 4.99374C1.93104 4.22924 2.3825 3.53677 2.96571 2.96457C3.53762 2.38176 4.22974 1.93066 4.99383 1.6427C5.723 1.36041 6.55633 1.16666 7.77508 1.11041H7.77612ZM17.1303 3.17291C15.922 3.1177 15.5595 3.10624 12.5001 3.10624C9.44071 3.10624 9.07821 3.1177 7.86987 3.17291C6.75216 3.22395 6.14591 3.41041 5.74175 3.5677C5.20737 3.77603 4.82508 4.02291 4.42404 4.42395C4.04388 4.79379 3.75131 5.24403 3.56779 5.74166C3.4105 6.14582 3.22404 6.75207 3.173 7.86978C3.11779 9.07811 3.10633 9.44061 3.10633 12.5C3.10633 15.5594 3.11779 15.9219 3.173 17.1302C3.22404 18.2479 3.4105 18.8542 3.56779 19.2583C3.75112 19.7552 4.04383 20.2062 4.42404 20.576C4.79383 20.9562 5.24487 21.2489 5.74175 21.4323C6.14591 21.5896 6.75216 21.776 7.86987 21.8271C9.07821 21.8823 9.43966 21.8937 12.5001 21.8937C15.5605 21.8937 15.922 21.8823 17.1303 21.8271C18.248 21.776 18.8542 21.5896 19.2584 21.4323C19.7928 21.2239 20.1751 20.9771 20.5761 20.576C20.9563 20.2062 21.249 19.7552 21.4324 19.2583C21.5897 18.8542 21.7761 18.2479 21.8272 17.1302C21.8824 15.9219 21.8938 15.5594 21.8938 12.5C21.8938 9.44061 21.8824 9.07811 21.8272 7.86978C21.7761 6.75207 21.5897 6.14582 21.4324 5.74166C21.224 5.20728 20.9772 4.82499 20.5761 4.42395C20.2063 4.04381 19.756 3.75125 19.2584 3.5677C18.8542 3.41041 18.248 3.22395 17.1303 3.17291ZM11.0365 16.0323C11.8539 16.3725 12.764 16.4184 13.6115 16.1622C14.4589 15.906 15.1911 15.3634 15.683 14.6273C16.1749 13.8912 16.396 13.0071 16.3085 12.1261C16.221 11.2451 15.8303 10.4218 15.2032 9.79686C14.8035 9.39736 14.3201 9.09146 13.7879 8.90118C13.2558 8.71091 12.688 8.64099 12.1256 8.69646C11.5632 8.75194 11.02 8.93142 10.5353 9.222C10.0506 9.51258 9.63627 9.90701 9.32227 10.3769C9.00827 10.8468 8.80236 11.3805 8.71937 11.9395C8.63638 12.4986 8.67836 13.069 8.84231 13.6099C9.00626 14.1508 9.28808 14.6485 9.6675 15.0674C10.0469 15.4863 10.5145 15.8158 11.0365 16.0323ZM8.3355 8.33541C8.8824 7.78851 9.53166 7.35468 10.2462 7.0587C10.9608 6.76272 11.7266 6.61038 12.5001 6.61038C13.2735 6.61038 14.0394 6.76272 14.7539 7.0587C15.4685 7.35468 16.1178 7.78851 16.6647 8.33541C17.2116 8.88231 17.6454 9.53157 17.9414 10.2461C18.2374 10.9607 18.3897 11.7266 18.3897 12.5C18.3897 13.2734 18.2374 14.0393 17.9414 14.7538C17.6454 15.4684 17.2116 16.1177 16.6647 16.6646C15.5601 17.7691 14.0621 18.3896 12.5001 18.3896C10.9381 18.3896 9.44001 17.7691 8.3355 16.6646C7.23098 15.5601 6.61047 14.062 6.61047 12.5C6.61047 10.938 7.23098 9.43992 8.3355 8.33541ZM19.6959 7.48749C19.8314 7.35964 19.9399 7.20591 20.015 7.03538C20.09 6.86485 20.1301 6.681 20.1328 6.49471C20.1355 6.30842 20.1008 6.12348 20.0308 5.95083C19.9608 5.77819 19.8568 5.62136 19.725 5.48961C19.5933 5.35787 19.4365 5.2539 19.2638 5.18386C19.0912 5.11382 18.9062 5.07913 18.7199 5.08185C18.5337 5.08456 18.3498 5.12463 18.1793 5.19967C18.0087 5.27472 17.855 5.38321 17.7272 5.51874C17.4785 5.78231 17.3424 6.13241 17.3477 6.49471C17.353 6.85701 17.4992 7.20299 17.7555 7.4592C18.0117 7.71541 18.3576 7.86169 18.7199 7.86697C19.0822 7.87225 19.4323 7.73612 19.6959 7.48749Z"
          />
        </svg>
        <svg
          class="cursor-pointer fill-current text-dark hover:text-gray"
          width="20"
          height="20"
          viewBox="0 0 25 25"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 12.5698C0 18.7844 4.51354 23.9521 10.4167 25V15.9719H7.29167V12.5H10.4167V9.72188C10.4167 6.59687 12.4302 4.86146 15.2781 4.86146C16.1802 4.86146 17.1531 5 18.0552 5.13854V8.33333H16.4583C14.9302 8.33333 14.5833 9.09687 14.5833 10.0698V12.5H17.9167L17.3615 15.9719H14.5833V25C20.4865 23.9521 25 18.7854 25 12.5698C25 5.65625 19.375 0 12.5 0C5.625 0 0 5.65625 0 12.5698Z"
          />
        </svg>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  props: {
    mode: {
      type: String,
      required: true,
    },
  },
  setup() {
    let isActive = ref(false);

    const toggleMenu = () => {
      isActive.value = !isActive.value;
    };

    return { isActive, toggleMenu };
  },
});
</script>

<style lang="scss" scoped>
.router-link-active {
  font-weight: 600;
}

@mixin hamburger-bars {
  height: 0.25rem;
  position: absolute;
  border-radius: 5rem;
}

.hamburger {
  &__box {
    width: 3rem;
    height: 1.1rem;
    display: inline-block;
    position: relative;
    z-index: 10;
    cursor: pointer;
  }

  &__bar {
    width: 100%;
    background-color: #232321;

    &::before,
    &::after {
      @include hamburger-bars;
      background: inherit;
      content: '';
      right: 0;
      transition: all 0.3s ease-in-out;
    }

    &::after {
      top: 0.6rem;
      width: 2.2rem;
    }

    &::before {
      width: 100%;
    }

    &--active {
      transition: transform 0.3s ease-in-out;

      &::before {
        transform: translatey(0.3rem) rotate(45deg);
      }

      &::after {
        width: 100%;
        transform: translatey(-0.3rem) rotate(-45deg);
      }
    }
  }
}
.menu {
  background: #fff;
  width: 30%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 100%;
  transition: all 0.5s;
  overflow: hidden;
  z-index: 5;
  opacity: 0;
  @media screen and (max-width: 70em) {
    width: 45%;
  }
  @media screen and (max-width: 36em) {
    width: 100%;
    border-radius: 2.5rem;
  }
  &--active {
    opacity: 1;
    transform: translateX(-100%);
  }
  &__nav {
    padding: 3rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5rem;
  }
  &__list {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.5rem;
    &:first-child {
      gap: 1.5rem;
      display: none;
      @media screen and (max-width: 36em) {
        display: flex;
      }
    }
  }
  &__socials {
    display: flex;
    gap: 1rem;
    justify-content: center;
    svg {
      color: var(--color-dark);
      width: 2rem;
      height: 2rem;
      transition: all 0.3s;
      &:hover {
        opacity: 0.5;
      }
    }
  }
  &__line {
    background: #e2e2e2;
    width: 100;
    height: 1px;
    border-radius: 1rem;
    display: none;
    @media screen and (max-width: 36em) {
      display: block;
    }
  }
  a,
  &__location-link {
    text-transform: uppercase;
    color: var(--color-dark);
    cursor: pointer;
  }
  a {
    font: 300 1.6rem 'Nunito', sans-serif;
    text-decoration: none;
    &:hover {
      font-weight: 600;
    }
  }
  .active {
    font-weight: 600;
  }
  &__location-link {
    font: 600 1.3rem 'Nunito', sans-serif;
    transition: all 0.3s;
    &:hover {
      opacity: 0.5;
    }
  }
}
</style>
