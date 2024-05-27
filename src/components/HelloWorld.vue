<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})

// -------------------------数组构建成树----------------------
const buildTree = (arr, parentId = null) => {
  let tree = []
  for (const item of arr) {
    if (item.parentId === parentId) {
      let children = buildTree(arr, item.id)
      if (children.length) item.children = children
      tree.push(item)
    }
  }
  return tree
}

let arrayData = [
  { id: '1', parentId: null, name: 'Node 1' },
  { id: '1-1', parentId: '1', name: 'Node 1.1' },
  { id: '1-2', parentId: '1', name: 'Node 1.2' },
  { id: '2-1', parentId: '1-2', name: 'Node 1.1.1' },
  { id: '2-2', parentId: '1-2', name: 'Node 1.1.1' }
]

let tree = buildTree(arrayData)
// console.log('ans: ', tree)

// ----------------------promise最大并发----------------------
const maxpromise = (arr, max) => {
  console.log('maxpromise')
  let curCounter = 0
  const running = () => {
    if (!arr.length) return
    while(curCounter < max) {
      curCounter++
      let task = arr.shift()
      task().then(() => {
        curCounter--
        running()
      })
    }
  }
  running()
}

const tasks = Array.from({ length: 10 }, (_, i) => () => {
  console.log(`Task ${i} is running`);
  return new Promise(resolve => setTimeout(() => {
    console.log(`Task ${i} finished`);
    resolve();
  }, 1000 + Math.random() * 1000));
});
 
maxpromise(tasks, 3)

</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
