<template>
  <a-table :columns="columns" :data-source="data" :pagination="false" :scroll="{ x: 800 }">
    <template #headerCell="{ column }">
      <template v-if="column.key === 'stt'">
        <span> # </span>
      </template>
      <template v-else-if="column.key === 'email'">
        <span>
          {{ column.name }}
        </span>
      </template>
      <template v-else-if="column.key === 'role'">
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
      <template v-else-if="column.key === 'email'">
        <span>
          {{ record.email }}
        </span>
      </template>
      <template v-else-if="column.key === 'role'">
        <span>
          <AppTags :type="record.role"></AppTags>
        </span>
      </template>
      <template v-else-if="column.key === 'created'">
        <span>{{ record.created }}</span>
      </template>
    </template>
  </a-table>
</template>
<script>
import AppTags from '@/components/app/AppTags.vue'
import { formatDate } from '@/helper'
export default {
  name: 'ComponentTableAdminManager',
  components: {
    AppTags
  },
  setup() {
    const columns = [
      {
        name: '#',
        dataIndex: 'stt',
        key: 'stt'
      },
      {
        name: 'Email',
        dataIndex: 'email',
        key: 'email'
      },
      {
        name: 'Role',
        dataIndex: 'role',
        key: 'role'
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
        email: 'Example@gmail.com',
        role: 'supper_admin',
        created: formatDate(1234212312532)
      },
      {
        key: '2',
        email: 'Example@gmail.com',
        role: 'admin_view',
        created: formatDate(1234212312532)
      },
      {
        key: '3',
        email: 'Example@gmail.com',
        role: 'admin',
        created: formatDate(1234212312532)
      }
    ]
    return {
      columns,
      data
    }
  }
}
</script>
