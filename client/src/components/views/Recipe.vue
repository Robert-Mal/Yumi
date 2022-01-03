<template>
  <div class="wrapper">
    <img :src="recipe.imageURL" alt="img" />
    <div class="box">
      <p class="name font-mulish name-main">
        {{ recipe.name }}
      </p>
      <div class="ingr">
        <p class="name font-mulish">ingredients</p>
        <ul>
          <li v-for="ingr in recipe.ingredients" :key="ingr">{{ ingr }}</li>
        </ul>
      </div>
      <div class="instr">
        <p class="name font-mulish">instructions</p>
        <ol>
          <li v-for="instr in recipe.instructions" :key="instr">{{ instr }}xd</li>
        </ol>
      </div>
    </div>
     <div class="edit-options">
      <div class="remove" @click="deleteRecipe(recipe._id)">
        <svg
          width="15"
          height="16"
          viewBox="0 0 12 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_87_990)">
            <path
              d="M4.5 2.75L4.875 1.25H7.125L7.5 2.75M10.5 2.75H2.25L3 11.75H9L9.75 2.75H1.5H10.5ZM6 5V9.5V5ZM7.875 5L7.5 9.5L7.875 5ZM4.125 5L4.5 9.5L4.125 5Z"
              stroke="#FFFFFF"
              stroke-width="0.75"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_87_990">
              <rect
                width="12"
                height="12"
                fill="white"
                transform="translate(0 0.5)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div class="edit" @click="editRecipe">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.68332 17.1492C3.56771 17.149 3.4534 17.1247 3.34766 17.0779C3.24193 17.0312 3.14708 16.9629 3.06916 16.8775C2.98982 16.7928 2.92929 16.6923 2.89152 16.5826C2.85374 16.4729 2.83959 16.3564 2.84999 16.2408L3.05416 13.9958L12.4858 4.5675L15.4333 7.51417L6.00416 16.9417L3.75916 17.1458C3.73395 17.1482 3.70864 17.1493 3.68332 17.1492ZM16.0217 6.925L13.075 3.97834L14.8425 2.21084C14.9199 2.13336 15.0118 2.07189 15.113 2.02995C15.2141 1.98802 15.3226 1.96643 15.4321 1.96643C15.5416 1.96643 15.65 1.98802 15.7512 2.02995C15.8524 2.07189 15.9443 2.13336 16.0217 2.21084L17.7892 3.97834C17.8666 4.05573 17.9281 4.14764 17.97 4.2488C18.012 4.34997 18.0336 4.45841 18.0336 4.56792C18.0336 4.67743 18.012 4.78587 17.97 4.88704C17.9281 4.9882 17.8666 5.08011 17.7892 5.1575L16.0225 6.92417L16.0217 6.925Z"
            fill="#232321"
          />
        </svg>
      </div>
    </div>
        <Dialog header="modify recipe" v-model:visible="display" dialog-component>
      <form @submit.prevent="modifyRecipe">
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
          <input type="text" placeholder="enter img url" v-model="imageURL" />
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
          <p class="label font-mulish">instructions</p>
          <textarea
            type="text"
            :placeholder="`1. Boil eggs \n2. Add flour`"
            v-model="instructions"
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
          modify recipe
        </button>
      </form>
    </Dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref, onBeforeMount, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import Dialog from 'primevue/dialog';
import { useToast } from "vue-toastification";

import RecipesService from '../../services/recipes.service';

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
  setup(props) {
    const router = useRouter();
    const route = useRoute();
    const recipeId = route.params.recipeId.slice(1);
    const recipe = ref();

    const toast = useToast();

    let name = ref('');
    let desc = ref('');
    let tags = ref('');
    let imageURL = ref('');

    let instructions = ref('');
    let ingredients = ref('');

    const display = ref(false);

    const initRecipe = async () => {
       await RecipesService.getRecipeById(recipeId).then((response:any) => {
        
        recipe.value = response.data;

        let tmpInstructions = recipe.value.instructions.map(
          (el:string, i:number) => `${i + 1}. ${el} \n`
        );

        name.value = recipe.value.name;
        desc.value = recipe.value.description;
        tags.value = recipe.value.tags;
        imageURL.value = recipe.value.imageURL;
        instructions.value =  tmpInstructions;
        ingredients.value =  recipe.value.ingredients

      }).catch((err) => {
        console.log(err)
      })
    }

    onBeforeMount(async () => {
     initRecipe();
    })

    const deleteRecipe = async (recipeId:string) => {
      await RecipesService.deleteRecipe(recipeId).then((response:any) => {
        toast.clear();
        toast.success("Recipe deleted", {
          timeout: 2000
        });
        router.push(`/dashboard`);
      }).catch((err:any) => {
        toast.clear();
        toast.error("Error: Recipe not deleted", {
          timeout: 2000
        });
      })
    };

    const editRecipe = () => {
      display.value = true;
    };

    const modifyRecipe = async () => {
      display.value = false;

      const newRecipe = {
        name: name.value,
        description: desc.value,
        imageURL: imageURL.value,
        tags: tags.value,
        favourite: recipe.value.favourite,
        ingredients: ingredients.value,
        instructions: instructions.value,
      }

      await RecipesService.updateRecipe(recipeId, newRecipe).then((response:any) => {
        toast.clear();
        toast.success("Recipe modified", {
          timeout: 2000
        });
        initRecipe();
      }).catch((err:any) => {
        toast.clear();
        toast.error("Error: Recipe not modified", {
          timeout: 2000
        });
      })

    };

    return { deleteRecipe, recipe, name, desc, tags, imageURL, instructions, ingredients, display, editRecipe, modifyRecipe };
  },
});
</script>

<style lang="scss">
main {
  padding: 0 !important;
}

.wrapper {
  position: relative;
  height: 100%;

  img {
    height: 250px;
    width: 100%;
    object-fit: cover;
  }
  .name {
    font-size: 17px;
    font-weight: 600;

    &-main {
      font-size: 26px;
    }
  }

  .box {
    display: grid;
    grid-template: min-content 1fr / 1fr 1fr;

    margin-top: 25px;
    padding: 0 50px;
  }

  .ingr {
    grid-row: 2/3;
    grid-column: 1/2;
    margin-top: 20px;
  }

  .instr {
    grid-row: span 2;
  }

  ul {
    list-style-type: circle;
    margin-left: 20px;
  }

  ol {
    list-style-type: decimal;
    margin-left: 25px;
  }

  li {
    font-size: 15px;
    font-weight: 300;
  }

 .edit-options {
    position: absolute;
    left: 90%;
    top: 90%;

    display: flex;
    flex-direction: row-reverse;
    gap: 15px;
  }

  .remove,
  .edit {
    width: 35px;
    height: 35px;
    border-radius: 50%;

    display: grid;
    place-items: center;

    cursor: pointer;
  }
  .remove {
    background: #f63e76;
  }

  .edit {
    border: 1px solid black;
  }
}
</style>
