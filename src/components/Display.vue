<template>
  <div>
    <img :src="image_url" alt="" srcset="">
    <div>{{people_number}}</div>
  </div>
</template>

<script>

export default {
  name: "Display",
  data: function() {
    return {
      image_url: "",
      people_number: 0
    }
  },
  mounted: function() {
    this.people_number = this.global_data.people_number;
    var GphApiClient = require('giphy-js-sdk-core')
    let client = GphApiClient('uLHEHrFfLLE5Ll5Q02RW033oFQoLg1Ox')
    client.search('gifs', {'q': 'cats'}).then((response) => {
      console.log(response)
      this.$data.image_url = response.data[0].images.downsized.url
    }).catch((err) => {

    })
  }
};
</script>
