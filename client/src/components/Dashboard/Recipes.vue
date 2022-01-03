<template>
  <div class="wrapper font-mulish">
    <div class="top-box">
      <p>your recipes</p>
      <div @click="addRecipe" class="btn">
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.5 7.5H2.5M7.5 12.5V7.5V12.5ZM7.5 7.5V2.5V7.5ZM7.5 7.5H12.5H7.5Z"
            stroke="white"
            stroke-width="1.33333"
            stroke-linecap="round"
          />
        </svg>
      </div>
    </div>
    <div class="recipes__cards font-mulish">
      <div
        v-for="recipe in recipes"
        class="card"
        :key="recipe._id"
        @click="openRecipe(recipe._id)"
      >
        <img :src="recipe.imageURL" alt="recipe img" class="card__img" />
        <p class="card__title">{{ recipe.name }}</p>
        <p class="card__star">
          <svg
            v-if="recipe.favourite"
            @click.stop="toggleFavourites(recipe._id, recipe.favourite)"
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.0074 6.16407L11.0484 5.44337L8.83161 0.949226C8.77106 0.826179 8.67145 0.72657 8.54841 0.666023C8.23981 0.513679 7.86481 0.640632 7.71052 0.949226L5.49372 5.44337L0.534735 6.16407C0.398016 6.1836 0.273016 6.24805 0.177313 6.34571C0.0616134 6.46463 -0.0021424 6.62462 5.49725e-05 6.79052C0.00225234 6.95642 0.0702231 7.11466 0.189032 7.23048L3.77692 10.7285L2.92927 15.668C2.90939 15.7829 2.9221 15.9011 2.96597 16.0091C3.00984 16.1171 3.0831 16.2107 3.17745 16.2793C3.2718 16.3478 3.38346 16.3885 3.49977 16.3968C3.61609 16.4051 3.7324 16.3806 3.83552 16.3262L8.27106 13.9941L12.7066 16.3262C12.8277 16.3906 12.9683 16.4121 13.1031 16.3887C13.4429 16.3301 13.6715 16.0078 13.6129 15.668L12.7652 10.7285L16.3531 7.23048C16.4507 7.13477 16.5152 7.00977 16.5347 6.87305C16.5875 6.53126 16.3492 6.21485 16.0074 6.16407Z"
              fill="#FBD259"
            />
          </svg>
          <svg
            v-else
            width="20"
            @click.stop="toggleFavourites(recipe._id, recipe.favourite)"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.98986 2.58581C9.40236 1.74915 10.5949 1.74915 11.0074 2.58581L12.9724 6.56665L17.3665 7.20498C18.289 7.33915 18.6574 8.47331 17.9899 9.12415L14.8099 12.2241L15.5607 16.5991C15.719 17.5183 14.754 18.2191 13.9282 17.7858L9.9982 15.7191L6.06903 17.7858C5.24403 18.2191 4.27903 17.5191 4.4357 16.5991L5.18653 12.2241L2.00736 9.12415C1.33986 8.47415 1.7082 7.33915 2.6307 7.20498L7.02486 6.56665L8.98986 2.58581ZM9.9982 3.36581L8.11653 7.17915C8.03579 7.34258 7.91654 7.48395 7.76906 7.59108C7.62157 7.69821 7.45026 7.7679 7.26986 7.79415L3.06153 8.40581L6.10653 11.3741C6.37153 11.6325 6.49236 12.005 6.42986 12.37L5.71153 16.5616L9.47486 14.5825C9.63637 14.4975 9.81612 14.4531 9.99861 14.4531C10.1811 14.4531 10.3609 14.4975 10.5224 14.5825L14.2857 16.5608L13.5674 12.37C13.5365 12.1902 13.5498 12.0056 13.6061 11.8322C13.6624 11.6587 13.7601 11.5015 13.8907 11.3741L16.9357 8.40581L12.7274 7.79415C12.547 7.7679 12.3757 7.69821 12.2282 7.59108C12.0807 7.48395 11.9614 7.34258 11.8807 7.17915L9.9982 3.36581Z"
              fill="#FBD259"
            />
          </svg>
        </p>
        <p class="card__desc">{{ recipe.description }}</p>
        <div class="card__tags">
          <p
            v-for="tag in recipe.tags"
            class="card__tag"
            :class="`card__tag--${tag}`"
            :key="tag"
          >
            {{ tag }}
          </p>
        </div>
      </div>
    </div>
    <Dialog header="add recipe" v-model:visible="display" dialog-component>
      <form @submit.prevent="createRecipe">
        <div class="form-item">
          <p class="label font-mulish">name</p>
          <input type="text" placeholder="enter recipe name" v-model="name" />
        </div>
        <div class="form-item">
          <p class="label font-mulish">description</p>
          <input type="text" placeholder="enter description" v-model="desc" />
        </div>
        <div class="form-item">
          <p class="label font-mulish">image</p>
          <input type="text" placeholder="enter img url" v-model="img" />
        </div>
        <div class="form-item">
          <p class="label font-mulish">tags</p>
          <div class="tags">
            <div class="tag">
              <input
                name="easy"
                type="checkbox"
                value="easy"
                v-model="tags"
                id="easy"
              />
              <label for="easy" class="label label-green font-mulish">
                easy
              </label>
            </div>
            <div class="tag">
              <input
                name="breakfast"
                type="checkbox"
                value="breakfast"
                id="breakfast"
                v-model="tags"
              />
              <label for="breakfast" class="label label-blue font-mulish">
                breakfast
              </label>
            </div>
            <div class="tag">
              <input
                name="quick"
                type="checkbox"
                value="quick"
                v-model="tags"
                id="quick"
              />
              <label for="quick" class="label label-orange font-mulish">
                quick
              </label>
            </div>
            <div class="tag">
              <input
                name="dinner"
                id="dinner"
                type="checkbox"
                value="dinner"
                v-model="tags"
              />
              <label for="dinner" class="label label-teal font-mulish">
                dinner
              </label>
            </div>
            <div class="tag">
              <input
                name="oriental"
                id="oriental"
                type="checkbox"
                value="oriental"
                v-model="tags"
              />
              <label for="oriental" class="label label-pink font-mulish">
                oriental
              </label>
            </div>
          </div>
        </div>
        <div class="form-item">
          <p class="label font-mulish">instruction</p>
          <textarea
            type="text"
            :placeholder="`1. Boil eggs \n2. Add flour`"
            v-model="instruction"
          />
        </div>
        <div class="form-item">
          <p class="label font-mulish">ingredients</p>
          <textarea
            type="text"
            placeholder="2 eggs, 150g flour"
            v-model="ingredients"
          />
        </div>
        <button type="submit">
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.5 7.5H2.5M7.5 12.5V7.5V12.5ZM7.5 7.5V2.5V7.5ZM7.5 7.5H12.5H7.5Z"
              stroke="white"
              stroke-width="1.33333"
              stroke-linecap="round"
            />
          </svg>
          create recipe
        </button>
      </form>
    </Dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onBeforeMount, Ref } from 'vue';
import { useRouter } from 'vue-router';
import RecipesService from '../../services/recipes.service';
import Dialog from 'primevue/dialog';
import { useStore } from 'vuex';
import { useToast } from "vue-toastification";

interface Recipe {
  _id: string;
  imageURL: string;
  name: string;
  description: string;
  favourite: boolean;
  tags: Array<string>;
  instruction: Array<string>;
  ingredients: Array<string>;
}

export default defineComponent({
  components: {
    Dialog,
  },
  setup() {
    const router = useRouter();

    const store = useStore()

    const toast = useToast();

    const recipes: Ref<Array<Recipe>> = ref([]);

    const display = ref(false);
    const name = ref('');
    const desc = ref('');
    const tags: Ref<Array<string>>= ref([]);
    const img = ref('');
    const instruction = ref('');
    const ingredients = ref('');

    const getRecipes = async () => {
      await RecipesService.getRecipes(store.getters.getUser._id).then((response:any) => {
      recipes.value = response.data;
      }).catch((err) => {
        console.log(err)
      })
    }

    onBeforeMount(() => {
      getRecipes();
    })


    const toggleFavourites = (recipeId: string, currentValue: boolean) => {
      if(!recipes) return 
      const currentRecipeIndex = recipes.value.findIndex((el:Recipe) => el._id === recipeId )
      RecipesService.addFavourite(recipes.value[currentRecipeIndex]._id, !currentValue).then((response:any) => {
        toast.clear();
        toast.success("Favourite toggled succesfully", {
          timeout: 2000
        });
        recipes.value[currentRecipeIndex].favourite = response.data.favourite;
      }).catch((err) => {
        toast.clear();
        toast.error("Error: Favourite not toggled", {
          timeout: 2000
        });
      })
    };

    const addRecipe = () => (display.value = true);

    const openRecipe = (recipeId: number): void => {
      router.push(`/recipe/:${recipeId}`);
    };

    const createRecipe = (): void => {
      display.value = false;

      const inst = instruction.value
        .split('.')
        .map((el) => {
          return el
            .replace(/[0-9]/g, '')
            .replace(/(\r\n|\n|\r)/gm, '')
            .trim();
        })
        .filter((el) => el);

      const ingr = ingredients.value.split(',').map((el) => el.trim());

      const newRecipe = {
        name: name.value,
        description: desc.value,
        imageURL: img.value,
        tags: [...tags.value],
        favourite: false,
        instruction: inst,
        ingredients: ingr,
      };

      RecipesService.addRecipe(store.getters.getUser._id, newRecipe).then((response:any) => {
        toast.clear();
        toast.success("Recipe added", {
          timeout: 2000
        });
        getRecipes();
      }).catch((err) => {
        toast.clear();
        toast.error("Error: Recipe not added", {
          timeout: 2000
        });
      })
    };

    return {
      recipes,
      toggleFavourites,
      openRecipe,
      display,
      createRecipe,
      name,
      desc,
      tags,
      img,
      addRecipe,
      instruction,
      ingredients,
    };
  },
});
</script>

<style lang="scss">
.top-box {
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #f3f3f3;

  p {
    font-weight: 600;
    font-size: 20px;
  }
}

.p-dialog[dialog-component] {
  width: 540px;
  .p-dialog-header {
    font-size: 20px;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      width: 90%;
      height: 1px;
      background: #f3f3f3;
      top: 85%;
      left: 50%;
      transform: translateX(-50%);
    }
  }
}

form {
  display: flex;
  flex-direction: column;
  gap: 15px;

  button {
    background: #f63e76;
    border-radius: 7px;
    font-size: 16px;
    color: #fff;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 5px 0;
    transition: background 0.5s;

    &:hover {
      background: #e23166;
    }
  }
}

.form-item {
  display: flex;
  justify-content: space-between;

  p {
    font-size: 12px;
    font-weight: 400;
    flex: 20%;
  }

  input {
    border: 1px solid #f3f3f3;
    flex: 80%;
    padding: 2px 10px;

    &::placeholder {
      font-size: 12px;
    }
  }

  textarea {
    border: 1px solid #f3f3f3;
    flex: 80%;
    padding: 2px 10px;
    resize: none;

    &::placeholder {
      font-size: 12px;
    }
  }
}

.tags {
  flex: 80%;

  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.tag {
  display: flex;
  align-items: center;
  gap: 10px;

  .label {
    display: inline-block;
    border-radius: 5px;
    padding: 1px 15px;
    font-size: 12px;
    color: #fff;
    font-weight: 300;

    &-green {
      background: #b8f2b4;
    }

    &-blue {
      background: #94b3fd;
    }

    &-orange {
      background: #ffe5b9;
    }

    &-teal {
      background: #9fd8df;
    }

    &-pink {
      background: #cd5d7d;
    }
  }
}

.img-drop {
  flex: 80%;
  height: 60px;
  border: 1px dashed #e9e9e9;
  display: grid;
  place-content: center;
  cursor: pointer;

  p {
    font-size: 11px;
    color: #242634;
    max-width: 75%;
    text-align: center;
  }
}

.btn {
  width: 25px;
  height: 25px;
  background: #f63e76;
  border-radius: 50%;
  cursor: pointer;

  display: grid;
  place-content: center;
}

.recipes {
  &__cards {
    margin-top: 15px;
    display: flex;
    gap: 30px;
  }
}

.card {
  display: grid;
  grid-template-rows: 120px max-content 65px max-content;
  grid-template-columns: 1fr max-content;
  max-width: 300px;
  width: 300px;
  border-radius: 10px;
  overflow: hidden;
  padding-bottom: 20px;
  row-gap: 8px;

  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
  cursor: pointer;

  & > *:not(&__img) {
    padding: 0 15px;
  }

  &__img {
    max-height: 120px;
    width: 100%;
    grid-column: 1/3;
    grid-row: 1/2;
  }

  &__title {
    grid-row: 2/3;
    grid-column: 1/2;
    font-size: 14px;
    font-weight: 600;
    margin-top: 5px;
  }

  &__star {
    grid-row: 2/3;
    grid-column: 2/3;
    margin-top: 5px;
  }

  &__desc {
    grid-row: 3/4;
    grid-column: 1/3;
    font-weight: 300;
    font-size: 14px;
  }

  &__tags {
    grid-row: 4/5;
    grid-column: 1/3;
    font-size: 14px;

    display: flex;
    gap: 10px;
    align-self: end;
  }

  &__tag {
    border-radius: 5px;
    padding: 2.5px 10px;
    &--easy {
      background: #b8f2b4;
    }
    &--breakfast {
      background: #94b3fd;
    }
    &--quick {
      background: #ffe5b9;
    }
    &--dinner {
      background: #9fd8df;
    }
    &--oriental {
      background: #cd5d7d;
    }
  }
}
</style>
