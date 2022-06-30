<script>
  import { onMount } from "svelte";

  import { cards } from "./store";
  export let title;
  export let content;
  export let publishTime;
  export let index = 0;

  function deleteCard() {
    cards.update((item) => {
      item.splice(index, 1);
      return item;
    });
  }
  onMount(() => {
    // con/sole.log(title, content, index);
  });
</script>

<main>
  <div class="title">
    {title}
    <span class="del-btn" on:click={deleteCard}
      ><img src="./destory.svg" alt="删除图标" /></span
    >
  </div>
  <div class="content">
    {content}
  </div>
  <div class="publish-time">发布时间: {publishTime}</div>
</main>

<style>
  main {
    width: 200px;
    background-color: #fafafa;
    border: 1px solid #333;
    padding: auto 10px;
    margin-top: 10px;
  }
  main:hover .del-btn {
    opacity: 1;
  }
  .title {
    margin: 10px;
  }
  .title span {
    margin-left: 50px;
  }
  .content {
    margin: 10px;
  }
  img {
    width: 24px;
    height: 24px;
  }
  .publish-time {
    margin: 10px;
  }
</style>
