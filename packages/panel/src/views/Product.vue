<template>
  <div class="home">
    <CategoryList msg="Vista Categorias" />
  </div>
</template>

<script>
// @ is an alias to /src
import CategoryList from '@/components/category/List.vue'

export default {
  name: 'Home',
  components: {
    CategoryList,
  },
}
</script>
