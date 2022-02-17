<template>
  <v-container>
    <v-row no-gutters>
      <v-col sm="10" class="mx-auto">
        <v-card class="pa-5">
          <v-card-title
            >Edit <span style="color: orange;">&nbsp;{{ updatedPost.title }}</span
            >!</v-card-title
          >
          <v-divider></v-divider>
          <v-form
            class="pa-5"
            @submit.prevent="updateForm"
            ref="form"
            enctype="multipart/form-data"
          >
            <v-text-field
              label="Title"
              prepend-icon="mdi-note"
              v-model="updatedPost.title"
            ></v-text-field>
            <v-text-field
              label="Category"
              prepend-icon="mdi-view-list"
              v-model="updatedPost.category"
            ></v-text-field>
            <v-textarea
              label="Description"
              prepend-icon="mdi-note-plus"
              v-model="updatedPost.content"
            ></v-textarea>
            <v-file-input
              @change="selectCover"
              label="Select Cover"
              :rules="rules"
              show-size
              counter
              multiple
            ></v-file-input>
            <v-img :src="`/${updatedPost.image}`" width="220"></v-img>
            <v-btn class="mt-3" type="submit" color="success"
              >Update Post</v-btn
            >
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import API from "../utils/api";
export default {
  data() {
    return {
      rules: [(value) => !!value || "This field is required!"],
      updatedPost: {
        title: "",
        category: "",
        content: "",
        image: "",
      },
      image: "",
    };
  },
  async created() {
    this.updatedPost = await API.fetchPostByID(this.$route.params.id);
  },
  methods: {
    selectCover(cover) {
      this.image = cover[0];
    },
    async updateForm() {
      const formData = new FormData();
      formData.append("title", this.updatedPost.title);
      formData.append("category", this.updatedPost.category);
      formData.append("content", this.updatedPost.content);
      formData.append("image", this.image);
      if (this.$refs.form.validate()) {
        const res = await API.updatePost(this.$route.params.id,formData);
        this.$router.push({ name: "home", params: { message: res.message } });
      }
    },
  },
};
</script>
