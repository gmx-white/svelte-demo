<script>
// @ts-nocheck

import { cards } from "./store";
import { saveAs } from 'file-saver'

  import getNowDateFormat from "./utils/dataFormat";
  export let title;
  export let content;
  // export let index = 0;

  function onAdd() {
    if (!title || !content) {
      return alert('标题和内容都不能为空')
    }
    cards.update(item => {
      item = [...item, {
        title,
        content,
        publishTime: getNowDateFormat()
      }]
      return item
    })
    title = ''
    content = ''
    console.log($cards)
  }
  function onDownload() {
    let texts = []
    for (const card of $cards) {
      let text = `### ${card.title}\n${card.content}\n${card.publishTime}\n`;
      texts.push(text)
    }
    const blob = new Blob(texts, {type: 'text/plain;charset=utf-8'})
    saveAs(blob, `temp${getNowDateFormat()}.md`)
  }
</script>

<main>
  <div class="title">
    <input type="text" placeholder="请输入标题" bind:value={title}/>
  </div>
  <div class="content">
    <textarea
      name="content"
      id="content"
      placeholder="请输入内容"
      bind:value={content}
    />
  </div>
  <div class="btn">
    <button class="add" on:click={onAdd}>添加</button>
    <button class="load" on:click={onDownload}>导出</button>
  </div>
 
</main>

<style>
  main {
    margin-top: 10px;
    background-color: #FAFAFA;
    width: 200px;
    border: 1px solid #333;
    padding: auto 10px;
    position: relative;
  }
  .title {
    margin: 10px;
  }
  .content {
    margin: 10px;
  }

  .btn {
    margin-left: 10px;
  }
</style>
