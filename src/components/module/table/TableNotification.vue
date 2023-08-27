<template>
  <a-table :columns="columns" :data-source="data" :pagination="false" :scroll="{ x: 800 }">
    <template #headerCell="{ column }">
      <template v-if="column.key === 'stt'">
        <span> # </span>
      </template>
      <template v-else-if="column.key === 'title'">
        <span>
          {{ column.name }}
        </span>
      </template>
      <template v-else-if="column.key === 'role'">
        <span>
          {{ column.name }}
        </span>
      </template>
      <template v-else-if="column.key === 'content'">
        <span>
          {{ column.name }}
        </span>
      </template>
      <template v-else-if="column.key === 'image'">
        <span>
          {{ column.name }}
        </span>
      </template>
      <template v-else-if="column.key === 'action'">
        <span>
          {{ column.name }}
        </span>
      </template>
      <template v-else-if="column.key === 'user'">
        <span>
          {{ column.name }}
        </span>
      </template>
      <template v-else-if="column.key === 'created'">
        <span>
          {{ column.name }}
        </span>
      </template>
    </template>
    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'stt'">
        <span>{{ data.indexOf(record) + 1 }} </span>
      </template>
      <template v-else-if="column.key === 'title'">
        <span>
          {{ record.title }}
        </span>
      </template>
      <template v-else-if="column.key === 'content'">
        <span>
         {{record.content}}
        </span>
      </template>
      <template v-else-if="column.key === 'image'">
        <div class="flex">
          <img class="!m-auto" :src="record.image"/>
        </div>
      </template>
      <template v-else-if="column.key === 'action'">
        <span>{{ record.action }}</span>
      </template>
      <template v-else-if="column.key === 'user'">
        <span>{{ record.image }}</span>
      </template>
      <template v-else-if="column.key === 'created'">
        <span>{{ record.created }}</span>
      </template>
    </template>
  </a-table>
</template>
<script>
import { formatDate } from '@/helper'
export default {
  name: 'ComponentTableNotification',
  setup() {
    const columns = [
      {
        name: '#',
        dataIndex: 'stt',
        key: 'stt'
      },
      {
        name: 'Title',
        dataIndex: 'title',
        key: 'title'
      },
      {
        name: 'Content',
        dataIndex: 'content',
        key: 'content'
      },
      {
        name: 'Image',
        dataIndex: 'image',
        key: 'image'
      },
      {
        name: 'Action',
        dataIndex: 'action',
        key: 'action'
      },
      {
        name: 'User',
        dataIndex: 'user',
        key: 'user'
      },
      {
        name: 'Created',
        dataIndex: 'created',
        key: 'created'
      }
    ]
    const data = [
      {
        key: '1',
        title: 'Example@gmail.com',
        content: 'Tình Yêu, Đi TÌm Hay Xây Dựng?',
        image: 'https://inanaz.com.vn/wp-content/uploads/2023/03/mau-banner-quang-cao-dep.jpg',
        action: 'Action',
        user: ['tona', 'user', 'example'],
        created: formatDate(1234212312532)
      },
      {
        key: '2',
        title: 'Example@gmail.com',
        content: 'Tình Yêu, Đi TÌm Hay Xây Dựng?',
        image: 'https://inanaz.com.vn/wp-content/uploads/2023/03/mau-banner-quang-cao-dep.jpg',
        action: 'Action',
        user: ['tona', 'user', 'example'],
        created: formatDate(1234212312532)
      },
      {
        key: '3',
        title: 'Example@gmail.com',
        content: 'Tình Yêu, Đi TÌm Hay Xây Dựng?',
        image: 'https://inanaz.com.vn/wp-content/uploads/2023/03/mau-banner-quang-cao-dep.jpg',
        action: 'Action',
        user: ['tona', 'user', 'example'],
        created: formatDate(1234212312532)
      },
    ]
    return {
      columns,
      data
    }
  }
}
</script>
