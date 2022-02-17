<template>
  <v-container>
    <v-row no-gutters>
      <v-col class="pa-4 mx-auto" sm="10">
        <v-card class="pa-2">
          <v-img :src="`/${post.image}`"></v-img>
          <v-card-actions class="pb-0">
            <v-row class="mt-1 mx-1">
              <v-col sm="2">
                <v-btn small outlined color="primary">{{
                  post.category
                }}</v-btn>
              </v-col>
              <v-col sm="10" class="d-flex justify-end">
                <v-btn
                  color="success"
                  text
                  :to="{ name: 'edit-post', params: { id: post._id } }"
                  >Edit Post</v-btn
                >
                <v-btn color="red" text>Delete</v-btn>
              </v-col>
            </v-row>
          </v-card-actions>
          <v-card-subtitle class="headline">
            <h3>{{ post.title }}</h3>
          </v-card-subtitle>
          <v-card-text class="grey--text">
            <p>{{ post.content }}</p>
            <p>{{ post.created }}</p>
          </v-card-text>
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
      post: {},
    };
  },
  async created() {
    this.post = await API.fetchPostByID(this.$route.params.id);
  },
};
</script>
