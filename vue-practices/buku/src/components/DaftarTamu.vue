<template>
  <div>
    <h4>Daftar Tamu</h4>
    <ol class="list-tamu">
      <li v-for="tamu in tamuList" v-bind:key="tamu.id">
        {{ tamu.firstName }} {{ tamu.lastName }}
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'DaftarTamu',
  props: {
    tamuList: Array
  }
}
</script>

<style lang="scss">
  ol.list-tamu {
    margin: 0;
    padding: 0;
    text-align: left;

    & li {
      margin-bottom: 8px;

      &:last-child {
        margin-bottom: 0px;
      }
    }
  }
</style>
